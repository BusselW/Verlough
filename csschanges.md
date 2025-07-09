# CSS Classes, Div IDs, and Data Attributes in RoosterApp Component

This document traces all CSS classes, div IDs, and data attributes used in the RoosterApp component and its dependencies.

## RoosterApp Component (js/core/roosterApp.js)

### Main Structure IDs
- `#toolbar` - Main toolbar container
- `#periode-navigatie` - Period navigation section
- `#filter-groep` - Filter controls group
- `#legenda-container` - Legend container
- `#rooster-table` - Main roster table
- `#fab-container` - Floating action button container
- `#medewerker-kolom` - Employee column header

### CSS Classes

#### Table Structure
- `.sticky-header-container` - Sticky header wrapper
- `.toolbar` - Toolbar styling
- `.toolbar-content` - Toolbar content wrapper
- `.periode-navigatie` - Period navigation styling
- `.periode-display` - Period display text
- `.weergave-toggle` - View toggle controls
- `.glider` - Toggle slider element
- `.weergave-optie` - View option buttons (Week/Month)
- `.filter-groep` - Filter group container
- `.zoek-input` - Search input field
- `.filter-select` - Filter dropdown
- `.legenda-container` - Legend container
- `.legenda-titel` - Legend title
- `.legenda-item` - Individual legend items
- `.legenda-kleur` - Legend color indicators
- `.main-content` - Main content area
- `.table-responsive-wrapper` - Responsive table wrapper
- `.rooster-table` - Main table styling
- `.week-view` - Week view styling
- `.maand-view` - Month view styling
- `.rooster-thead` - Table header styling
- `.team-header-row` - Team header row
- `.team-header` - Team header cells
- `.medewerker-row` - Employee row
- `.medewerker-naam` - Employee name cell
- `.medewerker-info` - Employee info container
- `.medewerker-avatar-container` - Avatar container
- `.medewerker-avatar` - Employee avatar
- `.medewerker-details` - Employee details container
- `.naam` - Name styling
- `.functie` - Function/role styling

#### Header and Day Columns
- `.medewerker-kolom` - Employee column
- `.medewerker-header-container` - Employee header wrapper
- `.sort-button` - Sort button
- `.dag-header` - Day header container
- `.dag-naam` - Day name
- `.dag-nummer` - Day number
- `.vandaag-indicator` - Today indicator

#### Font Awesome Icons
- `.fas` - Font Awesome solid icons
- `.fa-sort-down` - Sort down arrow
- `.fa-sort-up` - Sort up arrow
- `.fa-chevron-left` - Left chevron
- `.fa-chevron-right` - Right chevron
- `.fa-exclamation-triangle` - Error/warning triangle
- `.fa-sync-alt` - Refresh/reload icon
- `.fa-times` - Close/X icon
- `.fa-plus` - Plus icon

#### Loading and Error States
- `.flex` - Flexbox utility
- `.items-center` - Center items
- `.justify-center` - Center justify
- `.min-h-screen` - Minimum height screen
- `.bg-gray-50` - Gray background
- `.text-center` - Center text
- `.loading-spinner` - Loading spinner
- `.text-xl` - Extra large text
- `.font-medium` - Medium font weight
- `.text-gray-900` - Dark gray text
- `.text-gray-600` - Medium gray text
- `.mt-2` - Margin top
- `.max-w-md` - Maximum width medium
- `.mx-auto` - Margin x auto
- `.bg-white` - White background
- `.rounded-lg` - Large border radius
- `.shadow-lg` - Large shadow
- `.p-8` - Padding 8
- `.mb-6` - Margin bottom 6
- `.h-12` - Height 12
- `.w-12` - Width 12
- `.rounded-full` - Full border radius
- `.bg-red-100` - Light red background
- `.mb-4` - Margin bottom 4
- `.text-red-600` - Red text
- `.text-xl` - Extra large text
- `.font-semibold` - Semi-bold font
- `.mb-2` - Margin bottom 2
- `.bg-blue-600` - Blue background
- `.hover:bg-blue-700` - Blue hover state
- `.text-white` - White text
- `.font-medium` - Medium font weight
- `.py-3` - Padding y 3
- `.px-4` - Padding x 4
- `.rounded-lg` - Large border radius
- `.transition` - CSS transition
- `.duration-200` - Transition duration
- `.mr-2` - Margin right 2

### Data Attributes

#### View Toggle
- `data-weergave` - Current view type (week/month)

#### Employee Data
- `data-username` - Employee username
- `data-medewerker` - Employee name/title

## DagCell Component (js/ui/dagCell.js)

### CSS Classes
- `.compensatie-uur-blok` - Compensation hour block
- `.compensatie-neutraal` - Neutral compensation
- `.ruildag-plus` - Swap day plus
- `.ruildag-min` - Swap day minus
- `.compensatie-uur-container` - Compensation hour container
- `.compensatie-icon-svg` - Compensation icon SVG
- `.dag-indicator-blok` - Day indicator block
- `.zittingsvrij-blok` - Court-free block
- `.dag-cel` - Day cell
- `.weekend` - Weekend styling
- `.feestdag` - Holiday styling

