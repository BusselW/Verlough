<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Centrum - Verlofrooster</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- CSS bestanden -->
    <link href="../../css/verlofrooster_s.css" rel="stylesheet">
    <link href="../../css/verlofrooster_s1.css" rel="stylesheet">
    <link rel="icon" href="../../icons/favicon/favicon.svg" />

    <!-- React library -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="../../js/config/configLijst.js"></script>

    <style>
        /* Admin page specific styles */
        .admin-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem 1.5rem;
            margin-bottom: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .admin-header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .btn-back {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-back:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-1px);
        }

        .admin-header-text {
            flex: 1;
        }

        .admin-title {
            font-size: 2rem;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
        }

        .admin-subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
            margin: 0;
            font-weight: 400;
        }

        .access-denied-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: 2rem;
        }

        .access-denied-content {
            text-align: center;
            max-width: 400px;
            padding: 3rem 2rem;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .access-denied-icon {
            width: 80px;
            height: 80px;
            background: #fef3c7;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
        }

        .access-denied-icon i {
            font-size: 2rem;
            color: #d97706;
        }

        .access-denied-content h2 {
            color: #111827;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .access-denied-content p {
            color: #6b7280;
            margin-bottom: 2rem;
            line-height: 1.6;
        }

        .main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        .loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 50vh;
            flex-direction: column;
            gap: 1rem;
        }

        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f4f6;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>

<body>
    <div id="root"></div>

    <script type="module">
        console.log('🚀 Admin Centrum starting execution...');
        
        // Make React available to imported ES6 modules
        window.React = React;
        
        // Import required components and functions
        import { getCurrentUser } from '../../js/services/sharepointService.js';
        import { getCurrentUserGroups } from '../../js/services/permissionService.js';
        import { AdminHeader, hasAdminAccess, AccessDenied, navigateBack } from './config/confPages.js';

        // React destructuring
        const { createElement: h, useState, useEffect } = React;

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
        // Main Admin Component
        // =====================
        const AdminCentrum = () => {
            const [loading, setLoading] = useState(true);
            const [currentUser, setCurrentUser] = useState(null);
            const [userPermissions, setUserPermissions] = useState({
                isAdmin: false,
                loading: true
            });

            useEffect(() => {
                checkUserPermissions();
            }, []);

            const checkUserPermissions = async () => {
                try {
                    console.log('🔍 Checking user permissions...');
                    setLoading(true);

                    // Get current user
                    const user = await getCurrentUser();
                    if (!user) {
                        console.warn('⚠️ No user info returned');
                        setLoading(false);
                        return;
                    }
                    setCurrentUser(user);

                    // Get user groups
                    const groupsArray = await getCurrentUserGroups();
                    
                    // Check for admin permissions (SharePoint beheer)
                    const permissions = {
                        isAdmin: groupsArray.some(group => 
                            group.toLowerCase().includes('admin') || 
                            group.toLowerCase().includes('beheerder') ||
                            group.toLowerCase().includes('systeembeheer') ||
                            group.toLowerCase().includes('sharepoint') ||
                            group.toLowerCase().includes('behee') // partial match for 'beheer'
                        ),
                        loading: false
                    };
                    
                    console.log('👥 User groups:', groupsArray);
                    console.log('🔑 Admin permissions:', permissions);

                    setUserPermissions(permissions);

                } catch (error) {
                    console.error('❌ Error checking permissions:', error);
                    setUserPermissions({ isAdmin: false, loading: false });
                } finally {
                    setLoading(false);
                }
            };

            // Show loading state
            if (loading || userPermissions.loading) {
                return h('div', { className: 'loading-container' },
                    h('div', { className: 'loading-spinner' }),
                    h('p', null, 'Toegangsrechten controleren...')
                );
            }

            // Check if user has admin access
            if (!hasAdminAccess(userPermissions)) {
                return h(AccessDenied);
            }

            // Render admin interface
            return h('div', null,
                h(AdminHeader, {
                    title: 'Admin Centrum',
                    subtitle: 'SharePoint beheer en systeeminstellingen',
                    onBack: navigateBack
                }),
                h('div', { className: 'main-content' },
                    h('div', { className: 'admin-welcome' },
                        h('h2', null, `Welkom ${currentUser?.Title || 'Administrator'}`),
                        h('p', null, 'Hier kunt u SharePoint beheer functionaliteiten uitvoeren en systeeminstellingen aanpassen.'),
                        h('div', { style: { marginTop: '2rem' } },
                            h('p', { style: { color: '#6b7280', fontSize: '0.9rem' } }, 
                                'Deze pagina is alleen toegankelijk voor gebruikers met SharePoint beheer rechten.'
                            )
                        )
                    )
                )
            );
        };

        // =====================
        // Application Bootstrap
        // =====================
        const App = () => {
            return h(AdminCentrum);
        };

        // =====================
        // Render Application
        // =====================
        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);

        root.render(
            h(ErrorBoundary, null,
                h(App)
            )
        );

        console.log('🎉 Admin Centrum initialized successfully');
    </script>
</body>

</html>
