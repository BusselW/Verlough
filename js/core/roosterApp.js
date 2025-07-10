// Complete RoosterApp module - exact copy from verlofrooster_backup.aspx
// This file contains the complete RoosterApp function extracted from the original .aspx file
// All div IDs, class names, and function names are preserved exactly as in the original

// Import React and necessary hooks and utilities
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
import { fetchSharePointList, getUserInfo, getCurrentUser, createSharePointListItem, updateSharePointListItem, deleteSharePointListItem, trimLoginNaamPrefix } from '../services/sharepointService.js';
import { getCurrentUserGroups, isUserInAnyGroup } from '../services/permissionService.js';
import * as linkInfo from '../services/linkInfo.js';
import LoadingLogic, { loadFilteredData, shouldReloadData, updateCacheKey, clearAllCache, logLoadingStatus } from '../services/loadingLogic.js';
import ContextMenu, { canManageOthersEvents, canUserModifyItem } from '../ui/ContextMenu.js';
import FAB from '../ui/FloatingActionButton.js';
import Modal from '../ui/Modal.js';
import DagCell, { renderCompensatieMomenten } from '../ui/dagCell.js';
import VerlofAanvraagForm from '../ui/forms/VerlofAanvraagForm.js';
import CompensatieUrenForm from '../ui/forms/CompensatieUrenForm.js';
import ZiekteMeldingForm from '../ui/forms/ZiekteMeldingForm.js';
import ZittingsvrijForm from '../ui/forms/ZittingsvrijForm.js';
import { roosterTutorial } from '../tutorial/roosterTutorial.js';
import { roosterHandleiding, openHandleiding } from '../tutorial/roosterHandleiding.js';
import { renderHorenStatus, getHorenStatus, filterMedewerkersByHorenStatus } from '../ui/horen.js';
import TooltipManager from '../ui/tooltipbar.js';
import ProfielKaarten from '../ui/profielkaarten.js';
import MedewerkerRow from '../ui/userinfo.js';

// Get React hooks from global React object
const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

