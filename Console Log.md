# This file
Under the dashed line, a 'Y:' or 'X:' will be written. Here's how to deal with that parameter:

1. If there's an Y:
That means you do not have to read whatever comes after or on the next line of the 'Y:'. It implies there was a console log error before which you handled and can therefore disregard as it's already handled.

2. If there's an X:
This means we have an unresolved console log error. You must first handle the error before handling the request. When the error is resolved, you can proceed by handling the request.

------------------------------------------------
Y:
    at RoosterApp (roosterApp.js:82:51)
    at renderWithHooks (react-dom.development.js:15496:20)
    at mountIndeterminateComponent (react-dom.development.js:20113:15)
    at beginWork (react-dom.development.js:21636:18)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4151:16)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4200:18)
    at invokeGuardedCallback (react-dom.development.js:4264:33)
    at beginWork$1 (react-dom.development.js:27500:9)
    at performUnitOfWork (react-dom.development.js:26609:14)
    at workLoopSync (react-dom.development.js:26515:7)
RoosterApp @ roosterApp.js:82
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
roosterApp.js:82  Uncaught ReferenceError: useState is not defined
    at RoosterApp (roosterApp.js:82:51)
    at renderWithHooks (react-dom.development.js:15496:20)
    at mountIndeterminateComponent (react-dom.development.js:20113:15)
    at beginWork (react-dom.development.js:21636:18)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4151:16)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4200:18)
    at invokeGuardedCallback (react-dom.development.js:4264:33)
    at beginWork$1 (react-dom.development.js:27500:9)
    at performUnitOfWork (react-dom.development.js:26609:14)
    at workLoopSync (react-dom.development.js:26515:7)
RoosterApp @ roosterApp.js:82
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

    at RoosterApp (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/js/core/roosterApp.js:82:51)
    at UserRegistrationCheck (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/verlofRoosterN.aspx:345:42)
    at ErrorBoundary (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/verlofRoosterN.aspx:315:17)

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
verlofRoosterN.aspx:324  Error Boundary gevangen fout: ReferenceError: useState is not defined
    at RoosterApp (roosterApp.js:82:51)
    at renderWithHooks (react-dom.development.js:15496:20)
    at mountIndeterminateComponent (react-dom.development.js:20113:15)
    at beginWork (react-dom.development.js:21636:18)
    at beginWork$1 (react-dom.development.js:27475:16)
    at performUnitOfWork (react-dom.development.js:26609:14)
    at workLoopSync (react-dom.development.js:26515:7)
    at renderRootSync (react-dom.development.js:26483:9)
    at recoverFromConcurrentError (react-dom.development.js:25899:22)
    at performConcurrentWorkOnRoot (react-dom.development.js:25799:24) {componentStack: '\n    at RoosterApp (https://som.org.om.local/sites…PW/Verlof/CPW/Rooster/verlofRoosterN.aspx:315:17)'}
componentDidCatch @ verlofRoosterN.aspx:324
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

