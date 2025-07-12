const { createElement: h, Fragment, useEffect, useRef } = React;
import TooltipManager from './tooltipbar.js';

/**
 * Utility function to render compensatie moments that can be shared
 * between DagCell component and inline table logic
 * @param {Array} compensatieMomenten - Array of compensatie moments
 * @param {Object} options - Optional handlers for click and context menu
 * @param {Function} options.onContextMenu - Context menu handler that receives (event, compensatieItem)
 * @param {Function} options.onClick - Click handler that receives (event, compensatieItem)
 */
const renderCompensatieMomenten = (compensatieMomenten, options = {}) => {
    return compensatieMomenten.map((moment) => {
        let iconSrc = '';
        let title = moment.item.Omschrijving || '';
        let className = 'compensatie-uur-blok';
        let linkId = `comp-${moment.item.ID}`;

        switch (moment.type) {
            case 'compensatie':
                iconSrc = './icons/compensatieuren/neutraleuren.svg';
                title = `Compensatie: ${title}`;
                className += ' compensatie-neutraal';
                break;
            case 'ruildag-gewerkt':
                iconSrc = './icons/compensatieuren/Plusuren.svg';
                const ruildagDatum = moment.item.ruildagStart ? new Date(moment.item.ruildagStart).toISOString().split('T')[0] : 'onbekend';
                title = `Gewerkte dag (geruild met ${ruildagDatum}). ${title}`;
                className += ' ruildag-plus';
                linkId = `ruildag-${moment.item.ID}`;
                break;
            case 'ruildag-vrij':
                iconSrc = './icons/compensatieuren/Minuren.svg';
                const gewerkteDatum = new Date(moment.item.StartCompensatieUren).toISOString().split('T')[0];
                title = `Vrije dag (gewerkt op ${gewerkteDatum}). ${title}`;
                className += ' ruildag-min';
                linkId = `ruildag-${moment.item.ID}`;
                break;
        }

        // Create event handlers for the compensatie block
        const handleContextMenu = (e) => {
            if (options.onContextMenu) {
                e.preventDefault();
                e.stopPropagation(); // Prevent the cell's context menu from also triggering
                console.log('Compensatie uren right-clicked:', moment.item);
                options.onContextMenu(e, moment.item);
            }
        };

        const handleClick = (e) => {
            if (options.onClick) {
                e.stopPropagation(); // Prevent the cell's click handler from also triggering
                console.log('Compensatie uren clicked:', moment.item);
                options.onClick(e, moment.item);
            }
        };

        return h('div', {
            key: `${moment.item.ID}-${moment.type}`,
            className: 'compensatie-uur-container',
            'data-medewerker': moment.item.MedewerkerNaam || 'Onbekend',
            'data-datum': moment.item.Datum || moment.item.StartCompensatieUren || new Date().toISOString(),
            'data-uren': moment.item.Uren || moment.item.AantalUren || moment.item.UrenTotaal || 0,
            'data-toelichting': moment.item.Toelichting || moment.item.Omschrijving || '',
            'data-type': moment.type,
            onContextMenu: handleContextMenu,
            onClick: handleClick,
            ref: (element) => {
                if (element && !element.dataset.tooltipAttached) {
                    TooltipManager.attach(element, () => {
                        return TooltipManager.createCompensatieTooltip({
                            ...moment.item,
                            MedewerkerNaam: moment.item.MedewerkerNaam || 'Onbekend',
                            Datum: moment.item.Datum || moment.item.StartCompensatieUren,
                            AantalUren: moment.item.Uren || moment.item.AantalUren || moment.item.UrenTotaal || 0
                        });
                    });
                }
            }
        }, h('div', {
            className: className,
            'data-link-id': linkId
        }, h('img', { src: iconSrc, className: 'compensatie-icon-svg', alt: moment.type })));
    });
};

/**
 * Component voor een enkele dag-cel in het rooster.
 * @param {object} props
 * @param {Date} props.dag - De datum van de cel.
 * @param {object} props.medewerker - De medewerker voor deze rij.
 * @param {function} props.onContextMenu - Functie die wordt aangeroepen bij een rechtermuisklik.
 * @param {function} props.getVerlofVoorDag - Functie om verlof op te halen.
 * @param {function} props.getZittingsvrijVoorDag - Functie om zittingsvrij op te halen.
 * @param {function} props.getCompensatieUrenVoorDag - Functie om compensatie-uren op te halen.
 * @param {object} props.shiftTypes - Beschikbare shift types.
 * @param {function} props.onCellClick - Functie voor cel klik.
 * @param {boolean} props.isSelected - Of deze cel geselecteerd is.
 * @param {boolean} props.isFirstClick - Of deze cel de eerste klik is.
 * @param {string} props.feestdagNaam - Naam van de feestdag (indien van toepassing).
 */
export { renderCompensatieMomenten };

console.log("DagCell component loaded successfully.");