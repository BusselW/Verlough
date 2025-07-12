/**
 * @file contextmenuN.js
 * @description Modern ES6 Context Menu component with proper permission handling
 * This component provides right-click context menus with SharePoint group-based permissions
 */

import { isUserInAnyGroup } from '../services/permissionService.js';

const { createElement: h, useEffect, useRef, useState, useLayoutEffect } = React;

/**
 * SharePoint groups with permission to manage other people's events
 */
const PRIVILEGED_GROUPS = [
    "1. Sharepoint beheer",
    "1.1. Mulder MT", 
    "2.6 Roosteraars",
    "2.3. Senioren beoordelen"
];

/**
 * Check if current user can manage events for others
 * @returns {Promise<boolean>} True if user has privileged access
 */
export const canManageOthersEvents = async () => {
    try {
        const result = await isUserInAnyGroup(PRIVILEGED_GROUPS);
        console.log('🔐 canManageOthersEvents check:', { 
            groups: PRIVILEGED_GROUPS, 
            result 
        });
        return result;
    } catch (error) {
        console.error('❌ Error checking user permissions for managing others events:', error);
        return false;
    }
};

/**
 * Check if user can edit/delete a specific item
 * @param {object} item - The item to check permissions for
 * @param {string} currentUsername - The current user's username
 * @returns {Promise<boolean>} True if user can edit/delete the item
 */
export const canUserModifyItem = async (item, currentUsername) => {
    if (!item || !currentUsername) {
        console.log('❌ canUserModifyItem: Missing item or currentUsername', { 
            item: !!item, 
            currentUsername 
        });
        return false;
    }
    
    console.log('🔍 canUserModifyItem: Checking permissions for item:', { 
        itemOwner: item.MedewerkerID || item.Gebruikersnaam, 
        currentUsername 
    });
    
    // Check if user has privileged access (can modify any item)
    const hasPrivilegedAccess = await canManageOthersEvents();
    console.log('🔐 canUserModifyItem: Privileged access check result:', hasPrivilegedAccess);
    
    if (hasPrivilegedAccess) return true;
    
    // Check if it's the user's own item
    const itemOwner = item.MedewerkerID || item.Gebruikersnaam;
    const isOwnItem = itemOwner === currentUsername;
    console.log('👤 canUserModifyItem: Own item check:', { 
        itemOwner, 
        currentUsername, 
        isOwnItem 
    });
    
    return isOwnItem;
};

/**
 * Permission-aware context menu hook
 * @param {Array} items - Menu items with potential permission requirements
 * @param {string} currentUsername - Current user's username
 * @returns {Object} Filtered items and permission state
 */
export const useContextMenuPermissions = (items = [], currentUsername = null) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const [permissionsLoaded, setPermissionsLoaded] = useState(false);

    useEffect(() => {
        const filterItemsByPermissions = async () => {
            console.log('🔍 Filtering context menu items by permissions...');
            setPermissionsLoaded(false);
            
            const filtered = [];
            
            for (const item of items) {
                let shouldInclude = true;
                
                // Check if item requires specific permissions
                if (item.requiresPrivilegedAccess) {
                    shouldInclude = await canManageOthersEvents();
                    console.log(`🔐 Item "${item.label}" requires privileged access: ${shouldInclude}`);
                } else if (item.requiresOwnership && item.itemData && currentUsername) {
                    shouldInclude = await canUserModifyItem(item.itemData, currentUsername);
                    console.log(`👤 Item "${item.label}" requires ownership: ${shouldInclude}`);
                } else if (item.requiredGroups && item.requiredGroups.length > 0) {
                    try {
                        shouldInclude = await isUserInAnyGroup(item.requiredGroups);
                        console.log(`🔐 Item "${item.label}" group check: ${shouldInclude}`);
                    } catch (error) {
                        console.warn(`⚠️ Could not check permissions for "${item.label}":`, error);
                        shouldInclude = false;
                    }
                }
                
                if (shouldInclude) {
                    const filteredItem = { ...item };
                    
                    // Recursively filter sub-items if they exist
                    if (item.subItems && item.subItems.length > 0) {
                        const subItemsResult = await filterSubItems(item.subItems, currentUsername);
                        filteredItem.subItems = subItemsResult;
                        
                        // Only include parent if it has visible sub-items or its own action
                        if (filteredItem.subItems.length > 0 || item.onClick) {
                            filtered.push(filteredItem);
                        }
                    } else {
                        filtered.push(filteredItem);
                    }
                }
            }
            
            console.log('✅ Context menu items filtered:', {
                original: items.length,
                filtered: filtered.length,
                items: filtered.map(item => item.label)
            });
            
            setFilteredItems(filtered);
            setPermissionsLoaded(true);
        };
        
        if (items.length > 0) {
            filterItemsByPermissions();
        } else {
            setFilteredItems([]);
            setPermissionsLoaded(true);
        }
    }, [items, currentUsername]);

    return { filteredItems, permissionsLoaded };
};

