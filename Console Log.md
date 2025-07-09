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
tooltipbar.js:992 🚀 Initializing TooltipManager immediately
tooltipbar.js:68 Initializing TooltipManager
tooltipbar.js:74 TooltipManager initialized successfully
tooltipbar.js:1052 🔧 Developer utilities added to window:
tooltipbar.js:1053    - window.inspectFeestdag(date|element) - Inspect feestdag by date or element
tooltipbar.js:1054    - window.feestdagVandaag() - Check if today is a feestdag
tooltipbar.js:1055    - window.feestdagenDezeMaand() - Get all feestdagen this month
tooltipbar.js:1056    - window.TooltipManager - Access full TooltipManager object
tooltipbar.js:64 TooltipManager already initialized
Verlofrooster.aspx:2526 ðŸ”§ LoadingLogic utilities added to window:
Verlofrooster.aspx:2527    - window.LoadingLogic - Full LoadingLogic object
Verlofrooster.aspx:2528    - window.clearLoadingCache() - Clear all cached data
Verlofrooster.aspx:2529    - window.getLoadingStats() - Get cache statistics
Verlofrooster.aspx:2530    - window.logLoadingStatus() - Log current loading status
profielkaarten.js:987 Initializing ProfielKaarten...
profielkaarten.js:813 ProfielKaarten: Initializing with selector ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
tooltipbar.js:981 🚀 Initializing TooltipManager on DOMContentLoaded
tooltipbar.js:64 TooltipManager already initialized
Verlofrooster.aspx:706 ðŸ  RoosterApp component initialized
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
Verlofrooster.aspx:735 ðŸ  Modal state changed: {compensatie: false, zittingsvrij: false, verlof: false, ziek: false}
Verlofrooster.aspx:750 ðŸ” Initializing TooltipManager from RoosterApp
tooltipbar.js:64 TooltipManager already initialized
Verlofrooster.aspx:706 ðŸ  RoosterApp component initialized
tooltipbar.js:466 🔍 Auto-attaching tooltips to DOM elements...
tooltipbar.js:471 Found 0 verlof blocks
tooltipbar.js:484 Found 0 compensatie blocks
tooltipbar.js:497 Found 0 zittingsvrij blocks
tooltipbar.js:510 Found 0 ziekte blocks
tooltipbar.js:523 Found 0 feestdag elements
tooltipbar.js:550 Found 0 button elements
tooltipbar.js:583 Found 0 icon/title elements
tooltipbar.js:594 ✅ Auto-attach tooltips completed: 0 tooltips attached
tooltipbar.js:716 👁️ DOM observer started for tooltips
tooltipbar.js:466 🔍 Auto-attaching tooltips to DOM elements...
tooltipbar.js:471 Found 0 verlof blocks
tooltipbar.js:484 Found 0 compensatie blocks
tooltipbar.js:497 Found 0 zittingsvrij blocks
tooltipbar.js:510 Found 0 ziekte blocks
tooltipbar.js:523 Found 0 feestdag elements
tooltipbar.js:550 Found 0 button elements
tooltipbar.js:583 Found 0 icon/title elements
tooltipbar.js:594 ✅ Auto-attach tooltips completed: 0 tooltips attached
