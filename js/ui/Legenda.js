
const { createElement: h } = React;

const Legenda = ({ shiftTypes, dagenIndicators }) => {
    if ((!shiftTypes || Object.keys(shiftTypes).length === 0) && (!dagenIndicators || Object.keys(dagenIndicators).length === 0)) {
        return null;
    }

    return h('div', { id: 'legenda-container', className: 'legenda-container' },
        h('span', { className: 'legenda-titel' }, 'Legenda:'),
        // Verlof/Ziekte types (VER, ZKT, etc.)
        ...Object.values(shiftTypes || {}).map((type, index) => [
            index > 0 && h('span', { key: `divider-shift-${index}`, className: 'legenda-divider' }, '|'),
            h('div', { key: type.id, className: 'legenda-item' },
                h('div', { className: 'legenda-kleur', style: { backgroundColor: type.kleur } }),
                h('span', null, type.label)
            )
        ]).flat().filter(Boolean),
        // Rooster indicatoren (VVM, VVO, VVD, etc.)
        Object.values(dagenIndicators || {}).length > 0 && Object.values(shiftTypes || {}).length > 0 && h('span', { key: 'main-divider-1', className: 'legenda-divider' }, '|'),
        ...Object.values(dagenIndicators || {}).map((indicator, index) => [
            index > 0 && h('span', { key: `divider-dagen-${index}`, className: 'legenda-divider' }, '|'),
            h('div', { key: indicator.Title, className: 'legenda-item' },
                h('div', { className: 'legenda-kleur', style: { backgroundColor: indicator.kleur } }),
                h('span', null, indicator.Title)
            )
        ]).flat().filter(Boolean),
        // Compensatie icons
        (Object.values(shiftTypes || {}).length > 0 || Object.values(dagenIndicators || {}).length > 0) && h('span', { key: 'main-divider-2', className: 'legenda-divider' }, '|'),
        h('div', { key: 'compensatie-min', className: 'legenda-item' },
            h('div', { className: 'legenda-icon' },
                h('img', { src: './icons/compensatieuren/Minuren.svg', alt: 'Min uren', style: { width: '16px', height: '16px' } })
            ),
            h('span', null, 'Min Uren')
        ),
        h('span', { key: 'divider-comp-1', className: 'legenda-divider' }, '|'),
        h('div', { key: 'compensatie-plus', className: 'legenda-item' },
            h('div', { className: 'legenda-icon' },
                h('img', { src: './icons/compensatieuren/Plusuren.svg', alt: 'Plus uren', style: { width: '16px', height: '16px' } })
            ),
            h('span', null, 'Plus Uren')
        ),
        h('span', { key: 'divider-comp-2', className: 'legenda-divider' }, '|'),
        h('div', { key: 'compensatie-neutraal', className: 'legenda-item' },
            h('div', { className: 'legenda-icon' },
                h('img', { src: './icons/compensatieuren/neutraleuren.svg', alt: 'Neutrale uren', style: { width: '16px', height: '16px' } })
            ),
            h('span', null, 'Neutrale Uren')
        ),
        h('span', { key: 'divider-horen', className: 'legenda-divider' }, '|'),
        h('div', { key: 'horen-ja', className: 'legenda-item' },
            h('div', { className: 'legenda-icon' },
                h('img', { src: './icons/profilecards/horen-ja.svg', alt: 'Beschikbaar om te horen', style: { width: '16px', height: '16px' } })
            ),
            h('span', null, 'Beschikbaar om te horen')
        ),
        h('span', { key: 'divider-horen-2', className: 'legenda-divider' }, '|'),
        h('div', { key: 'horen-nee', className: 'legenda-item' },
            h('div', { className: 'legenda-icon' },
                h('img', { src: './icons/profilecards/horen-nee.svg', alt: 'Niet beschikbaar om te horen', style: { width: '16px', height: '16px' } })
            ),
            h('span', null, 'Niet beschikbaar om te horen')
        )
    );
};

export default Legenda;
