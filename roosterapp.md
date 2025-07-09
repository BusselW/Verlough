# RoosterApp.js Function Analysis

## Functions in roosterApp.js:

1. **createHeaderCells()** - Helper function to create header cells
2. **handleCellClick(medewerker, dag, specificItem = null)** - Calendar cell click handler with two-click selection support
3. **showContextMenu(e, medewerker, dag, item)** - Context menu handler
4. **getItemTypeAndList(item)** - Helper to determine item type and list (nested inside showContextMenu)
5. **handleZittingsvrijMaken()** - FAB handler for creating zittingsvrij
6. **isDateInSelection(dag, medewerkerUsername)** - Helper to check if date is in current selection
7. **createCellContent(medewerker, dag)** - Create calendar cell content with all items and indicators
8. **handleCalendarCellClick(medewerker, dag)** - Main calendar cell click handler

## First 3 Functions to Remove from verlofRooster.aspx:

1. **createHeaderCells()**
2. **handleCellClick()**
3. **showContextMenu()**
