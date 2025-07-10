react-dom.development.js:22888  Uncaught TypeError: Cannot read properties of null (reading 'then')
    at Verlofroostern.aspx:63:58
    at commitHookEffectListMount (react-dom.development.js:23199:28)
    at commitPassiveMountOnFiber (react-dom.development.js:24980:13)
    at commitPassiveMountEffects_complete (react-dom.development.js:24940:11)
    at commitPassiveMountEffects_begin (react-dom.development.js:24927:9)
    at commitPassiveMountEffects (react-dom.development.js:24915:5)
    at flushPassiveEffectsImpl (react-dom.development.js:27088:5)
    at flushPassiveEffects (react-dom.development.js:27033:16)
    at react-dom.development.js:26818:11
    at workLoop (react.development.js:2653:36)
(anonymous) @ Verlofroostern.aspx:63
commitHookEffectListMount @ react-dom.development.js:23199
commitPassiveMountOnFiber @ react-dom.development.js:24980
commitPassiveMountEffects_complete @ react-dom.development.js:24940
commitPassiveMountEffects_begin @ react-dom.development.js:24927
commitPassiveMountEffects @ react-dom.development.js:24915
flushPassiveEffectsImpl @ react-dom.development.js:27088
flushPassiveEffects @ react-dom.development.js:27033
(anonymous) @ react-dom.development.js:26818
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
react-dom.development.js:18714  The above error occurred in the <NavigationButtons> component:

    at NavigationButtons (https://som.org.om.local/sites/MulderT/customPW/Verlof/cpw/Rooster/Verlofroostern.aspx:49:38)
    at div
    at div
    at div
    at App (https://som.org.om.local/sites/MulderT/customPW/Verlof/cpw/Rooster/Verlofroostern.aspx:481:24)
    at UserRegistrationCheck (https://som.org.om.local/sites/MulderT/customPW/Verlof/cpw/Rooster/Verlofroostern.aspx:230:42)
    at MainAppWrapper (https://som.org.om.local/sites/MulderT/customPW/Verlof/cpw/Rooster/Verlofroostern.aspx:559:43)
    at ErrorBoundary (https://som.org.om.local/sites/MulderT/customPW/Verlof/cpw/Rooster/Verlofroostern.aspx:203:17)

React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.
logCapturedError @ react-dom.development.js:18714
callback @ react-dom.development.js:18782
callCallback @ react-dom.development.js:15046
commitUpdateQueue @ react-dom.development.js:15067
commitLayoutEffectOnFiber @ react-dom.development.js:23413
commitLayoutMountEffects_complete @ react-dom.development.js:24737
commitLayoutEffects_begin @ react-dom.development.js:24723
commitLayoutEffects @ react-dom.development.js:24661
commitRootImpl @ react-dom.development.js:26872
commitRoot @ react-dom.development.js:26731
performSyncWorkOnRoot @ react-dom.development.js:26166
flushSyncCallbacks @ react-dom.development.js:12052
flushPassiveEffectsImpl @ react-dom.development.js:27109
flushPassiveEffects @ react-dom.development.js:27033
(anonymous) @ react-dom.development.js:26818
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
Verlofroostern.aspx:212  Error caught by boundary: TypeError: Cannot read properties of null (reading 'then')
    at Verlofroostern.aspx:63:58
    at commitHookEffectListMount (react-dom.development.js:23199:28)
    at commitPassiveMountOnFiber (react-dom.development.js:24980:13)
    at commitPassiveMountEffects_complete (react-dom.development.js:24940:11)
    at commitPassiveMountEffects_begin (react-dom.development.js:24927:9)
    at commitPassiveMountEffects (react-dom.development.js:24915:5)
    at flushPassiveEffectsImpl (react-dom.development.js:27088:5)
    at flushPassiveEffects (react-dom.development.js:27033:16)
    at react-dom.development.js:26818:11
    at workLoop (react.development.js:2653:36) {componentStack: '\n    at NavigationButtons (https://som.org.om.loca…PW/Verlof/cpw/Rooster/Verlofroostern.aspx:203:17)'}
componentDidCatch @ Verlofroostern.aspx:212
callback @ react-dom.development.js:18795
callCallback @ react-dom.development.js:15046
commitUpdateQueue @ react-dom.development.js:15067
commitLayoutEffectOnFiber @ react-dom.development.js:23413
commitLayoutMountEffects_complete @ react-dom.development.js:24737
commitLayoutEffects_begin @ react-dom.development.js:24723
commitLayoutEffects @ react-dom.development.js:24661
commitRootImpl @ react-dom.development.js:26872
commitRoot @ react-dom.development.js:26731
performSyncWorkOnRoot @ react-dom.development.js:26166
flushSyncCallbacks @ react-dom.development.js:12052
flushPassiveEffectsImpl @ react-dom.development.js:27109
flushPassiveEffects @ react-dom.development.js:27033
(anonymous) @ react-dom.development.js:26818
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
