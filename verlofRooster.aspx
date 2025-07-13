<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verlofrooster</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- CSS bestanden -->
    <link href="css/verlofrooster_s.css" rel="stylesheet">
    <link href="css/verlofrooster_s1.css" rel="stylesheet">
    <link rel="icon" href="icons/favicon/favicon.svg" />

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
        
        // Make React available to imported ES6 modules that expect it globally
        window.React = React;
        
        // Importeer de benodigde componenten en functies
        import { fetchSharePointList, getUserInfo, getCurrentUser, createSharePointListItem, updateSharePointListItem, deleteSharePointListItem, trimLoginNaamPrefix } from './js/services/sharepointService.js';
        import { getCurrentUserGroups, isUserInAnyGroup } from './js/services/permissionService.js';
        import * as linkInfo from './js/services/linkInfo.js';
        import LoadingLogic, { loadFilteredData, shouldReloadData, updateCacheKey, clearAllCache, logLoadingStatus } from './js/services/loadingLogic.js';
        import { canManageOthersEvents, canUserModifyItem } from './js/ui/contextmenu.js';
        import { roosterHandleiding, openHandleiding, roosterTutorial } from './js/tutorial/roosterHandleiding.js';
        import TooltipManager from './js/ui/tooltipbar.js';
        import ProfielKaarten from './js/ui/profielkaarten.js';
        import { getProfilePhotoUrl } from './js/utils/userUtils.js';
        import RoosterApp from './js/core/roosterApp.js';

        const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

        // Initialize tooltip manager as soon as the script runs
        TooltipManager.init();

        // =====================
        // Permission-based Navigation Component
        // =====================
        const NavigationButtons = ({ userPermissions, currentUser }) => {
            const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
            const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
            const [userInfo, setUserInfo] = useState({
                naam: '',
                pictureUrl: '',
                loading: true,
                teamLeader: null,
                teamLeaderLoading: true
            });

            useEffect(() => {
                console.log('[NavigationButtons] useEffect triggered, currentUser:', currentUser);
                
                if (currentUser && currentUser.Email) {
                    console.log('[NavigationButtons] Setting user info for:', currentUser.Title);
                    setUserInfo(prev => ({ ...prev, naam: currentUser.Title, loading: false }));
                    
                    // Get profile photo URL - should be synchronous function
                    try {
                        console.log('[NavigationButtons] About to call getProfilePhotoUrl');
                        const photoUrl = getProfilePhotoUrl(currentUser);
                        console.log('[NavigationButtons] photoUrl result:', photoUrl);
                        
                        if (photoUrl) {
                            setUserInfo(prev => ({ ...prev, pictureUrl: photoUrl }));
                        } else {
                            // Fallback if no photo URL returned
                            console.log('[NavigationButtons] Using fallback photo URL');
                            setUserInfo(prev => ({ 
                                ...prev, 
                                pictureUrl: '_layouts/15/userphoto.aspx?size=S'
                            }));
                        }
                    } catch (error) {
                        console.error('[NavigationButtons] Error calling getProfilePhotoUrl:', error);
                        setUserInfo(prev => ({ 
                            ...prev, 
                            pictureUrl: '_layouts/15/userphoto.aspx?size=S'
                        }));
                    }
                } else {
                    console.log('[NavigationButtons] No currentUser or Email, skipping photo fetch');
                }
            }, [currentUser]);



            const navigateTo = (page) => {
                const baseUrl = "https://som.org.om.local/sites/verlofrooster";
                window.location.href = `${baseUrl}/${page}`;
            };

            if (userPermissions.loading || userInfo.loading) {
                return h('div', { className: 'navigation-buttons-placeholder' }, 'Knoppen laden...');
            }

            return h('div', { className: 'navigation-buttons' },
                h('div', { id: 'nav-buttons-right', className: 'nav-buttons-right' },
                    userPermissions.isAdmin && h('button', {
                        className: 'btn btn-admin',
                        onClick: () => navigateTo('pages/adminCentrum/adminCentrumN.aspx'),
                        title: 'Administratie Centrum'
                    },
                        h('i', { className: 'fas fa-cog' }),
                        'Admin'
                    ),
                    userPermissions.isFunctional && h('button', {
                        className: 'btn btn-functional',
                        onClick: () => navigateTo('pages/beheerCentrum/beheerCentrumN.aspx'),
                        title: 'Beheer Centrum'
                    },
                        h('i', { className: 'fas fa-tools' }),
                        'Beheer'
                    ),
                    userPermissions.isTaakbeheer && h('button', {
                        className: 'btn btn-taakbeheer',
                        onClick: () => navigateTo('pages/behandelCentrum/behandelCentrumN.aspx'),
                        title: 'Behandel Centrum'
                    },
                        h('i', { className: 'fas fa-tasks' }),
                        'Behandelen'
                    ),
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
                        helpDropdownOpen && h('div', { className: 'help-dropdown-menu' },
                            h('button', {
                                className: 'help-dropdown-item',
                                onClick: () => {
                                    if (window.startTutorial) window.startTutorial();
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
                                    if (window.openHandleiding) window.openHandleiding();
                                    setHelpDropdownOpen(false);
                                },
                                title: 'Open uitgebreide handleiding'
                            },
                                h('i', { className: 'fas fa-book' }),
                                h('div', { className: 'help-item-content' },
                                    h('span', { className: 'help-item-title' }, 'Handleiding'),
                                    h('span', { className: 'help-item-description' }, 'Uitgebreide documentatie en instructies')
                                )
                            )
                        )
                    ),
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
                                onError: (e) => { e.target.onerror = null; e.target.src = '_layouts/15/userphoto.aspx?size=S'; }
                            }),
                            h('span', { className: 'user-name' }, userInfo.naam),
                            h('i', {
                                className: `fas fa-chevron-${settingsDropdownOpen ? 'up' : 'down'}`,
                                style: { fontSize: '0.8rem', marginLeft: '0.5rem' }
                            })
                        ),
                        settingsDropdownOpen && h('div', { className: 'user-dropdown-menu' },
                            h('div', { className: 'dropdown-item-group' },
                                h('button', {
                                    className: 'dropdown-item',
                                    onClick: () => navigateTo('pages/instellingenCentrum/instellingenCentrumN.aspx')
                                },
                                    h('i', { className: 'fas fa-user-edit' }),
                                    h('div', { className: 'dropdown-item-content' },
                                        h('span', { className: 'dropdown-item-title' }, 'Persoonlijke instellingen'),
                                        h('span', { className: 'dropdown-item-description' }, 'Beheer uw profiel en voorkeuren')
                                    )
                                )
                            )
                        )
                    )
                )
            );
        };

        // =====================
        // Error Boundary (Bijgewerkt)
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
                console.error('Error caught by boundary:', error, errorInfo);
            }

            render() {
                if (this.state.hasError) {
                    return h('div', { className: 'error-container' },
                        h('h2', null, 'Er is een onverwachte fout opgetreden'),
                        h('p', null, this.state.error?.message || 'Onbekende fout'),
                        h('button', { onClick: () => window.location.reload() }, 'Vernieuw')
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
            const [userPermissions, setUserPermissions] = useState({
                isAdmin: false,
                isFunctional: false,
                isTaakbeheer: false,
                loading: true
            });

            useEffect(() => {
                console.log('📋 UserRegistrationCheck useEffect triggered');
                checkUserRegistration();
            }, []);

            const checkUserRegistration = async () => {
                try {
                    console.log('🔍 Starting user registration check...');
                    setIsChecking(true);

                    const user = await getCurrentUser();
                    if (!user) {
                        console.warn('⚠️ No user info returned, proceeding anyway');
                        onUserValidated(true, null, { loading: false });
                        return;
                    }
                    setCurrentUser(user);

                    const groupsArray = await getCurrentUserGroups();
                    
                    // Convert groups array to permission object
                    const permissions = {
                        isAdmin: groupsArray.some(group => 
                            group.toLowerCase().includes('admin') || 
                            group.toLowerCase().includes('beheerder') ||
                            group.toLowerCase().includes('systeembeheer')
                        ),
                        isFunctional: groupsArray.some(group => 
                            group.toLowerCase().includes('functioneel') || 
                            group.toLowerCase().includes('functional') ||
                            group.toLowerCase().includes('verlofbeheer')
                        ),
                        isTaakbeheer: groupsArray.some(group => 
                            group.toLowerCase().includes('taakbeheer') || 
                            group.toLowerCase().includes('behandel') ||
                            group.toLowerCase().includes('verlofverwerking')
                        ),
                        loading: false
                    };
                    
                    // For production, remove this override:
                    // if (!permissions.isAdmin && !permissions.isFunctional && !permissions.isTaakbeheer) {
                    //     permissions.isAdmin = true;
                    //     permissions.isFunctional = true;
                    //     permissions.isTaakbeheer = true;
                    // }
                    
                    console.log('👥 User groups:', groupsArray);
                    console.log('🔑 Derived permissions:', permissions);

                    setUserPermissions(permissions);

                    let userLoginName = user.LoginName.startsWith('i:0#.w|') ? user.LoginName.substring(7) : user.LoginName;

                    const medewerkers = await fetchSharePointList('Medewerkers');
                    const userExists = medewerkers.some(m => m.Actief && m.Username && (m.Username === userLoginName || trimLoginNaamPrefix(m.Username) === trimLoginNaamPrefix(userLoginName)));

                    setIsRegistered(userExists);
                    console.log('✅ User validation complete, calling onUserValidated');
                    onUserValidated(true, user, permissions);

                } catch (error) {
                    console.error('❌ Error checking user registration:', error);
                    setIsRegistered(false);
                    const defaultPermissions = { 
                        isAdmin: false, 
                        isFunctional: false, 
                        isTaakbeheer: false, 
                        loading: false 
                    };
                    console.log('⚠️ User check failed but proceeding with app load');
                    onUserValidated(true, null, defaultPermissions);
                } finally {
                    console.log('🏁 User registration check complete');
                    setIsChecking(false);
                }
            };

            const redirectToRegistration = () => {
                window.location.href = 'pages/instellingenCentrum/registratieCentrumN.aspx';
            };

            // Show registration overlay if user is not registered
            if (!isRegistered && !isChecking) {
                return h('div', null,
                    // Show dimmed app content in background
                    children,
                    // Registration overlay
                    h('div', {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            fontFamily: 'Inter, sans-serif'
                        }
                    },
                        h('div', {
                            style: {
                                maxWidth: '480px',
                                width: '90%',
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                padding: '32px',
                                textAlign: 'center'
                            }
                        },
                            // Icon
                            h('div', {
                                style: {
                                    margin: '0 auto 24px',
                                    width: '64px',
                                    height: '64px',
                                    backgroundColor: '#fef3c7',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            },
                                h('i', {
                                    className: 'fas fa-user-plus',
                                    style: {
                                        fontSize: '24px',
                                        color: '#d97706'
                                    }
                                })
                            ),
                            // Title
                            h('h2', {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    color: '#111827',
                                    marginBottom: '12px'
                                }
                            }, 'Account Registratie Vereist'),
                            // Description
                            h('p', {
                                style: {
                                    fontSize: '16px',
                                    color: '#6b7280',
                                    marginBottom: '24px',
                                    lineHeight: '1.5'
                                }
                            }, `Hallo ${currentUser?.Title || 'gebruiker'}! Om het verlofrooster te kunnen gebruiken, moet je eerst je account registreren en instellen.`),
                            // Call to action
                            h('button', {
                                onClick: redirectToRegistration,
                                style: {
                                    width: '100%',
                                    backgroundColor: '#3b82f6',
                                    color: 'white',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginBottom: '16px',
                                    transition: 'background-color 0.2s'
                                },
                                onMouseEnter: (e) => e.target.style.backgroundColor = '#2563eb',
                                onMouseLeave: (e) => e.target.style.backgroundColor = '#3b82f6'
                            },
                                h('i', { className: 'fas fa-arrow-right', style: { marginRight: '8px' } }),
                                'Ga naar Registratie'
                            ),
                            // Secondary action
                            h('button', {
                                onClick: checkUserRegistration,
                                style: {
                                    width: '100%',
                                    backgroundColor: '#f3f4f6',
                                    color: '#374151',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s'
                                },
                                onMouseEnter: (e) => e.target.style.backgroundColor = '#e5e7eb',
                                onMouseLeave: (e) => e.target.style.backgroundColor = '#f3f4f6'
                            },
                                h('i', { className: 'fas fa-sync-alt', style: { marginRight: '8px' } }),
                                'Opnieuw Controleren'
                            ),
                            // User info
                            currentUser && h('div', {
                                style: {
                                    marginTop: '24px',
                                    paddingTop: '16px',
                                    borderTop: '1px solid #e5e7eb'
                                }
                            },
                                h('p', {
                                    style: {
                                        fontSize: '12px',
                                        color: '#9ca3af'
                                    }
                                }, `Ingelogd als: ${currentUser.LoginName}`)
                            )
                        )
                    )
                );
            }

            // Show loading overlay while checking
            if (isChecking) {
                return h('div', null,
                    // Show dimmed app content in background
                    children,
                    // Loading overlay
                    h('div', {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            fontFamily: 'Inter, sans-serif'
                        }
                    },
                        h('div', {
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                padding: '32px',
                                textAlign: 'center',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                            }
                        },
                            h('div', { 
                                className: 'loading-spinner', 
                                style: { margin: '0 auto 16px' } 
                            }),
                            h('h2', {
                                style: {
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: '#111827',
                                    marginBottom: '8px'
                                }
                            }, 'Gebruiker valideren...'),
                            h('p', {
                                style: {
                                    fontSize: '14px',
                                    color: '#6b7280'
                                }
                            }, 'Even geduld, we controleren je toegangsrechten.')
                        )
                    )
                );
            }

            // User is registered, show normal app
            return children;
        };

        // =====================
        // Main App Component - now uses imported RoosterApp
        // =====================
        const App = ({ currentUser, userPermissions }) => {
            console.log('🎯 App component rendering with permissions:', userPermissions);
            
            return h(RoosterApp, { 
                isUserValidated: true, 
                currentUser: currentUser, 
                userPermissions: userPermissions
            });
        };

        // =====================
        // Application Bootstrap
        // =====================
        const MainAppWrapper = () => {
            const [appData, setAppData] = useState(null);

            const handleUserValidated = (isValid, currentUser, userPermissions) => {
                setAppData({ currentUser, userPermissions });
            };

            // Single UserRegistrationCheck wrapper
            return h(UserRegistrationCheck, { onUserValidated: handleUserValidated },
                appData ? h(App, { 
                    currentUser: appData.currentUser, 
                    userPermissions: appData.userPermissions 
                }) : null
            );
        };
            
        // =====================
        // Render Application
        // =====================
                    const container = document.getElementById('root');
                    const root = ReactDOM.createRoot(container);
            
                    root.render(
                        h(ErrorBoundary, null,
                            h(MainAppWrapper)
                        )
                    );

                    // Make tutorial functions globally available
                    window.startTutorial = roosterTutorial;
                    window.openHandleiding = openHandleiding;  // Not the alias
            
                                console.log('🎉 Application initialized successfully');
                            </script>
                </body>
            </html>

