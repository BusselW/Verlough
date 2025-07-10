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
        import { fetchSharePointList, getCurrentUser, trimLoginNaamPrefix } from './js/services/sharepointService.js';
        import TooltipManager from './js/ui/tooltipbar.js';
        import RoosterApp from './js/core/roosterApp.js';

        const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

        // Initialize tooltip manager as soon as the script runs
        TooltipManager.init();

        // NavigationButtons component is now imported from roosterApp.js module

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
                console.log('📋 UserRegistrationCheck useEffect triggered');
                checkUserRegistration();
            }, []);

            const checkUserRegistration = async () => {
                try {
                    console.log('🔍 Starting user registration check...');
                    setIsChecking(true);

                    // Get current user from SharePoint
                    const user = await getCurrentUser();
                    console.log('Current user from SharePoint:', user);

                    if (!user) {
                        console.warn('⚠️ No user info returned, proceeding anyway');
                        onUserValidated(true);
                        return;
                    }

                    setCurrentUser(user);

                    // Format the username for comparison (domain\username format)
                    let userLoginName = user.LoginName;

                    // Remove claim prefix if present (i:0#.w|domain\username -> domain\username)
                    if (userLoginName.startsWith('i:0#.w|')) {
                        userLoginName = userLoginName.substring(7);
                    }

                    console.log('Formatted login name for comparison:', userLoginName);

                    // Fetch Medewerkers list to check if user exists
                    const medewerkers = await fetchSharePointList('Medewerkers');
                    console.log('Total medewerkers found:', medewerkers.length);
                    console.log('Sample medewerkers data:', medewerkers.slice(0, 3).map(m => ({
                        ID: m.ID,
                        Username: m.Username,
                        Naam: m.Naam,
                        Actief: m.Actief
                    })));

                    // Check if user exists in Medewerkers list
                    const userExists = medewerkers.some(medewerker => {
                        const medewerkersUsername = medewerker.Username;

                        // Skip inactive users
                        if (medewerker.Actief === false) {
                            return false;
                        }

                        console.log(`Comparing: "${userLoginName}" with "${medewerkersUsername}"`);

                        // Direct comparison
                        if (medewerkersUsername === userLoginName) {
                            console.log('✓ Direct match found!');
                            return true;
                        }

                        // Try with just the username part (after domain\)
                        const trimmedLoginName = trimLoginNaamPrefix(userLoginName);
                        const trimmedMedewerkersName = trimLoginNaamPrefix(medewerkersUsername);

                        if (trimmedMedewerkersName === trimmedLoginName) {
                            console.log('✓ Trimmed username match found!');
                            return true;
                        }

                        // Try case insensitive comparison
                        if (medewerkersUsername && medewerkersUsername.toLowerCase() === userLoginName.toLowerCase()) {
                            console.log('✓ Case insensitive match found!');
                            return true;
                        }

                        return false;
                    });

                    console.log('User exists in Medewerkers list:', userExists);

                    setIsRegistered(userExists);

                    // Always call onUserValidated to allow the app to load
                    console.log('✅ User validation complete, calling onUserValidated(true)');
                    onUserValidated(true);

                } catch (error) {
                    console.error('❌ Error checking user registration:', error);
                    setIsRegistered(false);
                    // Still allow app to load even if user check fails
                    console.log('⚠️ User check failed but proceeding with app load');
                    onUserValidated(true);
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
        // Main App Component - Now imported from module
        // =====================

        // Render the application
        const App = () => {
            const [isUserValidated, setIsUserValidated] = useState(false);

            return h(ErrorBoundary, null,
                h(UserRegistrationCheck, { onUserValidated: setIsUserValidated },
                    // Conditionally render RoosterApp only when the user is validated.
                    // This prevents the app from trying to load data prematurely.
                    isUserValidated ? h(RoosterApp, { isUserValidated: true }) : null
                )
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(h(App));
        console.log('🎯 React app rendered');
    </script>
</body>

</html>

