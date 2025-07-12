
const { createElement: h, useMemo, Fragment } = React;
import { isVandaag, formatteerDatum } from '../utils/dateTimeUtils.js';
import MedewerkerRow from './userinfo.js';
import { renderCompensatieMomenten } from './dagCell.js';

const RoosterGrid = ({ 
    gegroepeerdeData, 
    teams, 
    periodeData, 
    weergaveType, 
    feestdagen, 
    getVerlofVoorDag, 
    getZittingsvrijVoorDag, 
    getCompensatieUrenVoorDag, 
    getCompensatieMomentenVoorDag, 
    getUrenPerWeekForDate, 
    shiftTypes, 
    dagenIndicators, 
    handleCellClick, 
    showContextMenu, 
    selection, 
    firstClickData, 
    showTooltip, 
    sortDirection,
    toggleSortDirection
}) => {

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
           
            const headerRef = (element) => {
                if (element && feestdagNaam && !element.dataset.tooltipAttached && typeof TooltipManager !== 'undefined') {
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

    function isDateInSelection(dag, medewerkerUsername) {
        if (!selection || !selection.start || !selection.end || !selection.medewerkerId) return false;
        if (medewerkerUsername !== selection.medewerkerId) return false;
        const d = new Date(dag);
        d.setHours(0, 0, 0, 0);
        const s = new Date(selection.start);
        s.setHours(0, 0, 0, 0);
        const e = new Date(selection.end);
        e.setHours(0, 0, 0, 0);
        return d >= s && d <= e;
    }

    return h('main', { className: 'main-content' },
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
                    (gegroepeerdeData ? Object.keys(gegroepeerdeData) : []).map(teamId => {
                        const team = (teams || []).find(t => t.id === teamId) || { id: 'geen_team', naam: 'Geen Team', kleur: '#ccc' };
                        const teamMedewerkers = gegroepeerdeData[teamId];
                        if (!teamMedewerkers || teamMedewerkers.length === 0) return null;

                        return h(Fragment, { key: teamId },
                            h('tr', { className: 'team-rij' }, h('td', { colSpan: periodeData.length + 1 }, h('div', { className: 'team-header', style: { '--team-kleur': team.kleur } }, team.naam))),
                            (teamMedewerkers || []).map(medewerker =>
                                h('tr', { key: medewerker.id, className: 'medewerker-rij' },
                                    h('td', { className: 'medewerker-kolom' }, h(MedewerkerRow, { medewerker: medewerker || {} })),
                                    ...(() => {
                                        const dagenMetBlokInfo = periodeData.map((dag) => {
                                            const verlofItem = getVerlofVoorDag(medewerker.Username, dag);
                                            const zittingsvrijItem = getZittingsvrijVoorDag(medewerker.Username, dag);
                                            const compensatieItems = getCompensatieUrenVoorDag(medewerker.Username, dag);

                                            let item = verlofItem || zittingsvrijItem;

                                            return {
                                                dag,
                                                item: item,
                                                compensatieMomenten: getCompensatieMomentenVoorDag(dag).filter(m => m.item.MedewerkerID === medewerker.Username)
                                            };
                                        });

                                        for (let i = 0; i < dagenMetBlokInfo.length; i++) {
                                            if (dagenMetBlokInfo[i].item) {
                                                const isStart = i === 0 || dagenMetBlokInfo[i].item !== dagenMetBlokInfo[i - 1].item;
                                                if (isStart) {
                                                    let length = 1;
                                                    while (i + length < dagenMetBlokInfo.length && dagenMetBlokInfo[i + length].item === dagenMetBlokInfo[i].item) { length++; }
                                                    const middleIndex = i + Math.floor((length - 1) / 2);
                                                    for (let k = 0; k < length; k++) {
                                                        dagenMetBlokInfo[i + k].isMiddle = (i + k === middleIndex);
                                                        dagenMetBlokInfo[i + k].isStart = (k === 0);
                                                        dagenMetBlokInfo[i + k].isEnd = (k === length - 1);
                                                    }
                                                }
                                            }
                                        }

                                        return dagenMetBlokInfo.map(({ dag, item, isStart, isEnd, isMiddle, compensatieMomenten }) => {
                                            const isWeekend = dag.getDay() === 0 || dag.getDay() === 6;
                                            const feestdagNaam = feestdagen[dag.toISOString().split('T')[0]];
                                            const isSelected = isDateInSelection(dag, medewerker.Username);
                                            const isToday = isVandaag(dag);
                                            const classes = `dag-kolom ${isWeekend ? 'weekend' : ''} ${feestdagNaam ? 'feestdag' : ''} ${isToday ? 'vandaag' : ''} ${isSelected ? 'selected' : ''}`;

                                            const isFirstClick = firstClickData &&
                                                firstClickData.medewerker.Username === medewerker.Username &&
                                                firstClickData.dag.toDateString() === dag.toDateString();
                                            
                                            const tooltipElement = (isFirstClick && showTooltip) ?
                                                h('div', {
                                                    className: 'selection-tooltip visible'
                                                }, 'Klik nu op een tweede dag en open het menu met je rechtermuisknop.') : null;

                                            let teRenderenBlok = null;

                                            const urenSchema = getUrenPerWeekForDate(medewerker.Username, dag);
                                            if (urenSchema) {
                                                const dagNamen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
                                                const dagNaam = dagNamen[dag.getDay()];
                                                const soortVeld = `${dagNaam}Soort`;
                                                const dagSoort = urenSchema[soortVeld];

                                                if (dagSoort && dagenIndicators[dagSoort]) {
                                                    const indicator = dagenIndicators[dagSoort];
                                                    teRenderenBlok = h('div', {
                                                        className: 'verlof-blok',
                                                        style: { backgroundColor: indicator.kleur, borderRadius: '6px' },
                                                        title: `${indicator.Beschrijving || indicator.Title} (vanaf ${urenSchema.Ingangsdatum.toLocaleDateString()})`
                                                    }, indicator.Title);
                                                }
                                            }

                                            if (item && !teRenderenBlok) {
                                                const blokClasses = ['verlof-blok'];
                                                if (isStart) blokClasses.push('start-blok');
                                                if (isEnd) blokClasses.push('eind-blok');

                                                const isVerlof = 'RedenId' in item;
                                                const shiftType = isVerlof ? shiftTypes[item.RedenId] : null;
                                                const afkorting = isVerlof && shiftType ? shiftType.afkorting : (item.Afkorting || 'ZV');
                                                const kleur = isVerlof && shiftType ? shiftType.kleur : (item.Kleur || '#8e44ad');
                                                const titel = isVerlof && shiftType ? (item.Omschrijving || shiftType.label) : (item.Opmerking || item.Title);
                                                const status = isVerlof ? (item.Status || 'Goedgekeurd').toLowerCase() : 'goedgekeurd';

                                                if (afkorting === 'VER') {
                                                    blokClasses.push('ver-item');
                                                }

                                                teRenderenBlok = h('div', {
                                                    className: `${blokClasses.join(' ')} status-${status}`,
                                                    'data-afkorting': afkorting,
                                                    style: { backgroundColor: kleur },
                                                    title: titel
                                                }, isMiddle ? afkorting : '');
                                            }

                                            const compensatieMomentenBlokken = renderCompensatieMomenten(compensatieMomenten, {
                                                onContextMenu: (e, compensatieItem) => {
                                                    showContextMenu(e, medewerker, dag, compensatieItem);
                                                },
                                                onClick: (e, compensatieItem) => {
                                                    handleCellClick(medewerker, dag, compensatieItem);
                                                }
                                            });

                                            return h('td', {
                                                key: dag.toISOString(),
                                                className: classes,
                                                id: medewerker.id === 1 && dag.getDate() === 1 ? 'dag-cel' : undefined,
                                                onClick: () => handleCellClick(medewerker, dag),
                                                onContextMenu: (e) => {
                                                    e.preventDefault();
                                                    showContextMenu(e, medewerker, dag, item || null);
                                                },
                                                style: isFirstClick ? { position: 'relative' } : {}
                                            },
                                                teRenderenBlok,
                                                compensatieMomentenBlokken,
                                                tooltipElement
                                            );
                                        });
                                    })()
                                )
                            )
                        );
                    })
                )
            )
        )
    );
};

export default RoosterGrid;