/**
 * Helper function to filter sub-items recursively
 */
const filterSubItems = async (subItems, currentUsername) => {
    const filtered = [];
    
    for (const subItem of subItems) {
        let shouldInclude = true;
        
        if (subItem.requiresPrivilegedAccess) {
            shouldInclude = await canManageOthersEvents();
        } else if (subItem.requiresOwnership && subItem.itemData && currentUsername) {
            shouldInclude = await canUserModifyItem(subItem.itemData, currentUsername);
        } else if (subItem.requiredGroups && subItem.requiredGroups.length > 0) {
            try {
                shouldInclude = await isUserInAnyGroup(subItem.requiredGroups);
            } catch (error) {
                console.warn(`⚠️ Could not check permissions for sub-item "${subItem.label}":`, error);
                shouldInclude = false;
            }
        }
        
        if (shouldInclude) {
            filtered.push(subItem);
        }
    }
    
    return filtered;
};

/**
 * Modern Context Menu component with ES6 module patterns
 * @param {Object} props - Component props
 * @param {number} props.x - X coordinate for positioning
 * @param {number} props.y - Y coordinate for positioning
 * @param {Function} props.onClose - Function to close the menu
 * @param {Array} props.items - Menu items array
 * @param {string} props.currentUsername - Current user's username
 * @param {Object} props.firstClickData - First click data for two-click selection
 * @param {Object} props.selection - Current selection state
 * @param {Object} props.contextData - Additional context data (medewerker, dag, item)
 */
