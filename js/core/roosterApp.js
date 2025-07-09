// Import React and necessary hooks and utilities
// Cache buster: 2025-07-09-v3-uservalidation-fix
// Cache buster: 2025-01-12-v4-react-key-props-fix
// Cache buster: 2025-01-12-v5-user-validation-startup-fix
// Cache buster: 2025-01-12-v6-complete-ui-structure-fix
// Cache buster: 2025-01-12-v7-urenperweek-color-debug-fix
// Cache buster: 2025-01-12-v8-team-header-color-fix
// Cache buster: 2025-01-12-v9-team-id-mapping-fix
// Cache buster: 2025-01-12-v9-profile-cards-avatars-fix
// Cache buster: 2025-01-12-v10-missing-css-classes-fix
// Cache buster: 2025-01-12-v13-zittingsvrij-class-fix
// Cache buster: 2025-01-12-v15-zv-fixes-clean
// Cache buster: 2025-01-12-v16-urenperweek-blocks-fix
// Cache buster: 2025-01-12-v17-filter-special-day-types-only
// Cache buster: 2025-01-12-v20-verlof-redenen-lookup-fix
// Cache buster: 2025-01-12-v21-verlof-start-end-blocks-and-css-fix
// Cache buster: 2025-01-12-v22-urenperweek-block-css-classes-fix
import React, { useState, useEffect, useMemo, useCallback, Fragment } from 'react';
import { getDagNaam, formatteerDatum, getWekenInJaar, getWeekNummer, getDagenInWeek, getDagenInMaand, getFeestdagen } from '../utils/dateTimeUtils.js';
import { UserInfo } from '../ui/userinfo.js';
import { DagCell } from '../ui/dagCell.js';

const h = React.createElement;

/**
 * RoosterApp - Main React component for the roster application
 * 
 * CSS Classes Reference:
 * =====================
 * Main Structure: .sticky-header-container, .toolbar, .main-content, .table-responsive-wrapper
 * Table: .rooster-table, .rooster-thead, .medewerker-kolom, .dag-kolom, .team-header-row
 * Interactions: .selected, .first-click (applied via DagCell)
 * Content Blocks: .verlof-blok, .compensatie-uur-blok, .zittingsvrij-blok, .dag-indicator-blok (via DagCell)
 * Status Classes: .status-nieuw, .status-goedgekeurd, .status-afgekeurd (via DagCell)
 * View States: .week-view, .maand-view, .weekend, .feestdag, .vandaag
 * 
 * Data Attributes Reference:
 * =========================
 * Cell Data: data-datum, data-medewerker, data-feestdag
 * Content Data: data-afkorting, data-status, data-startdatum, data-einddatum, data-toelichting (via DagCell)
 * Navigation: data-weergave
 */

