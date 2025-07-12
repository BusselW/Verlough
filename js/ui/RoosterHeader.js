
const { createElement: h, useState, useEffect } = React;

const RoosterHeader = ({ 
    permissions, 
    userInfo, 
    weergaveType, 
    huidigWeek, 
    huidigJaar, 
    huidigMaand, 
    maandNamenVolledig, 
    teams, 
    zoekTerm, 
    geselecteerdTeam, 
    onWeergaveChange, 
    onVolgende, 
    onVorige, 
    onZoekTermChange, 
    onTeamChange 
}) => {
    const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
    const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (helpDropdownOpen && !event.target.closest('.help-dropdown')) {
                setHelpDropdownOpen(false);
            }
            if (settingsDropdownOpen && !event.target.closest('.user-dropdown')) {
                setSettingsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [helpDropdownOpen, settingsDropdownOpen]);

    return h('div', { className: 'sticky-header-container' },
        h('header', { id: 'header', className: 'header' },
            h('div', { className: 'header-content' },
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
                h('div', { className: 'header-acties' },
                    h('div', { className: 'nav-buttons-right' },
                        permissions && !permissions.loading && permissions.isAdmin && h('button', {
                            className: 'btn btn-admin',
                            onClick: () => window.location.href = 'pages/adminCentrum/adminCentrumN.aspx',
                            title: 'Administratie Centrum'
                        },
                            h('i', { className: 'fas fa-cog' }),
                            'Admin'
                        ),
                        permissions && !permissions.loading && permissions.isFunctional && h('button', {
                            className: 'btn btn-functional',
                            onClick: () => window.location.href = 'pages/beheerCentrum/beheerCentrumN.aspx',
                            title: 'Beheer Centrum'
                        },
                            h('i', { className: 'fas fa-tools' }),
                            'Beheer'
                        ),
                        permissions && !permissions.loading && permissions.isTaakbeheer && h('button', {
                            className: 'btn btn-taakbeheer',
                            onClick: () => window.location.href = 'pages/behandelCentrum/behandelCentrumN.aspx',
                            title: 'Behandel Centrum'
                        },
                            h('i', { className: 'fas fa-clipboard-check' }),
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
                                        onClick: () => {
                                            const baseUrl = "https://som.org.om.local/sites/verlofrooster";
                                            window.location.href = `${baseUrl}/pages/instellingenCentrum/instellingenCentrumN.aspx`;
                                        }
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
                )
            )
        ),
        h('div', { id: 'toolbar', className: 'toolbar' },
            h('div', { className: 'toolbar-content' },
                h('div', { id: 'periode-navigatie', className: 'periode-navigatie' },
                    h('button', { onClick: onVorige }, h('i', { className: 'fas fa-chevron-left' })),
                    h('div', { className: 'periode-display' }, weergaveType === 'week' ? `Week ${huidigWeek}, ${huidigJaar}` : `${maandNamenVolledig[huidigMaand]} ${huidigJaar}`),
                    h('button', { onClick: onVolgende }, h('i', { className: 'fas fa-chevron-right' })),
                    h('div', { 'data-weergave': weergaveType, className: 'weergave-toggle', style: { marginLeft: '2rem' } },
                        h('span', { className: 'glider' }),
                        h('button', { className: 'weergave-optie', onClick: () => onWeergaveChange('week') }, 'Week'),
                        h('button', { className: 'weergave-optie', onClick: () => onWeergaveChange('maand') }, 'Maand')
                    )
                ),
                h('div', { id: 'filter-groep', className: 'filter-groep' },
                    h('input', { type: 'text', className: 'zoek-input', placeholder: 'Zoek medewerker...', value: zoekTerm, onChange: onZoekTermChange }),
                    h('select', { className: 'filter-select', value: geselecteerdTeam, onChange: onTeamChange },
                        h('option', { value: '' }, 'Alle teams'),
                        (teams || []).map(team => h('option', { key: team.id, value: team.id }, team.naam))
                    )
                )
            )
        )
    );
};

export default RoosterHeader;
