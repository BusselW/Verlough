# CSS Classes Comparison: RoosterApp Symbol vs Actual Implementation

| CSS Class/ID from Documentation | CSS Class/ID in roosterApp.js | Exists? |
|----------------------------------|--------------------------------|---------|
| **IDs** |
| `#toolbar` | `id: 'toolbar'` | ✅ |
| `#periode-navigatie` | `id: 'periode-navigatie'` | ✅ |
| `#filter-groep` | `id: 'filter-groep'` | ✅ |
| `#legenda-container` | `id: 'legenda-container'` | ✅ |
| `#rooster-table` | `id: 'rooster-table'` | ✅ |
| `#fab-container` | `id: 'fab-container'` (passed as prop) | ✅ |
| `#medewerker-kolom` | `id: 'medewerker-kolom'` | ✅ |
| **Main Structure Classes** |
| `.sticky-header-container` | `className: 'sticky-header-container'` | ✅ |
| `.toolbar` | `className: 'toolbar'` | ✅ |
| `.toolbar-content` | `className: 'toolbar-content'` | ✅ |
| `.periode-navigatie` | `className: 'periode-navigatie'` | ✅ |
| `.periode-display` | `className: 'periode-display'` | ✅ |
| `.weergave-toggle` | `className: 'weergave-toggle'` | ✅ |
| `.glider` | `className: 'glider'` | ✅ |
| `.weergave-optie` | `className: 'weergave-optie'` | ✅ |
| `.filter-groep` | `className: 'filter-groep'` | ✅ |
| `.zoek-input` | `className: 'zoek-input'` | ✅ |
| `.filter-select` | `className: 'filter-select'` | ✅ |
| `.legenda-container` | `className: 'legenda-container'` | ✅ |
| `.legenda-titel` | `className: 'legenda-titel'` | ✅ |
| `.legenda-item` | `className: 'legenda-item'` | ✅ |
| `.legenda-kleur` | `className: 'legenda-kleur'` | ✅ |
| `.main-content` | `className: 'main-content'` | ✅ |
| `.table-responsive-wrapper` | `className: 'table-responsive-wrapper'` | ✅ |
| `.rooster-table` | `className: 'rooster-table'` | ✅ |
| `.week-view` | `className: '${weergaveType}-view'` (dynamic: week-view) | ✅ |
| `.maand-view` | `className: '${weergaveType}-view'` (dynamic: maand-view) | ✅ |
| `.rooster-thead` | `className: 'rooster-thead'` | ✅ |
| `.team-header-row` | `className: 'team-header-row'` | ✅ |
| `.team-header` | `className: 'team-header'` | ✅ |
| `.medewerker-row` | `className: 'medewerker-row'` | ✅ |
| `.medewerker-naam` | `className: 'medewerker-naam'` | ✅ |
| `.medewerker-info` | `className: 'medewerker-info'` | ✅ |
| `.medewerker-avatar-container` | `className: 'medewerker-avatar-container'` | ✅ |
| `.medewerker-avatar` | `className: 'medewerker-avatar'` | ✅ |
| `.medewerker-details` | `className: 'medewerker-details'` | ✅ |
| `.naam` | `className: 'naam medewerker-naam'` | ✅ |
| `.functie` | `className: 'functie'` | ✅ |
| **Header Classes** |
| `.medewerker-kolom` | `className: 'medewerker-kolom'` | ✅ |
| `.medewerker-header-container` | `className: 'medewerker-header-container'` | ✅ |
| `.sort-button` | `className: 'sort-button'` | ✅ |
| `.dag-kolom` | `className: 'dag-kolom'` | ✅ |
| `.weekend` | `${isWeekend ? 'weekend' : ''}` | ✅ |
| `.feestdag` | `${feestdagNaam ? 'feestdag' : ''}` | ✅ |
| `.vandaag` | `${isToday ? 'vandaag' : ''}` | ✅ |
| `.dag-header` | `className: 'dag-header'` | ✅ |
| `.dag-naam` | `className: 'dag-naam'` | ✅ |
| `.dag-nummer` | `className: 'dag-nummer'` | ✅ |
| `.vandaag-indicator` | `className: 'vandaag-indicator'` | ✅ |
| **Font Awesome Icons** |
| `.fas` | `className: 'fas'` | ✅ |
| `.fa-sort-down` | `className: 'fa-sort-down'` | ✅ |
| `.fa-sort-up` | `className: 'fa-sort-up'` | ✅ |
| `.fa-chevron-left` | `className: 'fas fa-chevron-left'` | ✅ |
| `.fa-chevron-right` | `className: 'fas fa-chevron-right'` | ✅ |
| `.fa-exclamation-triangle` | `className: 'fas fa-exclamation-triangle'` | ✅ |
| `.fa-sync-alt` | `className: 'fas fa-sync-alt'` | ✅ |
| `.fa-calendar-plus` | `icon: 'fa-calendar-plus'` (FAB) | ✅ |
| `.fa-notes-medical` | `icon: 'fa-notes-medical'` (FAB) | ✅ |
| `.fa-clock` | `icon: 'fa-clock'` (FAB) | ✅ |
| `.fa-gavel` | `icon: 'fa-gavel'` (FAB) | ✅ |
| `.fa-times` | Not found in main component | ❌ |
| `.fa-plus` | Not found in main component | ❌ |
| **Loading/Error States** |
| `.flex` | `className: 'flex'` | ✅ |
| `.items-center` | `className: 'items-center'` | ✅ |
| `.justify-center` | `className: 'justify-center'` | ✅ |
| `.min-h-screen` | `className: 'min-h-screen'` | ✅ |
| `.bg-gray-50` | `className: 'bg-gray-50'` | ✅ |
| `.text-center` | `className: 'text-center'` | ✅ |
| `.loading-spinner` | `className: 'loading-spinner'` | ✅ |
| `.text-xl` | `className: 'text-xl'` | ✅ |
| `.font-medium` | `className: 'font-medium'` | ✅ |
| `.text-gray-900` | `className: 'text-gray-900'` | ✅ |
| `.text-gray-600` | `className: 'text-gray-600'` | ✅ |
| `.mt-2` | `className: 'mt-2'` | ✅ |
| `.max-w-md` | `className: 'max-w-md'` | ✅ |
| `.mx-auto` | `className: 'mx-auto'` | ✅ |
| `.bg-white` | `className: 'bg-white'` | ✅ |
| `.rounded-lg` | `className: 'rounded-lg'` | ✅ |
| `.shadow-lg` | `className: 'shadow-lg'` | ✅ |
| `.p-8` | `className: 'p-8'` | ✅ |
| `.mb-6` | `className: 'mb-6'` | ✅ |
| `.h-12` | `className: 'h-12'` | ✅ |
| `.w-12` | `className: 'w-12'` | ✅ |
| `.rounded-full` | `className: 'rounded-full'` | ✅ |
| `.bg-red-100` | `className: 'bg-red-100'` | ✅ |
| `.mb-4` | `className: 'mb-4'` | ✅ |
| `.text-red-600` | `className: 'text-red-600'` | ✅ |
| `.font-semibold` | `className: 'font-semibold'` | ✅ |
| `.mb-2` | `className: 'mb-2'` | ✅ |
| `.bg-blue-600` | `className: 'bg-blue-600'` | ✅ |
| `.hover:bg-blue-700` | `className: 'hover:bg-blue-700'` | ✅ |
| `.text-white` | `className: 'text-white'` | ✅ |
| `.py-3` | `className: 'py-3'` | ✅ |
| `.px-4` | `className: 'px-4'` | ✅ |
| `.transition` | `className: 'transition'` | ✅ |
| `.duration-200` | `className: 'duration-200'` | ✅ |
| `.mr-2` | `className: 'mr-2'` | ✅ |
| **Data Attributes** |
| `data-weergave` | `'data-weergave': weergaveType` | ✅ |