const RoosterApp = ({ isUserValidated: propIsUserValidated = false }) => {
    console.log('🏠 RoosterApp component initialized');

    // --- STATE MANAGEMENT ---
    const [isUserValidated, setIsUserValidated] = useState(propIsUserValidated);
    const [loading, setLoading] = useState(!propIsUserValidated);
    const [error, setError] = useState(null);
    
    // Data from SharePoint
    const [medewerkers, setMedewerkers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [verlofItems, setVerlofItems] = useState([]);
    const [zittingsvrijItems, setZittingsvrijItems] = useState([]);
    const [compensatieUrenItems, setCompensatieUrenItems] = useState([]);
    const [urenPerWeekItems, setUrenPerWeekItems] = useState([]);
    const [shiftTypes, setShiftTypes] = useState({});
    const [dagenIndicators, setDagenIndicators] = useState({});
    const [feestdagen, setFeestdagen] = useState({});

    // UI State
    const [huidigJaar, setHuidigJaar] = useState(new Date().getFullYear());
    const [huidigMaand, setHuidigMaand] = useState(new Date().getMonth());
    const [huidigWeek, setHuidigWeek] = useState(getWeekNummer(new Date()));
    const [weergaveType, setWeergaveType] = useState('week');
    const [zoekTerm, setZoekTerm] = useState('');
    const [geselecteerdTeam, setGeselecteerdTeam] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');

    // --- DATA FETCHING & EFFECTS ---
    const refreshData = useCallback(async () => {
        // Placeholder for your actual SharePoint data fetching logic
        console.log("Fetching data...");
        setLoading(false);
    }, []);

    useEffect(() => {
        if (isUserValidated) {
            refreshData();
        }
    }, [isUserValidated, refreshData]);
    
    useEffect(() => {
        const jaren = [huidigJaar - 1, huidigJaar, huidigJaar + 1];
        const alleFeestdagen = jaren.reduce((acc, jaar) => ({ ...acc, ...getFeestdagen(jaar) }), {});
        setFeestdagen(alleFeestdagen);
    }, [huidigJaar]);

    // --- MEMOIZED COMPUTATIONS ---
    const periodeData = useMemo(() => {
        return weergaveType === 'week' ? getDagenInWeek(huidigWeek, huidigJaar) : getDagenInMaand(huidigMaand, huidigJaar);
    }, [weergaveType, huidigWeek, huidigMaand, huidigJaar]);

    const gegroepeerdeData = useMemo(() => {
        // 1. Filter medewerkers
        let gefilterdeMedewerkers = medewerkers;
        if (zoekTerm) {
            gefilterdeMedewerkers = gefilterdeMedewerkers.filter(m => (m.Naam || m.naam || '').toLowerCase().includes(zoekTerm.toLowerCase()));
        }
        if (geselecteerdTeam) {
            gefilterdeMedewerkers = gefilterdeMedewerkers.filter(m => m.team === geselecteerdTeam);
        }

        // 2. Sort medewerkers
        const gesorteerdeMedewerkers = [...gefilterdeMedewerkers].sort((a, b) => {
            const naamA = (a.Naam || a.naam || 'Onbekend').toLowerCase().trim();
            const naamB = (b.Naam || b.naam || 'Onbekend').toLowerCase().trim();
            return sortDirection === 'asc' ? naamA.localeCompare(naamB, 'nl') : naamB.localeCompare(naamA, 'nl');
        });

        // 3. Group by team
        if (!teams) return {};
        const data = teams.reduce((acc, team) => {
            if (team && team.id) {
                acc[team.id] = gesorteerdeMedewerkers.filter(m => m.team === team.id);
            }
            return acc;
        }, {});
        
        const medewerkersZonderTeam = gesorteerdeMedewerkers.filter(m => !m.team);
        if (medewerkersZonderTeam.length > 0) {
            data['geen_team'] = medewerkersZonderTeam;
        }
        
        return data;
    }, [medewerkers, teams, zoekTerm, geselecteerdTeam, sortDirection]);

    // --- EVENT HANDLERS & HELPERS ---
    const volgende = () => { if (weergaveType === 'week') { const maxWeken = getWekenInJaar(huidigJaar); if (huidigWeek >= maxWeken) { setHuidigWeek(1); setHuidigJaar(huidigJaar + 1); } else { setHuidigWeek(huidigWeek + 1); } } else { if (huidigMaand === 11) { setHuidigMaand(0); setHuidigJaar(huidigJaar + 1); } else { setHuidigMaand(huidigMaand + 1); } } };
    const vorige = () => { if (weergaveType === 'week') { if (huidigWeek === 1) { const vorigJaar = huidigJaar - 1; setHuidigWeek(getWekenInJaar(vorigJaar)); setHuidigJaar(vorigJaar); } else { setHuidigWeek(huidigWeek - 1); } } else { if (huidigMaand === 0) { setHuidigMaand(11); setHuidigJaar(huidigJaar - 1); } else { setHuidigMaand(huidigMaand - 1); } } };
    const toggleSortDirection = () => setSortDirection(p => p === 'asc' ? 'desc' : 'asc');

    // Placeholder functions for business logic
    const getVerlofVoorDag = () => null;
    const getZittingsvrijVoorDag = () => null;
    const getCompensatieUrenVoorDag = () => [];
    const getUrenPerWeekForDate = () => null;
    const handleCalendarCellClick = (medewerker, dag) => (e) => console.log("Cell clicked:", medewerker.Username, dag);
    const isDateInSelection = () => false;

    // --- RENDER LOGIC ---
    if (loading) return h('div', null, 'Rooster wordt geladen...');
    if (error) return h('div', null, `Fout: ${error}`);

    return h(Fragment, null,
        h('div', { className: 'sticky-header-container' },
            h('div', { id: 'toolbar', className: 'toolbar' },
                 h('div', { className: 'toolbar-content' },
                    h('div', { id: 'periode-navigatie', className: 'periode-navigatie' },
                        h('button', { onClick: vorige }, h('i', { className: 'fas fa-chevron-left' })),
                        h('div', { className: 'periode-display' }, weergaveType === 'week' ? `Week ${huidigWeek}, ${huidigJaar}` : `${new Date(huidigJaar, huidigMaand).toLocaleString('nl-NL', { month: 'long' })} ${huidigJaar}`),
                        h('button', { onClick: volgende }, h('i', { className: 'fas fa-chevron-right' })),
                        h('div', { 'data-weergave': weergaveType, className: 'weergave-toggle', style: { marginLeft: '2rem' } },
                            h('span', { className: 'glider' }),
                            h('button', { className: 'weergave-optie', onClick: () => setWeergaveType('week') }, 'Week'),
                            h('button', { className: 'weergave-optie', onClick: () => setWeergaveType('maand') }, 'Maand')
                        )
                    ),
                    h('div', { id: 'filter-groep', className: 'filter-groep' },
                        h('input', { type: 'text', className: 'zoek-input', placeholder: 'Zoek medewerker...', value: zoekTerm, onChange: (e) => setZoekTerm(e.target.value) }),
                        h('select', { className: 'filter-select', value: geselecteerdTeam, onChange: (e) => setGeselecteerdTeam(e.target.value) },
                            h('option', { value: '' }, 'Alle teams'),
                            (teams || []).map(team => h('option', { key: team.id, value: team.id }, team.naam))
                        )
                    )
                )
            )
        ),
        h('main', { className: 'main-content' },
            h('div', { className: 'table-responsive-wrapper' },
                h('table', { id: 'rooster-table', className: `rooster-table ${weergaveType}-view` },
                    h('thead', { key: 'rooster-header' },
                        h('tr', { key: 'header-row' },
                            h('th', { key: 'medewerker-header', className: 'medewerker-kolom', onClick: toggleSortDirection }, 'Medewerker'),
                            ...periodeData.map((dag, index) => {
                                const dateObj = new Date(dag);
                                const formattedDate = formatteerDatum(dateObj);
                                const dayName = getDagNaam(dateObj).substring(0, 2);
                                const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                                const feestdagNaam = feestdagen[formattedDate];
                                return h('th', { key: `header-cell-${index}`, className: `dag-header ${isWeekend ? 'weekend' : ''} ${feestdagNaam ? 'feestdag' : ''}`.trim() },
                                    h('div', { className: 'dag-info' },
                                        h('span', { className: 'dag-naam' }, dayName),
                                        h('span', { className: 'dag-nummer' }, dateObj.getDate())
                                    )
                                );
                            })
                        )
                    ),
                    h('tbody', { key: 'rooster-body' },
                        Object.keys(gegroepeerdeData).map(teamId => {
                            const team = teams.find(t => t.id === teamId);
                            const teamMedewerkers = gegroepeerdeData[teamId];
                            if (!teamMedewerkers || teamMedewerkers.length === 0) return null;

                            const teamHeader = h('tr', { key: `team-header-${teamId}`, className: 'team-header-row' },
                                h('td', { colSpan: periodeData.length + 1, className: 'team-header', style: { backgroundColor: team?.kleur || '#cccccc' } }, team?.naam || 'Geen Team')
                            );

                            const employeeRows = teamMedewerkers.map(medewerker => {
                                return h('tr', { key: medewerker.id, 'data-medewerker-id': medewerker.id },
                                    h('td', { className: 'medewerker-kolom' },
                                        h(UserInfo, { medewerker: medewerker, urenPerWeek: getUrenPerWeekForDate(medewerker.Username, new Date()) })
                                    ),
                                    ...periodeData.map((dag, index) => {
                                        const dateKey = `${medewerker.id}-${formatteerDatum(dag)}`;
                                        return h(DagCell, {
                                            key: dateKey,
                                            medewerker: medewerker,
                                            dag: dag,
                                            isWeekend: dag.getDay() === 0 || dag.getDay() === 6,
                                            isFeestdag: !!feestdagen[formatteerDatum(dag)],
                                            feestdagNaam: feestdagen[formatteerDatum(dag)],
                                            getVerlofVoorDag: getVerlofVoorDag,
                                            getZittingsvrijVoorDag: getZittingsvrijVoorDag,
                                            getCompensatieUrenVoorDag: getCompensatieUrenVoorDag,
                                            getUrenPerWeekForDate: getUrenPerWeekForDate,
                                            shiftTypes: shiftTypes,
                                            onCellClick: handleCalendarCellClick(medewerker, dag),
                                            isSelected: isDateInSelection(dag, medewerker.Username)
                                        });
                                    })
                                );
                            });

                            // Return a React Fragment containing the header and rows for this team
                            return h(Fragment, { key: `team-fragment-${teamId}` }, [teamHeader, ...employeeRows.filter(Boolean)]);
                        }).filter(Boolean) // Filter out any null entries from validation
                    )
                )
            )
        )
    );
};

export default RoosterApp;
