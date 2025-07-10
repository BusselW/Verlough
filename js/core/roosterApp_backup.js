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
import { 
    maandNamenVolledig, 
    getPasen, 
    getFeestdagen, 
    getWeekNummer, 
    getWekenInJaar, 
    getDagenInMaand, 
    formatteerDatum, 
    getDagenInWeek, 
    isVandaag,
    getDagNaam
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
import UserInfo from '../ui/userinfo.js';

// Get React hooks from global React object
const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

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

    const [isUserValidated, setIsUserValidated] = useState(propIsUserValidated);

    useEffect(() => {
        setIsUserValidated(propIsUserValidated);
    }, [propIsUserValidated]);

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

    // Debug modal state changes
    useEffect(() => {
        console.log('🏠 Modal state changed:', {
            compensatie: isCompensatieModalOpen,
            zittingsvrij: isZittingsvrijModalOpen,
            verlof: isVerlofModalOpen,
            ziek: isZiekModalOpen
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
            setTimeout(() => {
                if (typeof ProfielKaarten !== 'undefined' && ProfielKaarten.init) {
                    console.log('🔄 Initializing ProfielKaarten after data load');
                    ProfielKaarten.init();
                } else {
                    console.warn('ProfielKaarten not available');
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
                
                // Re-initialize profile cards
                if (typeof ProfielKaarten !== 'undefined' && ProfielKaarten.init) {
                    console.log('🔄 Re-initializing ProfielKaarten after DOM update');
                    ProfielKaarten.init();
                }
                
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
        if (isUserValidated) {
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
    
    // Context menu handler
    async function showContextMenu(e, medewerker, dag, item) {
        console.log('showContextMenu called:', {
            medewerker: medewerker?.Username,
            dag: dag.toDateString(),
            item: item?.ID,
            hasItem: !!item,
            itemType: item ? Object.keys(item).filter(key => ['RedenId', 'StartCompensatieUren', 'ZittingsVrijeDagTijd'].includes(key)) : 'none'
        });

        // Additional debugging: check what compensatie items exist for this day
        const debugCompensatieItems = getCompensatieUrenVoorDag(medewerker.Username, dag);
        if (debugCompensatieItems.length > 0) {
            console.log(`Found ${debugCompensatieItems.length} compensatie items for ${medewerker.Username} on ${dag.toDateString()}:`, debugCompensatieItems);
        }

        // Helper to determine item type and list
        function getItemTypeAndList(item) {
            if (!item) return { type: null, list: null };

            console.log('getItemTypeAndList called with item:', item);

            if ('RedenId' in item) {
                console.log('Detected verlof item');
                return { type: 'verlof', list: 'Verlof' };
            }
            if ('ZittingsVrijeDagTijd' in item) {
                console.log('Detected zittingsvrij item');
                return { type: 'zittingsvrij', list: 'IncidenteelZittingVrij' };
            }
            if ('StartCompensatieUren' in item) {
                console.log('Detected compensatie item');
                return { type: 'compensatie', list: 'CompensatieUren' };
            }
            if ('Status' in item && item.Status === 'Ziek') {
                console.log('Detected ziekte item');
                return { type: 'ziekte', list: 'Verlof' };
            }

            console.log('No item type detected, item keys:', Object.keys(item));
            return { type: null, list: null };
        }

        // Check if this is a direct compensatie item click
        const { type: itemType } = getItemTypeAndList(item);
        const isDirectCompensatieClick = itemType === 'compensatie';

        const menuItems = [
            {
                label: 'Nieuw',
                icon: 'fa-plus',
                subItems: [
                    {
                        label: 'Verlof aanvragen',
                        icon: 'fa-calendar-plus',
                        onClick: () => {
                            console.log('Verlof aanvragen clicked');
                            // Use selected date range if available, otherwise use clicked day
                            const startDate = selection && selection.medewerkerId === medewerker.Username ? selection.start : dag;
                            const endDate = selection && selection.medewerkerId === medewerker.Username ? selection.end : dag;
                            const targetMedewerker = medewerkers.find(m => m.Username === medewerker.Username);

                            setSelection({
                                start: startDate,
                                end: endDate,
                                medewerkerId: medewerker.Username,
                                medewerkerData: targetMedewerker
                            });
                            setIsVerlofModalOpen(true);
                            setContextMenu(null);
                        }
                    },
                    {
                        label: 'Ziek melden',
                        icon: 'fa-notes-medical',
                        onClick: () => {
                            console.log('Ziek melden clicked');
                            // Use selected date range if available, otherwise use clicked day
                            const startDate = selection && selection.medewerkerId === medewerker.Username ? selection.start : dag;
                            const endDate = selection && selection.medewerkerId === medewerker.Username ? selection.end : dag;
                            const targetMedewerker = medewerkers.find(m => m.Username === medewerker.Username);

                            setSelection({
                                start: startDate,
                                end: endDate,
                                medewerkerId: medewerker.Username,
                                medewerkerData: targetMedewerker
                            });
                            setIsZiekModalOpen(true);
                            setContextMenu(null);
                        }
                    },
                    {
                        label: 'Compensatieuren doorgeven',
                        icon: './icons/compensatieuren/neutraleuren.svg',
                        iconType: 'svg',
                        onClick: () => {
                            console.log('📝 Context menu: Compensatieuren doorgeven clicked');
                            // Use selected date range if available, otherwise use clicked day
                            const startDate = selection && selection.medewerkerId === medewerker.Username ? selection.start : dag;
                            const endDate = selection && selection.medewerkerId === medewerker.Username ? selection.end : dag;
                            const targetMedewerker = medewerkers.find(m => m.Username === medewerker.Username);

                            setSelection({
                                start: startDate,
                                end: endDate,
                                medewerkerId: medewerker.Username,
                                medewerkerData: targetMedewerker
                            });
                            console.log('📝 Opening compensatie modal...');
                            setIsCompensatieModalOpen(true);
                            setContextMenu(null);
                        }
                    },
                    {
                        label: 'Zittingsvrij maken',
                        icon: 'fa-gavel',
                        onClick: () => {
                            console.log('🔵 Context menu: Zittingsvrij maken clicked');
                            console.log('🔵 Current selection:', selection);
                            console.log('🔵 Current modal states before:', {
                                compensatie: isCompensatieModalOpen,
                                zittingsvrij: isZittingsvrijModalOpen,
                                verlof: isVerlofModalOpen,
                                ziek: isZiekModalOpen
                            });

                            // Use selected date range if available, otherwise use clicked day
                            const startDate = selection && selection.medewerkerId === medewerker.Username ? selection.start : dag;
                            const endDate = selection && selection.medewerkerId === medewerker.Username ? selection.end : dag;
                            const targetMedewerker = medewerkers.find(m => m.Username === medewerker.Username);

                            setSelection({
                                start: startDate,
                                end: endDate,
                                medewerkerId: medewerker.Username,
                                medewerkerData: targetMedewerker
                            });
                            console.log('🔵 Opening zittingsvrij modal ONLY...');
                            setIsZittingsvrijModalOpen(true);
                            setContextMenu(null);
                        }
                        // Removed requiredGroups - now everyone can see this option
                    }
                ]
            }
        ];

        // Check for compensatie uren items on this day, but only show submenu if this wasn't a direct compensatie click
        const compensatieItemsForDay = getCompensatieUrenVoorDag(medewerker.Username, dag);
        if (compensatieItemsForDay.length > 0 && !isDirectCompensatieClick) {
            console.log(`Found ${compensatieItemsForDay.length} compensatie items, checking permissions...`);

            // Check if user has permission to modify ANY of the compensatie items
            const currentUsername = currentUser?.LoginName?.split('|')[1] || currentUser?.LoginName;
            const hasPrivilegedAccess = await canManageOthersEvents();

            const modifiableItems = compensatieItemsForDay.filter(compItem => {
                const itemOwner = compItem.MedewerkerID;
                const isOwnItem = itemOwner === currentUsername;
                return isOwnItem || hasPrivilegedAccess;
            });

            console.log(`User can modify ${modifiableItems.length} out of ${compensatieItemsForDay.length} compensatie items`);

            // Only show submenu if user can modify at least one compensatie item
            if (modifiableItems.length > 0) {
                console.log(`Adding compensatie uren submenu for ${modifiableItems.length} modifiable items`);

                // Add a submenu for compensatie uren items (only the ones user can modify)
                const compensatieSubItems = modifiableItems.map((compItem, index) => {
                    const startDate = new Date(compItem.StartCompensatieUren);
                    const endDate = new Date(compItem.EindeCompensatieUren);
                    const description = compItem.Omschrijving || `Compensatie uren ${index + 1}`;

                    return {
                        label: `${description} (${startDate.toLocaleDateString()})`,
                        icon: 'fa-edit',
                        onClick: async () => {
                            console.log('Compensatie item selected from submenu:', compItem);

                            // Check permissions for this specific compensatie item
                            const currentUsername = currentUser?.LoginName?.split('|')[1] || currentUser?.LoginName;
                            const itemOwner = compItem.MedewerkerID;
                            const isOwnItem = itemOwner === currentUsername;
                            const hasPrivilegedAccess = await canManageOthersEvents();
                            const canModify = isOwnItem || hasPrivilegedAccess;

                            if (canModify) {
                                // Open edit modal for this compensatie item
                                const targetMedewerker = medewerkers.find(m => m.Username === compItem.MedewerkerID);
                                setSelection({
                                    start: startDate,
                                    end: endDate,
                                    medewerkerId: compItem.MedewerkerID,
                                    itemData: compItem,
                                    medewerkerData: targetMedewerker
                                });
                                setIsCompensatieModalOpen(true);
                            } else {
                                alert('Je hebt geen rechten om dit item te bewerken.');
                            }
                            setContextMenu(null);
                        }
                    };
                });

                // Add delete submenu for compensatie uren (only for modifiable items)
                const deleteSubItems = modifiableItems.map((compItem, index) => {
                    const description = compItem.Omschrijving || `Compensatie uren ${index + 1}`;

                    return {
                        label: `${description}`,
                        icon: 'fa-trash',
                        onClick: async () => {
                            console.log('Delete compensatie item selected:', compItem);

                            // Double-check permissions for this specific compensatie item
                            const currentUsername = currentUser?.LoginName?.split('|')[1] || currentUser?.LoginName;
                            const itemOwner = compItem.MedewerkerID;
                            const isOwnItem = itemOwner === currentUsername;
                            const hasPrivilegedAccess = await canManageOthersEvents();
                            const canModify = isOwnItem || hasPrivilegedAccess;

                            if (canModify) {
                                if (confirm(`Weet je zeker dat je "${description}" wilt verwijderen?`)) {
                                    try {
                                        await deleteSharePointListItem('CompensatieUren', compItem.ID);
                                        refreshData();
                                    } catch (err) {
                                        console.error('Error deleting compensatie item:', err);
                                        alert('Fout bij verwijderen: ' + err.message);
                                    }
                                }
                            } else {
                                alert('Je hebt geen rechten om dit item te verwijderen.');
                            }
                            setContextMenu(null);
                        }
                    };
                });

                // Add compensatie uren management submenu (only show count of modifiable items)
                menuItems.push({
                    label: `Compensatie Uren (${modifiableItems.length})`,
                    icon: './icons/compensatieuren/neutraleuren.svg',
                    iconType: 'svg',
                    subItems: [
                        {
                            label: 'Bewerken',
                            icon: 'fa-edit',
                            subItems: compensatieSubItems
                        },
                        {
                            label: 'Verwijderen',
                            icon: 'fa-trash',
                            subItems: deleteSubItems
                        }
                    ]
                });
            }
        }
            // Only add edit/delete/comment options if there's a primary item (verlof/zittingsvrij)
            if (item) {
                console.log('Adding edit/delete/comment options for item:', item);

                // Check if user can modify this item
                const currentUsername = currentUser?.LoginName?.split('|')[1] || currentUser?.LoginName;
                const itemOwner = item.MedewerkerID || item.Gebruikersnaam;

                // If currentUser is not available yet, skip permission check for now
                if (!currentUser || !currentUsername) {
                    console.log('Current user not available yet, skipping edit/delete options');
                } else {
                    const isOwnItem = itemOwner === currentUsername;
                    const hasPrivilegedAccess = await canManageOthersEvents();
                    const canModify = isOwnItem || hasPrivilegedAccess;

                    console.log('Permission check:', { currentUsername, itemOwner, isOwnItem, hasPrivilegedAccess, canModify });

                    if (canModify) {
                        menuItems.push(
                            {
                                label: 'Bewerken',
                                icon: 'fa-edit',
                                onClick: () => {
                                    console.log('Bewerken clicked for item:', item);
                                    const { type } = getItemTypeAndList(item);
                                    const targetMedewerker = medewerkers.find(m =>
                                        m.Username === (type === 'zittingsvrij' ? item.Gebruikersnaam : item.MedewerkerID)
                                    );

                                    if (type === 'verlof') {
                                        setSelection({
                                            start: new Date(item.StartDatum),
                                            end: new Date(item.EindDatum),
                                            medewerkerId: item.MedewerkerID,
                                            itemData: item,
                                            medewerkerData: targetMedewerker
                                        });
                                        setIsVerlofModalOpen(true);
                                    } else if (type === 'ziekte') {
                                        setSelection({
                                            start: new Date(item.StartDatum),
                                            end: new Date(item.EindDatum),
                                            medewerkerId: item.MedewerkerID,
                                            itemData: item,
                                            medewerkerData: targetMedewerker
                                        });
                                        setIsZiekModalOpen(true);
                                    } else if (type === 'compensatie') {
                                        setSelection({
                                            start: new Date(item.StartCompensatieUren),
                                            end: new Date(item.EindeCompensatieUren),
                                            medewerkerId: item.MedewerkerID,
                                            itemData: item,
                                            medewerkerData: targetMedewerker
                                        });
                                        setIsCompensatieModalOpen(true);
                                    } else if (type === 'zittingsvrij') {
                                        setSelection({
                                            start: new Date(item.StartDatum),
                                            end: new Date(item.EindDatum),
                                            medewerkerId: item.Gebruikersnaam,
                                            itemData: item,
                                            medewerkerData: targetMedewerker
                                        });
                                        setIsZittingsvrijModalOpen(true);
                                    } else {
                                        alert('Kan dit item niet bewerken.');
                                    }
                                    setContextMenu(null);
                                }
                            },
                            {
                                label: 'Verwijderen',
                                icon: 'fa-trash',
                                onClick: async () => {
                                    console.log('Verwijderen clicked for item:', item);
                                    const { list } = getItemTypeAndList(item);
                                    if (!list) {
                                        alert('Kan dit item niet verwijderen.');
                                        setContextMenu(null);
                                        return;
                                    }
                                    if (confirm('Weet je zeker dat je dit item wilt verwijderen?')) {
                                        try {
                                            await deleteSharePointListItem(list, item.ID);
                                            refreshData();
                                        } catch (err) {
                                            console.error('Error deleting item:', err);
                                            alert('Fout bij verwijderen: ' + err.message);
                                        }
                                    }
                                    setContextMenu(null);
                                }
                            },
                            {
                                label: 'Commentaar aanpassen',
                                icon: 'fa-comment-edit',
                                onClick: async () => {
                                    console.log('Commentaar aanpassen clicked for item:', item);
                                    const { list, type } = getItemTypeAndList(item);
                                    if (!list) {
                                        alert('Kan commentaar niet aanpassen voor dit item.');
                                        setContextMenu(null);
                                        return;
                                    }
                                    let currentComment = '';
                                    if (type === 'verlof') currentComment = item.Omschrijving || '';
                                    else if (type === 'ziekte') currentComment = item.Omschrijving || '';
                                    else if (type === 'compensatie') currentComment = item.Omschrijving || '';
                                    else if (type === 'zittingsvrij') currentComment = item.Opmerking || '';
                                    else currentComment = '';
                                    const newComment = prompt('Voer nieuw commentaar in:', currentComment);
                                    if (newComment !== null) {
                                        try {
                                            let updateObj = {};
                                            if (type === 'zittingsvrij') updateObj = { Opmerking: newComment };
                                            else updateObj = { Omschrijving: newComment };
                                            await updateSharePointListItem(list, item.ID, updateObj);
                                            refreshData();
                                        } catch (err) {
                                            console.error('Error updating comment:', err);
                                            alert('Fout bij opslaan van commentaar: ' + err.message);
                                        }
                                    }
                                    setContextMenu(null);
                                }
                            }
                        );
                    }
                }
            }

            menuItems.push({
                label: 'Annuleren',
                icon: 'fa-times',
                onClick: () => {
                    console.log('Annuleren clicked');
                    setContextMenu(null);
                }
            });

            console.log('Final context menu items:', menuItems);
            setContextMenu({
                x: e.clientX,
                y: e.clientY,
                items: menuItems,
                onClose: () => setContextMenu(null)
            });
        } // Close showContextMenu function

        // FAB handler that uses the same selection logic as ContextMenu
        // This ensures that when a user makes a selection (click 1/click 2),
        // that selection range is passed to the forms when using the FAB
        function handleZittingsvrijMaken() {
            setSelection(null); // No preselection
            setIsZittingsvrijModalOpen(true);
        }

        const refreshData = useCallback(async (forceReload = false) => {
            try {
                console.log('🔄 Starting refreshData...');
                setLoading(true);
                setError(null);

                // Wait for configuration to be available with timeout
                let configWaitAttempts = 0;
                const maxConfigWaitAttempts = 50; // 5 seconds max wait
                while (!window.appConfiguratie && configWaitAttempts < maxConfigWaitAttempts) {
                    console.log(`⏳ Waiting for appConfiguratie... attempt ${configWaitAttempts + 1}/${maxConfigWaitAttempts}`);
                    await new Promise(r => setTimeout(r, 100));
                    configWaitAttempts++;
                }

                if (!window.appConfiguratie) {
                    throw new Error('Configuration not loaded after timeout');
                }

                // Check if fetchSharePointList is available
                if (typeof fetchSharePointList !== 'function') {
                    throw new Error('SharePoint service not available');
                }

                // Fetch current user info
                console.log('👤 Fetching current user...');
                const userInfo = await getCurrentUser();
                setCurrentUser(userInfo);

                // Check if we need to reload data for the current period
                const needsReload = forceReload || shouldReloadData(weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand);
                
                if (needsReload) {
                    console.log('📊 Loading data for new period...');
                    // Update cache key for current period
                    updateCacheKey(weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand);
                } else {
                    console.log('✅ Using cached data for current period');
                }

                console.log('📊 Fetching SharePoint lists...');
                
                // Always load static data (these are small lists and don't change often)
                const [medewerkersData, teamsData, verlofredenenData, urenPerWeekData, dagenIndicatorsData] = await Promise.all([
                    fetchSharePointList('Medewerkers'),
                    fetchSharePointList('Teams'),
                    fetchSharePointList('Verlofredenen'),
                    fetchSharePointList('UrenPerWeek'),
                    fetchSharePointList('DagenIndicators')
                ]);

                // Load period-specific data with smart filtering
                let verlofData, zittingsvrijData, compensatieUrenData;
                
                if (needsReload) {
                    console.log('🔍 Loading period-specific data with filtering...');
                    [verlofData, zittingsvrijData, compensatieUrenData] = await Promise.all([
                        loadFilteredData(fetchSharePointList, 'Verlof', 'verlof', weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand),
                        loadFilteredData(fetchSharePointList, 'IncidenteelZittingVrij', 'zittingsvrij', weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand),
                        loadFilteredData(fetchSharePointList, 'CompensatieUren', 'compensatie', weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand)
                    ]);
                    
                    // Log loading statistics
                    logLoadingStatus();
                } else {
                    // Use cached data
                    verlofData = LoadingLogic.getCachedData('verlof') || [];
                    zittingsvrijData = LoadingLogic.getCachedData('zittingsvrij') || [];
                    compensatieUrenData = LoadingLogic.getCachedData('compensatie') || [];
                    
                    console.log(`📁 Using cached data: ${verlofData.length} verlof, ${zittingsvrijData.length} zittingsvrij, ${compensatieUrenData.length} compensatie items`);
                }

                console.log('✅ Data fetched successfully, processing...');
                // Fix team mapping - use ID as id, not Title
                const teamsMapped = (teamsData || []).map(item => ({ 
                    id: item.ID || item.Title, 
                    naam: item.Naam || item.Title, 
                    kleur: item.Kleur || '#cccccc' 
                }));
                setTeams(teamsMapped);
                
                // Create mapping from team name to team ID 
                const teamNameToIdMap = teamsMapped.reduce((acc, t) => { 
                    acc[t.naam] = t.id; 
                    return acc; 
                }, {});
                
                console.log('🏢 Teams mapped:', {
                    teams: teamsMapped,
                    nameToIdMap: teamNameToIdMap
                });
                const transformedShiftTypes = (verlofredenenData || []).reduce((acc, item) => {
                    if (item.Title) { acc[item.ID] = { id: item.ID, label: item.Title, kleur: item.Kleur || '#999999', afkorting: item.Afkorting || '??' }; }
                    return acc;
                }, {});
                setShiftTypes(transformedShiftTypes);
                const medewerkersProcessed = (medewerkersData || [])
                    .filter(item => item.Naam && item.Actief !== false)
                    .map(item => ({ ...item, id: item.ID, naam: item.Naam, team: teamNameToIdMap[item.Team] || '', Username: item.Username || null }));
                setMedewerkers(medewerkersProcessed);
                setVerlofItems((verlofData || []).map(v => {
                    // Look up the corresponding Verlofredenen entry based on RedenId or Reden
                    const verlofReden = (verlofredenenData || []).find(vr => 
                        vr.ID == v.RedenId || vr.Title === v.Reden || vr.Naam === v.Reden
                    );
                    
                    return {
                        ...v, 
                        StartDatum: new Date(v.StartDatum), 
                        EindDatum: new Date(v.EindDatum),
                        // Add shiftType info for DagCell to use
                        shiftType: verlofReden ? {
                            Titel: verlofReden.Title || verlofReden.Naam,
                            Kleur: verlofReden.Kleur || '#4a90e2',
                            AfkortingTitel: verlofReden.Afkorting || 'V'
                        } : null,
                        // Also add VerlofRedenId for backwards compatibility
                        VerlofRedenId: v.RedenId
                    };
                }));
                setZittingsvrijItems((zittingsvrijData || []).map(z => ({ ...z, StartDatum: new Date(z.ZittingsVrijeDagTijd), EindDatum: new Date(z.ZittingsVrijeDagTijdEind) })));
                setCompensatieUrenItems((compensatieUrenData || []).map(c => ({
                    ...c,
                    StartCompensatieUren: new Date(c.StartCompensatieUren),
                    EindeCompensatieUren: new Date(c.EindeCompensatieUren),
                    ruildagStart: c.ruildagStart ? new Date(c.ruildagStart) : null
                })));
                setUrenPerWeekItems((urenPerWeekData || []).map(u => {
                    // Normalize Ingangsdatum by properly parsing and resetting time components
                    let ingangsDate;
                   
                    try {
                        // Handle Dutch date format (DD-MM-YYYY)
                        if (typeof u.Ingangsdatum === 'string' && u.Ingangsdatum.match(/^\d{1,2}-\d{1,2}-\d{4}/)) {
                            const parts = u.Ingangsdatum.split(' ')[0].split('-');
                            const day = parseInt(parts[0], 10);
                            const month = parseInt(parts[1], 10) - 1; // Months are 0-based in JS
                            const year = parseInt(parts[2], 10);
                           
                            ingangsDate = new Date(year, month, day);
                        } else {
                            ingangsDate = new Date(u.Ingangsdatum);
                        }
                       
                        // Check if date is valid
                        if (isNaN(ingangsDate.getTime())) {
                            console.error('Invalid date after parsing:', u.Ingangsdatum);
                            ingangsDate = null;
                        } else {
                            // Reset time components for consistent comparison
                            ingangsDate.setHours(0, 0, 0, 0);
                        }
                    } catch (error) {
                        console.error('Error parsing date:', error, u.Ingangsdatum);
                        ingangsDate = null;
                    }
                   
                    // Parse CycleStartDate if present (for 2-week rotations)
                    let cycleStartDate = null;
                    if (u.CycleStartDate) {
                        try {
                            cycleStartDate = new Date(u.CycleStartDate);
                            if (isNaN(cycleStartDate.getTime())) {
                                cycleStartDate = null;
                            } else {
                                cycleStartDate.setHours(0, 0, 0, 0);
                            }
                        } catch (error) {
                            console.error('Error parsing CycleStartDate:', error, u.CycleStartDate);
                            cycleStartDate = null;
                        }
                    }
                   
                    // Handle WeekType field - preserve original value but normalize case
                    let weekType = null;
                    if (u.WeekType !== undefined && u.WeekType !== null && u.WeekType !== '') {
                        weekType = String(u.WeekType).trim().toUpperCase();
                        // Validate it's either A or B
                        if (weekType !== 'A' && weekType !== 'B') {
                            console.error(`Invalid WeekType '${u.WeekType}' for record ID ${u.Id}, expected 'A' or 'B'`);
                            weekType = null;
                        }
                    }
                   
                    // Handle IsRotatingSchedule field (defaults to false for backwards compatibility)  
                    const isRotatingSchedule = u.IsRotatingSchedule === true || u.IsRotatingSchedule === 'true';
                   
                    // DEBUG: Log WeekType processing for rotating schedules
                    if (isRotatingSchedule) {
                        console.log(`🔍 DEBUG: Processing rotating record ID ${u.Id} - Raw WeekType: '${u.WeekType}' (type: ${typeof u.WeekType}), Processed: '${weekType}'`);
                    }
                   
                    return {
                        ...u,
                        Ingangsdatum: ingangsDate,
                        CycleStartDate: cycleStartDate,
                        WeekType: weekType,
                        IsRotatingSchedule: isRotatingSchedule
                    };
                }));
               
                // DEBUG: Log processed UrenPerWeek data to check for Week B records
                console.log('🔍 DEBUG: Processed UrenPerWeek data:',
                    (urenPerWeekData || []).map(u => ({
                        Id: u.Id,
                        MedewerkerID: u.MedewerkerID,
                        WeekType: u.WeekType,
                        IsRotatingSchedule: u.IsRotatingSchedule,
                        Ingangsdatum: u.Ingangsdatum,
                        CycleStartDate: u.CycleStartDate
                    })).filter(u => u.IsRotatingSchedule) // Only show rotating schedules
                );
               
                const indicatorsMapped = (dagenIndicatorsData || []).reduce((acc, item) => {
                    if (item.Title) {
                        acc[item.Title] = { ...item, kleur: item.Kleur || '#cccccc', Beschrijving: item.Beschrijving || '' };
                    }
                    return acc;
                }, {});
                
                console.log('🎨 DagenIndicators loaded:', {
                    raw: dagenIndicatorsData,
                    mapped: indicatorsMapped
                });
                
                setDagenIndicators(indicatorsMapped);

                console.log('✅ Data processing complete!');

                // Debug: Log medewerkers data for troubleshooting
                console.log('DEBUG - Loaded medewerkers:', medewerkersProcessed.slice(0, 5).map(m => ({
                    Id: m.Id,
                    Title: m.Title,
                    Username: m.Username,
                    Team: m.Team
                })));

            } catch (err) {
                console.error('❌ Error in refreshData:', err);
                setError(`Fout bij laden: ${err.message}`);
            } finally {
                console.log('🏁 refreshData complete, setting loading to false');
                setLoading(false);
            }
        }, [weergaveType, huidigJaar, huidigMaand, huidigWeek]);

        const handleVerlofSubmit = useCallback(async (formData) => {
            try {
                console.log("Submitting verlof form data:", formData);
                console.log("Detailed form data breakdown:", {
                    Title: formData.Title,
                    Medewerker: formData.Medewerker,
                    MedewerkerID: formData.MedewerkerID,
                    StartDatum: formData.StartDatum,
                    EindDatum: formData.EindDatum,
                    RedenId: formData.RedenId,
                    Omschrijving: formData.Omschrijving,
                    Status: formData.Status
                });

                // Validate required fields
                if (!formData.MedewerkerID) {
                    throw new Error('MedewerkerID is required but missing');
                }
                if (!formData.StartDatum || !formData.EindDatum) {
                    throw new Error('Start and end dates are required');
                }

                const result = await createSharePointListItem('Verlof', formData);
                console.log('Verlofaanvraag ingediend:', result);
                setIsVerlofModalOpen(false);
                refreshData();
            } catch (error) {
                console.error('Fout bij het indienen van verlofaanvraag:', error);
                console.error('Error details:', {
                    message: error.message,
                    stack: error.stack,
                    formData: formData
                });
                alert('Fout bij het indienen van verlofaanvraag: ' + error.message);
            }
        }, [refreshData]);

        const handleZiekteSubmit = useCallback(async (formData) => {
            try {
                console.log("Submitting ziekte form data:", formData);
                const result = await createSharePointListItem('Verlof', formData);
                console.log('Ziekmelding ingediend:', result);
                setIsZiekModalOpen(false);
                refreshData();
            } catch (error) {
                console.error('Fout bij het indienen van ziekmelding:', error);
                alert('Fout bij het indienen van ziekmelding: ' + error.message);
            }
        }, [refreshData]);

        const handleCompensatieSubmit = useCallback(async (formData) => {
            try {
                console.log("🟡 handleCompensatieSubmit called with data:", formData);
                console.log("🟡 Current modal states:", {
                    isCompensatieModalOpen,
                    isZittingsvrijModalOpen,
                    isVerlofModalOpen,
                    isZiekModalOpen
                });
                const result = await createSharePointListItem('CompensatieUren', formData);
                console.log('✅ Compensatie-uren ingediend successfully:', result);
                setIsCompensatieModalOpen(false);
                refreshData();
            } catch (error) {
                console.error('❌ Fout bij het indienen van compensatie-uren:', error);
                alert('Fout bij het indienen van compensatie-uren: ' + error.message);
            }
        }, [refreshData]);

        const handleZittingsvrijSubmit = useCallback(async (formData) => {
            try {
                console.log("🔵 handleZittingsvrijSubmit called with data:", formData);
                console.log("🔵 Current modal states:", {
                    isCompensatieModalOpen,
                    isZittingsvrijModalOpen,
                    isVerlofModalOpen,
                    isZiekModalOpen
                });
                // Use the list name from formData if provided, otherwise default to 'IncidenteelZittingVrij'
                const listName = formData._listName || 'IncidenteelZittingVrij';
                delete formData._listName; // Remove this property before sending to SharePoint

                const result = await createSharePointListItem(listName, formData);
                console.log('✅ Zittingsvrij ingediend successfully:', result);
                setIsZittingsvrijModalOpen(false);
                refreshData();
            } catch (error) {
                console.error('❌ Fout bij het indienen van zittingsvrij:', error);
                alert('Fout bij het indienen van zittingsvrij: ' + error.message);
            }
        }, []);

        useEffect(() => {
            // Only start loading data after user is validated
            if (isUserValidated) {
                refreshData();
            }
        }, [refreshData, isUserValidated]);

        // Effect to reload data when period changes (maand/week navigation)
        useEffect(() => {
            if (isUserValidated) {
                console.log(`📅 Period changed to ${weergaveType}: ${weergaveType === 'week' ? `week ${huidigWeek}` : maandNamenVolledig[huidigMaand]} ${huidigJaar}`);
                
                // Check if we need to reload data for the new period
                if (shouldReloadData(weergaveType, huidigJaar, weergaveType === 'week' ? huidigWeek : huidigMaand)) {
                    console.log('🔄 Triggering data reload for new period...');
                    refreshData(false); // Don't force reload, let loadingLogic decide
                } else {
                    console.log('✅ Data already cached for this period');
                }
            }
        }, [weergaveType, huidigJaar, huidigMaand, huidigWeek, isUserValidated, refreshData]);

        // Handle escape key to clear selection
        useEffect(() => {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    setSelection(null);
                    setFirstClickData(null);
                    setContextMenu(null);
                    setShowTooltip(false);
                }
            };

            document.addEventListener('keydown', handleKeyDown);

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                // Clean up tooltip timeout
                if (tooltipTimeout) {
                    clearTimeout(tooltipTimeout);
                }
            };
        }, [tooltipTimeout]);

        useEffect(() => {
            const jaren = [huidigJaar - 1, huidigJaar, huidigJaar + 1];
            const alleFeestdagen = jaren.reduce((acc, jaar) => ({ ...acc, ...getFeestdagen(jaar) }), {});
            setFeestdagen(alleFeestdagen);
        }, [huidigJaar]);

        const ziekteRedenId = useMemo(() => {
            if (!shiftTypes || Object.keys(shiftTypes).length === 0) return null;
            const ziekteType = Object.values(shiftTypes).find(st => st.label && st.label.toLowerCase() === 'ziekte');
            return ziekteType ? ziekteType.id : null;
        }, [shiftTypes]);

        const urenPerWeekByMedewerker = useMemo(() => {
            const map = {};
           
            // Filter out items with invalid dates first
            const validItems = urenPerWeekItems.filter(item =>
                item.Ingangsdatum instanceof Date && !isNaN(item.Ingangsdatum.getTime())
            );
           
            // Group items by medewerker
            for (const item of validItems) {
                if (!map[item.MedewerkerID]) {
                    map[item.MedewerkerID] = [];
                }
                map[item.MedewerkerID].push(item);
            }
           
            // Sort each employee's records by Ingangsdatum (newest first)
            // This is just for organizing the initial data - the actual selection
            // logic is in getUrenPerWeekForDate
            for (const medewerkerId in map) {
                map[medewerkerId].sort((a, b) => b.Ingangsdatum - a.Ingangsdatum);
               
                // DEBUG: Log grouped records for employees with rotating schedules
                if (map[medewerkerId].some(record => record.IsRotatingSchedule)) {
                    console.log(`🔍 DEBUG: Grouped rotating schedule records for ${medewerkerId}:`,
                        map[medewerkerId].map(r => ({
                            Id: r.Id,
                            WeekType: r.WeekType,
                            IsRotatingSchedule: r.IsRotatingSchedule,
                            CycleStartDate: r.CycleStartDate ? new Date(r.CycleStartDate).toLocaleDateString() : 'None'
                        }))
                    );
                }
            }
           
            return map;
        }, [urenPerWeekItems]);

        const getUrenPerWeekForDate = useCallback((medewerkerId, date) => {
            const schedules = urenPerWeekByMedewerker[medewerkerId];
            if (!schedules) return null;
           
            // Normalize the input date for proper comparison
            let normalizedDate;
            try {
                normalizedDate = new Date(date);
                normalizedDate.setHours(0, 0, 0, 0);
            } catch (error) {
                console.error('Error normalizing date in getUrenPerWeekForDate:', error, date);
                return null;
            }
           
            // Sort the applicable records by Ingangsdatum (newest first)
            // We need to find the most recent record where Ingangsdatum <= target date
            const applicableRecords = schedules
                .filter(s => {
                    // Ensure valid date object
                    if (!(s.Ingangsdatum instanceof Date) || isNaN(s.Ingangsdatum.getTime())) {
                        console.warn(`Invalid Ingangsdatum for record ID ${s.Id} for medewerker ${medewerkerId}:`, s.Ingangsdatum);
                        return false;
                    }
                    // Only include records where Ingangsdatum is on or before our target date
                    const isApplicable = s.Ingangsdatum <= normalizedDate;
                    if (medewerkerId.toLowerCase().includes('rauf') && Math.random() < 0.01) {  // Only log occasionally for Rauf
                        console.log(`UrenPerWeek comparison for ${medewerkerId} on ${normalizedDate.toLocaleDateString()}:`,
                            `Record ID ${s.Id} with date ${s.Ingangsdatum.toLocaleDateString()} is ${isApplicable ? 'applicable' : 'not applicable'}`);
                    }
                    return isApplicable;
                })
                .sort((a, b) => b.Ingangsdatum - a.Ingangsdatum);
           
            // If no applicable records found, return null
            if (applicableRecords.length === 0) {
                if (medewerkerId.toLowerCase().includes('rauf') && Math.random() < 0.01) {
                    console.log(`⚠️ No applicable UrenPerWeek record found for ${medewerkerId} on ${normalizedDate.toLocaleDateString()}`);
                }
                return null;
            }
           
            // Check if this employee has rotating schedules
            const hasRotatingSchedule = applicableRecords.some(record => record.IsRotatingSchedule === true);
           
            if (hasRotatingSchedule) {
                // For rotating schedules, we need to find the correct schedule period and week type
                // Group records by schedule period (same Ingangsdatum + IsRotatingSchedule)
                const schedulePeriodsMap = new Map();
               
                for (const record of applicableRecords) {
                    const periodKey = `${record.Ingangsdatum.getTime()}_${record.IsRotatingSchedule}`;
                   
                    if (!schedulePeriodsMap.has(periodKey)) {
                        schedulePeriodsMap.set(periodKey, {
                            ingangsdatum: record.Ingangsdatum,
                            isRotating: record.IsRotatingSchedule,
                            cycleStartDate: record.CycleStartDate,
                            records: []
                        });
                    }
                   
                    schedulePeriodsMap.get(periodKey).records.push(record);
                }
               
                // Convert to array and sort by date (newest first)
                const schedulePeriods = Array.from(schedulePeriodsMap.values())
                    .sort((a, b) => b.ingangsdatum - a.ingangsdatum);
               
                // Find the most recent period that applies to our target date
                let selectedPeriod = null;
               
                for (const period of schedulePeriods) {
                    if (period.ingangsdatum <= normalizedDate) {
                        selectedPeriod = period;
                        break;
                    }
                }
               
                if (!selectedPeriod) {
                    console.warn(`⚠️ No applicable schedule period found for ${medewerkerId} on ${normalizedDate.toLocaleDateString()}`);
                    return null;
                }
               
                // DEBUG: Enhanced logging for Week B lookup issues
                if (medewerkerId.toLowerCase().includes('rauf') || Math.random() < 0.1) { // Log for Rauf or 10% of other calls
                    console.log(`🔍 DEBUG: Selected period for ${medewerkerId} on ${normalizedDate.toLocaleDateString()}:`);
                    console.log(`🔍 DEBUG: Period Ingangsdatum: ${selectedPeriod.ingangsdatum.toLocaleDateString()}`);
                    console.log(`🔍 DEBUG: Period is rotating: ${selectedPeriod.isRotating}`);
                    console.log(`🔍 DEBUG: Available records in period:`, 
                        selectedPeriod.records.map(r => ({
                            Id: r.Id,
                            WeekType: r.WeekType,
                            IsRotatingSchedule: r.IsRotatingSchedule,
                            CycleStartDate: r.CycleStartDate ? new Date(r.CycleStartDate).toLocaleDateString() : 'None'
                        }))
                    );
                }
               
                if (selectedPeriod.isRotating) {
                    // This is a rotating schedule period - find the correct week type
                    const cycleStartDate = selectedPeriod.cycleStartDate || selectedPeriod.ingangsdatum;
                    const requiredWeekType = calculateWeekType(normalizedDate, cycleStartDate);
                   
                    if (medewerkerId.toLowerCase().includes('rauf') || Math.random() < 0.1) {
                        console.log(`🔍 DEBUG: Looking for Week ${requiredWeekType} in rotating period (calculated from cycle start: ${cycleStartDate.toLocaleDateString()})`);
                    }
                   
                    // Find the record for this week type in this period
                    const weekTypeRecord = selectedPeriod.records.find(record => {
                        // Ensure case-insensitive comparison
                        const recordWeekType = record.WeekType ? String(record.WeekType).trim().toUpperCase() : null;
                        return recordWeekType === requiredWeekType.toUpperCase();
                    });
                   
                    if (weekTypeRecord) {
                        if (medewerkerId.toLowerCase().includes('rauf') || Math.random() < 0.1) {
                            console.log(`✅ Found Week ${requiredWeekType} record for ${medewerkerId}: ID ${weekTypeRecord.Id}`);
                        }
                        return weekTypeRecord;
                    } else {
                        // Enhanced error logging
                        console.error(`❌ Could not find Week ${requiredWeekType} record for ${medewerkerId} on ${normalizedDate.toLocaleDateString()}`);
                        console.error(`❌ Available WeekTypes in period:`, selectedPeriod.records.map(r => r.WeekType));
                        console.error(`❌ CycleStartDate used for calculation: ${cycleStartDate.toLocaleDateString()}`);
                       
                        // Fall back to any available record from this period
                        console.warn(`⚠️ Could not find Week ${requiredWeekType} record for ${medewerkerId}, falling back to available record`);
                        return selectedPeriod.records[0];
                    }
                } else {
                    // This is a non-rotating schedule period that happens to be in a list with rotating schedules
                    console.log(`✅ Using non-rotating record from mixed schedule for ${medewerkerId}: ID ${selectedPeriod.records[0].Id}`);
                    return selectedPeriod.records[0];
                }
            } else {
                // For non-rotating schedules, use the most recent applicable record
                const selectedRecord = applicableRecords[0];
               
                console.log(`✅ Selected standard UrenPerWeek record for ${medewerkerId} on ${normalizedDate.toLocaleDateString()}: Record ID ${selectedRecord.Id} from ${selectedRecord.Ingangsdatum.toLocaleDateString()}`);
                return selectedRecord;
            }
        }, [urenPerWeekByMedewerker]);

        const compensatieMomentenByDate = useMemo(() => {
            const moments = {};
            const addMoment = (date, type, item) => {
                if (!date || isNaN(date)) return; // Skip invalid dates
                // Extract date part as UTC to avoid timezone conversion issues
                const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
                const key = utcDate.toISOString().split('T')[0];
                if (!moments[key]) {
                    moments[key] = [];
                }
                moments[key].push({ type, item });
            };

            compensatieUrenItems.forEach(item => {
                if (item.Ruildag === true) {
                    addMoment(item.StartCompensatieUren, 'ruildag-gewerkt', item);
                    if (item.ruildagStart) {
                        addMoment(item.ruildagStart, 'ruildag-vrij', item);
                    }
                } else {
                    addMoment(item.StartCompensatieUren, 'compensatie', item);
                }
            });
            return moments;
        }, [compensatieUrenItems]);

        const getCompensatieMomentenVoorDag = useCallback((datum) => {
            // Use the same UTC date key format as addMoment function to ensure consistency
            const utcDate = new Date(Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()));
            const key = utcDate.toISOString().split('T')[0];
            return compensatieMomentenByDate[key] || [];
        }, [compensatieMomentenByDate]);

        const getVerlofVoorDag = useCallback((medewerkerUsername, datum) => {
            if (!medewerkerUsername) return null;
            const datumCheck = new Date(datum).setHours(12, 0, 0, 0);
            const verlofItem = verlofItems.find(v => v.MedewerkerID === medewerkerUsername && v.Status !== 'Afgewezen' && datumCheck >= new Date(v.StartDatum).setHours(12, 0, 0, 0) && datumCheck <= new Date(v.EindDatum).setHours(12, 0, 0, 0));
            
            if (!verlofItem) return null;
            
            // Add start/end block properties for proper display
            const startDate = new Date(verlofItem.StartDatum).setHours(12, 0, 0, 0);
            const endDate = new Date(verlofItem.EindDatum).setHours(12, 0, 0, 0);
            
            return {
                ...verlofItem,
                isStartBlok: datumCheck === startDate,
                isEindBlok: datumCheck === endDate
            };
        }, [verlofItems]);

        const getZittingsvrijVoorDag = useCallback((medewerkerUsername, datum) => {
            if (!medewerkerUsername) return null;
            const datumCheck = new Date(datum).setHours(12, 0, 0, 0);
            return zittingsvrijItems.find(z => z.Gebruikersnaam === medewerkerUsername && datumCheck >= new Date(z.StartDatum).setHours(12, 0, 0, 0) && datumCheck <= new Date(z.EindDatum).setHours(12, 0, 0, 0));
        }, [zittingsvrijItems]);

        const getCompensatieUrenVoorDag = useCallback((medewerkerUsername, dag) => {
            if (!medewerkerUsername || !compensatieUrenItems || compensatieUrenItems.length === 0) {
                return [];
            }

            // Normalize the calendar day to a UTC start and end for accurate comparison
            const dagStartUTC = new Date(Date.UTC(dag.getFullYear(), dag.getMonth(), dag.getDate(), 0, 0, 0));
            const dagEindUTC = new Date(Date.UTC(dag.getFullYear(), dag.getMonth(), dag.getDate(), 23, 59, 59));

            return compensatieUrenItems.filter(item => {
                if (item.MedewerkerID !== medewerkerUsername) {
                    return false;
                }

                // Parse SharePoint dates directly as Date objects (they are already in UTC)
                const startCompensatie = new Date(item.StartCompensatieUren);
                const eindeCompensatie = new Date(item.EindeCompensatieUren);

                // Check if the compensation period overlaps with the current day (in UTC)
                return startCompensatie <= dagEindUTC && eindeCompensatie >= dagStartUTC;
            });
        }, [compensatieUrenItems]);

        const periodeData = useMemo(() => {
            return weergaveType === 'week' ? getDagenInWeek(huidigWeek, huidigJaar) : getDagenInMaand(huidigMaand, huidigJaar);
        }, [weergaveType, huidigWeek, huidigMaand, huidigJaar]);

        const volgende = () => { if (weergaveType === 'week') { const maxWeken = getWekenInJaar(huidigJaar); if (huidigWeek >= maxWeken) { setHuidigWeek(1); setHuidigJaar(huidigJaar + 1); } else { setHuidigWeek(huidigWeek + 1); } } else { if (huidigMaand === 11) { setHuidigMaand(0); setHuidigJaar(huidigJaar + 1); } else { setHuidigMaand(huidigMaand + 1); } } };
        const vorige = () => { if (weergaveType === 'week') { if (huidigWeek === 1) { const vorigJaar = huidigJaar - 1; setHuidigWeek(getWekenInJaar(vorigJaar)); setHuidigJaar(vorigJaar); } else { setHuidigWeek(huidigWeek - 1); } } else { if (huidigMaand === 0) { setHuidigMaand(11); setHuidigJaar(huidigJaar - 1); } else { setHuidigMaand(huidigMaand - 1); } } };

        // Toggle sort direction for medewerkers
        const toggleSortDirection = () => {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        };

        const gegroepeerdeData = useMemo(() => {
            
            // Filter medewerkers based on search term and selected team
            let gefilterdeMedewerkers = medewerkers;

            if (zoekTerm) {
                gefilterdeMedewerkers = gefilterdeMedewerkers.filter(m =>
                    (m.Naam || m.naam || '').toLowerCase().includes(zoekTerm.toLowerCase())
                );
            }

            if (geselecteerdTeam) {
                gefilterdeMedewerkers = gefilterdeMedewerkers.filter(m => m.team === geselecteerdTeam);
            }

            // Sort medewerkers by Naam column from Medewerkers SharePoint list based on sortDirection
            const gesorteerdeFilters = gefilterdeMedewerkers.sort((a, b) => {
                // Use the Naam field from the SharePoint Medewerkers list specifically
                const naamA = (a.Naam || a.naam || 'Onbekend').toLowerCase().trim();
                const naamB = (b.Naam || b.naam || 'Onbekend').toLowerCase().trim();
                
                if (sortDirection === 'asc') {
                    return naamA.localeCompare(naamB, 'nl', { numeric: true, sensitivity: 'base' });
                } else {
                    return naamB.localeCompare(naamA, 'nl', { numeric: true, sensitivity: 'base' });
                }
            });
            
            const data = teams.reduce((acc, team) => { if (team && team.id) { acc[team.id] = gesorteerdeFilters.filter(m => m.team === team.id); } return acc; }, {});
            const medewerkersZonderTeam = gesorteerdeFilters.filter(m => !m.team);
            if (medewerkersZonderTeam.length > 0) { data['geen_team'] = medewerkersZonderTeam; }
            return data;
        }, [medewerkers, teams, zoekTerm, geselecteerdTeam, sortDirection]);

        // =====================
        // Helper: Check if a date is in the current selection for a medewerker
        // =====================
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

        // Main calendar cell click handler
        function handleCalendarCellClick(medewerker, dag) {
            return (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Check if this is a right-click for context menu
                if (e.button === 2 || e.type === 'contextmenu') {
                    const verlofItem = getVerlofVoorDag(medewerker.Username, dag);
                    const zittingsvrijItem = getZittingsvrijVoorDag(medewerker.Username, dag);
                    const compensatieItems = getCompensatieUrenVoorDag(medewerker.Username, dag);
                    
                    // Determine primary item (verlof/zittingsvrij takes precedence over compensatie)
                    const primaryItem = verlofItem || zittingsvrijItem;
                    
                    showContextMenu(e, medewerker, dag, primaryItem);
                    return;
                }
                
                // Regular left-click behavior
                handleCellClick(medewerker, dag);
            };
        }

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

        // Main calendar rendering with complete UI structure
        return h(Fragment, null,
            h('div', { className: 'sticky-header-container' },
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
                        )),
                        Object.values(dagenIndicators || {}).map(indicator => h('div', { key: indicator.Title, className: 'legenda-item' },
                            h('div', { className: 'legenda-kleur', style: { backgroundColor: indicator.kleur } }),
                            h('span', null, `${indicator.Title} - ${indicator.Beschrijving}`)
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
                        h('thead', { key: 'rooster-header' },
                            h('tr', { key: 'header-row' },
                                h('th', { key: 'medewerker-header', className: 'medewerker-kolom' }, 'Medewerker'),
                                ...periodeData.map((dag, index) => {
                                    const dateObj = dag instanceof Date ? dag : new Date(dag);
                                    if (isNaN(dateObj.getTime())) {
                                        console.error("Invalid date object for header at index:", index, dag);
                                        return null;
                                    }
                                    const formattedDate = formatteerDatum(dateObj);
                                    const dayName = getDagNaam(dateObj).substring(0, 2);
                                    const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                                    const feestdagNaam = feestdagen[formattedDate];

                                    return h('th', {
                                        key: `header-cell-${index}`, // Explicitly create a unique string key
                                        className: `dag-header ${isWeekend ? 'weekend' : ''} ${feestdagNaam ? 'feestdag' : ''}`.trim(),
                                        'data-feestdag': feestdagNaam || undefined
                                    },
                                        h('div', { className: 'dag-info' },
                                            h('span', { className: 'dag-naam' }, dayName),
                                            h('span', { className: 'dag-nummer' }, dateObj.getDate())
                                        )
                                    );
                                }).filter(Boolean) // Filter out any nulls from invalid dates
                            )
                        ),
                        h('tbody', { key: 'rooster-body' },
                            Object.keys(gegroepeerdeData).map(teamId => {
                                const team = teams.find(t => t.id === teamId);
                                const teamMedewerkers = gegroepeerdeData[teamId];
                                
                                if (!teamMedewerkers || teamMedewerkers.length === 0) {
                                    return null;
                                }

                                const teamHeader = h('tr', { key: `team-header-${teamId}`, className: 'team-header-row' },
                                    h('td', { 
                                        colSpan: periodeData.length + 1, 
                                        className: 'team-header',
                                        style: { backgroundColor: team?.kleur || '#cccccc' }
                                    }, team?.naam || (teamId === 'geen_team' ? 'Geen Team' : teamId))
                                );

                                const employeeRows = teamMedewerkers.map(medewerker => {
                                    const medewerkerUsername = medewerker.Username;
                                    const urenPerWeekVandaag = getUrenPerWeekForDate(medewerkerUsername, new Date());

                                    return h('tr', { key: medewerker.id, 'data-medewerker-id': medewerker.id },
                                        h('td', { className: 'medewerker-kolom' },
                                            h(UserInfo, { medewerker: medewerker, urenPerWeek: urenPerWeekVandaag })
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
