<!DOCTYPE html>
<!--
    Registration Wizard for VerlofroosterREACT
    Following project instructions: .github/instructions/Code.instructions.md
    Pure HTML with React CDN, ES6 modules, and semantic accessibility standards
-->
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registratie - Verlofrooster</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="icon" href="data:," />

    <!-- React Libraries -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Configuration -->
    <script src="../../js/config/configLijst.js"></script>

    <!-- Instellingen Styles -->
    <link href="css/instellingencentrum_s.css" rel="stylesheet">
    
    <!-- Minimal registration wizard styles -->
    <style>
        .progress-bar {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            position: relative;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .progress-bar::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 10%;
            right: 10%;
            height: 2px;
            background: #e9ecef;
            z-index: 1;
        }
        
        .progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
            flex: 1;
        }
        
        .step-number {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #e9ecef;
            color: #6c757d;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin-bottom: 8px;
            transition: all 0.3s ease;
        }
        
        .progress-step.active .step-number {
            background: #007bff;
            color: white;
        }
        
        .progress-step.current .step-number {
            background: #28a745;
            color: white;
        }
        
        .step-title {
            font-weight: 600;
            color: #333;
            margin-bottom: 4px;
            font-size: 14px;
            text-align: center;
        }
        
        .progress-step.active .step-title {
            color: #007bff;
        }
        
        .progress-step.current .step-title {
            color: #28a745;
        }
        
        .step-label {
            font-size: 12px;
            color: #6c757d;
            text-align: center;
        }
        
        .navigation-buttons {
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            margin-top: 20px;
        }
        
        .btn-group {
            display: flex;
            gap: 10px;
        }
    </style>
</head>

