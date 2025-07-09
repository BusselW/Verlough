roosterApp.js:1436  Uncaught ReferenceError: gefilterdeMedewerkers is not defined
    at roosterApp.js:1436:40
    at mountMemo (react-dom.development.js:16416:21)
    at Object.useMemo (react-dom.development.js:16861:18)
    at useMemo (react.development.js:1640:23)
    at RoosterApp (roosterApp.js:1433:34)
    at renderWithHooks (react-dom.development.js:15496:20)
    at mountIndeterminateComponent (react-dom.development.js:20113:15)
    at beginWork (react-dom.development.js:21636:18)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4151:16)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4200:18)
(anonymous) @ roosterApp.js:1436
mountMemo @ react-dom.development.js:16416
useMemo @ react-dom.development.js:16861
useMemo @ react.development.js:1640
RoosterApp @ roosterApp.js:1433
renderWithHooks @ react-dom.development.js:15496
mountIndeterminateComponent @ react-dom.development.js:20113
beginWork @ react-dom.development.js:21636
callCallback @ react-dom.development.js:4151
invokeGuardedCallbackDev @ react-dom.development.js:4200
invokeGuardedCallback @ react-dom.development.js:4264
beginWork$1 @ react-dom.development.js:27500
performUnitOfWork @ react-dom.development.js:26609
workLoopSync @ react-dom.development.js:26515
renderRootSync @ react-dom.development.js:26483
performConcurrentWorkOnRoot @ react-dom.development.js:25787
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
roosterApp.js:1436  Uncaught ReferenceError: gefilterdeMedewerkers is not defined
    at roosterApp.js:1436:40
    at mountMemo (react-dom.development.js:16416:21)
    at Object.useMemo (react-dom.development.js:16861:18)
    at useMemo (react.development.js:1640:23)
    at RoosterApp (roosterApp.js:1433:34)
    at renderWithHooks (react-dom.development.js:15496:20)
    at mountIndeterminateComponent (react-dom.development.js:20113:15)
    at beginWork (react-dom.development.js:21636:18)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4151:16)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4200:18)
(anonymous) @ roosterApp.js:1436
mountMemo @ react-dom.development.js:16416
useMemo @ react-dom.development.js:16861
useMemo @ react.development.js:1640
RoosterApp @ roosterApp.js:1433
renderWithHooks @ react-dom.development.js:15496
mountIndeterminateComponent @ react-dom.development.js:20113
beginWork @ react-dom.development.js:21636
callCallback @ react-dom.development.js:4151
invokeGuardedCallbackDev @ react-dom.development.js:4200
invokeGuardedCallback @ react-dom.development.js:4264
beginWork$1 @ react-dom.development.js:27500
performUnitOfWork @ react-dom.development.js:26609
workLoopSync @ react-dom.development.js:26515
renderRootSync @ react-dom.development.js:26483
recoverFromConcurrentError @ react-dom.development.js:25899
performConcurrentWorkOnRoot @ react-dom.development.js:25799
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
react-dom.development.js:18714  The above error occurred in the <RoosterApp> component:

    at RoosterApp (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/js/core/roosterApp.js:73:40)
    at div
    at UserRegistrationCheck (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/verlofRoosterN.aspx:409:42)
    at ErrorBoundary (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/verlofRoosterN.aspx:379:17)
    at App (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/verlofRoosterN.aspx:713:59)

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
finishConcurrentRender @ react-dom.development.js:25941
performConcurrentWorkOnRoot @ react-dom.development.js:25858
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
verlofRoosterN.aspx:388  Error Boundary gevangen fout: ReferenceError: gefilterdeMedewerkers is not defined
    at roosterApp.js:1436:40
    at mountMemo (react-dom.development.js:16416:21)
    at Object.useMemo (react-dom.development.js:16861:18)
    at useMemo (react.development.js:1640:23)
    at RoosterApp (roosterApp.js:1433:34)
    at renderWithHooks (react-dom.development.js:15496:20)
    at mountIndeterminateComponent (react-dom.development.js:20113:15)
    at beginWork (react-dom.development.js:21636:18)
    at beginWork$1 (react-dom.development.js:27475:16)
    at performUnitOfWork (react-dom.development.js:26609:14) {componentStack: '\n    at RoosterApp (https://som.org.om.local/sites…PW/Verlof/CPW/Rooster/verlofRoosterN.aspx:713:59)'}
componentDidCatch @ verlofRoosterN.aspx:388
callback @ react-dom.development.js:18795
callCallback @ react-dom.development.js:15046
commitUpdateQueue @ react-dom.development.js:15067
commitLayoutEffectOnFiber @ react-dom.development.js:23413
commitLayoutMountEffects_complete @ react-dom.development.js:24737
commitLayoutEffects_begin @ react-dom.development.js:24723
commitLayoutEffects @ react-dom.development.js:24661
commitRootImpl @ react-dom.development.js:26872
commitRoot @ react-dom.development.js:26731
finishConcurrentRender @ react-dom.development.js:25941
performConcurrentWorkOnRoot @ react-dom.development.js:25858
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
