// NavigationButtons component for the application header
import { getProfilePhotoUrl } from '../utils/userUtils.js';

const { useState, useEffect, createElement: h } = React;

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
        if (currentUser && currentUser.Email) {
            setUserInfo(prev => ({ ...prev, naam: currentUser.Title, loading: false }));
            
            // Get profile photo URL - getProfilePhotoUrl returns a string, not a promise
            try {
                const photoUrl = getProfilePhotoUrl(currentUser);
                if (photoUrl) {
                    setUserInfo(prev => ({ ...prev, pictureUrl: photoUrl }));
                } else {
                    // Fallback if no photo URL returned
                    setUserInfo(prev => ({ 
                        ...prev, 
                        pictureUrl: '_layouts/15/userphoto.aspx?size=S'
                    }));
                }
            } catch (error) {
                console.warn('Error calling getProfilePhotoUrl:', error);
                setUserInfo(prev => ({ 
                    ...prev, 
                    pictureUrl: '_layouts/15/userphoto.aspx?size=S'
                }));
            }
        }
    }, [currentUser]);

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
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [settingsDropdownOpen, helpDropdownOpen]);

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

export default NavigationButtons;