const ContextMenuN = ({ 
    x, 
    y, 
    onClose, 
    items = [], 
    currentUsername = null,
    firstClickData = null,
    selection = null,
    contextData = null
}) => {
    const menuRef = useRef(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [adjustedPosition, setAdjustedPosition] = useState({ x, y });
    
    // Use the permission-aware hook
    const { filteredItems, permissionsLoaded } = useContextMenuPermissions(items, currentUsername);

    // Handle clicks outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);

    // Adjust position to prevent menu from going off-screen
    useLayoutEffect(() => {
        if (menuRef.current && permissionsLoaded) {
            const rect = menuRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let adjustedX = x;
            let adjustedY = y;

            // Adjust horizontal position
            if (x + rect.width > viewportWidth) {
                adjustedX = viewportWidth - rect.width - 10;
            }

            // Adjust vertical position
            if (y + rect.height > viewportHeight) {
                adjustedY = viewportHeight - rect.height - 10;
            }

            // Ensure minimum positioning
            adjustedX = Math.max(10, adjustedX);
            adjustedY = Math.max(10, adjustedY);

            setAdjustedPosition({ x: adjustedX, y: adjustedY });
        }
    }, [x, y, permissionsLoaded, filteredItems]);

    // Don't render if no permissions loaded yet or no items to show
    if (!permissionsLoaded) {
        return h('div', {
            style: {
                position: 'fixed',
                left: x,
                top: y,
                zIndex: 9999,
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                minWidth: '120px'
            }
        },
            h('div', { 
                style: { 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '8px'
                } 
            },
                h('div', { className: 'loading-spinner-small' }),
                h('span', { style: { marginLeft: '8px', fontSize: '12px' } }, 'Laden...')
            )
        );
    }

    if (filteredItems.length === 0) {
        return null; // Don't show empty menus
    }

    const renderMenuItem = (item, index) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isActive = activeSubMenu === index;

        if (item.label === '---') {
            return h('div', {
                key: index,
                className: 'context-menu-separator'
            });
        }

        return h('div', {
            key: index,
            className: `context-menu-item ${item.disabled ? 'disabled' : ''} ${isActive && hasSubItems ? 'submenu-open' : ''}`,                        onClick: (e) => {
                            e.stopPropagation();
                            if (item.disabled) return;
                            
                            if (hasSubItems) {
                                setActiveSubMenu(isActive ? null : index);
                            } else if (item.onClick) {
                                // Pass context data to onClick handlers
                                const contextForHandler = {
                                    firstClickData,
                                    selection,
                                    contextData,
                                    currentUsername,
                                    event: e
                                };
                                
                                console.log('🎯 ContextMenuN: Executing onClick with context:', {
                                    itemLabel: item.label,
                                    hasFirstClick: !!firstClickData,
                                    hasSelection: !!selection,
                                    hasContextData: !!contextData
                                });
                                
                                item.onClick(contextForHandler);
                                onClose();
                            }
                        },
            onMouseEnter: () => {
                if (hasSubItems) {
                    setActiveSubMenu(index);
                }
            },
            style: {
                position: 'relative'
            }
        },
            // Icon
            item.icon && (item.iconType === 'svg' ? 
                h('img', { 
                    src: item.icon, 
                    alt: item.label,
                    style: { 
                        width: '16px', 
                        height: '16px', 
                        marginRight: '8px' 
                    } 
                }) : 
                h('i', { className: `fas ${item.icon}` })
            ),
            // Label text
            h('span', { className: 'context-menu-item-text' }, item.label),
            // Submenu arrow
            hasSubItems && h('i', { className: 'fas fa-chevron-right submenu-arrow' }),
            // Submenu if active
            isActive && hasSubItems && h('div', { 
                className: 'submenu',
                style: {
                    position: 'absolute',
                    left: '100%',
                    top: '-4px',
                    zIndex: 10000
                }
            },
                item.subItems.map((subItem, subIndex) =>
                    h('div', {
                        key: subIndex,
                        className: `context-menu-item ${subItem.disabled ? 'disabled' : ''}`,
                        onClick: (e) => {
                            e.stopPropagation();
                            if (subItem.disabled) return;
                            if (subItem.onClick) {
                                // Pass context data to submenu onClick handlers too
                                const contextForHandler = {
                                    firstClickData,
                                    selection,
                                    contextData,
                                    currentUsername,
                                    event: e
                                };
                                
                                console.log('🎯 ContextMenuN SubItem: Executing onClick with context:', {
                                    itemLabel: subItem.label,
                                    hasFirstClick: !!firstClickData,
                                    hasSelection: !!selection,
                                    hasContextData: !!contextData
                                });
                                
                                subItem.onClick(contextForHandler);
                                onClose();
                            }
                        }
                    },
                        subItem.icon && (subItem.iconType === 'svg' ? 
                            h('img', { 
                                src: subItem.icon, 
                                alt: subItem.label,
                                style: { 
                                    width: '16px', 
                                    height: '16px', 
                                    marginRight: '8px' 
                                } 
                            }) : 
                            h('i', { className: `fas ${subItem.icon}` })
                        ),
                        h('span', { className: 'context-menu-item-text' }, subItem.label)
                    )
                )
            )
        );
    };

    return h('div', {
        ref: menuRef,
        className: 'context-menu-container',
        style: {
            position: 'fixed',
            left: adjustedPosition.x,
            top: adjustedPosition.y,
            zIndex: 9999
        },
        onClick: (e) => e.stopPropagation()
    },
        filteredItems.map(renderMenuItem)
    );
};

export default ContextMenuN;

console.log('✅ ContextMenuN module loaded successfully.');