### Data Attributes
- `data-medewerker` - Employee name
- `data-datum` - Date
- `data-uren` - Hours count
- `data-toelichting` - Description/comment
- `data-type` - Type of entry
- `data-link-id` - Link identifier
- `data-afkorting` - Abbreviation
- `data-titel` - Title
- `data-startdatum` - Start date
- `data-einddatum` - End date
- `data-status` - Status
- `data-feestdag` - Holiday name

## FloatingActionButton Component (js/ui/FloatingActionButton.js)

### CSS Classes
- `.fab-container` - FAB container
- `.fab-actions` - FAB actions container
- `.visible` - Visibility state
- `.fab-action` - Individual FAB action
- `.fab-action-label` - FAB action label
- `.fab-action-button` - FAB action button
- `.fab-main-button` - Main FAB button
- `.open` - Open state

## Modal Component (js/ui/Modal.js)

### CSS Classes
- `.modal-overlay` - Modal overlay
- `.modal` - Modal container
- `.modal-header` - Modal header
- `.modal-close` - Modal close button
- `.modal-body` - Modal body
- `.modal-footer` - Modal footer

## ContextMenu Component (js/ui/ContextMenu.js)

### CSS Classes
- `.submenu-list` - Submenu list
- `.context-menu-list` - Context menu list
- `.context-menu-item` - Context menu item
- `.has-submenu` - Has submenu indicator
- `.submenu-open` - Submenu open state
- `.menu-icon` - Menu icon
- `.menu-icon-svg` - SVG menu icon
- `.menu-label` - Menu label
- `.submenu-arrow` - Submenu arrow
- `.submenu` - Submenu container
- `.context-menu-container` - Context menu container

## ProfielKaarten Component (js/ui/profielkaarten.js)

### CSS Classes
- `.profile-card` - Profile card container
- `.profile-card-header` - Profile card header
- `.profile-card-avatar` - Profile card avatar
- `.profile-card-info` - Profile card info
- `.profile-card-name` - Profile card name
- `.profile-card-function` - Profile card function
- `.profile-card-team-leader` - Team leader indicator
- `.profile-card-senior` - Senior indicator
- `.profile-card-email` - Email display
- `.profile-card-hearing` - Hearing status
- `.profile-card-hearing-icon` - Hearing icon
- `.profile-card-hours` - Work hours section
- `.profile-card-hours-title` - Hours title
- `.profile-card-hours-grid` - Hours grid
- `.day-header` - Day header
- `.day-row` - Day row
- `.day-name` - Day name
- `.day-time` - Day time
- `.day-hours` - Day hours
- `.day-type` - Day type
- `.day-type-chip` - Day type chip

### Data Attributes
- `data-username` - Username for profile cards

## UserInfo Component (js/ui/userinfo.js)

### CSS Classes
- `.medewerker-info` - Employee info container
- `.medewerker-profile` - Employee profile
- `.medewerker-avatar` - Employee avatar
- `.medewerker-text` - Employee text wrapper
- `.medewerker-naam` - Employee name
- `.medewerker-functie` - Employee function

### Data Attributes
- `data-username` - Username attribute

## Horen Component (js/ui/horen.js)

### CSS Classes
- `.horen-status` - Hearing status
- `.horen-ja` - Can hear (yes)
- `.horen-nee` - Cannot hear (no)
- `.horen-icon` - Hearing icon

## TooltipBar Component (js/ui/tooltipbar.js)

### CSS Classes
- `.custom-tooltip` - Custom tooltip styling
- `.verlof-blok` - Leave block
- `.ziekte-blok` - Sick leave block
- `.btn` - Button styling

### Data Attributes
- `data-tooltip` - Tooltip content
- `data-tooltip-attached` - Tooltip attachment flag
- `data-original-title` - Original title attribute
- `data-date` - Date attribute
- `data-datum` - Dutch date attribute

## Additional Form Components

Form components (VerlofAanvraagForm, ZiekteMeldingForm, CompensatieUrenForm, ZittingsvrijForm) would typically include:

### Common Form Classes
- `.form-group` - Form group container
- `.form-control` - Form control styling
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.form-label` - Form label
- `.form-input` - Form input
- `.form-select` - Form select
- `.form-textarea` - Form textarea
- `.error-message` - Error message
- `.success-message` - Success message

## Summary

The RoosterApp component uses a comprehensive set of CSS classes and data attributes for:

1. **Layout Structure**: Table layout, headers, toolbars, filters
2. **Visual States**: Loading, error, open/closed states
3. **Data Binding**: Employee data, dates, hours, status information
4. **Interactive Elements**: Buttons, dropdowns, tooltips, modals
5. **Responsive Design**: Flexbox utilities, spacing utilities
6. **Icon System**: Font Awesome icons throughout
7. **Theming**: Color utilities, shadows, borders

All these classes and attributes work together to create a fully functional roster management interface with proper styling, interactivity, and data presentation.
