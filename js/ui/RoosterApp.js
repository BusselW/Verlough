// RoosterApp.js - Main scheduler application component
import MedewerkerRow from './userinfo.js';
import { fetchSharePointList, getUserInfo, getCurrentUser, createSharePointListItem, updateSharePointListItem, deleteSharePointListItem, trimLoginNaamPrefix } from '../services/sharepointService.js';
import { getCurrentUserGroups, isUserInAnyGroup } from '../services/permissionService.js';
import * as linkInfo from '../services/linkInfo.js';
import LoadingLogic, { loadFilteredData, shouldReloadData, updateCacheKey, clearAllCache, logLoadingStatus } from '../services/loadingLogic.js';
import ContextMenu, { canManageOthersEvents, canUserModifyItem } from './ContextMenu.js';
import FAB from './FloatingActionButton.js';
import Modal from './Modal.js';
import DagCell, { renderCompensatieMomenten } from './dagCell.js';
import VerlofAanvraagForm from './forms/VerlofAanvraagForm.js';
import CompensatieUrenForm from './forms/CompensatieUrenForm.js';
import ZiekteMeldingForm from './forms/ZiekteMeldingForm.js';
import ZittingsvrijForm from './forms/ZittingsvrijForm.js';
import { roosterTutorial } from '../tutorial/roosterTutorial.js';
import { roosterHandleiding, openHandleiding } from '../tutorial/roosterHandleiding.js';
import { renderHorenStatus, getHorenStatus, filterMedewerkersByHorenStatus } from './horen.js';
import TooltipManager from './tooltipbar.js';
import ProfielKaarten from './profielkaarten.js';
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

const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

