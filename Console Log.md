# This file
Under the dashed line, a 'Y:' or 'X:' will be written. Here's how to deal with that parameter:

1. If there's an Y:
That means you do not have to read whatever comes after or on the next line of the 'Y:'. It implies there was a console log error before which you handled and can therefore disregard as it's already handled.

2. If there's an X:
This means we have an unresolved console log error. You must first handle the error before handling the request. When the error is resolved, you can proceed by handling the request.

------------------------------------------------
X: react-dom.development.js:73  Warning: validateDOMNesting(...): <th> cannot appear as a child of <th>.
    at th
    at th
    at tr
    at thead
    at table
    at div
    at main
    at div
    at UserRegistrationCheck (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/Verlofrooster.aspx:405:42)
    at RoosterApp (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/Verlofrooster.aspx:708:59)
    at ErrorBoundary (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/Verlofrooster.aspx:396:34)
printWarning @ react-dom.development.js:73
error @ react-dom.development.js:47
validateDOMNesting @ react-dom.development.js:10857
createInstance @ react-dom.development.js:10940
completeWork @ react-dom.development.js:22236
completeUnitOfWork @ react-dom.development.js:26642
performUnitOfWork @ react-dom.development.js:26617
workLoopSync @ react-dom.development.js:26515
renderRootSync @ react-dom.development.js:26483
performConcurrentWorkOnRoot @ react-dom.development.js:25787
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
react-dom.development.js:73  Warning: validateDOMNesting(...): <tbody> cannot appear as a child of <thead>.
    at tbody
    at thead
    at table
    at div
    at main
    at div
    at UserRegistrationCheck (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/Verlofrooster.aspx:405:42)
    at RoosterApp (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/Verlofrooster.aspx:708:59)
    at ErrorBoundary (https://som.org.om.local/sites/MulderT/CustomPW/Verlof/CPW/Rooster/Verlofrooster.aspx:396:34)
printWarning @ react-dom.development.js:73
error @ react-dom.development.js:47
validateDOMNesting @ react-dom.development.js:10857
createInstance @ react-dom.development.js:10940
completeWork @ react-dom.development.js:22236
completeUnitOfWork @ react-dom.development.js:26642
performUnitOfWork @ react-dom.development.js:26617
workLoopSync @ react-dom.development.js:26515
renderRootSync @ react-dom.development.js:26483
performConcurrentWorkOnRoot @ react-dom.development.js:25787
workLoop @ react.development.js:2653
flushWork @ react.development.js:2626
performWorkUntilDeadline @ react.development.js:2920
