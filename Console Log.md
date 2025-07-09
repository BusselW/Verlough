# This file
Under the dashed line, a 'Y:' or 'X:' will be written. Here's how to deal with that parameter:

1. If there's an Y:
That means you do not have to read whatever comes after or on the next line of the 'Y:'. It implies there was a console log error before which you handled and can therefore disregard as it's already handled.

2. If there's an X:
This means we have an unresolved console log error. You must first handle the error before handling the request. When the error is resolved, you can proceed by handling the request.

------------------------------------------------
X: react-dom.development.js:29905 Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
configLijst.js:652 Compatibility layer toegevoegd voor appConfiguratie -> getLijstConfig
configLijst.js:653 Available configurations: (18) ['instellingen', 'CompensatieUren', 'CompensatieUrenPerWeek', 'UrenPerWeek', 'DagenIndicators', 'gebruikersInstellingen', 'keuzelijstFuncties', 'MeldFouten', 'IncidenteelZittingVrij', 'Medewerkers', 'gemachtigdenLijst', 'Seniors', 'statuslijstOpties', 'Siteactiva', 'Teams', 'Verlofredenen', 'Verlof', 'FoutenLogboek']
configLijst.js:656 js/config/appConfig.js geladen.
configLijst.js:657 window.appConfiguratie loaded: object
configLijst.js:658 window.getLijstConfig available: function
Verlofrooster.aspx:2218  Uncaught SyntaxError: missing ) after argument list (at Verlofrooster.aspx:2218:41)