const RoosterApp = ({ isUserValidated = true, currentUser, userPermissions }) => {
    console.log('🏠 RoosterApp component initialized');
    
    // All React hooks must be declared first
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

    // Debug modal state changes
    useEffect(() => {
        console.log('🏠 Modal state changed:', {
            verlof: isVerlofModalOpen,
            compensatie: isCompensatieModalOpen,
            ziek: isZiekModalOpen,
            zittingsvrij: isZittingsvrijModalOpen
        });
    }, [isCompensatieModalOpen, isZittingsvrijModalOpen, isVerlofModalOpen, isZiekModalOpen]);
    
    const [selection, setSelection] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipTimeout, setTooltipTimeout] = useState(null);
    const [firstClickData, setFirstClickData] = useState(null);
   
    // Initialize the tooltip manager when the component mounts
    useEffect(() => {
        // Make sure TooltipManager is initialized
        console.log('🔍 Initializing TooltipManager from RoosterApp');
        TooltipManager.init();
    }, []);
   
    // Initialize profile cards after data is loaded
    useEffect(() => {
        if (!loading && medewerkers.length > 0) {
            console.log('🃏 Initializing profile cards...');
            // Add a small delay to ensure DOM is ready
            setTimeout(() => {
                ProfielKaarten.init();
            }, 100);
        }
    }, [loading, medewerkers]);

    // Trigger tooltip re-attachment after data loads and DOM updates
    useEffect(() => {
        if (!loading && medewerkers.length > 0) {
            console.log('🔄 Re-attaching tooltips after data load...');
            // Add a small delay to ensure DOM is ready
            setTimeout(() => {
                TooltipManager.reattachAll();
            }, 100);
        }
    }, [loading, verlofItems, compensatieUrenItems, zittingsvrijItems, medewerkers, huidigMaand, huidigJaar, weergaveType]);

    // Check if required services are available
    useEffect(() => {
        if (typeof fetchSharePointList !== 'function' || typeof getCurrentUser !== 'function') {
            console.error('❌ Required SharePoint services not available');
            setError('Required services not available');
        }
    }, []);

    // Expose tutorial functions globally
    useEffect(() => {
        if (isUserValidated) {
            window.startTutorial = roosterTutorial.start;
            window.openHandleiding = openHandleiding;
            console.log('🎓 Tutorial functions exposed globally');
        }
    }, [isUserValidated]);

    // Functies voor het openen van de modals
    const handleVrijvragen = useCallback((start, end, medewerkerId) => {
        console.log('handleVrijvragen called:', { start, end, medewerkerId });
        setSelection({ start, end, medewerkerId });
        setIsVerlofModalOpen(true);
    }, []);

    const handleZiekMelden = useCallback((start, end, medewerkerId) => {
        console.log('handleZiekMelden called:', { start, end, medewerkerId });
        setSelection({ start, end, medewerkerId });
        setIsZiekModalOpen(true);
    }, []);

    const handleCompensatie = useCallback((start, end, medewerkerId) => {
        console.log('handleCompensatie called:', { start, end, medewerkerId });
        setSelection({ start, end, medewerkerId });
        setIsCompensatieModalOpen(true);
    }, []);

    const handleZittingsvrij = useCallback((start, end, medewerkerId) => {
        console.log('handleZittingsvrij called:', { start, end, medewerkerId });
        setSelection({ start, end, medewerkerId });
        setIsZittingsvrijModalOpen(true);
    }, []);

    // Calendar cell click handler with two-click selection support
    function handleCellClick(medewerker, dag, specificItem = null) {
        // If a specific item is provided (e.g., compensatie item), open the appropriate modal directly
        if (specificItem) {
            console.log('Direct item click:', specificItem);
            
            // Check what type of item this is based on its properties
            if (specificItem.StartCompensatieUren) {
                // This is a compensatie item
                setSelection({ 
                    start: dag, 
                    end: dag, 
                    medewerkerId: medewerker.Username,
                    itemData: specificItem 
                });
                setIsCompensatieModalOpen(true);
            } else if (specificItem.RedenId) {
                // This is a verlof item
                setSelection({ 
                    start: new Date(specificItem.StartDatum), 
                    end: new Date(specificItem.EindDatum), 
                    medewerkerId: medewerker.Username,
                    itemData: specificItem 
                });
                setIsVerlofModalOpen(true);
            } else if (specificItem.ZittingsVrijeDagTijd) {
                // This is a zittingsvrij item
                setSelection({ 
                    start: new Date(specificItem.StartDatum), 
                    end: new Date(specificItem.EindDatum), 
                    medewerkerId: medewerker.Username,
                    itemData: specificItem 
                });
                setIsZittingsvrijModalOpen(true);
            }
            return;
        }

        // Regular cell click behavior (date range selection)
        if (!firstClickData) {
            // First click - set the starting point
            setFirstClickData({ medewerker, dag });
            console.log('First click:', { medewerker: medewerker.Username, dag: dag.toISOString().split('T')[0] });
        } else if (firstClickData.medewerker.Username === medewerker.Username) {
            // Second click on same employee - set the range
            const startDate = firstClickData.dag < dag ? firstClickData.dag : dag;
            const endDate = firstClickData.dag < dag ? dag : firstClickData.dag;
            
            console.log('Second click - range selected:', { 
                start: startDate.toISOString().split('T')[0], 
                end: endDate.toISOString().split('T')[0],
                medewerker: medewerker.Username
            });
            
            setSelection({ 
                start: startDate, 
                end: endDate, 
                medewerkerId: medewerker.Username 
            });
            setFirstClickData(null);
        } else {
            // Second click on different employee - start new selection
            setFirstClickData({ medewerker, dag });
            console.log('Second click on different employee - new first click:', { medewerker: medewerker.Username, dag: dag.toISOString().split('T')[0] });
        }
    }

    // Context menu handler
    async function showContextMenu(e, medewerker, dag, item) {
        console.log('showContextMenu called:', {
            medewerker: medewerker.Username,
            dag: dag.toISOString().split('T')[0],
            item,
            itemType: item ? Object.keys(item).filter(key => ['RedenId', 'StartCompensatieUren', 'ZittingsVrijeDagTijd'].includes(key)) : 'none'
        });

        // Additional debugging: check what compensatie items exist for this day
        const debugCompensatieItems = getCompensatieUrenVoorDag(medewerker.Username, dag);
        if (debugCompensatieItems.length > 0) {
            console.log('Compensatie items for this day:', debugCompensatieItems);
        }

        // Helper to determine item type and list
        function getItemTypeAndList(item) {
            if (!item) return { type: null, list: null };
            
            if (item.StartCompensatieUren) {
                return { type: 'compensatie', list: compensatieUrenItems };
            } else if (item.RedenId) {
                return { type: 'verlof', list: verlofItems };
            } else if (item.ZittingsVrijeDagTijd) {
                return { type: 'zittingsvrij', list: zittingsvrijItems };
            }
            return { type: null, list: null };
        }

        // Check if this is a direct compensatie item click
        const { type: itemType } = getItemTypeAndList(item);
        const isDirectCompensatieClick = itemType === 'compensatie';

        const menuItems = [
            { label: 'Verlof', action: () => handleVrijvragen(dag, dag, medewerker.Username) },
            { label: 'Ziek melden', action: () => handleZiekMelden(dag, dag, medewerker.Username) },
            { label: 'Compensatie', action: () => handleCompensatie(dag, dag, medewerker.Username) },
            { label: 'Zittingsvrij', action: () => handleZittingsvrij(dag, dag, medewerker.Username) }
        ];

        // Check for compensatie uren items on this day, but only show submenu if this wasn't a direct compensatie click
        const compensatieItemsForDay = getCompensatieUrenVoorDag(medewerker.Username, dag);
        if (compensatieItemsForDay.length > 0 && !isDirectCompensatieClick) {
            menuItems.push({
                label: 'Compensatie uren',
                submenu: compensatieItemsForDay.map(compItem => ({
                    label: renderCompensatieMomenten([compItem]),
                    action: () => {
                        console.log('Opening compensatie item from submenu:', compItem);
                        setSelection({ 
                            start: dag, 
                            end: dag, 
                            medewerkerId: medewerker.Username,
                            itemData: compItem 
                        });
                        setIsCompensatieModalOpen(true);
                    }
                }))
            });
        }

        // Add edit/delete options for specific items
        if (item) {
            const { type, list } = getItemTypeAndList(item);
            
            if (type && list) {
                menuItems.push({ separator: true });
                
                // Check if user can modify this item
                const canModify = await canUserModifyItem(item, medewerker.Username);
                
                if (canModify) {
                    menuItems.push({
                        label: `Bewerk ${type}`,
                        action: () => {
                            console.log(`Opening ${type} for editing:`, item);
                            setSelection({ 
                                start: type === 'compensatie' ? dag : new Date(item.StartDatum), 
                                end: type === 'compensatie' ? dag : new Date(item.EindDatum), 
                                medewerkerId: medewerker.Username,
                                itemData: item 
                            });
                            
                            if (type === 'compensatie') {
                                setIsCompensatieModalOpen(true);
                            } else if (type === 'verlof') {
                                setIsVerlofModalOpen(true);
                            } else if (type === 'zittingsvrij') {
                                setIsZittingsvrijModalOpen(true);
                            }
                        }
                    });
                    
                    menuItems.push({
                        label: `Verwijder ${type}`,
                        action: async () => {
                            if (confirm(`Weet je zeker dat je dit ${type} item wilt verwijderen?`)) {
                                try {
                                    await deleteSharePointListItem(linkInfo.getListName(type), item.ID);
                                    console.log(`${type} item deleted successfully`);
                                    await refreshData(true);
                                } catch (error) {
                                    console.error(`Error deleting ${type} item:`, error);
                                    alert(`Er is een fout opgetreden bij het verwijderen van het ${type} item.`);
                                }
                            }
                        }
                    });
                }
            }
        }

        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            items: menuItems
        });
    } // Close showContextMenu function

    // FAB handler that uses the same selection logic as ContextMenu
    // This ensures that when a user makes a selection (click 1/click 2),
    // that selection range is passed to the forms when using the FAB
    function handleZittingsvrijMaken() {
        console.log('FAB: Zittingsvrij maken - Current selection:', selection);
        
        if (selection && selection.medewerkerId) {
            // Use the existing selection if available
            handleZittingsvrij(selection.start, selection.end, selection.medewerkerId);
        } else {
            // Open with today's date as default
            const today = new Date();
            handleZittingsvrij(today, today, null);
        }
    }

    const refreshData = useCallback(async (forceReload = false) => {
        console.log('🔄 Refreshing data...', { forceReload });
        setLoading(true);
        setError(null);
        
        try {
            // Load all required data using direct SharePoint calls
            const [
                medewerkers,
                teams,
                verlofItems,
                compensatieUrenItems,
                zittingsvrijItems,
                urenPerWeekItems
            ] = await Promise.all([
                fetchSharePointList('Medewerkers'),
                fetchSharePointList('Teams'),
                fetchSharePointList('Verlof'),
                fetchSharePointList('CompensatieUren'),
                fetchSharePointList('IncidenteelZittingVrij'),
                fetchSharePointList('UrenPerWeek')
            ]);

            // Get current user info
            const currentUser = await getCurrentUser();
            
            console.log('✅ Data refreshed successfully');
            setMedewerkers(medewerkers || []);
            setTeams(teams || []);
            setShiftTypes({}); // TODO: Load shift types if needed
            setVerlofItems(verlofItems || []);
            setZittingsvrijItems(zittingsvrijItems || []);
            setCompensatieUrenItems(compensatieUrenItems || []);
            setUrenPerWeekItems(urenPerWeekItems || []);
            setDagenIndicators({}); // TODO: Calculate indicators if needed
            setCurrentUser(currentUser);
            
        } catch (error) {
            console.error('❌ Error refreshing data:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [weergaveType, huidigJaar, huidigMaand, huidigWeek]);

    const handleVerlofSubmit = useCallback(async (formData) => {
        console.log('🏠 Verlof form submitted:', formData);
        
        try {
            if (formData.ID) {
                // Update existing item
                await updateSharePointListItem(linkInfo.verlofAanvragenLijst, formData.ID, formData);
            } else {
                // Create new item
                await createSharePointListItem(linkInfo.verlofAanvragenLijst, formData);
            }
            
            setIsVerlofModalOpen(false);
            await refreshData(true);
            
        } catch (error) {
            console.error('Error submitting verlof:', error);
            alert('Er is een fout opgetreden bij het opslaan van de verlofaanvraag.');
        }
    }, [refreshData]);

    const handleZiekteSubmit = useCallback(async (formData) => {
        console.log('🏠 Ziekte form submitted:', formData);
        
        try {
            if (formData.ID) {
                // Update existing item
                await updateSharePointListItem(linkInfo.verlofAanvragenLijst, formData.ID, formData);
            } else {
                // Create new item
                await createSharePointListItem(linkInfo.verlofAanvragenLijst, formData);
            }
            
            setIsZiekModalOpen(false);
            await refreshData(true);
            
        } catch (error) {
            console.error('Error submitting ziekte:', error);
            alert('Er is een fout opgetreden bij het opslaan van de ziektemelding.');
        }
    }, [refreshData]);

    const handleCompensatieSubmit = useCallback(async (formData) => {
        console.log('🏠 Compensatie form submitted:', formData);
        
        try {
            if (formData.ID) {
                // Update existing item
                await updateSharePointListItem(linkInfo.compensatieUrenLijst, formData.ID, formData);
            } else {
                // Create new item
                await createSharePointListItem(linkInfo.compensatieUrenLijst, formData);
            }
            
            setIsCompensatieModalOpen(false);
            await refreshData(true);
            
        } catch (error) {
            console.error('Error submitting compensatie:', error);
            alert('Er is een fout opgetreden bij het opslaan van compensatie uren.');
        }
    }, [refreshData]);

    const handleZittingsvrijSubmit = useCallback(async (formData) => {
        console.log('🏠 Zittingsvrij form submitted:', formData);
        
        try {
            if (formData.ID) {
                // Update existing item
                await updateSharePointListItem(linkInfo.zittingsvrijLijst, formData.ID, formData);
            } else {
                // Create new item
                await createSharePointListItem(linkInfo.zittingsvrijLijst, formData);
            }
            
            setIsZittingsvrijModalOpen(false);
            await refreshData(true);
            
        } catch (error) {
            console.error('Error submitting zittingsvrij:', error);
            alert('Er is een fout opgetreden bij het opslaan van zittingsvrij.');
        }
    }, []);

    useEffect(() => {
        if (isUserValidated) {
            console.log('🚀 User validated, loading initial data...');
            refreshData();
        }
    }, [refreshData, isUserValidated]);

    // Effect to reload data when period changes (maand/week navigation)
    useEffect(() => {
        if (isUserValidated) {
            console.log('📅 Period changed, reloading data...');
            refreshData();
        }
    }, [weergaveType, huidigJaar, huidigMaand, huidigWeek, isUserValidated, refreshData]);

    // Handle escape key to clear selection
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
                setFirstClickData(null);
                setSelection(null);
                setContextMenu(null);
                
                // Clear tooltip timeout
                if (tooltipTimeout) {
                    clearTimeout(tooltipTimeout);
                    setTooltipTimeout(null);
                }
            }
        };
        
        document.addEventListener('keydown', handleEscapeKey);
        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [tooltipTimeout]);

    // Feestdagen effect
    const alleFeestdagen = useMemo(() => {
        return getFeestdagen(huidigJaar);
    }, [huidigJaar]);

    useEffect(() => {
        setFeestdagen(alleFeestdagen);
    }, [alleFeestdagen]);

    // Get ziekte reason ID from shift types
    const ziekteRedenId = useMemo(() => {
        const ziekteType = Object.values(shiftTypes).find(type => 
            type.naam?.toLowerCase().includes('ziek') || 
            type.naam?.toLowerCase().includes('sick')
        );
        return ziekteType ? ziekteType.id : null;
    }, [shiftTypes]);

    // Memoized calculations
    const urenPerWeekByMedewerker = useMemo(() => {
        const map = new Map();
        
        urenPerWeekItems.forEach(item => {
            const key = `${item.MedewerkerID}`;
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(item);
        });
        
        return map;
    }, [urenPerWeekItems]);

    const getUrenPerWeekForDate = useCallback((medewerkerId, date) => {
        const items = urenPerWeekByMedewerker.get(medewerkerId) || [];
        const targetDate = new Date(date);
        targetDate.setHours(12, 0, 0, 0);
        
        return items.find(item => {
            const startDate = new Date(item.StartDatum);
            const endDate = new Date(item.EindDatum);
            startDate.setHours(12, 0, 0, 0);
            endDate.setHours(12, 0, 0, 0);
            
            return targetDate >= startDate && targetDate <= endDate;
        });
    }, [urenPerWeekByMedewerker]);

    const compensatieMomentenByDate = useMemo(() => {
        const moments = {};
        
        compensatieUrenItems.forEach(item => {
            const datum = new Date(item.StartCompensatieUren);
            const key = datum.toISOString().split('T')[0];
            
            if (!moments[key]) {
                moments[key] = [];
            }
            moments[key].push(item);
        });
        
        return moments;
    }, [compensatieUrenItems]);

    const getCompensatieMomentenVoorDag = useCallback((datum) => {
        const key = datum.toISOString().split('T')[0];
        return compensatieMomentenByDate[key] || [];
    }, [compensatieMomentenByDate]);

    const getCompensatieUrenVoorDag = useCallback((medewerkerUsername, datum) => {
        const key = datum.toISOString().split('T')[0];
        const momenten = compensatieMomentenByDate[key] || [];
        return momenten.filter(item => item.MedewerkerID === medewerkerUsername);
    }, [compensatieMomentenByDate]);

    const getVerlofVoorDag = useCallback((medewerkerUsername, datum) => {
        const datumCheck = new Date(datum);
        datumCheck.setHours(12, 0, 0, 0);
        
        return verlofItems.find(v => 
            v.MedewerkerID === medewerkerUsername && 
            v.Status !== 'Afgewezen' && 
            datumCheck >= new Date(v.StartDatum).setHours(12, 0, 0, 0) && 
            datumCheck <= new Date(v.EindDatum).setHours(12, 0, 0, 0)
        );
    }, [verlofItems]);

    const getZittingsvrijVoorDag = useCallback((medewerkerUsername, datum) => {
        const datumCheck = new Date(datum);
        datumCheck.setHours(12, 0, 0, 0);
        
        return zittingsvrijItems.find(z => 
            z.MedewerkerID === medewerkerUsername && 
            datumCheck >= new Date(z.StartDatum).setHours(12, 0, 0, 0) && 
            datumCheck <= new Date(z.EindDatum).setHours(12, 0, 0, 0)
        );
    }, [zittingsvrijItems]);

    // Calculate period data based on display type
    const periodeData = useMemo(() => {
        if (weergaveType === 'maand') {
            return getDagenInMaand(huidigJaar, huidigMaand);
        } else {
            return getDagenInWeek(huidigJaar, huidigWeek);
        }
    }, [weergaveType, huidigJaar, huidigMaand, huidigWeek]);

    // Filter and sort employees
    const gefilterdeMedewerkers = useMemo(() => {
        let filtered = [...medewerkers];
        
        // Filter by search term
        if (zoekTerm) {
            filtered = filtered.filter(m => 
                m.Naam?.toLowerCase().includes(zoekTerm.toLowerCase()) ||
                m.Username?.toLowerCase().includes(zoekTerm.toLowerCase())
            );
        }
        
        // Filter by team
        if (geselecteerdTeam) {
            filtered = filtered.filter(m => m.Team === geselecteerdTeam);
        }
        
        // Filter by hearing status
        const horenFilter = document.querySelector('#horen-filter')?.value;
        if (horenFilter && horenFilter !== 'alle') {
            filtered = filterMedewerkersByHorenStatus(filtered, horenFilter);
        }
        
        // Sort by name
        filtered.sort((a, b) => {
            const nameA = a.Naam || '';
            const nameB = b.Naam || '';
            return sortDirection === 'asc' 
                ? nameA.localeCompare(nameB)
                : nameB.localeCompare(nameA);
        });
        
        return filtered;
    }, [medewerkers, zoekTerm, geselecteerdTeam, sortDirection]);

    // Navigation functions
    const volgendePeriode = useCallback(() => {
        if (weergaveType === 'maand') {
            if (huidigMaand === 11) {
                setHuidigMaand(0);
                setHuidigJaar(huidigJaar + 1);
            } else {
                setHuidigMaand(huidigMaand + 1);
            }
        } else {
            const volgendeWeek = huidigWeek + 1;
            const wekenInJaar = getWekenInJaar(huidigJaar);
            
            if (volgendeWeek > wekenInJaar) {
                setHuidigWeek(1);
                setHuidigJaar(huidigJaar + 1);
            } else {
                setHuidigWeek(volgendeWeek);
            }
        }
    }, [weergaveType, huidigMaand, huidigJaar, huidigWeek]);

    const vorigePeriode = useCallback(() => {
        if (weergaveType === 'maand') {
            if (huidigMaand === 0) {
                setHuidigMaand(11);
                setHuidigJaar(huidigJaar - 1);
            } else {
                setHuidigMaand(huidigMaand - 1);
            }
        } else {
            const vorigeWeek = huidigWeek - 1;
            
            if (vorigeWeek < 1) {
                const wekenInVorigJaar = getWekenInJaar(huidigJaar - 1);
                setHuidigWeek(wekenInVorigJaar);
                setHuidigJaar(huidigJaar - 1);
            } else {
                setHuidigWeek(vorigeWeek);
            }
        }
    }, [weergaveType, huidigMaand, huidigJaar, huidigWeek]);

    const toggleSortDirection = useCallback(() => {
        setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
    }, []);

    const vandaag = useCallback(() => {
        const today = new Date();
        setHuidigJaar(today.getFullYear());
        setHuidigMaand(today.getMonth());
        setHuidigWeek(getWeekNummer(today));
    }, []);

    // Period title
    const getPeriodeTitel = useCallback(() => {
        if (weergaveType === 'maand') {
            return `${maandNamenVolledig[huidigMaand]} ${huidigJaar}`;
        } else {
            return `Week ${huidigWeek} ${huidigJaar}`;
        }
    }, [weergaveType, huidigMaand, huidigJaar, huidigWeek]);

    // Loading state
    if (loading) {
        return h('div', { className: 'loading-container' },
            h('div', { className: 'loading-spinner' }),
            h('p', null, 'Gegevens laden...')
        );
    }

    // Error state
    if (error) {
        return h('div', { className: 'error-container' },
            h('h3', null, 'Er is een fout opgetreden'),
            h('p', null, error),
            h('button', { onClick: () => refreshData(true) }, 'Probeer opnieuw')
        );
    }

    // Initialize controls in toolbar areas
    useEffect(() => {
        // Render period navigation into designated area
        const periodeContainer = document.getElementById('periode-navigatie');
        if (periodeContainer) {
            const periodeControls = h('div', { className: 'periode-controls' },
                h('button', { 
                    className: 'nav-btn prev-btn',
                    onClick: vorigePeriode,
                    title: 'Vorige periode' 
                }, '‹'),
                h('span', { className: 'periode-titel' }, getPeriodeTitel()),
                h('button', { 
                    className: 'nav-btn next-btn',
                    onClick: volgendePeriode,
                    title: 'Volgende periode' 
                }, '›'),
                h('button', { 
                    className: 'vandaag-btn',
                    onClick: vandaag,
                    title: 'Ga naar vandaag' 
                }, 'Vandaag'),
                h('div', { className: 'weergave-toggle' },
                    h('button', {
                        className: `toggle-btn ${weergaveType === 'maand' ? 'active' : ''}`,
                        onClick: () => setWeergaveType('maand')
                    }, 'Maand'),
                    h('button', {
                        className: `toggle-btn ${weergaveType === 'week' ? 'active' : ''}`,
                        onClick: () => setWeergaveType('week')
                    }, 'Week')
                )
            );
            const periodeRoot = ReactDOM.createRoot(periodeContainer);
            periodeRoot.render(periodeControls);
        }

        // Render filters into designated area
        const filterContainer = document.getElementById('filter-groep');
        if (filterContainer) {
            const filterControls = h('div', { className: 'filter-controls' },
                h('div', { className: 'search-container' },
                    h('input', {
                        type: 'text',
                        className: 'search-input',
                        placeholder: 'Zoek medewerker...',
                        value: zoekTerm,
                        onChange: (e) => setZoekTerm(e.target.value)
                    }),
                    h('i', { className: 'fas fa-search search-icon' })
                ),
                h('div', { className: 'team-filter' },
                    h('select', {
                        className: 'team-select',
                        value: geselecteerdTeam,
                        onChange: (e) => setGeselecteerdTeam(e.target.value)
                    },
                        h('option', { value: '' }, 'Alle teams'),
                        teams.map(team => h('option', { key: team.ID, value: team.Title }, team.Title))
                    )
                ),
                h('div', { className: 'horen-filter' },
                    h('select', { 
                        id: 'horen-filter',
                        className: 'horen-select'
                    },
                        h('option', { value: 'alle' }, 'Alle medewerkers'),
                        h('option', { value: 'ja' }, 'Horen: Ja'),
                        h('option', { value: 'nee' }, 'Horen: Nee')
                    )
                )
            );
            const filterRoot = ReactDOM.createRoot(filterContainer);
            filterRoot.render(filterControls);
        }
    }, [weergaveType, zoekTerm, geselecteerdTeam, teams, periodeData]);

    // Helper function to create header cells (moved after all hooks)
    const createHeaderCells = () => {
        const cells = [
            h('th', { className: 'medewerker-kolom', id: 'medewerker-kolom' }, 
                h('div', { 
                    className: 'medewerker-header-container',
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px'
                    }
                },
                    h('span', null, 'Medewerker'),
                    h('button', {
                        className: 'sort-button',
                        onClick: toggleSortDirection,
                        title: `Huidige sortering: ${sortDirection === 'asc' ? 'A-Z' : 'Z-A'} (klik om te wisselen)`,
                        style: {
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px 6px',
                            borderRadius: '4px',
                            color: '#6b7280',
                            fontSize: '12px',
                            fontWeight: '600',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: 1
                        },
                        onMouseOver: (e) => {
                            e.target.style.backgroundColor = '#f3f4f6';
                            e.target.style.color = '#374151';
                        },
                        onMouseOut: (e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#6b7280';
                        }
                    }, 
                    h('i', { 
                        className: `fas ${sortDirection === 'asc' ? 'fa-sort-down' : 'fa-sort-up'}`,
                        style: { fontSize: '10px' }
                    })
                )
            ))
        ];
        
        (periodeData || []).forEach((dag, index) => {
            const isWeekend = dag.getDay() === 0 || dag.getDay() === 6;
            const feestdagNaam = feestdagen[dag.toISOString().split('T')[0]];
            const isToday = isVandaag(dag);
            const classes = `dag-kolom ${isWeekend ? 'weekend' : ''} ${feestdagNaam ? 'feestdag' : ''} ${isToday ? 'vandaag' : ''}`;
           
            // Create a ref callback to add tooltip for holiday
            const headerRef = (element) => {
                if (element && feestdagNaam && !element.dataset.tooltipAttached) {
                    TooltipManager.attach(element, () => {
                        return TooltipManager.createFeestdagTooltip(feestdagNaam, dag);
                    });
                }
            };
           
            cells.push(h('th', {
                key: `dag-${index}-${dag.toISOString()}`,
                className: classes,
                ref: headerRef
            },
                h('div', { className: 'dag-header' },
                    h('span', { className: 'dag-naam' }, formatteerDatum(dag).dagNaam),
                    h('span', { className: 'dag-nummer' }, formatteerDatum(dag).dagNummer),
                    isToday && h('div', { className: 'vandaag-indicator' })
                )
            ));
        });
        
        return cells;
    };

    // Main render
    return h(Fragment, null,

        // Main table
        h('div', { id: 'rooster-container', className: 'rooster-container' },
            h('table', { id: 'rooster-table', className: 'rooster-table' },
                h('thead', null,
                    h('tr', null, ...createHeaderCells())
                ),
                h('tbody', null,
                    gefilterdeMedewerkers.map(medewerker => 
                        h(MedewerkerRow, {
                            key: medewerker.ID,
                            medewerker,
                            periodeData,
                            verlofItems,
                            zittingsvrijItems,
                            compensatieUrenItems,
                            urenPerWeekItems,
                            shiftTypes,
                            feestdagen,
                            dagenIndicators,
                            onCellClick: handleCellClick,
                            onContextMenu: showContextMenu,
                            getVerlofVoorDag,
                            getZittingsvrijVoorDag,
                            getCompensatieUrenVoorDag,
                            getUrenPerWeekForDate,
                            selection,
                            firstClickData
                        })
                    )
                )
            )
        ),

        // Context menu
        contextMenu && h(ContextMenu, {
            x: contextMenu.x,
            y: contextMenu.y,
            items: contextMenu.items,
            onClose: () => setContextMenu(null)
        }),

        // Floating action button
        h(FAB, {
            onVerlofClick: () => {
                if (selection && selection.medewerkerId) {
                    handleVrijvragen(selection.start, selection.end, selection.medewerkerId);
                } else {
                    const today = new Date();
                    handleVrijvragen(today, today, null);
                }
            },
            onZiekClick: () => {
                if (selection && selection.medewerkerId) {
                    handleZiekMelden(selection.start, selection.end, selection.medewerkerId);
                } else {
                    const today = new Date();
                    handleZiekMelden(today, today, null);
                }
            },
            onCompensatieClick: () => {
                if (selection && selection.medewerkerId) {
                    handleCompensatie(selection.start, selection.end, selection.medewerkerId);
                } else {
                    const today = new Date();
                    handleCompensatie(today, today, null);
                }
            },
            onZittingsvrijClick: handleZittingsvrijMaken,
            hasSelection: !!selection
        }),

        // Modals
        h(Modal, {
            isOpen: isVerlofModalOpen,
            onClose: () => setIsVerlofModalOpen(false),
            title: selection && selection.itemData ? "Verlof Bewerken" : "Verlof Aanvragen"
        }, h(VerlofAanvraagForm, {
            onClose: () => setIsVerlofModalOpen(false),
            onSubmit: handleVerlofSubmit,
            medewerkers: medewerkers,
            shiftTypes: shiftTypes,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {}
        })),

        h(Modal, {
            isOpen: isCompensatieModalOpen,
            onClose: () => setIsCompensatieModalOpen(false),
            title: selection && selection.itemData ? "Compensatie Bewerken" : "Compensatie Uren"
        }, h(CompensatieUrenForm, {
            onClose: () => setIsCompensatieModalOpen(false),
            onSubmit: handleCompensatieSubmit,
            medewerkers: medewerkers,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {}
        })),

        h(Modal, {
            isOpen: isZiekModalOpen,
            onClose: () => setIsZiekModalOpen(false),
            title: selection && selection.itemData ? "Ziekmelding Bewerken" : "Ziek Melden"
        }, h(ZiekteMeldingForm, {
            onClose: () => setIsZiekModalOpen(false),
            onSubmit: handleZiekteSubmit,
            medewerkers: medewerkers,
            shiftTypes: shiftTypes,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {},
            ziekteRedenId: ziekteRedenId
        })),

        h(Modal, {
            isOpen: isZittingsvrijModalOpen,
            onClose: () => setIsZittingsvrijModalOpen(false),
            title: selection && selection.itemData ? "Zittingsvrij Bewerken" : "Zittingsvrij Maken"
        }, h(ZittingsvrijForm, {
            onClose: () => setIsZittingsvrijModalOpen(false),
            onSubmit: handleZittingsvrijSubmit,
            medewerkers: medewerkers,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {}
        }))
    );
};

export default RoosterApp;