// =====================
// Permission-based Navigation Component
// =====================
const NavigationButtons = () => {
    const [userPermissions, setUserPermissions] = useState({
        isAdmin: false,
        isFunctional: false,
        isTaakbeheer: false,
        loading: true
    });

    const [userInfo, setUserInfo] = useState({
        naam: '',
        pictureUrl: '',
        loading: true,
        teamLeader: null,
        teamLeaderLoading: true
    });

    const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
    const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                // Load permissions
                const adminGroups = ["1. Sharepoint beheer", "1.1. Mulder MT"];
                const functionalGroups = ["1. Sharepoint beheer", "1.1. Mulder MT", "2.6 Roosteraars"];
                const taakbeheerGroups = ["1. Sharepoint beheer", "1.1. Mulder MT", "2.6 Roosteraars", "2.3. Senioren beoordelen", "2.4. Senioren administratie"];

                const [isAdmin, isFunctional, isTaakbeheer] = await Promise.all([
                    isUserInAnyGroup(adminGroups),
                    isUserInAnyGroup(functionalGroups),
                    isUserInAnyGroup(taakbeheerGroups)
                ]);

                setUserPermissions({
                    isAdmin,
                    isFunctional,
                    isTaakbeheer,
                    loading: false
                });

                // Load user info
                const currentUser = await getCurrentUser();
                if (currentUser) {
                    // Get medewerker naam from Medewerkers list
                    const medewerkers = await fetchSharePointList('Medewerkers');
                    const medewerker = medewerkers.find(m =>
                        m.MedewerkerID && currentUser.LoginName &&
                        m.MedewerkerID.toLowerCase().includes(currentUser.LoginName.split('|')[1]?.toLowerCase())
                    );

                    setUserInfo({
                        naam: medewerker?.Naam || currentUser.Title || 'Gebruiker',
                        pictureUrl: currentUser.PictureURL || 'https://via.placeholder.com/32x32/6c757d/ffffff?text=U',
                        loading: false,
                        teamLeaderLoading: true,
                        teamLeader: null
                    });
                   
                    // Get team leader info
                    try {
                        if (medewerker && medewerker.Username) {
                            const teamLeader = await linkInfo.getTeamLeaderForEmployee(medewerker.Username);
                            if (teamLeader) {
                                setUserInfo(prevState => ({
                                    ...prevState,
                                    teamLeader: teamLeader.Title || teamLeader.Naam || teamLeader.Username,
                                    teamLeaderLoading: false
                                }));
                            } else {
                                setUserInfo(prevState => ({
                                    ...prevState,
                                    teamLeaderLoading: false
                                }));
                            }
                        }
                    } catch (error) {
                        console.error('Error loading team leader info:', error);
                        setUserInfo(prevState => ({
                            ...prevState,
                            teamLeaderLoading: false
                        }));
                    }
                } else {
                    setUserInfo({
                        naam: 'Gebruiker',
                        pictureUrl: 'https://via.placeholder.com/32x32/6c757d/ffffff?text=U',
                        loading: false
                    });
                }

                console.log('User data loaded:', { permissions: { isAdmin, isFunctional, isTaakbeheer }, userInfo });

                // Debug: Log current user and medewerkers for troubleshooting
                console.log('DEBUG - Current user details:', {
                    LoginName: currentUser?.LoginName,
                    Title: currentUser?.Title,
                    Email: currentUser?.Email
                });

            } catch (error) {
                console.error('Error loading user data:', error);
                setUserPermissions(prev => ({ ...prev, loading: false }));
                setUserInfo({
                    naam: 'Gebruiker',
                    pictureUrl: 'https://via.placeholder.com/32x32/6c757d/ffffff?text=U',
                    loading: false
                });
            }
        };

        loadUserData();
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsDropdownOpen && !event.target.closest('.user-dropdown')) {
                setSettingsDropdownOpen(false);
            }
            if (helpDropdownOpen && !event.target.closest('.help-dropdown')) {
                setHelpDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [settingsDropdownOpen, helpDropdownOpen]);

    // Position dropdown correctly when it opens
    useEffect(() => {
        if (settingsDropdownOpen) {
            // Give time for the DOM to update
            setTimeout(() => {
                const dropdownButton = document.querySelector('.user-settings-btn');
                const dropdownMenu = document.querySelector('.user-dropdown-menu');
               
                if (dropdownButton && dropdownMenu) {
                    const buttonRect = dropdownButton.getBoundingClientRect();
                   
                    // Position the dropdown below the button
                    dropdownMenu.style.top = `${buttonRect.bottom + 8}px`;
                    dropdownMenu.style.right = `${window.innerWidth - buttonRect.right}px`;
                }
            }, 10);
        }
    }, [settingsDropdownOpen]);

    const navigateTo = (page) => {
        window.location.href = `pages/${page}`;
    };

    if (userPermissions.loading || userInfo.loading) {
        return null; // Don't show buttons while loading
    }

    return h('div', { className: 'navigation-buttons' },
        // Right side navigation buttons
        h('div', { id: 'nav-buttons-right', className: 'nav-buttons-right' },
            // Admin button - Visible to FullAccess (Admin)
            userPermissions.isAdmin && h('button', {
                className: 'btn btn-admin',
                onClick: () => navigateTo('adminCentrum/adminCentrumN.aspx'),
                title: 'Administratie Centrum'
            },
                h('i', { className: 'fas fa-cog' }),
                'Admin'
            ),

            // Beheer button - Visible to Functional (beheer)
            userPermissions.isFunctional && h('button', {
                className: 'btn btn-functional',
                onClick: () => navigateTo('beheerCentrum/beheerCentrumN.aspx'),
                title: 'Beheer Centrum'
            },
                h('i', { className: 'fas fa-tools' }),
                'Beheer'
            ),

            // Behandelen button - Visible to Taakbeheer
            userPermissions.isTaakbeheer && h('button', {
                className: 'btn btn-taakbeheer',
                onClick: () => navigateTo('behandelCentrum/behandelCentrumN.aspx'),
                title: 'Behandel Centrum'
            },
                h('i', { className: 'fas fa-tasks' }),
                'Behandelen'
            ),

            // Help dropdown - Replaces tour button
            h('div', { className: 'help-dropdown' },
                h('button', {
                    className: 'btn btn-help',
                    onClick: () => setHelpDropdownOpen(!helpDropdownOpen),
                    title: 'Hulp en documentatie'
                },
                    h('i', { className: 'fas fa-question-circle' }),
                    'Help',
                    h('i', {
                        className: `fas fa-chevron-${helpDropdownOpen ? 'up' : 'down'}`,
                        style: { fontSize: '0.8rem', marginLeft: '0.5rem' }
                    })
                ),

                // Help dropdown menu
                helpDropdownOpen && h('div', { className: 'help-dropdown-menu' },
                    h('button', {
                        className: 'help-dropdown-item',
                        onClick: () => {
                            window.startTutorial && window.startTutorial();
                            setHelpDropdownOpen(false);
                        }
                    },
                        h('i', { className: 'fas fa-route' }),
                        h('div', { className: 'help-item-content' },
                            h('span', { className: 'help-item-title' }, 'Interactieve tour'),
                            h('span', { className: 'help-item-description' }, 'Ontdek de belangrijkste functies van het rooster')
                        )
                    ),
                    h('button', {
                        className: 'help-dropdown-item',
                        onClick: () => {
                            setHelpDropdownOpen(false);
                            openHandleiding('algemeen');
                        },
                        title: 'Open uitgebreide handleiding'
                    },
                        h('i', { className: 'fas fa-book' }),
                        h('div', { className: 'help-item-content' },
                            h('span', { className: 'help-item-title' }, 'Handleiding'),
                            h('span', { className: 'help-item-description' }, 'Uitgebreide documentatie en instructies')
                        )
                    ),
                    h('button', {
                        className: 'help-dropdown-item disabled',
                        title: 'Binnenkort beschikbaar'
                    },
                        h('i', { className: 'fas fa-question' }),
                        h('div', { className: 'help-item-content' },
                            h('span', { className: 'help-item-title' }, 'FAQ'),
                            h('span', { className: 'help-item-description' }, 'Veelgestelde vragen (binnenkort)')
                        )
                    )
                )
            ),

            // User Settings Dropdown - Visible to everyone
            h('div', { id: 'user-dropdown', className: 'user-dropdown' },
                h('button', {
                    className: 'btn btn-settings user-settings-btn',
                    onClick: () => setSettingsDropdownOpen(!settingsDropdownOpen),
                    title: 'Gebruikersinstellingen'
                },
                    h('img', {
                        className: 'user-avatar-small',
                        src: userInfo.pictureUrl,
                        alt: userInfo.naam,
                        onError: (e) => {
                            e.target.src = 'https://via.placeholder.com/32x32/6c757d/ffffff?text=U';
                        }
                    }),
                    h('span', { className: 'user-name' }, userInfo.naam),
                    userInfo.teamLeader && h('span', {
                        className: 'user-teamleader',
                        style: {
                            fontSize: '0.7rem',
                            color: '#b0b0b0',
                            display: 'block',
                            lineHeight: '1',
                            position: 'absolute',
                            bottom: '3px',
                            left: '40px'
                        },
                        title: `Je teamleider is ${userInfo.teamLeader}`
                    }, `TL: ${userInfo.teamLeader}`),
                    h('i', {
                        className: `fas fa-chevron-${settingsDropdownOpen ? 'up' : 'down'}`,
                        style: { fontSize: '0.8rem', marginLeft: '0.5rem' }
                    })
                ),

                // Dropdown menu
                settingsDropdownOpen && h('div', { className: 'user-dropdown-menu' },
                    h('div', { className: 'dropdown-item-group' },
        h('button', {
            className: 'dropdown-item',
            onClick: () => {
                navigateTo('instellingenCentrum/instellingenCentrumN.aspx');
                setSettingsDropdownOpen(false);
            }
        },
            h('i', { className: 'fas fa-user-edit' }),
            h('div', { className: 'dropdown-item-content' },
                h('span', { className: 'dropdown-item-title' }, 'Persoonlijke instellingen'),
                h('span', { className: 'dropdown-item-description' }, 'Beheer uw profiel, werktijden en voorkeuren')
            )
        )
                    )
                )
            )
        )
    );
};

