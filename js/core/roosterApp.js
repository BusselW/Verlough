
import { 
    maandNamenVolledig, 
    getPasen, 
    getFeestdagen, 
    getWeekNummer, 
    getWekenInJaar, 
    getDagenInMaand, 
    formatteerDatum,
    getDagenInWeek, 
    isVandaag 
} from '../utils/dateTimeUtils.js';
import { getInitialen, getProfilePhotoUrl } from '../utils/userUtils.js';
import { calculateWeekType } from '../services/scheduleLogic.js';
import { fetchSharePointList, getUserInfo, createSharePointListItem, updateSharePointListItem, deleteSharePointListItem, trimLoginNaamPrefix } from '../services/sharepointService.js';
import { getCurrentUserGroups, isUserInAnyGroup } from '../services/permissionService.js';
import * as linkInfo from '../services/linkInfo.js';
import LoadingLogic, { loadFilteredData, shouldReloadData, updateCacheKey, clearAllCache, logLoadingStatus } from '../services/loadingLogic.js';
import ContextMenuN, { canUserModifyItem } from '../ui/contextmenuN.js';
import ProfielKaarten from '../ui/profielkaarten.js';
import FAB from '../ui/FloatingActionButton.js';
import Modal from '../ui/Modal.js';
import VerlofAanvraagForm from '../ui/forms/VerlofAanvraagForm.js';
import CompensatieUrenForm from '../ui/forms/CompensatieUrenForm.js';
import ZiekteMeldingForm from '../ui/forms/ZiekteMeldingForm.js';
import ZittingsvrijForm from '../ui/forms/ZittingsvrijForm.js';
import RoosterHeader from '../ui/RoosterHeader.js';
import Legenda from '../ui/Legenda.js';
import RoosterGrid from '../ui/RoosterGrid.js';

const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

