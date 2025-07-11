---
applyTo: '**'
---

# Verlough Codebase - AI Coding Agent Instructions

## Code Formatting & Style Guide

### React Components Pattern
When creating or editing React components, follow these strict formatting patterns:

#### Component Structure
```javascript
// 1. Import statements (external libraries first, then local modules)
import { getCurrentUserInfo } from '../../services/sharepointService.js';

// 2. React destructuring at the top
const { createElement: h, useState, useEffect } = React;

// 3. Helper functions before main component
const helperFunction = (param1, param2) => {
    // implementation
};

// 4. Main component with proper JSDoc comments
/**
 * Component description
 * @param {object} props - Component properties
 * @param {boolean} props.isOpen - Description
 * @param {function} props.onClose - Description
 */
const ComponentName = ({ prop1, prop2, ...otherProps }) => {
    // State declarations first
    const [state1, setState1] = useState(initialValue);
    const [state2, setState2] = useState(initialValue);
    
    // Effects after state
    useEffect(() => {
        // effect logic
    }, [dependencies]);
    
    // Event handlers
    const handleEvent = (e) => {
        // handler logic
    };
    
    // Render
    return h('div', { className: 'component-container' },
        h('h2', null, 'Title'),
        h('button', { onClick: handleEvent }, 'Action')
    );
};

export default ComponentName;
```

#### React Element Creation
- **ALWAYS** use `h()` instead of JSX: `h('div', { className: 'container' }, content)`
- **Prop objects** on separate lines for readability:
```javascript
h('button', { 
    className: 'btn btn-primary',
    onClick: handleClick,
    disabled: isLoading 
}, 'Button Text')
```

#### Component Import/Export Pattern
```javascript
// At top of file
const { createElement: h, useState, useEffect, useMemo } = React;

// At bottom of file
export default ComponentName;

// Debug logging
console.log("ComponentName loaded successfully.");
```

### CSS Styling Patterns

#### CSS Variable Structure
```css
/* ==========================================================================
   SECTION NAME (ALL CAPS)
   ========================================================================== */

:root {
    /* Color Variables - Semantic naming */
    --primary-licht: #3b82f6;
    --primary-donker: #1e40af;
    --primary-focus: #60a5fa;
    
    /* Spacing Variables - Consistent scale */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    
    /* Border Radius - Consistent scale */
    --radius-sm: 3px;
    --radius-md: 6px;
    --radius-lg: 8px;
    
    /* Shadows - Layered system */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
}
```

#### Theme Support Pattern
```css
/* Light theme variables */
body.light-theme {
    --text-main-lm: var(--gray-900);
    --bg-primary-lm: var(--white);
    --card-bg-lm: var(--white);
}

/* Dark theme variables */
body.dark-theme {
    --text-main-dm: var(--gray-100);
    --bg-primary-dm: var(--gray-900);
    --card-bg-dm: var(--gray-800);
}

/* Component usage */
.component {
    background-color: var(--bg-primary-lm);
    color: var(--text-main-lm);
}

body.dark-theme .component {
    background-color: var(--bg-primary-dm);
    color: var(--text-main-dm);
}
```

#### CSS Class Naming
- Use kebab-case: `.btn-primary`, `.modal-overlay`
- Semantic names: `.btn-approve`, `.btn-reject`, `.status-success`
- Component prefixes: `.rooster-cell`, `.modal-header`, `.form-input`

#### Button Styling Pattern
```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    border: 1px solid transparent;
    cursor: pointer;
    gap: var(--space-xs);
}

.btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.btn-primary {
    background: var(--primary-licht);
    color: white;
    border-color: var(--primary-licht);
}

.btn-primary:hover {
    background: var(--primary-donker);
    border-color: var(--primary-donker);
}
```

### File Organization

#### JavaScript Module Structure
```
js/
├── config/           # Configuration files
├── core/            # Core application logic  
├── services/        # SharePoint and external services
├── ui/              # UI components
│   ├── forms/       # Form components
│   └── ...
├── utils/           # Utility functions
└── tutorial/        # Help and tutorial components
```

#### CSS File Structure
```
css/
├── verlofrooster_stijl.css     # Main application styles
├── verlofrooster_styling.css   # Additional styling
└── ...

pages/
├── [pageType]/
│   ├── css/         # Page-specific styles
│   └── js/          # Page-specific logic
```

### SharePoint Integration Patterns

#### Service Import Pattern
```javascript
import { 
    fetchSharePointList, 
    getCurrentUser, 
    createSharePointListItem,
    updateSharePointListItem 
} from '../services/sharepointService.js';
```

#### Data Loading Pattern
```javascript
const loadData = async () => {
    try {
        setLoading(true);
        const data = await fetchSharePointList('ListName');
        setData(data);
    } catch (error) {
        console.error('Error loading data:', error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
};
```

### Comments & Documentation

#### JSDoc Comments
```javascript
/**
 * Function description
 * @param {string} param1 - Parameter description
 * @param {object} param2 - Object parameter
 * @param {string} param2.property - Object property
 * @returns {Promise<Array>} Description of return value
 */
const functionName = async (param1, param2) => {
    // implementation
};
```

#### CSS Section Headers
```css
/* ==========================================================================
   SECTION NAME - DESCRIPTIVE SUBTITLE
   ========================================================================== */
```

#### Code Comments
```javascript
// Single line comments for brief explanations
/* 
 * Multi-line comments for complex logic
 * Explain the 'why', not the 'what'
 */
```

### Error Handling

#### Standard Error Pattern
```javascript
try {
    const result = await operation();
    return result;
} catch (error) {
    console.error('[ComponentName] Error description:', error);
    setError(`User-friendly error message: ${error.message}`);
    throw error; // Re-throw if needed
}
```

### State Management

#### React State Pattern
```javascript
// Group related state
const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: ''
});

// Update pattern
const updateField = (field, value) => {
    setFormData(prev => ({
        ...prev,
        [field]: value
    }));
};
```

### Performance Considerations

#### Component Optimization
```javascript
// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
    return computeExpensiveValue(data);
}, [data]);

// Use useCallback for event handlers
const handleClick = useCallback((e) => {
    // handler logic
}, [dependency]);
```

### Accessibility

#### ARIA and Semantic HTML
```javascript
h('button', {
    'aria-label': 'Close modal',
    'aria-expanded': isOpen,
    role: 'button'
}, 'Close')
```

### Console Logging

#### Debug Pattern
```javascript
console.log('[ComponentName] Operation description:', data);
console.warn('[ComponentName] Warning message:', warning);
console.error('[ComponentName] Error occurred:', error);
```

---

## Critical Rules

1. **React Elements**: Always use `h()` - never JSX syntax
2. **CSS Variables**: Use existing CSS variables, don't hardcode values  
3. **File Extensions**: Always `.js` for JavaScript, never `.jsx`
4. **Import Paths**: Use relative paths with `.js` extension
5. **SharePoint**: Follow existing service patterns for data operations
6. **Themes**: Support both light and dark themes in all styling
7. **Error Handling**: Always wrap async operations in try/catch
8. **Console Logs**: Include component name in brackets for debugging
9. **Performance**: Use React hooks properly (useMemo, useCallback)
10. **Accessibility**: Include proper ARIA attributes and semantic HTML

---

*This guide ensures consistency with the existing Verlough codebase patterns and SharePoint integration requirements.*
