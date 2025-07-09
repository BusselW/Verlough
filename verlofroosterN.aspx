<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verlofrooster</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- CSS bestanden -->
    <link href="css/verlofrooster_stijl.css" rel="stylesheet">
    <link href="css/verlofrooster_styling.css" rel="stylesheet">
    <link rel="icon" href="data:," />

    <!-- React en configuratie bestanden -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="js/config/configLijst.js"></script>

</head>

<body>
    <div id="root"></div>

    <!-- Hoofd script van de applicatie, nu als module om 'import' te gebruiken -->
    <script type="module">
        console.log('🚀 Main script starting execution...');
        
        // Importeer de benodigde componenten en functies
        import MedewerkerRow from './js/ui/userinfo.js';
        import { fetchSharePointList, getUserInfo, getCurrentUser, createSharePointListItem, updateSharePointListItem, deleteSharePointListItem, trimLoginNaamPrefix } from './js/services/sharepointService.js';
        import { getCurrentUserGroups, isUserInAnyGroup } from './js/services/permissionService.js';
        import * as linkInfo from './js/services/linkInfo.js';
        import LoadingLogic, { loadFilteredData, shouldReloadData, updateCacheKey, clearAllCache, logLoadingStatus } from './js/services/loadingLogic.js';
        import ContextMenu, { canManageOthersEvents, canUserModifyItem } from './js/ui/ContextMenu.js';
        import FAB from './js/ui/FloatingActionButton.js';
        import Modal from './js/ui/Modal.js';
        import DagCell, { renderCompensatieMomenten } from './js/ui/dagCell.js';
        import VerlofAanvraagForm from './js/ui/forms/VerlofAanvraagForm.js';
        import CompensatieUrenForm from './js/ui/forms/CompensatieUrenForm.js';
        import ZiekteMeldingForm from './js/ui/forms/ZiekteMeldingForm.js';
        import ZittingsvrijForm from './js/ui/forms/ZittingsvrijForm.js';
        import { roosterTutorial } from './js/tutorial/roosterTutorial.js';
        import { roosterHandleiding, openHandleiding } from './js/tutorial/roosterHandleiding.js';
        import { renderHorenStatus, getHorenStatus, filterMedewerkersByHorenStatus } from './js/ui/horen.js';
        import TooltipManager from './js/ui/tooltipbar.js';
        import ProfielKaarten from './js/ui/profielkaarten.js';
        import RoosterApp from './js/core/roosterApp.js';
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
        } from './js/utils/dateTimeUtils.js';
        import { getInitialen, getProfilePhotoUrl } from './js/utils/userUtils.js';
        import { calculateWeekType } from './js/services/scheduleLogic.js';

        const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

        // Initialize tooltip manager as soon as the script runs
        TooltipManager.init();

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
                                m.Username === (currentUser.LoginName?.split('|')[1] || currentUser.LoginName)
                            );

                            setUserInfo({
                                naam: medewerker?.Naam || currentUser.Title || 'Onbekend',
                                pictureUrl: getProfilePhotoUrl(currentUser),
                                loading: false,
                                teamLeader: medewerker?.TeamLeader || null,
                                teamLeaderLoading: false
                            });
                        } else {
                            setUserInfo({
                                naam: 'Onbekend',
                                pictureUrl: '',
                                loading: false,
                                teamLeader: null,
                                teamLeaderLoading: false
                            });
                        }

                        console.log('User data loaded:', { permissions: { isAdmin, isFunctional, isTaakbeheer }, userInfo });

                    } catch (error) {
                        console.error('Error loading user data:', error);
                        setUserPermissions(prev => ({ ...prev, loading: false }));
                        setUserInfo({
                            naam: 'Fout bij laden',
                            pictureUrl: '',
                            loading: false,
                            teamLeader: null,
                            teamLeaderLoading: false
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
                        onClick: () => navigateTo('adminCentrum/adminCentrumN.aspx'),
                        title: 'Administratie Centrum'
                    },
                        'Admin'
                    ),

                    // Beheer button - Visible to Functional (beheer)
                    userPermissions.isFunctional && h('button', {
                        onClick: () => navigateTo('beheerCentrum/beheerCentrumN.aspx'),
                        title: 'Beheer Centrum'
                    },
                        'Beheer'
                    ),

                    // Behandelen button - Visible to Taakbeheer
                    userPermissions.isTaakbeheer && h('button', {
                        onClick: () => navigateTo('behandelCentrum/behandelCentrumN.aspx'),
                        title: 'Behandel Centrum'
                    },
                        'Behandelen'
                    ),

                    // Help dropdown - Replaces tour button
                    h('div', { className: 'help-dropdown' },
                        h('button', {
                            onClick: () => setHelpDropdownOpen(!helpDropdownOpen),
                            title: 'Help en ondersteuning'
                        },
                            h('i', { className: 'fas fa-question-circle' })
                        ),
                        helpDropdownOpen && h('div', { className: 'dropdown-menu' },
                            h('a', {
                                href: '#',
                                onClick: (e) => {
                                    e.preventDefault();
                                    if (typeof roosterTutorial !== 'undefined') {
                                        roosterTutorial.start();
                                    }
                                    setHelpDropdownOpen(false);
                                }
                            }, 'Tutorial starten'),
                            h('a', {
                                href: '#',
                                onClick: (e) => {
                                    e.preventDefault();
                                    if (typeof openHandleiding !== 'undefined') {
                                        openHandleiding('algemeen');
                                    }
                                    setHelpDropdownOpen(false);
                                }
                            }, 'Handleiding openen')
                        )
                    ),

                    // User dropdown
                    h('div', { className: 'user-dropdown' },
                        h('button', {
                            onClick: () => setSettingsDropdownOpen(!settingsDropdownOpen)
                        },
                            h('img', {
                                src: userInfo.pictureUrl || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
                                alt: 'Profiel',
                                className: 'profile-image'
                            }),
                            h('span', { className: 'user-name' }, userInfo.naam || 'Gebruiker'),
                            h('i', { className: 'fas fa-chevron-down' })
                        ),
                        settingsDropdownOpen && h('div', { className: 'dropdown-menu' },
                            h('a', {
                                href: 'pages/instellingenCentrum/instellingenCentrumN.aspx'
                            }, 'Instellingen'),
                            h('div', { className: 'dropdown-divider' }),
                            h('a', {
                                href: '#',
                                onClick: (e) => {
                                    e.preventDefault();
                                    // Add logout functionality here if needed
                                    alert('Uitloggen functionaliteit nog niet geïmplementeerd');
                                }
                            }, 'Uitloggen')
                        )
                    )
                )
            );
        };

        // =====================
        // Error Boundary
        // =====================
        class ErrorBoundary extends React.Component {
            constructor(props) {
                super(props);
                this.state = { hasError: false, error: null };
            }

            static getDerivedStateFromError(error) {
                return { hasError: true, error };
            }

            componentDidCatch(error, errorInfo) {
                console.error('Error Boundary gevangen fout:', error, errorInfo);
            }

            render() {
                if (this.state.hasError) {
                    return h('div', { className: 'error-message' },
                        h('h2', null, 'Er is een onverwachte fout opgetreden'),
                        h('p', null, 'Probeer de pagina te vernieuwen.'),
                        h('details', null,
                            h('summary', null, 'Technische details'),
                            h('pre', null, this.state.error?.message || 'Onbekende fout')
                        )
                    );
                }
                return this.props.children;
            }
        }

        // =====================
        // User Registration Check Component
        // =====================
        const UserRegistrationCheck = ({ onUserValidated, children }) => {
            console.log('🚀 UserRegistrationCheck component initialized');
            const [isChecking, setIsChecking] = useState(true);
            const [isRegistered, setIsRegistered] = useState(false);
            const [currentUser, setCurrentUser] = useState(null);

            useEffect(() => {
                checkUserRegistration();
            }, []);

            const checkUserRegistration = async () => {
                try {
                    console.log('🔍 Checking user registration...');
                    
                    // Get current user
                    const user = await getCurrentUser();
                    setCurrentUser(user);
                    
                    if (!user) {
                        throw new Error('No user found');
                    }

                    console.log('👤 Current user:', user);

                    // Check if user exists in Medewerkers list
                    const medewerkers = await fetchSharePointList('Medewerkers');
                    const userLoginName = user.LoginName?.split('|')[1] || user.LoginName;
                    
                    console.log('🔍 Looking for user with LoginName:', userLoginName);
                    
                    const userRecord = medewerkers.find(m => 
                        m.Username === userLoginName || 
                        m.Email === user.Email
                    );

                    if (userRecord) {
                        console.log('✅ User found in Medewerkers list:', userRecord);
                        setIsRegistered(true);
                        onUserValidated(true);
                    } else {
                        console.log('❌ User not found in Medewerkers list');
                        setIsRegistered(false);
                        onUserValidated(false);
                    }
                } catch (error) {
                    console.error('❌ Error checking user registration:', error);
                    setIsRegistered(false);
                    onUserValidated(false);
                } finally {
                    setIsChecking(false);
                }
            };

            const redirectToRegistration = () => {
                window.location.href = 'pages/instellingenCentrum/registratieCentrumN.aspx';
            };

            if (isChecking) {
                return h('div', { className: 'loading-container' },
                    h('div', { className: 'loading-spinner' }),
                    h('p', null, 'Gebruiker valideren...')
                );
            }

            if (!isRegistered) {
                return h('div', { className: 'registration-required' },
                    h('div', { className: 'registration-card' },
                        h('h2', null, 'Registratie vereist'),
                        h('p', null, 'Je bent nog niet geregistreerd in het systeem.'),
                        h('p', null, 'Klik op de knop hieronder om je te registreren.'),
                        h('button', {
                            onClick: redirectToRegistration,
                            className: 'register-button'
                        }, 'Registreren'),
                        currentUser && h('div', { className: 'user-info' },
                            h('small', null, `Ingelogd als: ${currentUser.Title || currentUser.LoginName}`)
                        )
                    )
                );
            }

            // User is registered, show normal app
            return children;
        };

        // =====================
        // Main App Component - Now imported from module
        // =====================

        // Render the application
        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log('🎯 About to render React app');
        console.log('Root element exists:', !!document.getElementById('root'));
        console.log('React available:', typeof React !== 'undefined');
        console.log('ReactDOM available:', typeof ReactDOM !== 'undefined');
        root.render(h(ErrorBoundary, null, h(RoosterApp)));

        // Make functions globally available for use in other components
        window.canManageOthersEvents = canManageOthersEvents;
        window.getProfilePhotoUrl = getProfilePhotoUrl;
        window.fetchSharePointList = fetchSharePointList;
        window.TooltipManager = TooltipManager; // Expose TooltipManager for debugging
        
        // Expose loading logic functions for debugging and manual control
        window.LoadingLogic = LoadingLogic;
        window.clearLoadingCache = clearAllCache;
        window.getLoadingStats = LoadingLogic.getCacheStats;
        window.logLoadingStatus = logLoadingStatus;
        
        console.log('🔧 LoadingLogic utilities added to window:');
        console.log('   - window.LoadingLogic - Full LoadingLogic object');
        console.log('   - window.clearLoadingCache() - Clear all cached data');
        console.log('   - window.getLoadingStats() - Get cache statistics');
        console.log('   - window.logLoadingStatus() - Log current loading status');
        
        console.log('✅ Script execution completed successfully!');
    </script>
</body>
</html>