const RoosterApp = ({ isUserValidated = true, currentUser, userPermissions }) => {
    const [weergaveType, setWeergaveType] = useState('maand');
    const [huidigJaar, setHuidigJaar] = useState(new Date().getFullYear());
    const [huidigMaand, setHuidigMaand] = useState(new Date().getMonth());
    const [medewerkers, setMedewerkers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [shiftTypes, setShiftTypes] = useState({});
    const [verlofItems, setVerlofItems] = useState([]);
    const [feestdagen, setFeestdagen] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [huidigWeek, setHuidigWeek] = useState(getWeekNummer(new Date()));
    const [zoekTerm, setZoekTerm] = useState('');
    const [geselecteerdTeam, setGeselecteerdTeam] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [zittingsvrijItems, setZittingsvrijItems] = useState([]);
    const [compensatieUrenItems, setCompensatieUrenItems] = useState([]);
    const [urenPerWeekItems, setUrenPerWeekItems] = useState([]);
    const [dagenIndicators, setDagenIndicators] = useState({});
    const [contextMenu, setContextMenu] = useState(null);
    const [isVerlofModalOpen, setIsVerlofModalOpen] = useState(false);
    const [isCompensatieModalOpen, setIsCompensatieModalOpen] = useState(false);
    const [isZiekModalOpen, setIsZiekModalOpen] = useState(false);
    const [isZittingsvrijModalOpen, setIsZittingsvrijModalOpen] = useState(false);
    const [selection, setSelection] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipTimeout, setTooltipTimeout] = useState(null);
    const [firstClickData, setFirstClickData] = useState(null);
    const [permissions, setPermissions] = useState({ isAdmin: false, isFunctional: false, isTaakbeheer: false, loading: true });
    const [userInfo, setUserInfo] = useState({ naam: currentUser?.Title || '', pictureUrl: '', loading: !currentUser });

    const refreshData = useCallback(async (forceReload = false) => {
        try {
            setLoading(true);
            setError(null);

            let configWaitAttempts = 0;
            const maxConfigWaitAttempts = 50;
            while (!window.appConfiguratie && configWaitAttempts < maxConfigWaitAttempts) {
                await new Promise(r => setTimeout(r, 100));
                configWaitAttempts++;
            }

            if (!window.appConfiguratie) throw new Error('Configuration not loaded after timeout');
            if (typeof fetchSharePointList !== 'function') throw new Error('SharePoint service not available');

            const needsReload = forceReload || shouldReloadData(weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand);
            if (needsReload) {
                updateCacheKey(weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand);
            }

            const [medewerkersData, teamsData, verlofredenenData, urenPerWeekData, dagenIndicatorsData] = await Promise.all([
                fetchSharePointList('Medewerkers'),
                fetchSharePointList('Teams'),
                fetchSharePointList('Verlofredenen'),
                fetchSharePointList('UrenPerWeek'),
                fetchSharePointList('DagenIndicators')
            ]);

            let verlofData, zittingsvrijData, compensatieUrenData;
            if (needsReload) {
                [verlofData, zittingsvrijData, compensatieUrenData] = await Promise.all([
                    loadFilteredData(fetchSharePointList, 'Verlof', 'verlof', weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand),
                    loadFilteredData(fetchSharePointList, 'IncidenteelZittingVrij', 'zittingsvrij', weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand),
                    loadFilteredData(fetchSharePointList, 'CompensatieUren', 'compensatie', weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand)
                ]);
                logLoadingStatus();
            } else {
                verlofData = LoadingLogic.getCachedData('verlof') || [];
                zittingsvrijData = LoadingLogic.getCachedData('zittingsvrij') || [];
                compensatieUrenData = LoadingLogic.getCachedData('compensatie') || [];
            }

            const teamsMapped = (teamsData || []).map(item => ({ id: item.Title || item.ID?.toString(), naam: item.Naam || item.Title, kleur: item.Kleur || '#cccccc' }));
            setTeams(teamsMapped);
            const teamNameToIdMap = teamsMapped.reduce((acc, t) => { acc[t.naam] = t.id; return acc; }, {});
            const transformedShiftTypes = (verlofredenenData || []).reduce((acc, item) => {
                if (item.Title) { acc[item.ID] = { id: item.ID, label: item.Title, kleur: item.Kleur || '#999999', afkorting: item.Afkorting || '??' }; }
                return acc;
            }, {});
            setShiftTypes(transformedShiftTypes);
            const medewerkersProcessed = (medewerkersData || [])
                .filter(item => item.Naam && item.Actief !== false)
                .map(item => ({ ...item, id: item.ID, naam: item.Naam, team: teamNameToIdMap[item.Team] || '', Username: item.Username || null }));
            setMedewerkers(medewerkersProcessed);
            setVerlofItems((verlofData || []).map(v => ({ ...v, StartDatum: new Date(v.StartDatum), EindDatum: new Date(v.EindDatum) })));
            setZittingsvrijItems((zittingsvrijData || []).map(z => ({ ...z, StartDatum: new Date(z.ZittingsVrijeDagTijd), EindDatum: new Date(z.ZittingsVrijeDagTijdEind) })));
            setCompensatieUrenItems((compensatieUrenData || []).map(c => ({ ...c, StartCompensatieUren: new Date(c.StartCompensatieUren), EindeCompensatieUren: new Date(c.EindeCompensatieUren), ruildagStart: c.ruildagStart ? new Date(c.ruildagStart) : null })));
            setUrenPerWeekItems((urenPerWeekData || []).map(u => {
                let ingangsDate;
                try {
                    if (typeof u.Ingangsdatum === 'string' && u.Ingangsdatum.match(/^\d{1,2}-\d{1,2}-\d{4}/)) {
                        const parts = u.Ingangsdatum.split(' ')[0].split('-');
                        ingangsDate = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
                    } else {
                        ingangsDate = new Date(u.Ingangsdatum);
                    }
                    if (isNaN(ingangsDate.getTime())) ingangsDate = null;
                    else ingangsDate.setHours(0, 0, 0, 0);
                } catch { ingangsDate = null; }

                let cycleStartDate = null;
                if (u.CycleStartDate) {
                    try {
                        cycleStartDate = new Date(u.CycleStartDate);
                        if (isNaN(cycleStartDate.getTime())) cycleStartDate = null;
                        else cycleStartDate.setHours(0, 0, 0, 0);
                    } catch { cycleStartDate = null; }
                }

                let weekType = null;
                if (u.WeekType !== undefined && u.WeekType !== null && u.WeekType !== '') {
                    weekType = String(u.WeekType).trim().toUpperCase();
                    if (weekType !== 'A' && weekType !== 'B') weekType = null;
                }

                const isRotatingSchedule = u.IsRotatingSchedule === true || u.IsRotatingSchedule === 'true';
                return { ...u, Ingangsdatum: ingangsDate, CycleStartDate: cycleStartDate, WeekType: weekType, IsRotatingSchedule: isRotatingSchedule };
            }));
            const indicatorsMapped = (dagenIndicatorsData || []).reduce((acc, item) => {
                if (item.Title) { acc[item.Title] = { ...item, kleur: item.Kleur || '#cccccc', Beschrijving: item.Beschrijving || '' }; }
                return acc;
            }, {});
            setDagenIndicators(indicatorsMapped);
        } catch (err) {
            setError(`Fout bij laden: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [weergaveType, huidigJaar, huidigMaand, huidigWeek]);

    useEffect(() => { if (isUserValidated) refreshData(); }, [refreshData, isUserValidated]);
    useEffect(() => { if (isUserValidated) { if (shouldReloadData(weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand)) { refreshData(false); } } }, [weergaveType, huidigJaar, huidigMaand, huidigWeek, isUserValidated, refreshData]);
    useEffect(() => { ProfielKaarten.init('.medewerker-naam, .medewerker-avatar'); }, [medewerkers]);
    useEffect(() => { const jaren = [huidigJaar - 1, huidigJaar, huidigJaar + 1]; setFeestdagen(jaren.reduce((acc, jaar) => ({ ...acc, ...getFeestdagen(jaar) }), {})); }, [huidigJaar]);
    useEffect(() => { if (!loading && medewerkers.length > 0) { setTimeout(() => { if (typeof TooltipManager !== 'undefined' && TooltipManager.autoAttachTooltips) TooltipManager.autoAttachTooltips(); const event = new CustomEvent('react-update'); window.dispatchEvent(event); }, 200); } }, [loading, verlofItems, compensatieUrenItems, zittingsvrijItems, medewerkers, huidigMaand, huidigJaar, weergaveType]);
    useEffect(() => { if (typeof fetchSharePointList !== 'function') { setError('Required services not available. Please refresh the page.'); setLoading(false); } }, []);
    useEffect(() => { window.startTutorial = () => { if (typeof roosterTutorial !== 'undefined' && roosterTutorial.start) roosterTutorial.start(); }; window.openHandleiding = (section = 'algemeen') => { if (typeof openHandleiding === 'function') openHandleiding(section); }; return () => { delete window.startTutorial; delete window.openHandleiding; }; }, []);

    const handleFormSubmit = useCallback(async (listName, formData) => {
        try {
            await createSharePointListItem(listName, formData);
            setIsVerlofModalOpen(false);
            setIsZiekModalOpen(false);
            setIsCompensatieModalOpen(false);
            setIsZittingsvrijModalOpen(false);
            refreshData();
        } catch (error) {
            alert(`Fout bij het indienen: ${error.message}`);
        }
    }, [refreshData]);

    const showContextMenu = useCallback(async (e, medewerker, dag, item) => {
        const currentUsername = currentUser?.LoginName?.split('|')[1] || currentUser?.LoginName;
        const menuItems = [];
        if (item) {
            const canModify = await canUserModifyItem(item, currentUsername);
            if (canModify) {
                const isVerlof = 'RedenId' in item, isZittingsvrij = 'ZittingsVrijeDagTijd' in item, isCompensatie = 'StartCompensatieUren' in item;
                if (isVerlof) menuItems.push({ label: 'Verlof bewerken', icon: 'fa-edit', onClick: () => { setSelection({ start: new Date(item.StartDatum), end: new Date(item.EindDatum), medewerkerId: item.MedewerkerID, itemData: item, medewerkerData: medewerker }); setIsVerlofModalOpen(true); setContextMenu(null); } });
                else if (isZittingsvrij) menuItems.push({ label: 'Zittingsvrij bewerken', icon: 'fa-edit', onClick: () => { setSelection({ start: new Date(item.StartDatum), end: new Date(item.EindDatum), medewerkerId: item.Gebruikersnaam, itemData: item, medewerkerData: medewerker }); setIsZittingsvrijModalOpen(true); setContextMenu(null); } });
                else if (isCompensatie) menuItems.push({ label: 'Compensatie uren bewerken', icon: 'fa-edit', onClick: () => { setSelection({ start: new Date(item.StartCompensatieUren), end: new Date(item.EindeCompensatieUren), medewerkerId: item.MedewerkerID, itemData: item, medewerkerData: medewerker }); setIsCompensatieModalOpen(true); setContextMenu(null); } });
                menuItems.push({ label: 'Verwijderen', icon: 'fa-trash', onClick: async () => { if (confirm('Weet je zeker dat je dit item wilt verwijderen?')) { const listName = isVerlof ? 'Verlof' : isZittingsvrij ? 'IncidenteelZittingVrij' : isCompensatie ? 'CompensatieUren' : 'Unknown'; await deleteSharePointListItem(listName, item.ID || item.Id); refreshData(); } setContextMenu(null); } });
            }
        }
        if (menuItems.length > 0) menuItems.push({ label: '---', disabled: true });
        menuItems.push({ label: 'Nieuw', icon: 'fa-plus', subItems: [ { label: 'Verlof aanvragen', icon: 'fa-calendar-plus', onClick: () => { setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username, medewerkerData: medewerker }); setIsVerlofModalOpen(true); setContextMenu(null); } }, { label: 'Ziek melden', icon: 'fa-notes-medical', onClick: () => { setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username, medewerkerData: medewerker }); setIsZiekModalOpen(true); setContextMenu(null); } }, { label: 'Compensatieuren doorgeven', icon: './icons/compensatieuren/neutraleuren.svg', iconType: 'svg', onClick: () => { setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username, medewerkerData: medewerker }); setIsCompensatieModalOpen(true); setContextMenu(null); } }, { label: 'Zittingsvrij maken', icon: 'fa-gavel', onClick: () => { setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username, medewerkerData: medewerker }); setIsZittingsvrijModalOpen(true); setContextMenu(null); } } ] });
        menuItems.push({ label: 'Annuleren', icon: 'fa-times', onClick: () => setContextMenu(null) });
        setContextMenu({ x: e.clientX, y: e.clientY, items: menuItems, onClose: () => setContextMenu(null), currentUsername, firstClickData, selection, contextData: { medewerker, dag, item } });
    }, [medewerkers, currentUser, canUserModifyItem, handleFormSubmit, refreshData, firstClickData, selection]);

    const urenPerWeekByMedewerker = useMemo(() => {
        const map = {};
        const validItems = urenPerWeekItems.filter(item => item.Ingangsdatum instanceof Date && !isNaN(item.Ingangsdatum.getTime()));
        for (const item of validItems) {
            if (!map[item.MedewerkerID]) map[item.MedewerkerID] = [];
            map[item.MedewerkerID].push(item);
        }
        for (const medewerkerId in map) {
            map[medewerkerId].sort((a, b) => b.Ingangsdatum - a.Ingangsdatum);
        }
        return map;
    }, [urenPerWeekItems]);

    const getUrenPerWeekForDate = useCallback((medewerkerId, date) => {
        const schedules = urenPerWeekByMedewerker[medewerkerId];
        if (!schedules) return null;
        let normalizedDate; try { normalizedDate = new Date(date); normalizedDate.setHours(0, 0, 0, 0); } catch { return null; }
        const applicableRecords = schedules.filter(s => s.Ingangsdatum instanceof Date && !isNaN(s.Ingangsdatum.getTime()) && s.Ingangsdatum <= normalizedDate).sort((a, b) => b.Ingangsdatum - a.Ingangsdatum);
        if (applicableRecords.length === 0) return null;
        const hasRotatingSchedule = applicableRecords.some(record => record.IsRotatingSchedule === true);
        if (hasRotatingSchedule) {
            const schedulePeriodsMap = new Map();
            for (const record of applicableRecords) {
                const periodKey = `${record.Ingangsdatum.getTime()}_${record.IsRotatingSchedule}`;
                if (!schedulePeriodsMap.has(periodKey)) schedulePeriodsMap.set(periodKey, { ingangsdatum: record.Ingangsdatum, isRotating: record.IsRotatingSchedule, cycleStartDate: record.CycleStartDate, records: [] });
                schedulePeriodsMap.get(periodKey).records.push(record);
            }
            const schedulePeriods = Array.from(schedulePeriodsMap.values()).sort((a, b) => b.ingangsdatum - a.ingangsdatum);
            let selectedPeriod = null;
            for (const period of schedulePeriods) { if (period.ingangsdatum <= normalizedDate) { selectedPeriod = period; break; } }
            if (!selectedPeriod) return null;
            if (selectedPeriod.isRotating) {
                const cycleStartDate = selectedPeriod.cycleStartDate || selectedPeriod.ingangsdatum;
                const requiredWeekType = calculateWeekType(normalizedDate, cycleStartDate);
                const weekTypeRecord = selectedPeriod.records.find(record => (record.WeekType ? String(record.WeekType).trim().toUpperCase() : null) === requiredWeekType.toUpperCase());
                if (weekTypeRecord) return weekTypeRecord;
                return selectedPeriod.records[0];
            } else {
                return selectedPeriod.records[0];
            }
        } else {
            return applicableRecords[0];
        }
    }, [urenPerWeekByMedewerker]);

    const compensatieMomentenByDate = useMemo(() => {
        const moments = {};
        const addMoment = (date, type, item) => { if (!date || isNaN(date)) return; const key = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString().split('T')[0]; if (!moments[key]) moments[key] = []; moments[key].push({ type, item }); };
        compensatieUrenItems.forEach(item => { if (item.Ruildag === true) { addMoment(item.StartCompensatieUren, 'ruildag-gewerkt', item); if (item.ruildagStart) addMoment(item.ruildagStart, 'ruildag-vrij', item); } else { addMoment(item.StartCompensatieUren, 'compensatie', item); } });
        return moments;
    }, [compensatieUrenItems]);

    const getCompensatieMomentenVoorDag = useCallback((datum) => { const key = new Date(Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate())).toISOString().split('T')[0]; return compensatieMomentenByDate[key] || []; }, [compensatieMomentenByDate]);
    const getVerlofVoorDag = useCallback((medewerkerUsername, datum) => { if (!medewerkerUsername) return null; const datumCheck = new Date(datum).setHours(12, 0, 0, 0); return verlofItems.find(v => v.MedewerkerID === medewerkerUsername && v.Status !== 'Afgewezen' && datumCheck >= new Date(v.StartDatum).setHours(12, 0, 0, 0) && datumCheck <= new Date(v.EindDatum).setHours(12, 0, 0, 0)); }, [verlofItems]);
    const getZittingsvrijVoorDag = useCallback((medewerkerUsername, datum) => { if (!medewerkerUsername) return null; const datumCheck = new Date(datum).setHours(12, 0, 0, 0); return zittingsvrijItems.find(z => z.Gebruikersnaam === medewerkerUsername && datumCheck >= new Date(z.StartDatum).setHours(12, 0, 0, 0) && datumCheck <= new Date(z.EindDatum).setHours(12, 0, 0, 0)); }, [zittingsvrijItems]);
    const getCompensatieUrenVoorDag = useCallback((medewerkerUsername, dag) => { if (!medewerkerUsername || !compensatieUrenItems || compensatieUrenItems.length === 0) return []; const dagStartUTC = new Date(Date.UTC(dag.getFullYear(), dag.getMonth(), dag.getDate(), 0, 0, 0)); const dagEindUTC = new Date(Date.UTC(dag.getFullYear(), dag.getMonth(), dag.getDate(), 23, 59, 59)); return compensatieUrenItems.filter(item => item.MedewerkerID === medewerkerUsername && new Date(item.StartCompensatieUren) <= dagEindUTC && new Date(item.EindeCompensatieUren) >= dagStartUTC); }, [compensatieUrenItems]);

    const periodeData = useMemo(() => weergaveType === 'week' ? getDagenInWeek(huidigWeek, huidigJaar) : getDagenInMaand(huidigMaand, huidigJaar), [weergaveType, huidigWeek, huidigMaand, huidigJaar]);
    const volgende = () => { if (weergaveType === 'week') { const maxWeken = getWekenInJaar(huidigJaar); if (huidigWeek >= maxWeken) { setHuidigWeek(1); setHuidigJaar(huidigJaar + 1); } else { setHuidigWeek(huidigWeek + 1); } } else { if (huidigMaand === 11) { setHuidigMaand(0); setHuidigJaar(huidigJaar + 1); } else { setHuidigMaand(huidigMaand + 1); } } };
    const vorige = () => { if (weergaveType === 'week') { if (huidigWeek === 1) { const vorigJaar = huidigJaar - 1; setHuidigWeek(getWekenInJaar(vorigJaar)); setHuidigJaar(vorigJaar); } else { setHuidigWeek(huidigWeek - 1); } } else { if (huidigMaand === 0) { setHuidigMaand(11); setHuidigJaar(huidigJaar - 1); } else { setHuidigMaand(huidigMaand - 1); } } };
    const toggleSortDirection = () => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');

    function handleCellClick(medewerker, dag, specificItem = null) {
        if (specificItem) {
            const { type } = (() => { if ('RedenId' in specificItem) return { type: 'verlof' }; if ('ZittingsVrijeDagTijd' in specificItem) return { type: 'zittingsvrij' }; if ('StartCompensatieUren' in specificItem) return { type: 'compensatie' }; if ('Status' in specificItem && specificItem.Status === 'Ziek') return { type: 'ziekte' }; return { type: null }; })();
            const targetMedewerker = medewerkers.find(m => m.Username === medewerker.Username);
            if (type === 'compensatie') { setSelection({ start: new Date(specificItem.StartCompensatieUren), end: new Date(specificItem.EindeCompensatieUren), medewerkerId: specificItem.MedewerkerID, itemData: specificItem, medewerkerData: targetMedewerker }); setIsCompensatieModalOpen(true); return; }
            else if (type === 'verlof') { setSelection({ start: new Date(specificItem.StartDatum), end: new Date(specificItem.EindDatum), medewerkerId: specificItem.MedewerkerID, itemData: specificItem, medewerkerData: targetMedewerker }); setIsVerlofModalOpen(true); return; }
            else if (type === 'zittingsvrij') { setSelection({ start: new Date(specificItem.StartDatum), end: new Date(specificItem.EindDatum), medewerkerId: specificItem.Gebruikersnaam, itemData: specificItem, medewerkerData: targetMedewerker }); setIsZittingsvrijModalOpen(true); return; }
            else if (type === 'ziekte') { setSelection({ start: new Date(specificItem.StartDatum), end: new Date(specificItem.EindDatum), medewerkerId: specificItem.MedewerkerID, itemData: specificItem, medewerkerData: targetMedewerker }); setIsZiekModalOpen(true); return; }
        }

        if (!firstClickData) {
            setFirstClickData({ medewerker, dag });
            setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username });
            setShowTooltip(true);
            if (tooltipTimeout) clearTimeout(tooltipTimeout);
            const timeout = setTimeout(() => setShowTooltip(false), 5000);
            setTooltipTimeout(timeout);
        } else if (firstClickData.medewerker.Username === medewerker.Username) {
            const startDate = new Date(firstClickData.dag), endDate = new Date(dag);
            setSelection({ start: startDate <= endDate ? startDate : endDate, end: startDate <= endDate ? endDate : startDate, medewerkerId: medewerker.Username });
            setFirstClickData(null);
            setShowTooltip(false);
            if (tooltipTimeout) { clearTimeout(tooltipTimeout); setTooltipTimeout(null); }
        } else {
            setFirstClickData({ medewerker, dag });
            setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username });
            setShowTooltip(true);
            if (tooltipTimeout) clearTimeout(tooltipTimeout);
            const timeout = setTimeout(() => setShowTooltip(false), 5000);
            setTooltipTimeout(timeout);
        }
    }

    const gegroepeerdeData = useMemo(() => {
        const gefilterdeMedewerkers = medewerkers.filter(m => (!zoekTerm || m.naam.toLowerCase().includes(zoekTerm.toLowerCase())) && (!geselecteerdTeam || m.team === geselecteerdTeam));
        const gesorteerdeFilters = gefilterdeMedewerkers.sort((a, b) => {
            const titleA = (a.Title || a.Naam || a.naam || 'Onbekend').toLowerCase().trim();
            const titleB = (b.Title || b.Naam || b.naam || 'Onbekend').toLowerCase().trim();
            if (sortDirection === 'asc') return titleA.localeCompare(titleB, 'nl', { numeric: true, sensitivity: 'base' });
            else return titleB.localeCompare(titleA, 'nl', { numeric: true, sensitivity: 'base' });
        });
        const data = teams.reduce((acc, team) => { if (team && team.id) { acc[team.id] = gesorteerdeFilters.filter(m => m.team === team.id); } return acc; }, {});
        const medewerkersZonderTeam = gesorteerdeFilters.filter(m => !m.team);
        if (medewerkersZonderTeam.length > 0) { data['geen_team'] = medewerkersZonderTeam; }
        return data;
    }, [medewerkers, teams, zoekTerm, geselecteerdTeam, sortDirection]);

    if (loading || !periodeData || periodeData.length === 0) {
        return h('div', { className: 'flex items-center justify-center min-h-screen bg-gray-50' },
            h('div', { className: 'text-center' },
                h('div', { className: 'loading-spinner', style: { margin: '0 auto 16px' } }),
                h('h2', { className: 'text-xl font-medium text-gray-900' }, 'Rooster wordt geladen...'),
                h('p', { className: 'text-gray-600 mt-2' }, 'Even geduld, we laden de roostergegevens.')
            )
        );
    }

    if (error) {
        return h('div', { className: 'flex items-center justify-center min-h-screen bg-gray-50' },
            h('div', { className: 'max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center' },
                h('div', { className: 'mb-6' },
                    h('div', { className: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4' }, h('i', { className: 'fas fa-exclamation-triangle text-red-600' })),
                    h('h2', { className: 'text-xl font-semibold text-gray-900 mb-2' }, 'Fout bij laden'),
                    h('p', { className: 'text-gray-600' }, error)
                ),
                h('button', { className: 'bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200', onClick: () => window.location.reload() }, h('i', { className: 'fas fa-sync-alt mr-2' }), 'Pagina Vernieuwen')
            )
        );
    }

    return h('div', { className: 'app-container' },
        h(RoosterHeader, { permissions: userPermissions, userInfo, weergaveType, huidigWeek, huidigJaar, huidigMaand, maandNamenVolledig, teams, zoekTerm, geselecteerdTeam, onWeergaveChange: setWeergaveType, onVolgende: volgende, onVorige: vorige, onZoekTermChange: (e) => setZoekTerm(e.target.value), onTeamChange: (e) => setGeselecteerdTeam(e.target.value) }),
        h(Legenda, { shiftTypes, dagenIndicators }),
        h(RoosterGrid, { gegroepeerdeData, teams, periodeData, weergaveType, feestdagen, getVerlofVoorDag, getZittingsvrijVoorDag, getCompensatieUrenVoorDag, getCompensatieMomentenVoorDag, getUrenPerWeekForDate, shiftTypes, dagenIndicators, handleCellClick, showContextMenu, selection, firstClickData, showTooltip, sortDirection, toggleSortDirection }),
        contextMenu && h(ContextMenuN, { ...contextMenu }),
        h(FAB, { id: 'fab-container', actions: [ { label: 'Verlof aanvragen', icon: 'fa-calendar-plus', onClick: () => setIsVerlofModalOpen(true) }, { label: 'Ziek melden', icon: 'fa-notes-medical', onClick: () => setIsZiekModalOpen(true) }, { label: 'Compensatieuren doorgeven', icon: 'fa-clock', onClick: () => setIsCompensatieModalOpen(true) } ] }),
        isVerlofModalOpen && h(Modal, { isOpen: isVerlofModalOpen, onClose: () => setIsVerlofModalOpen(false) }, h(VerlofAanvraagForm, { onSubmit: (data) => handleFormSubmit('Verlof', data), medewerkers, shiftTypes, selection, currentUser, onCancel: () => setIsVerlofModalOpen(false) })),
        isZiekModalOpen && h(Modal, { isOpen: isZiekModalOpen, onClose: () => setIsZiekModalOpen(false) }, h(ZiekteMeldingForm, { onSubmit: (data) => handleFormSubmit('Verlof', data), medewerkers, ziekteRedenId: useMemo(() => Object.values(shiftTypes).find(st => st.label && st.label.toLowerCase() === 'ziekte')?.id, [shiftTypes]), selection, currentUser, onCancel: () => setIsZiekModalOpen(false) })),
        isCompensatieModalOpen && h(Modal, { isOpen: isCompensatieModalOpen, onClose: () => setIsCompensatieModalOpen(false) }, h(CompensatieUrenForm, { onSubmit: (data) => handleFormSubmit('CompensatieUren', data), medewerkers, selection, currentUser, onCancel: () => setIsCompensatieModalOpen(false) })),
        isZittingsvrijModalOpen && h(Modal, { isOpen: isZittingsvrijModalOpen, onClose: () => setIsZittingsvrijModalOpen(false) }, h(ZittingsvrijForm, { onSubmit: (data) => handleFormSubmit('IncidenteelZittingVrij', data), medewerkers, selection, currentUser, onCancel: () => setIsZittingsvrijModalOpen(false) }))
    );
};

export default RoosterApp;