// =====================
// Hoofd RoosterApp Component
// =====================
const RoosterApp = ({ isUserValidated = true }) => {
    // Helper function to create header cells
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

    console.log('🏠 RoosterApp component initialized');
    const [weergaveType, setWeergaveType] = useState('maand');
    const [huidigJaar, setHuidigJaar] = useState(new Date().getFullYear());
    const [huidigMaand, setHuidigMaand] = useState(new Date().getMonth());
    const [medewerkers, setMedewerkers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [shiftTypes, setShiftTypes] = useState({});
    const [verlofItems, setVerlofItems] = useState([]);
    const [feestdagen, setFeestdagen] = useState({});
    const [loading, setLoading] = useState(false); // Start with false, let data loading set this to true
    const [error, setError] = useState(null);
    const [huidigWeek, setHuidigWeek] = useState(getWeekNummer(new Date()));
    const [zoekTerm, setZoekTerm] = useState('');
    const [geselecteerdTeam, setGeselecteerdTeam] = useState('');
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' for A-Z, 'desc' for Z-A
    const [zittingsvrijItems, setZittingsvrijItems] = useState([]);
    const [compensatieUrenItems, setCompensatieUrenItems] = useState([]);
    const [urenPerWeekItems, setUrenPerWeekItems] = useState([]);
    const [dagenIndicators, setDagenIndicators] = useState({});
    const [contextMenu, setContextMenu] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isVerlofModalOpen, setIsVerlofModalOpen] = useState(false);
    const [isCompensatieModalOpen, setIsCompensatieModalOpen] = useState(false);
    const [isZiekModalOpen, setIsZiekModalOpen] = useState(false);
    const [isZittingsvrijModalOpen, setIsZittingsvrijModalOpen] = useState(false);
    const [selection, setSelection] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipTimeout, setTooltipTimeout] = useState(null);
    const [firstClickData, setFirstClickData] = useState(null);

    // Debug modal state changes
    useEffect(() => {
        console.log('🏠 Modal state changed:', {
            compensatie: isCompensatieModalOpen,
            zittingsvrij: isZittingsvrijModalOpen,
            verlof: isVerlofModalOpen,
            ziek: isZiekModalOpen
        });
    }, [isCompensatieModalOpen, isZittingsvrijModalOpen, isVerlofModalOpen, isZiekModalOpen]);

    useEffect(() => {
        const jaren = [huidigJaar - 1, huidigJaar, huidigJaar + 1];
        const alleFeestdagen = jaren.reduce((acc, jaar) => ({ ...acc, ...getFeestdagen(jaar) }), {});
        setFeestdagen(alleFeestdagen);
    }, [huidigJaar]);

    // Mock data loading for now - this would be replaced with actual SharePoint data loading
    useEffect(() => {
        if (isUserValidated) {
            console.log('🔄 Loading mock data for RoosterApp...');
            setLoading(true);
            
            // Simulate loading delay
            setTimeout(() => {
                // Set some basic mock data
                setMedewerkers([
                    { id: 1, Username: 'user1', Naam: 'Test Gebruiker 1', team: 'team1' },
                    { id: 2, Username: 'user2', Naam: 'Test Gebruiker 2', team: 'team1' }
                ]);
                setTeams([
                    { id: 'team1', naam: 'Test Team', kleur: '#4a90e2' }
                ]);
                setShiftTypes({
                    1: { id: 1, label: 'Verlof', kleur: '#4a90e2', afkorting: 'V' }
                });
                setLoading(false);
                console.log('✅ Mock data loaded successfully');
            }, 1000);
        }
    }, [isUserValidated]);
    
    // Initialize the tooltip manager when the component mounts
    useEffect(() => {
        // Make sure TooltipManager is initialized
        console.log('🔍 Initializing TooltipManager from RoosterApp');
        TooltipManager.init();
    }, []);
   
    // Initialize profile cards after data is loaded
    useEffect(() => {
        if (!loading && medewerkers.length > 0) {
            setTimeout(() => {
                if (typeof ProfielKaarten !== 'undefined' && ProfielKaarten.init) {
                    ProfielKaarten.init();
                }
            }, 500);
        }
    }, [loading, medewerkers]);

    // Trigger tooltip re-attachment after data loads and DOM updates
    useEffect(() => {
        if (!loading && medewerkers.length > 0) {
            // Allow React to finish rendering before attaching tooltips
            setTimeout(() => {
                console.log('🔄 Triggering tooltip re-attachment after data load');
                TooltipManager.autoAttachTooltips();
                
                // Dispatch custom event for any components listening
                const event = new CustomEvent('react-update', {
                    detail: { 
                        verlofItems: verlofItems.length, 
                        compensatieItems: compensatieUrenItems.length,
                        zittingsvrijItems: zittingsvrijItems.length 
                    }
                });
                window.dispatchEvent(event);
            }, 200);
        }
    }, [loading, verlofItems, compensatieUrenItems, zittingsvrijItems, medewerkers, huidigMaand, huidigJaar, weergaveType]);

    // Check if required services are available
    useEffect(() => {
        if (typeof fetchSharePointList !== 'function' || typeof getCurrentUser !== 'function') {
            setError('Required services not available. Please refresh the page.');
            setLoading(false);
        }
    }, []);

    // Expose tutorial functions globally
    useEffect(() => {
        window.startTutorial = () => {
            roosterTutorial.start();
        };

        window.openHandleiding = (section = 'algemeen') => {
            openHandleiding(section);
        };

        document.addEventListener('tutorial-completed', () => {
            console.log('Tutorial completed');
        }, { once: true });

        document.addEventListener('handleiding-closed', () => {
            console.log('Handleiding closed');
        }, { once: true });

        return () => {
            delete window.startTutorial;
            delete window.openHandleiding;
        };
    }, []);

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
            console.log('Opening modal for specific item:', specificItem);
            const { type } = (() => {
                if ('RedenId' in specificItem) return { type: 'verlof' };
                if ('ZittingsVrijeDagTijd' in specificItem) return { type: 'zittingsvrij' };
                if ('StartCompensatieUren' in specificItem) return { type: 'compensatie' };
                if ('Status' in specificItem && specificItem.Status === 'Ziek') return { type: 'ziekte' };
                return { type: null };
            })();

            const targetMedewerker = medewerkers.find(m => m.Username === medewerker.Username);

            if (type === 'compensatie') {
                setSelection({
                    start: new Date(specificItem.StartCompensatieUren),
                    end: new Date(specificItem.EindeCompensatieUren),
                    medewerkerId: specificItem.MedewerkerID,
                    itemData: specificItem,
                    medewerkerData: targetMedewerker
                });
                setIsCompensatieModalOpen(true);
                return;
            } else if (type === 'verlof') {
                setSelection({
                    start: new Date(specificItem.StartDatum),
                    end: new Date(specificItem.EindDatum),
                    medewerkerId: specificItem.MedewerkerID,
                    itemData: specificItem,
                    medewerkerData: targetMedewerker
                });
                setIsVerlofModalOpen(true);
                return;
            } else if (type === 'zittingsvrij') {
                setSelection({
                    start: new Date(specificItem.StartDatum),
                    end: new Date(specificItem.EindDatum),
                    medewerkerId: specificItem.Gebruikersnaam,
                    itemData: specificItem,
                    medewerkerData: targetMedewerker
                });
                setIsZittingsvrijModalOpen(true);
                return;
            } else if (type === 'ziekte') {
                setSelection({
                    start: new Date(specificItem.StartDatum),
                    end: new Date(specificItem.EindDatum),
                    medewerkerId: specificItem.MedewerkerID,
                    itemData: specificItem,
                    medewerkerData: targetMedewerker
                });
                setIsZiekModalOpen(true);
                return;
            }
        }

        // Regular cell click behavior (date range selection)
        if (!firstClickData) {
            // First click: Set start of selection
            setFirstClickData({ medewerker, dag });
            setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username });

            // Show tooltip after first click
            setShowTooltip(true);

            // Auto-hide tooltip after 5 seconds
            if (tooltipTimeout) {
                clearTimeout(tooltipTimeout);
            }

            const timeout = setTimeout(() => {
                setShowTooltip(false);
            }, 5000);
            setTooltipTimeout(timeout);

        } else if (firstClickData.medewerker.Username === medewerker.Username) {
            // Second click on same employee: Set end of selection
            const startDate = new Date(firstClickData.dag);
            const endDate = new Date(dag);
            const actualStart = startDate <= endDate ? startDate : endDate;
            const actualEnd = startDate <= endDate ? endDate : startDate;

            setSelection({
                start: actualStart,
                end: actualEnd,
                medewerkerId: medewerker.Username
            });
            setFirstClickData(null); // Reset for next selection
            setShowTooltip(false); // Hide tooltip after selection is complete

            if (tooltipTimeout) {
                clearTimeout(tooltipTimeout);
                setTooltipTimeout(null);
            }
        } else {
            // Click on different employee: Start new selection
            setFirstClickData({ medewerker, dag });
            setSelection({ start: dag, end: dag, medewerkerId: medewerker.Username });

            // Show tooltip for this new selection too
            setShowTooltip(true);

            // Auto-hide tooltip after 5 seconds
            if (tooltipTimeout) {
                clearTimeout(tooltipTimeout);
            }

            const timeout = setTimeout(() => {
                setShowTooltip(false);
            }, 5000);
            setTooltipTimeout(timeout);
        }
    }

    // Helper: Check if a date is in the current selection for a medewerker
    function isDateInSelection(dag, medewerkerUsername) {
        if (!selection || !selection.start || !selection.end || !selection.medewerkerId) return false;
        // Only highlight if the medewerker matches
        if (medewerkerUsername !== selection.medewerkerId) return false;
        // Compare only the date part (ignore time)
        const d = new Date(dag);
        d.setHours(0, 0, 0, 0);
        const s = new Date(selection.start);
        s.setHours(0, 0, 0, 0);
        const e = new Date(selection.end);
        e.setHours(0, 0, 0, 0);
        return d >= s && d <= e;
    }

    const gegroepeerdeData = useMemo(() => {
        const gefilterdeMedewerkers = medewerkers.filter(m => (!zoekTerm || m.naam.toLowerCase().includes(zoekTerm.toLowerCase())) && (!geselecteerdTeam || m.team === geselecteerdTeam));
        
        // Sort medewerkers by Title column from Medewerkers SharePoint list based on sortDirection
        const gesorteerdeFilters = gefilterdeMedewerkers.sort((a, b) => {
            // Use the Title field from the SharePoint Medewerkers list specifically
            const titleA = (a.Title || a.Naam || a.naam || 'Onbekend').toLowerCase().trim();
            const titleB = (b.Title || b.Naam || b.naam || 'Onbekend').toLowerCase().trim();
            
            if (sortDirection === 'asc') {
                return titleA.localeCompare(titleB, 'nl', { numeric: true, sensitivity: 'base' });
            } else {
                return titleB.localeCompare(titleA, 'nl', { numeric: true, sensitivity: 'base' });
            }
        });
        
        const data = teams.reduce((acc, team) => { if (team && team.id) { acc[team.id] = gesorteerdeFilters.filter(m => m.team === team.id); } return acc; }, {});
        const medewerkersZonderTeam = gesorteerdeFilters.filter(m => !m.team);
        if (medewerkersZonderTeam.length > 0) { data['geen_team'] = medewerkersZonderTeam; }
        return data;
    }, [medewerkers, teams, zoekTerm, geselecteerdTeam, sortDirection]);

    // Toggle sort direction for medewerkers
    const toggleSortDirection = () => {
        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    const volgende = () => { if (weergaveType === 'week') { const maxWeken = getWekenInJaar(huidigJaar); if (huidigWeek >= maxWeken) { setHuidigWeek(1); setHuidigJaar(huidigJaar + 1); } else { setHuidigWeek(huidigWeek + 1); } } else { if (huidigMaand === 11) { setHuidigMaand(0); setHuidigJaar(huidigJaar + 1); } else { setHuidigMaand(huidigMaand + 1); } } };
    const vorige = () => { if (weergaveType === 'week') { if (huidigWeek === 1) { const vorigJaar = huidigJaar - 1; setHuidigWeek(getWekenInJaar(vorigJaar)); setHuidigJaar(vorigJaar); } else { setHuidigWeek(huidigWeek - 1); } } else { if (huidigMaand === 0) { setHuidigMaand(11); setHuidigJaar(huidigJaar - 1); } else { setHuidigMaand(huidigMaand - 1); } } };

    const periodeData = useMemo(() => {
        return weergaveType === 'week' ? getDagenInWeek(huidigWeek, huidigJaar) : getDagenInMaand(huidigMaand, huidigJaar);
    }, [weergaveType, huidigWeek, huidigMaand, huidigJaar]);

    // Show loading state while refreshing data or if data is not ready
    if (loading || !periodeData || periodeData.length === 0) {
        return h('div', {
            className: 'flex items-center justify-center min-h-screen bg-gray-50',
            style: { fontFamily: 'Inter, sans-serif' }
        },
            h('div', { className: 'text-center' },
                h('div', { className: 'loading-spinner', style: { margin: '0 auto 16px' } }),
                h('h2', { className: 'text-xl font-medium text-gray-900' }, 'Rooster wordt geladen...'),
                h('p', { className: 'text-gray-600 mt-2' }, 'Even geduld, we laden de roostergegevens.')
            )
        );
    }

    // Show error state if there's an error
    if (error) {
        return h('div', {
            className: 'flex items-center justify-center min-h-screen bg-gray-50',
            style: { fontFamily: 'Inter, sans-serif' }
        },
            h('div', { className: 'max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center' },
                h('div', { className: 'mb-6' },
                    h('div', {
                        className: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4'
                    },
                        h('i', { className: 'fas fa-exclamation-triangle text-red-600' })
                    ),
                    h('h2', { className: 'text-xl font-semibold text-gray-900 mb-2' }, 'Fout bij laden'),
                    h('p', { className: 'text-gray-600' }, error)
                ),
                h('button', {
                    className: 'bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200',
                    onClick: () => window.location.reload()
                },
                    h('i', { className: 'fas fa-sync-alt mr-2' }),
                    'Pagina Vernieuwen'
                )
            )
        );
    }

    // Render de roosterkop en de medewerkerrijen
    return h(Fragment, null,
        h('div', { className: 'sticky-header-container' },
            h('header', { id: 'header', className: 'header' },
                h('div', { className: 'header-content' },
                    // Left side - Melding button and title
                    h('div', { className: 'header-left' },
                        h('button', {
                            className: 'btn btn-melding',
                            onClick: () => window.location.href = 'pages/meldingMaken.aspx',
                            title: 'Melding Maken'
                        },
                            h('i', { className: 'fas fa-exclamation-triangle' }),
                            'Melding'
                        ),
                        h('h1', null, 'Verlofrooster')
                    ),
                    // Right side - Permission-based navigation
                    h(NavigationButtons)
                )
            ),
            h('div', { id: 'toolbar', className: 'toolbar' },
                h('div', { className: 'toolbar-content' },
                    h('div', { id: 'periode-navigatie', className: 'periode-navigatie' },
                        h('button', { onClick: vorige }, h('i', { className: 'fas fa-chevron-left' })),
                        h('div', { className: 'periode-display' }, weergaveType === 'week' ? `Week ${huidigWeek}, ${huidigJaar}` : `${maandNamenVolledig[huidigMaand]} ${huidigJaar}`),
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
                ),
                Object.keys(shiftTypes).length > 0 && h('div', { id: 'legenda-container', className: 'legenda-container' },
                    h('span', { className: 'legenda-titel' }, 'Legenda:'),
                    Object.values(shiftTypes || {}).map(type => h('div', { key: type.id, className: 'legenda-item' },
                        h('div', { className: 'legenda-kleur', style: { backgroundColor: type.kleur } }),
                        h('span', null, `${type.afkorting} - ${type.label}`)
                    ))
                )
            )
        ),
        h('main', { className: 'main-content' },
            h('div', { className: 'table-responsive-wrapper' },
                h('table', {
                    id: 'rooster-table',
                    className: `rooster-table ${weergaveType}-view`,
                    style: { '--day-count': periodeData.length }
                },
                    h('thead', { className: 'rooster-thead' },
                        h.apply(h, ['tr', null].concat(createHeaderCells()))
                    ),
                    h('tbody', null,
                        // Render teams and medewerkers with actual data
                        (gegroepeerdeData ? Object.keys(gegroepeerdeData) : []).map(teamId => {
                            const team = (teams || []).find(t => t.id === teamId) || { id: 'geen_team', naam: 'Geen Team', kleur: '#ccc' };
                            const teamMedewerkers = gegroepeerdeData[teamId];
                            if (!teamMedewerkers || teamMedewerkers.length === 0) return null;

                            return h(Fragment, { key: teamId },
                                h('tr', { className: 'team-rij' }, h('td', { colSpan: periodeData.length + 1 }, h('div', { className: 'team-header', style: { '--team-kleur': team.kleur } }, team.naam))),
                                (teamMedewerkers || []).map(medewerker =>
                                    h('tr', { key: medewerker.id, className: 'medewerker-rij' },
                                        h('td', { className: 'medewerker-kolom' }, h(MedewerkerRow, { medewerker: medewerker || {} })),
                                        // Render calendar cells for each day
                                        ...periodeData.map((dag, index) => {
                                            const isWeekend = dag.getDay() === 0 || dag.getDay() === 6;
                                            const feestdagNaam = feestdagen[dag.toISOString().split('T')[0]];
                                            const isSelected = isDateInSelection(dag, medewerker.Username);
                                            const isToday = isVandaag(dag);
                                            const classes = `dag-kolom ${isWeekend ? 'weekend' : ''} ${feestdagNaam ? 'feestdag' : ''} ${isToday ? 'vandaag' : ''} ${isSelected ? 'selected' : ''}`;

                                            return h('td', {
                                                key: dag.toISOString(),
                                                className: classes,
                                                id: medewerker.id === 1 && dag.getDate() === 1 ? 'dag-cel' : undefined,
                                                onClick: () => handleCellClick(medewerker, dag),
                                                style: firstClickData && firstClickData.medewerker.Username === medewerker.Username && firstClickData.dag.toDateString() === dag.toDateString() ? { position: 'relative' } : {}
                                            },
                                                // Basic cell content - would be expanded with actual verlof/compensatie rendering
                                                h('div', { className: 'dag-content' },
                                                    isToday && h('div', { className: 'vandaag-indicator' }),
                                                    // Tooltip for first click
                                                    firstClickData && firstClickData.medewerker.Username === medewerker.Username && firstClickData.dag.toDateString() === dag.toDateString() && showTooltip &&
                                                    h('div', { className: 'selection-tooltip visible' }, 'Selecteer nu een andere dag en klik rechts')
                                                )
                                            );
                                        })
                                    )
                                )
                            );
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
        // FAB
        h(FAB, {
            id: 'fab-container',
            actions: [
                {
                    label: 'Verlof aanvragen',
                    icon: 'fa-calendar-plus',
                    onClick: () => setIsVerlofModalOpen(true)
                },
                {
                    label: 'Ziek melden',
                    icon: 'fa-notes-medical',
                    onClick: () => setIsZiekModalOpen(true)
                },
                {
                    label: 'Compensatieuren doorgeven',
                    icon: 'fa-clock',
                    onClick: () => setIsCompensatieModalOpen(true)
                },
                {
                    label: 'Zittingsvrij maken',
                    icon: 'fa-gavel',
                    onClick: () => setIsZittingsvrijModalOpen(true)
                }
            ]
        }),
        // Modals
        h(Modal, {
            isOpen: isVerlofModalOpen,
            onClose: () => setIsVerlofModalOpen(false),
            title: selection && selection.itemData ? "Verlof Bewerken" : "Verlof Aanvragen"
        }, h(VerlofAanvraagForm, {
            onClose: () => setIsVerlofModalOpen(false),
            medewerkers: medewerkers,
            verlofItems: verlofItems,
            shiftTypes: shiftTypes,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {},
            onSubmit: (formData) => {
                console.log('Verlof form submitted:', formData);
                setIsVerlofModalOpen(false);
            }
        })),
        h(Modal, {
            isOpen: isCompensatieModalOpen,
            onClose: () => setIsCompensatieModalOpen(false),
            title: selection && selection.itemData ? "Compensatie Uren Bewerken" : "Compensatie Uren Aanvragen"
        }, h(CompensatieUrenForm, {
            onClose: () => setIsCompensatieModalOpen(false),
            medewerkers: medewerkers,
            compensatieUrenItems: compensatieUrenItems,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {},
            onSubmit: (formData) => {
                console.log('Compensatie form submitted:', formData);
                setIsCompensatieModalOpen(false);
            }
        })),
        h(Modal, {
            isOpen: isZiekModalOpen,
            onClose: () => setIsZiekModalOpen(false),
            title: selection && selection.itemData ? "Ziekmelding Bewerken" : "Ziek Melden"
        }, h(ZiekteMeldingForm, {
            onClose: () => setIsZiekModalOpen(false),
            onSubmit: (formData) => {
                console.log('Ziekte form submitted:', formData);
                setIsZiekModalOpen(false);
            },
            medewerkers: medewerkers,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {},
            ziekteRedenId: 1
        })),
        h(Modal, {
            isOpen: isZittingsvrijModalOpen,
            onClose: () => setIsZittingsvrijModalOpen(false),
            title: selection && selection.itemData ? "Zittingsvrij Bewerken" : "Zittingsvrij Maken"
        }, h(ZittingsvrijForm, {
            onClose: () => setIsZittingsvrijModalOpen(false),
            onSubmit: (formData) => {
                console.log('Zittingsvrij form submitted:', formData);
                setIsZittingsvrijModalOpen(false);
            },
            medewerkers: medewerkers,
            selection: selection,
            initialData: selection && selection.itemData ? selection.itemData : {}
        }))
    );
};

export default RoosterApp;