<body>
    <div id="root"></div>

    <script type="module">
        // Import services (adjust paths as needed)
        import { fetchSharePointList, getCurrentUser, getUserInfo } from '../../js/services/sharepointService.js';
        
        // Import tab components
        import { ProfileTab } from './js/componenten/profielTab.js';
        import { WorkHoursTab } from './js/componenten/werktijdenTab.js';
        import { SettingsTab } from './js/componenten/instellingenTab.js';

        // React setup
        const { useState, useEffect, useMemo, useCallback, createElement: h, Fragment } = React;

        // =====================
        // Main Application Component
        // =====================
        const App = () => {
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);
            const [user, setUser] = useState(null);
            const [data, setData] = useState({});

            // Initialize application
            useEffect(() => {
                const initializeApp = async () => {
                    try {
                        setLoading(true);
                        setError(null);

                        // Load current user
                        const currentUser = await getCurrentUser();
                        setUser(currentUser);

                        // Load additional data as needed
                        // const someData = await fetchSharePointList('SomeList');
                        // setData({ someData });

                        console.log('App initialized successfully');
                    } catch (err) {
                        console.error('Error initializing app:', err);
                        setError(err.message);
                    } finally {
                        setLoading(false);
                    }
                };

                initializeApp();
            }, []);

            // Handle loading state
            if (loading) {
                return h('div', { className: 'loading' },
                    h('div', null,
                        h('div', { className: 'spinner' }),
                        h('p', { className: 'mt-4 text-muted' }, 'Laden...')
                    )
                );
            }

            // Handle error state
            if (error) {
                return h('div', { className: 'container' },
                    h('div', { className: 'error' },
                        h('h3', null, 'Er is een fout opgetreden'),
                        h('p', null, error)
                    )
                );
            }

            // Main application render
            return h('div', null,
                h(Header, { user }),
                h('div', { className: 'container' },
                    h(MainContent, { user, data })
                )
            );
        };

        // =====================
        // Header Component
        // =====================
        const Header = ({ user }) => {
            return h('div', { className: 'header' },
                h('div', { className: 'container' },
                    h('h1', null, 'Account registratie'),
                    h('p', null, `Welkom ${user?.Title || 'nieuwe gebruiker'}! Stel je account in voor het verlofrooster.`)
                )
            );
        };

        // =====================
        // Main Content Component
        // =====================
        const MainContent = ({ user, data }) => {
            const [currentStep, setCurrentStep] = useState(1);
            const [registrationData, setRegistrationData] = useState({
                profile: {},
                workHours: {},
                preferences: {}
            });
            const [isCompleted, setIsCompleted] = useState(false);
            const [errors, setErrors] = useState({});
            const [isSubmitting, setIsSubmitting] = useState(false);

            const steps = [
                { id: 1, title: 'Profiel', description: 'Persoonlijke gegevens' },
                { id: 2, title: 'Werktijden', description: 'Werk schema instellingen' },
                { id: 3, title: 'Voorkeuren', description: 'App instellingen' }
            ];

            const handleNext = async () => {
                setErrors({});
                if (currentStep < 3) {
                    setCurrentStep(currentStep + 1);
                }
            };

            const [stepSaveTrigger, setStepSaveTrigger] = useState(0);

            const handleStepSave = async () => {
                // For step 1 (profile), trigger save
                if (currentStep === 1) {
                    setStepSaveTrigger(prev => prev + 1);
                } else {
                    // For steps 2 and 3, just advance to next step without saving
                    // (User can configure these later via settings)
                    console.log(`Step ${currentStep}: Advancing without mandatory save`);
                    if (currentStep < 3) {
                        setCurrentStep(currentStep + 1);
                    } else {
                        // Step 3 - complete registration
                        handleFinish();
                    }
                }
            };

            const getCurrentStepData = () => {
                switch (currentStep) {
                    case 1: return registrationData.profile;
                    case 2: return registrationData.workHours;
                    case 3: return registrationData.preferences;
                    default: return {};
                }
            };

            const handlePrevious = () => {
                if (currentStep > 1) {
                    setCurrentStep(currentStep - 1);
                }
            };

            const handleFinish = async () => {
                try {
                    setIsSubmitting(true);
                    setErrors({});
                    
                    // Here you would normally save the registration data to SharePoint
                    console.log('Registration data:', registrationData);
                    
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    // Immediately redirect to the main app instead of showing completion screen
                    console.log('Registration completed, redirecting to main app...');
                    window.location.href = '../../verlofRooster.aspx';
                    
                } catch (error) {
                    console.error('Registration failed:', error);
                    setErrors({ general: 'Registratie mislukt. Probeer het opnieuw.' });
                    setIsSubmitting(false);
                }
            };

            const updateRegistrationData = (stepKey, data) => {
                setRegistrationData(prev => ({
                    ...prev,
                    [stepKey]: { ...prev[stepKey], ...data }
                }));
            };

            // Since we redirect immediately, no need for completion screen
            // if (isCompleted) { ... }

            return h('div', null,
                // Progress bar
                h('div', { className: 'progress-bar' },
                    ...steps.map(step =>
                        h('div', {
                            key: step.id,
                            className: `progress-step ${currentStep >= step.id ? 'active' : ''} ${currentStep === step.id ? 'current' : ''}`
                        },
                            h('div', { className: 'step-number' }, step.id),
                            h('div', { className: 'step-title' }, step.title),
                            h('div', { className: 'step-label' }, step.description)
                        )
                    )
                ),
                
                // Step content - using same structure as original tabs
                h(StepContent, { 
                    currentStep, 
                    user, 
                    data, 
                    updateRegistrationData,
                    onStepSave: handleStepSave,
                    stepSaveTrigger,
                    onSaveComplete: (success) => {
                        if (success) {
                            if (currentStep < 3) {
                                // Move to next step instead of redirecting immediately
                                setCurrentStep(currentStep + 1);
                            } else {
                                // Only redirect after completing all steps or when user finishes
                                console.log('All registration steps completed, redirecting to main app...');
                                
                                // Show success message briefly before redirect
                                const successDiv = document.createElement('div');
                                successDiv.style.cssText = `
                                    position: fixed;
                                    top: 20px;
                                    right: 20px;
                                    background: #d4edda;
                                    color: #155724;
                                    padding: 16px 20px;
                                    border-radius: 8px;
                                    border: 1px solid #c3e6cb;
                                    z-index: 10000;
                                    font-family: Inter, sans-serif;
                                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                                `;
                                successDiv.textContent = 'Registratie voltooid! Doorverwijzen naar de app...';
                                document.body.appendChild(successDiv);
                                
                                setTimeout(() => {
                                    window.location.href = '../../verlofRooster.aspx';
                                }, 1500);
                            }
                        }
                    }
                }),
                
                // Navigation buttons
                h('div', { className: 'navigation-buttons' },
                    h('div', null,
                        currentStep > 1 && h('button', {
                            className: 'btn btn-secondary',
                            onClick: handlePrevious,
                            disabled: isSubmitting
                        }, 'Vorige')
                    ),
                    h('div', { className: 'btn-group' },
                        // Save/Next button for steps 1 and 2, Finish button for step 3
                        currentStep === 1 && h('button', {
                            className: 'btn btn-primary',
                            onClick: handleStepSave,
                            disabled: isSubmitting
                        }, 'Opslaan & Volgende'),
                        
                        currentStep === 2 && h('button', {
                            className: 'btn btn-primary',
                            onClick: handleNext,
                            disabled: isSubmitting
                        }, 'Volgende'),
                        
                        currentStep === 3 && h('button', {
                            className: 'btn btn-success',
                            onClick: handleFinish,
                            disabled: isSubmitting
                        }, isSubmitting ? 'Bezig met registreren...' : 'Registratie voltooien')
                    )
                )
            );
        };

        // =====================
        // Step Content Component
        // =====================
        const StepContent = ({ currentStep, user, data, updateRegistrationData, onStepSave, stepSaveTrigger, onSaveComplete }) => {
            const handleProfileUpdate = (profileData) => {
                updateRegistrationData('profile', profileData);
            };

            const handleWorkHoursUpdate = (workHoursData) => {
                updateRegistrationData('workHours', workHoursData);
            };

            const handlePreferencesUpdate = (preferencesData) => {
                updateRegistrationData('preferences', preferencesData);
            };

            switch (currentStep) {
                case 1:
                    return h(ProfileTab, { 
                        user, 
                        data,
                        isRegistration: true,
                        onDataUpdate: handleProfileUpdate,
                        onSave: onStepSave,
                        stepSaveTrigger,
                        onSaveComplete
                    });
                case 2:
                    return h(WorkHoursTab, { 
                        user, 
                        data,
                        isRegistration: true,
                        onDataUpdate: handleWorkHoursUpdate,
                        onSave: onStepSave,
                        stepSaveTrigger,
                        onSaveComplete
                    });
                case 3:
                    return h(SettingsTab, { 
                        user, 
                        data,
                        isRegistration: true,
                        onDataUpdate: handlePreferencesUpdate,
                        onSave: onStepSave,
                        stepSaveTrigger,
                        onSaveComplete
                    });
                default:
                    return h('div', null,
                        h('p', null, 'Ongeldige stap')
                    );
            }
        };

        // =====================
        // Application Initialization
        // =====================
        const initializeApplication = () => {
            const container = document.getElementById('root');
            if (container) {
                const root = ReactDOM.createRoot(container);
                root.render(h(App));
                console.log('Template application initialized successfully');
            } else {
                console.error('Root container not found');
            }
        };

        // Start the application
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApplication);
        } else {
            initializeApplication();
        }

    </script>
</body>

</html>