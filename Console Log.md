# This file
Under the dashed line, a 'Y:' or 'X:' will be written. Here's how to deal with that parameter:

1. If there's an Y:
That means you do not have to read whatever comes after or on the next line of the 'Y:'. It implies there was a console log error before which you handled and can therefore disregard as it's already handled.

2. If there's an X:
This means we have an unresolved console log error. You must first handle the error before handling the request. When the error is resolved, you can proceed by handling the request.

------------------------------------------------
X:react-dom.development.js:29905 Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
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
Verlofrooster.aspx:27 ðŸš€ Main script starting execution...
tooltipbar.js:64 TooltipManager already initialized
Verlofrooster.aspx:2513 ðŸŽ¯ About to render React app
Verlofrooster.aspx:2514 Root element exists: true
Verlofrooster.aspx:2515 React available: true
Verlofrooster.aspx:2516 ReactDOM available: true
Verlofrooster.aspx:2531 ðŸ”§ LoadingLogic utilities added to window:
Verlofrooster.aspx:2532    - window.LoadingLogic - Full LoadingLogic object
Verlofrooster.aspx:2533    - window.clearLoadingCache() - Clear all cached data
Verlofrooster.aspx:2534    - window.getLoadingStats() - Get cache statistics
Verlofrooster.aspx:2535    - window.logLoadingStatus() - Log current loading status
Verlofrooster.aspx:2537 âœ… Script execution completed successfully!
profielkaarten.js:987 Initializing ProfielKaarten...
profielkaarten.js:813 ProfielKaarten: Initializing with selector ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
tooltipbar.js:981 🚀 Initializing TooltipManager on DOMContentLoaded
tooltipbar.js:64 TooltipManager already initialized
Verlofrooster.aspx:707 ðŸ  RoosterApp component initialized
Verlofrooster.aspx:2506 ðŸŽ¯ About to render UserRegistrationCheck wrapper
Verlofrooster.aspx:406 ðŸš€ UserRegistrationCheck component initialized
react-dom.development.js:73  Warning: validateDOMNesting(...): <th> cannot appear as a child of <th>.
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
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
Verlofrooster.aspx:412 ðŸ“‹ UserRegistrationCheck useEffect triggered
Verlofrooster.aspx:418 ðŸ” Starting user registration check...
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
Verlofrooster.aspx:736 ðŸ  Modal state changed: {compensatie: false, zittingsvrij: false, verlof: false, ziek: false}
Verlofrooster.aspx:751 ðŸ” Initializing TooltipManager from RoosterApp
tooltipbar.js:64 TooltipManager already initialized
Verlofrooster.aspx:707 ðŸ  RoosterApp component initialized
Verlofrooster.aspx:2506 ðŸŽ¯ About to render UserRegistrationCheck wrapper
Verlofrooster.aspx:406 ðŸš€ UserRegistrationCheck component initialized
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
sharepointService.js:224 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:232 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
Verlofrooster.aspx:423 Current user from SharePoint: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
Verlofrooster.aspx:441 Formatted login name for comparison: org\busselw
Verlofrooster.aspx:406 ðŸš€ UserRegistrationCheck component initialized
permissionService.js:48 Gebruiker is lid van de volgende groepen: (12) ['1.1. Mulder MT', '1. Sharepoint beheer', '2.2. MAPS Superusers', '2.6 Roosteraars', 'Limited Access System Group', 'Proceskostenvergoeding', 'SharingLinks.00c859fb-4785-4d3f-bd0c-659f94d15fd9.…nizationEdit.6b155bdd-1bc0-44ff-bc53-4c63cf84edbe', 'SharingLinks.0b39ac48-3ab0-4f46-a975-fc9ff61a09e6.…nizationEdit.d5eb3e50-7f2f-4b36-bc3d-8da2ade7659f', 'SharingLinks.4959fa1c-a4ac-4716-8c72-bbce1fa97b9e.…nizationEdit.4804618a-0a1d-4a03-97a1-da6a92a38112', 'SharingLinks.81fbf587-38d5-435f-ba15-1160cb58ffd6.…nizationEdit.572c33fe-34cb-45f0-9024-032b72b2dbdc', 'SharingLinks.ad02a892-9bc2-415b-8e34-689bd52054b8.…nizationEdit.848b5483-3664-4541-a421-81515b2e9c3e', 'SharingLinks.d6acbc48-bb66-44a5-9e7a-31495d267de6.…nizationEdit.33b780e8-f7d3-4c25-ba9b-e589111bad6b']
permissionService.js:48 Gebruiker is lid van de volgende groepen: (12) ['1.1. Mulder MT', '1. Sharepoint beheer', '2.2. MAPS Superusers', '2.6 Roosteraars', 'Limited Access System Group', 'Proceskostenvergoeding', 'SharingLinks.00c859fb-4785-4d3f-bd0c-659f94d15fd9.…nizationEdit.6b155bdd-1bc0-44ff-bc53-4c63cf84edbe', 'SharingLinks.0b39ac48-3ab0-4f46-a975-fc9ff61a09e6.…nizationEdit.d5eb3e50-7f2f-4b36-bc3d-8da2ade7659f', 'SharingLinks.4959fa1c-a4ac-4716-8c72-bbce1fa97b9e.…nizationEdit.4804618a-0a1d-4a03-97a1-da6a92a38112', 'SharingLinks.81fbf587-38d5-435f-ba15-1160cb58ffd6.…nizationEdit.572c33fe-34cb-45f0-9024-032b72b2dbdc', 'SharingLinks.ad02a892-9bc2-415b-8e34-689bd52054b8.…nizationEdit.848b5483-3664-4541-a421-81515b2e9c3e', 'SharingLinks.d6acbc48-bb66-44a5-9e7a-31495d267de6.…nizationEdit.33b780e8-f7d3-4c25-ba9b-e589111bad6b']
permissionService.js:48 Gebruiker is lid van de volgende groepen: (12) ['1.1. Mulder MT', '1. Sharepoint beheer', '2.2. MAPS Superusers', '2.6 Roosteraars', 'Limited Access System Group', 'Proceskostenvergoeding', 'SharingLinks.00c859fb-4785-4d3f-bd0c-659f94d15fd9.…nizationEdit.6b155bdd-1bc0-44ff-bc53-4c63cf84edbe', 'SharingLinks.0b39ac48-3ab0-4f46-a975-fc9ff61a09e6.…nizationEdit.d5eb3e50-7f2f-4b36-bc3d-8da2ade7659f', 'SharingLinks.4959fa1c-a4ac-4716-8c72-bbce1fa97b9e.…nizationEdit.4804618a-0a1d-4a03-97a1-da6a92a38112', 'SharingLinks.81fbf587-38d5-435f-ba15-1160cb58ffd6.…nizationEdit.572c33fe-34cb-45f0-9024-032b72b2dbdc', 'SharingLinks.ad02a892-9bc2-415b-8e34-689bd52054b8.…nizationEdit.848b5483-3664-4541-a421-81515b2e9c3e', 'SharingLinks.d6acbc48-bb66-44a5-9e7a-31495d267de6.…nizationEdit.33b780e8-f7d3-4c25-ba9b-e589111bad6b']
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
 🔍 Auto-attaching tooltips to DOM elements...
 Found 0 verlof blocks
 Found 0 compensatie blocks
 Found 0 zittingsvrij blocks
 Found 0 ziekte blocks
 Found 0 feestdag elements
 Found 2 button elements
 Found 0 icon/title elements
 ✅ Auto-attach tooltips completed: 2 tooltips attached
 👁️ DOM observer started for tooltips
 Total medewerkers found: 43
 Sample medewerkers data: (3) [{…}, {…}, {…}]
 Comparing: "org\busselw" with "org\schaikh"
 Comparing: "org\busselw" with "org\nijburgc"
 Comparing: "org\busselw" with "org\schieved"
 Comparing: "org\busselw" with "org\visserm2"
 Comparing: "org\busselw" with "org\helings"
 Comparing: "org\busselw" with "org\tuiln"
 Comparing: "org\busselw" with "org\wittem1"
 Comparing: "org\busselw" with "org\fessehae"
 Comparing: "org\busselw" with "org\sanchesa"
 Comparing: "org\busselw" with "org\messaoul"
 Comparing: "org\busselw" with "org\wissinks"
 Comparing: "org\busselw" with "org\brinkm1"
 Comparing: "org\busselw" with "org\gooln"
 Comparing: "org\busselw" with "org\mansourk"
 Comparing: "org\busselw" with "org\biermanl"
 Comparing: "org\busselw" with "org\bijlsmae"
 Comparing: "org\busselw" with "org\haasterm"
 Comparing: "org\busselw" with "org\haarlemy"
 Comparing: "org\busselw" with "org\oelenb"
 Comparing: "org\busselw" with "org\raufz1"
 Comparing: "org\busselw" with "org\jongsmas"
 Comparing: "org\busselw" with "org\kropffs"
 Comparing: "org\busselw" with "org\elkm1"
 Comparing: "org\busselw" with "org\krabbenb"
 Comparing: "org\busselw" with "org\hendriky"
 Comparing: "org\busselw" with "org\wandeleh"
 Comparing: "org\busselw" with "org\aarabs"
 Comparing: "org\busselw" with "org\bouzerrs"
 Comparing: "org\busselw" with "org\boudraay"
 Comparing: "org\busselw" with "org\wita"
 Comparing: "org\busselw" with "org\bhaggoes"
 Comparing: "org\busselw" with "org\peteka"
 Comparing: "org\busselw" with "org\elbersed"
 Comparing: "org\busselw" with "org\stigterm"
 Comparing: "org\busselw" with "org\akdagi"
 Comparing: "org\busselw" with "org\erent"
 Comparing: "org\busselw" with "org\bicerp"
Verlofrooster.aspx:462 Comparing: "org\busselw" with "org\wijnenb"
Verlofrooster.aspx:462 Comparing: "org\busselw" with "org\azahafs"
Verlofrooster.aspx:462 Comparing: "org\busselw" with "org\jacobsb"
Verlofrooster.aspx:462 Comparing: "org\busselw" with "org\busselw11"
Verlofrooster.aspx:462 Comparing: "org\busselw" with "org\westmaat"
Verlofrooster.aspx:462 Comparing: "org\busselw" with "org\busselw"
Verlofrooster.aspx:466 âœ“ Direct match found!
Verlofrooster.aspx:488 User exists in Medewerkers list: true
Verlofrooster.aspx:493 âœ… User validation complete, calling onUserValidated(true)
Verlofrooster.aspx:503 ðŸ User registration check complete
Verlofrooster.aspx:707 ðŸ  RoosterApp component initialized
Verlofrooster.aspx:2506 ðŸŽ¯ About to render UserRegistrationCheck wrapper
Verlofrooster.aspx:406 ðŸš€ UserRegistrationCheck component initialized
Verlofrooster.aspx:1385 ðŸ”„ Starting refreshData...
Verlofrooster.aspx:1408 ðŸ‘¤ Fetching current user...
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
Verlofrooster.aspx:1684 ðŸ“… Period changed to maand: Juli 2025
loadingLogic.js:179 🔄 Data reload needed: cache key changed from null to maand-2025-6
Verlofrooster.aspx:1688 ðŸ”„ Triggering data reload for new period...
Verlofrooster.aspx:1385 ðŸ”„ Starting refreshData...
Verlofrooster.aspx:1408 ðŸ‘¤ Fetching current user...
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
Verlofrooster.aspx:707 ðŸ  RoosterApp component initialized
profielkaarten.js:834 ProfielKaarten: Found 0 elements matching ".medewerker-naam, .medewerker-avatar"
Verlofrooster.aspx:179 User data loaded: {permissions: {…}, userInfo: {…}}
Verlofrooster.aspx:182 DEBUG - Current user details: {LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', Email: 'w.van.bussel@om.nl'}
sharepointService.js:224 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:232 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
loadingLogic.js:179 🔄 Data reload needed: cache key changed from null to maand-2025-6
Verlofrooster.aspx:1416 ðŸ“Š Loading data for new period...
loadingLogic.js:197 📝 Cache key updated to: maand-2025-6
Verlofrooster.aspx:1423 ðŸ“Š Fetching SharePoint lists...
sharepointService.js:224 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:232 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
loadingLogic.js:181 ✅ Using cached data for period: maand-2025-6
Verlofrooster.aspx:1420 âœ… Using cached data for current period
Verlofrooster.aspx:1423 ðŸ“Š Fetching SharePoint lists...
sharepointService.js:224 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:232 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
Verlofrooster.aspx:707 ðŸ  RoosterApp component initialized
Verlofrooster.aspx:1438 ðŸ” Loading period-specific data with filtering...
loadingLogic.js:100 📅 Loading period range: 2025-05-31 to 2025-08-30
loadingLogic.js:163 🔍 Generated OData filter for verlof: StartDatum le datetime'2025-08-30T22:00:00.000Z' and (EindDatum ge datetime'2025-05-31T22:00:00.000Z' or EindDatum eq null)
loadingLogic.js:341 🔍 Loading Verlof with filter for period maand-2025-6
loadingLogic.js:355  ⚠️ Fetch function does not support query parameters, falling back to local filtering
loadFilteredData @ loadingLogic.js:355
(anonymous) @ Verlofrooster.aspx:1440
await in (anonymous)
(anonymous) @ Verlofrooster.aspx:1677
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
loadingLogic.js:100 📅 Loading period range: 2025-05-31 to 2025-08-30
loadingLogic.js:163 🔍 Generated OData filter for zittingsvrij: StartDatum le datetime'2025-08-30T22:00:00.000Z' and (EindDatum ge datetime'2025-05-31T22:00:00.000Z' or EindDatum eq null)
loadingLogic.js:341 🔍 Loading IncidenteelZittingVrij with filter for period maand-2025-6
loadingLogic.js:355  ⚠️ Fetch function does not support query parameters, falling back to local filtering
loadFilteredData @ loadingLogic.js:355
(anonymous) @ Verlofrooster.aspx:1441
await in (anonymous)
(anonymous) @ Verlofrooster.aspx:1677
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
loadingLogic.js:100 📅 Loading period range: 2025-05-31 to 2025-08-30
loadingLogic.js:163 🔍 Generated OData filter for compensatie: StartDatum le datetime'2025-08-30T22:00:00.000Z' and (EindDatum ge datetime'2025-05-31T22:00:00.000Z' or EindDatum eq null)
loadingLogic.js:341 🔍 Loading CompensatieUren with filter for period maand-2025-6
loadingLogic.js:355  ⚠️ Fetch function does not support query parameters, falling back to local filtering
loadFilteredData @ loadingLogic.js:355
(anonymous) @ Verlofrooster.aspx:1442
await in (anonymous)
(anonymous) @ Verlofrooster.aspx:1677
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
 User data loaded: {permissions: {…}, userInfo: {…}}
 DEBUG - Current user details: {LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', Email: 'w.van.bussel@om.nl'}
 ðŸ“ Using cached data: 0 verlof, 0 zittingsvrij, 0 compensatie items
 âœ… Data fetched successfully, processing...
 ðŸ” DEBUG: Processing rotating record ID 155 - Raw WeekType: 'B' (type: string), Processed: 'B'
 ðŸ” DEBUG: Processing rotating record ID 156 - Raw WeekType: 'A' (type: string), Processed: 'A'
 ðŸ” DEBUG: Processed UrenPerWeek data: (2) [{…}, {…}]
 âœ… Data processing complete!
 DEBUG - Loaded medewerkers: (5) [{…}, {…}, {…}, {…}, {…}]
 ðŸ refreshData complete, setting loading to false
 ðŸ  RoosterApp component initialized
 ðŸ” DEBUG: Grouped rotating schedule records for org\jacobsb: (4) [{…}, {…}, {…}, {…}]
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 1-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 2-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 3-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 4-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 04 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 5-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 6-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 7-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 8-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 9-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 10-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 11-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 11 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 12-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 13-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 14-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 15-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 16-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 17-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 18-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 18 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 19-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 20-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 21-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 22-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 23-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 24-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 25-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 25 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 26-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 27-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 28-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 29-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 30-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 31-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 1-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 2-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 3-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 4-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 5-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 6-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 7-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 8-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 9-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 10-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 11-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 12-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 13-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 14-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 15-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 16-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 17-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 18-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 19-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 20-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 21-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 22-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 23-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 24-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 25-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 26-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 27-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 28-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 29-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 30-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 31-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 1-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 2-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 02 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 3-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 4-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 5-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 6-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 7-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 8-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 9-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 09 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 10-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 11-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 12-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 13-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 14-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 15-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 16-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 16 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 17-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 18-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 19-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 20-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 21-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 22-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 23-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 23 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 24-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 25-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 26-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 27-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 28-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 29-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 30-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 30 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 31-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 1-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 2-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 3-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 4-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 04 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 5-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 6-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 7-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 8-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 9-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 10-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 11-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 11 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 12-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 13-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 14-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 15-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 16-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 17-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 18-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 18 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 19-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 20-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 21-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 22-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 23-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 24-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 25-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 25 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 26-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 27-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 28-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 29-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 30-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 31-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 1-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 2-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 02 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 3-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 4-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 5-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 6-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 7-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 8-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 9-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 09 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 10-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 11-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 12-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 13-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 14-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 15-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 16-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 16 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 17-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 18-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 19-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 20-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 21-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 22-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 23-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 23 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 24-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 25-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 26-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 27-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 28-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 29-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 30-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 30 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 31-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 1-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 2-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 3-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 4-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 5-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 6-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 7-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 8-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 9-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 10-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 11-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 12-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 13-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 14-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 15-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 16-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 17-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 18-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 19-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 20-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 21-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 22-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 23-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 24-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 25-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 26-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 27-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 28-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 29-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 30-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 31-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 1-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 2-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 3-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 03 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 4-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 5-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 6-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 7-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 8-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 9-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 10-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 10 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 11-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 12-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 13-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 14-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 15-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 16-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 17-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 17 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 18-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 19-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 20-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 21-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 22-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 23-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 24-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 24 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 25-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 26-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 27-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 28-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 29-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 30-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 31-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 31 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 1-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 2-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 3-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 4-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 5-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 6-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 7-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 8-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 9-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 10-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 11-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 12-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 13-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 14-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 15-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 16-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 17-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 18-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 19-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 20-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 21-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 22-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 23-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 24-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 25-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 26-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 27-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 28-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 29-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 30-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 31-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 1-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 2-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 3-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 4-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 04 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 5-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 6-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 7-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 07 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 8-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 9-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 10-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 11-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 11 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 12-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 13-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 14-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 14 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 15-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 16-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 17-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 18-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 18 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 19-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 20-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 21-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 21 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 22-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 23-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 24-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 25-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 25 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 26-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 27-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 28-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 28 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 29-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 30-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 31-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 1-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 2-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 3-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 4-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 04 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 5-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 6-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 7-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 8-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 9-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 10-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 11-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 11 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 12-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 13-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 14-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 15-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 16-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 17-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 18-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 18 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 19-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 20-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 21-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 22-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 23-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 24-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 25-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 25 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 26-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 27-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 28-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 29-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 30-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 31-7-2025: Record ID 51 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 1-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 2-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 3-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 4-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 5-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 6-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 7-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 8-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 9-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 10-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 11-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 12-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 13-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 14-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 15-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 16-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 17-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 18-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 19-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 20-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 21-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 22-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 23-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 24-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 25-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 26-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 27-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 28-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 29-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 30-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 31-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 1-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 2-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 3-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 4-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 5-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 6-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 7-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 8-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 9-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 10-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 11-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 12-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 13-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 14-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 15-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 16-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 17-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 18-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 19-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 20-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 21-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 22-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 23-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 24-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 25-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 26-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 27-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 28-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 29-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 30-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 31-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 1-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 2-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 3-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 4-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 5-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 6-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 7-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 8-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 9-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 10-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 11-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 12-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 13-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 14-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 15-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 16-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 17-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 18-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 19-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 20-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 21-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 22-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 23-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 24-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 25-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 26-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 27-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 28-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 29-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 30-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 31-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 1-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 2-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 3-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 4-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 5-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 6-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 7-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 8-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 9-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 10-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 11-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 12-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 13-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 14-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 15-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 16-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 17-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 18-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 19-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 20-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 21-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 22-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 23-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 24-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 25-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 26-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 27-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 28-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 29-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 30-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 31-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 1-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 2-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 3-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 4-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 5-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 6-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 7-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 8-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 9-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 10-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 11-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 12-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 13-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 14-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 15-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 16-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 17-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 18-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 19-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 20-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 21-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 22-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 23-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 24-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 25-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 26-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 27-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 28-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 29-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 30-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 31-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 1-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 2-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 3-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 4-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 5-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 6-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 7-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 07 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 8-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 9-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 10-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 11-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 12-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 13-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 14-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 14 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 15-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 16-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 17-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 18-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 19-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 20-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 21-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 21 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 22-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 23-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 24-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 25-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 26-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 27-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 28-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 28 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 29-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 30-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 31-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 1-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 01 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 2-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 02 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 3-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 4-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 5-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 6-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 7-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 8-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 08 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 9-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 09 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 10-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 11-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 12-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 13-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 14-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 15-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 15 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 16-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 16 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 17-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 18-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 19-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 20-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 21-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 22-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 22 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 23-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 23 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 24-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 25-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 26-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 27-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 28-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 29-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 29 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 30-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 30 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 31-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 1-7-2025: Record ID 101 from 10-6-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 2-7-2025: Record ID 101 from 10-6-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 3-7-2025: Record ID 101 from 10-6-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 4-7-2025: Record ID 123 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 5-7-2025: Record ID 123 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 6-7-2025: Record ID 123 from 4-7-2025
 ðŸ” Week calculation for 7-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 8-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 8-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 9-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 9-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 10-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 10-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 11-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 11-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 12-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 12-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 13-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 13-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” DEBUG: Selected period for org\jacobsb on 14-7-2025:
 ðŸ” DEBUG: Period Ingangsdatum: 7-7-2025
 ðŸ” DEBUG: Period is rotating: true
 ðŸ” DEBUG: Available records in period: (2) [{…}, {…}]
 ðŸ” Week calculation for 14-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 14-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Rendered UrenPerWeek block for org\jacobsb on Mon Jul 14 2025: VVD (record from 7-7-2025)
 ðŸ” Week calculation for 15-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 15-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” DEBUG: Selected period for org\jacobsb on 16-7-2025:
 ðŸ” DEBUG: Period Ingangsdatum: 7-7-2025
 ðŸ” DEBUG: Period is rotating: true
 ðŸ” DEBUG: Available records in period: (2) [{…}, {…}]
 ðŸ” Week calculation for 16-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 16-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 17-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 17-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 18-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 18-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 19-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 19-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 20-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 20-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 21-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 21-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 22-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 22-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 âœ… Found Week A record for org\jacobsb: ID 156
 ðŸ” Week calculation for 23-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 23-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 âœ… Found Week A record for org\jacobsb: ID 156
 ðŸ” Week calculation for 24-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 24-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 25-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 25-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 26-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 26-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” DEBUG: Selected period for org\jacobsb on 27-7-2025:
 ðŸ” DEBUG: Period Ingangsdatum: 7-7-2025
 ðŸ” DEBUG: Period is rotating: true
 ðŸ” DEBUG: Available records in period: (2) [{…}, {…}]
 ðŸ” Week calculation for 27-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 27-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” DEBUG: Looking for Week A in rotating period (calculated from cycle start: 7-7-2025)
 ðŸ” Week calculation for 28-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 28-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 âœ… Found Week B record for org\jacobsb: ID 155
 ðŸ” Rendered UrenPerWeek block for org\jacobsb on Mon Jul 28 2025: VVD (record from 7-7-2025)
 ðŸ” DEBUG: Selected period for org\jacobsb on 29-7-2025:
 ðŸ” DEBUG: Period Ingangsdatum: 7-7-2025
 ðŸ” DEBUG: Period is rotating: true
 ðŸ” DEBUG: Available records in period: (2) [{…}, {…}]
 ðŸ” Week calculation for 29-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 29-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 ðŸ” Week calculation for 30-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 30-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 ðŸ” Week calculation for 31-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 31-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 1-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 2-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 3-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 4-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 5-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 6-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 7-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 8-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 9-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 10-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 11-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 12-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 13-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 14-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 15-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 16-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 17-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 18-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 19-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 20-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 21-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 22-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 23-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 24-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 25-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 26-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 27-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 28-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 29-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 30-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 31-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 1-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 2-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 3-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 4-7-2025: Record ID 64 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\kropffs on 5-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 6-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 7-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 8-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 9-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 10-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 11-7-2025: Record ID 64 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\kropffs on 12-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 13-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 14-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 15-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 16-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 17-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 18-7-2025: Record ID 64 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\kropffs on 19-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 20-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 21-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 22-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 23-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 24-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 25-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 25 2025: VVD (record from 26-5-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 26-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 27-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 28-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 29-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 30-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\kropffs on 31-7-2025: Record ID 64 from 26-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 1-7-2025: Record ID 49 from 20-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 2-7-2025: Record ID 49 from 20-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 3-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 4-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 04 2025: VVD (record from 3-7-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 5-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 6-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 7-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 8-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 9-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 10-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 11-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 11 2025: VVD (record from 3-7-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 12-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 13-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 14-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 15-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 16-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 17-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 18-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 18 2025: VVD (record from 3-7-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 19-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 20-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 21-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 22-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 23-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 24-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\mansourk on 25-7-2025: Record ID 13 from 3-7-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 25 2025: VVD (record from 3-7-2025)
 âœ… Selected standard UrenPerWeek record for org\mansourk on 26-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 27-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 28-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 29-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 30-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 31-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 1-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 2-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 3-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 4-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 5-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 6-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 7-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 8-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 9-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 10-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 11-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 12-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 13-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 14-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 15-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 16-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 17-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 18-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 19-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 20-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 21-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 22-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 23-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 24-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 25-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 26-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 27-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 28-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 29-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 30-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 31-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 14-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 15-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 16-7-2025: Record ID 62 from 14-7-2025
 UrenPerWeek comparison for org\raufz1 on 17-7-2025: Record ID 93 with date 14-7-2025 is applicable
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 17-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 18-7-2025: Record ID 62 from 14-7-2025
 ðŸ” Rendered UrenPerWeek block for org\raufz1 on Fri Jul 18 2025: VVD (record from 14-7-2025)
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 19-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 20-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 21-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 22-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 23-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 24-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 25-7-2025: Record ID 62 from 14-7-2025
 ðŸ” Rendered UrenPerWeek block for org\raufz1 on Fri Jul 25 2025: VVD (record from 14-7-2025)
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 26-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 27-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 28-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 29-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 30-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 31-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 1-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 2-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 3-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 4-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 04 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 5-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 6-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 7-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 8-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 9-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 10-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 11-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 11 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 12-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 13-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 14-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 15-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 16-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 17-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 18-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 18 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 19-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 20-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 21-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 22-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 23-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 24-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 25-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 25 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 26-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 27-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 28-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 29-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 30-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 31-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 1-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 2-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 3-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 4-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 04 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 5-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 6-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 7-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 8-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 9-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 10-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 11-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 11 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 12-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 13-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 14-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 15-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 16-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 17-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 18-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 18 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 19-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 20-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 21-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 22-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 23-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 24-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 25-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 25 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 26-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 27-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 28-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 29-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 30-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 31-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 1-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 2-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 3-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 4-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 04 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 5-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 6-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 7-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 8-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 9-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 10-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 11-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 11 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 12-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 13-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 14-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 15-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 16-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 17-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 18-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 18 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 19-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 20-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 21-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 22-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 23-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 24-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 25-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 25 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 26-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 27-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 28-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 29-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 30-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 31-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 1-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 2-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 3-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 4-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 5-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 6-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 7-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 8-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 9-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 10-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 11-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 12-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 13-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 14-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 15-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 16-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 17-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 18-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 19-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 20-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 21-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 22-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 23-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 24-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 25-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 26-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 27-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 28-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 29-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 30-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 31-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 1-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 2-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 3-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 4-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 5-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 6-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 7-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 8-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 9-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 10-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 11-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 12-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 13-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 14-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 15-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 16-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 17-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 18-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 19-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 20-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 21-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 22-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 23-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 24-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 25-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 26-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 27-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 28-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 29-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 30-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 31-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 1-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 2-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 3-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 4-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 04 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 5-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 6-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 7-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 8-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 9-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 10-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 11-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 11 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 12-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 13-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 14-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 15-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 16-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 17-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 18-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 18 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 19-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 20-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 21-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 22-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 23-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 24-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 25-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 25 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 26-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 27-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 28-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 29-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 30-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 31-7-2025: Record ID 39 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 1-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 2-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 3-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 4-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 5-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 6-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 7-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 8-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 9-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 10-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 11-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 12-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 13-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 14-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 15-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 16-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 17-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 18-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 19-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 20-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 21-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 22-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 23-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 24-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 25-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 26-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 27-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 28-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 29-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 30-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 31-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 1-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 2-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 3-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 4-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 04 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 5-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 6-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 7-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 8-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 9-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 10-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 11-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 11 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 12-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 13-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 14-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 15-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 16-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 17-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 18-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 18 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 19-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 20-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 21-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 22-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 23-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 24-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 25-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 25 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 26-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 27-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 28-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 29-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 30-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 31-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 1-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 2-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 3-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 4-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 5-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 6-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 7-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 8-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 9-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 10-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 11-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 12-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 13-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 14-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 15-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 16-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 17-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 18-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 19-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 20-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 21-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 22-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 23-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 24-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 25-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 26-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 27-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 28-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 29-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 30-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 31-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 1-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 2-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 3-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 4-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 04 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 5-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 6-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 7-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 8-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 9-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 10-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 11-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 11 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 12-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 13-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 14-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 15-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 16-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 17-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 18-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 18 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 19-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 20-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 21-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 22-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 23-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 24-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 25-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 25 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 26-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 27-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 28-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 29-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 30-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 31-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 7-7-2025: Record ID 162 from 7-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 8-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 9-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 10-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 11-7-2025: Record ID 161 from 8-7-2025
 ðŸ” Rendered UrenPerWeek block for org\busselw on Fri Jul 11 2025: VVM (record from 8-7-2025)
 âœ… Selected standard UrenPerWeek record for org\busselw on 12-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 13-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 14-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 15-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 16-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 17-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 18-7-2025: Record ID 161 from 8-7-2025
 ðŸ” Rendered UrenPerWeek block for org\busselw on Fri Jul 18 2025: VVM (record from 8-7-2025)
 âœ… Selected standard UrenPerWeek record for org\busselw on 19-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 20-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 21-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 22-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 23-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 24-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 25-7-2025: Record ID 161 from 8-7-2025
 ðŸ” Rendered UrenPerWeek block for org\busselw on Fri Jul 25 2025: VVM (record from 8-7-2025)
 âœ… Selected standard UrenPerWeek record for org\busselw on 26-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 27-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 28-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 29-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 30-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 31-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 4-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 5-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 6-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 7-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 8-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 08 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 9-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 10-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 11-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 12-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 13-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 14-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 15-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 15 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 16-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 17-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 18-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 19-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 20-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 21-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 22-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 22 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 23-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 24-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 25-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 26-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 27-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 28-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 29-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 29 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 30-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 31-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 1-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 2-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 3-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 4-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 04 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 5-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 6-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 7-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 8-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 9-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 10-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 11-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 11 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 12-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 13-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 14-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 15-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 16-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 17-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 18-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 18 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 19-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 20-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 21-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 22-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 23-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 24-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 25-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 25 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 26-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 27-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 28-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 29-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 30-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 31-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 1-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 2-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 3-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 4-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 5-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 6-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 7-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 8-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 9-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 10-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 11-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 12-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 13-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 14-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 15-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 16-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 17-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 18-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 19-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 20-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 21-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 22-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 23-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 24-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 25-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 26-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 27-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 28-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 29-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 30-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 31-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 1-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 2-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 3-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 4-7-2025: Record ID 86 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\stigterm on 5-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 6-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 7-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 8-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 9-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 10-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 11-7-2025: Record ID 86 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\stigterm on 12-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 13-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 14-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 15-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 16-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 17-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 18-7-2025: Record ID 86 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\stigterm on 19-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 20-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 21-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 22-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 23-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 24-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 25-7-2025: Record ID 86 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\stigterm on 26-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 27-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 28-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 29-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 30-7-2025: Record ID 86 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\stigterm on 31-7-2025: Record ID 86 from 27-5-2025
 ðŸŽ¯ About to render UserRegistrationCheck wrapper
 ðŸš€ UserRegistrationCheck component initialized
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Adding hover behavior to element for username "org\visserm2"
 ProfielKaarten: Adding hover behavior to element for username "org\visserm2"
 ProfielKaarten: Adding hover behavior to element for username "org\brinkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\brinkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\nijburgc"
 ProfielKaarten: Adding hover behavior to element for username "org\nijburgc"
 ProfielKaarten: Adding hover behavior to element for username "org\fessehae"
 ProfielKaarten: Adding hover behavior to element for username "org\fessehae"
 ProfielKaarten: Adding hover behavior to element for username "org\sanchesa"
 ProfielKaarten: Adding hover behavior to element for username "org\sanchesa"
 ProfielKaarten: Adding hover behavior to element for username "org\wissinks"
 ProfielKaarten: Adding hover behavior to element for username "org\wissinks"
 ProfielKaarten: Adding hover behavior to element for username "org\aarabs"
 ProfielKaarten: Adding hover behavior to element for username "org\aarabs"
 ProfielKaarten: Adding hover behavior to element for username "org\akdagi"
 ProfielKaarten: Adding hover behavior to element for username "org\akdagi"
 ProfielKaarten: Adding hover behavior to element for username "org\azahafs"
 ProfielKaarten: Adding hover behavior to element for username "org\azahafs"
 ProfielKaarten: Adding hover behavior to element for username "org\bhaggoes"
 ProfielKaarten: Adding hover behavior to element for username "org\bhaggoes"
 ProfielKaarten: Adding hover behavior to element for username "org\bicerp"
 ProfielKaarten: Adding hover behavior to element for username "org\bicerp"
 ProfielKaarten: Adding hover behavior to element for username "org\biermanl"
 ProfielKaarten: Adding hover behavior to element for username "org\biermanl"
 ProfielKaarten: Adding hover behavior to element for username "org\bijlsmae"
 ProfielKaarten: Adding hover behavior to element for username "org\bijlsmae"
 ProfielKaarten: Adding hover behavior to element for username "org\boudraay"
 ProfielKaarten: Adding hover behavior to element for username "org\boudraay"
 ProfielKaarten: Adding hover behavior to element for username "org\bouzerrs"
 ProfielKaarten: Adding hover behavior to element for username "org\bouzerrs"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw11"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw11"
 ProfielKaarten: Adding hover behavior to element for username "org\wita"
 ProfielKaarten: Adding hover behavior to element for username "org\wita"
 ProfielKaarten: Adding hover behavior to element for username "org\erent"
 ProfielKaarten: Adding hover behavior to element for username "org\erent"
 ProfielKaarten: Adding hover behavior to element for username "org\helings"
 ProfielKaarten: Adding hover behavior to element for username "org\helings"
 ProfielKaarten: Adding hover behavior to element for username "org\hendriky"
 ProfielKaarten: Adding hover behavior to element for username "org\hendriky"
 ProfielKaarten: Adding hover behavior to element for username "org\jacobsb"
 ProfielKaarten: Adding hover behavior to element for username "org\jacobsb"
 ProfielKaarten: Adding hover behavior to element for username "org\jongsmas"
 ProfielKaarten: Adding hover behavior to element for username "org\jongsmas"
 ProfielKaarten: Adding hover behavior to element for username "org\kropffs"
 ProfielKaarten: Adding hover behavior to element for username "org\kropffs"
 ProfielKaarten: Adding hover behavior to element for username "org\mansourk"
 ProfielKaarten: Adding hover behavior to element for username "org\mansourk"
 ProfielKaarten: Adding hover behavior to element for username "org\messaoul"
 ProfielKaarten: Adding hover behavior to element for username "org\messaoul"
 ProfielKaarten: Adding hover behavior to element for username "org\oelenb"
 ProfielKaarten: Adding hover behavior to element for username "org\oelenb"
 ProfielKaarten: Adding hover behavior to element for username "org\raufz1"
 ProfielKaarten: Adding hover behavior to element for username "org\raufz1"
 ProfielKaarten: Adding hover behavior to element for username "org\schaikh"
 ProfielKaarten: Adding hover behavior to element for username "org\schaikh"
 ProfielKaarten: Adding hover behavior to element for username "org\schieved"
 ProfielKaarten: Adding hover behavior to element for username "org\schieved"
 ProfielKaarten: Adding hover behavior to element for username "org\tuiln"
 ProfielKaarten: Adding hover behavior to element for username "org\tuiln"
 ProfielKaarten: Adding hover behavior to element for username "org\krabbenb"
 ProfielKaarten: Adding hover behavior to element for username "org\krabbenb"
 ProfielKaarten: Adding hover behavior to element for username "org\elkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\elkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\gooln"
 ProfielKaarten: Adding hover behavior to element for username "org\gooln"
 ProfielKaarten: Adding hover behavior to element for username "org\haarlemy"
 ProfielKaarten: Adding hover behavior to element for username "org\haarlemy"
 ProfielKaarten: Adding hover behavior to element for username "org\haasterm"
 ProfielKaarten: Adding hover behavior to element for username "org\haasterm"
 ProfielKaarten: Adding hover behavior to element for username "org\wandeleh"
 ProfielKaarten: Adding hover behavior to element for username "org\wandeleh"
 ProfielKaarten: Adding hover behavior to element for username "org\wijnenb"
 ProfielKaarten: Adding hover behavior to element for username "org\wijnenb"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw"
 ProfielKaarten: Adding hover behavior to element for username "org\westmaat"
 ProfielKaarten: Adding hover behavior to element for username "org\westmaat"
 ProfielKaarten: Adding hover behavior to element for username "org\wittem1"
 ProfielKaarten: Adding hover behavior to element for username "org\wittem1"
 ProfielKaarten: Adding hover behavior to element for username "org\elbersed"
 ProfielKaarten: Adding hover behavior to element for username "org\elbersed"
 ProfielKaarten: Adding hover behavior to element for username "org\peteka"
 ProfielKaarten: Adding hover behavior to element for username "org\peteka"
 ProfielKaarten: Adding hover behavior to element for username "org\stigterm"
 ProfielKaarten: Adding hover behavior to element for username "org\stigterm"
 Trying to find user with loginName: "org\visserm2"
 Attempting claim-based lookup for user "i:0#.w|org\visserm2"
 Trying to find user with loginName: "org\brinkm1"
 Attempting claim-based lookup for user "i:0#.w|org\brinkm1"
 Trying to find user with loginName: "org\nijburgc"
 Attempting claim-based lookup for user "i:0#.w|org\nijburgc"
 Trying to find user with loginName: "org\fessehae"
 Attempting claim-based lookup for user "i:0#.w|org\fessehae"
 Trying to find user with loginName: "org\sanchesa"
 Attempting claim-based lookup for user "i:0#.w|org\sanchesa"
 Trying to find user with loginName: "org\wissinks"
 Attempting claim-based lookup for user "i:0#.w|org\wissinks"
 Trying to find user with loginName: "org\aarabs"
 Attempting claim-based lookup for user "i:0#.w|org\aarabs"
 Trying to find user with loginName: "org\akdagi"
 Attempting claim-based lookup for user "i:0#.w|org\akdagi"
 Trying to find user with loginName: "org\azahafs"
 Attempting claim-based lookup for user "i:0#.w|org\azahafs"
 Trying to find user with loginName: "org\bhaggoes"
 Attempting claim-based lookup for user "i:0#.w|org\bhaggoes"
 Trying to find user with loginName: "org\bicerp"
 Attempting claim-based lookup for user "i:0#.w|org\bicerp"
 Trying to find user with loginName: "org\biermanl"
 Attempting claim-based lookup for user "i:0#.w|org\biermanl"
 Trying to find user with loginName: "org\bijlsmae"
 Attempting claim-based lookup for user "i:0#.w|org\bijlsmae"
 Trying to find user with loginName: "org\boudraay"
 Attempting claim-based lookup for user "i:0#.w|org\boudraay"
 Trying to find user with loginName: "org\bouzerrs"
 Attempting claim-based lookup for user "i:0#.w|org\bouzerrs"
 Trying to find user with loginName: "org\busselw11"
 Attempting claim-based lookup for user "i:0#.w|org\busselw11"
 Trying to find user with loginName: "org\wita"
 Attempting claim-based lookup for user "i:0#.w|org\wita"
 Trying to find user with loginName: "org\erent"
 Attempting claim-based lookup for user "i:0#.w|org\erent"
 Trying to find user with loginName: "org\helings"
 Attempting claim-based lookup for user "i:0#.w|org\helings"
 Trying to find user with loginName: "org\hendriky"
 Attempting claim-based lookup for user "i:0#.w|org\hendriky"
 Trying to find user with loginName: "org\jacobsb"
 Attempting claim-based lookup for user "i:0#.w|org\jacobsb"
 Trying to find user with loginName: "org\jongsmas"
 Attempting claim-based lookup for user "i:0#.w|org\jongsmas"
 Trying to find user with loginName: "org\kropffs"
 Attempting claim-based lookup for user "i:0#.w|org\kropffs"
 Trying to find user with loginName: "org\mansourk"
 Attempting claim-based lookup for user "i:0#.w|org\mansourk"
sharepointService.js:36 Trying to find user with loginName: "org\messaoul"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\messaoul"
sharepointService.js:36 Trying to find user with loginName: "org\oelenb"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\oelenb"
sharepointService.js:36 Trying to find user with loginName: "org\raufz1"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\raufz1"
sharepointService.js:36 Trying to find user with loginName: "org\schaikh"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\schaikh"
sharepointService.js:36 Trying to find user with loginName: "org\schieved"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\schieved"
sharepointService.js:36 Trying to find user with loginName: "org\tuiln"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\tuiln"
sharepointService.js:36 Trying to find user with loginName: "org\krabbenb"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\krabbenb"
sharepointService.js:36 Trying to find user with loginName: "org\elkm1"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\elkm1"
sharepointService.js:36 Trying to find user with loginName: "org\gooln"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\gooln"
sharepointService.js:36 Trying to find user with loginName: "org\haarlemy"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\haarlemy"
sharepointService.js:36 Trying to find user with loginName: "org\haasterm"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\haasterm"
sharepointService.js:36 Trying to find user with loginName: "org\wandeleh"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\wandeleh"
sharepointService.js:36 Trying to find user with loginName: "org\wijnenb"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\wijnenb"
sharepointService.js:36 Trying to find user with loginName: "org\busselw"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\busselw"
sharepointService.js:36 Trying to find user with loginName: "org\westmaat"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\westmaat"
sharepointService.js:36 Trying to find user with loginName: "org\wittem1"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\wittem1"
sharepointService.js:36 Trying to find user with loginName: "org\elbersed"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\elbersed"
sharepointService.js:36 Trying to find user with loginName: "org\peteka"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\peteka"
sharepointService.js:36 Trying to find user with loginName: "org\stigterm"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\stigterm"
Verlofrooster.aspx:412 ðŸ“‹ UserRegistrationCheck useEffect triggered
Verlofrooster.aspx:418 ðŸ” Starting user registration check...
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 💾 Cached 113 items for verlof (key: maand-2025-6)
 ✅ Loaded 113 items from Verlof for period maand-2025-6
 💾 Cached 23 items for compensatie (key: maand-2025-6)
 ✅ Loaded 23 items from CompensatieUren for period maand-2025-6
 💾 Cached 132 items for zittingsvrij (key: maand-2025-6)
 ✅ Loaded 132 items from IncidenteelZittingVrij for period maand-2025-6
 📊 Loading Logic Status: {currentCacheKey: 'maand-2025-6', lastLoadedPeriod: {…}, cacheSize: {…}, cachedPeriods: {…}}
 📅 Loading period range: 2025-05-31 to 2025-08-30
 📅 Current period range: 2025-05-31 to 2025-08-30
 âœ… Data fetched successfully, processing...
 ðŸ” DEBUG: Processing rotating record ID 155 - Raw WeekType: 'B' (type: string), Processed: 'B'
 ðŸ” DEBUG: Processing rotating record ID 156 - Raw WeekType: 'A' (type: string), Processed: 'A'
 ðŸ” DEBUG: Processed UrenPerWeek data: (2) [{…}, {…}]
 âœ… Data processing complete!
 DEBUG - Loaded medewerkers: (5) [{…}, {…}, {…}, {…}, {…}]
 ðŸ refreshData complete, setting loading to false
 ðŸ  RoosterApp component initialized
 ðŸ” DEBUG: Grouped rotating schedule records for org\jacobsb: (4) [{…}, {…}, {…}, {…}]
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 1-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 2-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 3-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 4-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 04 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 5-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 6-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 7-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 8-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 9-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 10-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 11-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 11 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 12-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 13-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 14-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 15-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 16-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 17-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 18-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 18 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 19-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 20-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 21-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 22-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 23-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 24-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 25-7-2025: Record ID 26 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\brinkm1 on Fri Jul 25 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 26-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 27-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 28-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 29-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 30-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\brinkm1 on 31-7-2025: Record ID 26 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 1-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 2-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 3-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 4-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 5-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 6-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 7-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 8-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 9-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 10-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 11-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 12-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 13-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 14-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 15-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 16-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 17-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 18-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 19-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 20-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 21-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 22-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 23-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 24-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 25-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 26-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 27-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 28-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 29-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 30-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\nijburgc on 31-7-2025: Record ID 10 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 1-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 2-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 02 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 3-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 4-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 5-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 6-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 7-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 8-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 9-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 09 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 10-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 11-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 12-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 13-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 14-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 15-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 16-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 16 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 17-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 18-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 19-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 20-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 21-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 22-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 23-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 23 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 24-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 25-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 26-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 27-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 28-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 29-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\fessehae on 30-7-2025: Record ID 22 from 25-4-2025
 ðŸ” Rendered UrenPerWeek block for org\fessehae on Wed Jul 30 2025: VVD (record from 25-4-2025)
 âœ… Selected standard UrenPerWeek record for org\fessehae on 31-7-2025: Record ID 22 from 25-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 1-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 2-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 3-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 4-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 04 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 5-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 6-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 7-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 8-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 9-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 10-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 11-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 11 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 12-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 13-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 14-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 15-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 16-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 17-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 18-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 18 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 19-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 20-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 21-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 22-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 23-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 24-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 25-7-2025: Record ID 23 from 28-4-2025
 ðŸ” Rendered UrenPerWeek block for org\sanchesa on Fri Jul 25 2025: VVD (record from 28-4-2025)
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 26-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 27-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 28-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 29-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 30-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\sanchesa on 31-7-2025: Record ID 23 from 28-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 1-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 2-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 02 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 3-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 4-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 5-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 6-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 7-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 8-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 9-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 09 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 10-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 11-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 12-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 13-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 14-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 15-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 16-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 16 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 17-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 18-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 19-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 20-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 21-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 22-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 23-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 23 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 24-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 25-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 26-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 27-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 28-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 29-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\wissinks on 30-7-2025: Record ID 25 from 29-4-2025
 ðŸ” Rendered UrenPerWeek block for org\wissinks on Wed Jul 30 2025: VVD (record from 29-4-2025)
 âœ… Selected standard UrenPerWeek record for org\wissinks on 31-7-2025: Record ID 25 from 29-4-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 1-7-2025: Record ID 73 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\aarabs on Tue Jul 01 2025: {FileSystemObjectType: 0, Id: 106, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\aarabs on 2-7-2025: Record ID 73 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\aarabs on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 106, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\aarabs on 3-7-2025: Record ID 73 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\aarabs on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 106, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\aarabs on 4-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 5-7-2025: Record ID 73 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\aarabs on Sat Jul 05 2025: {FileSystemObjectType: 0, Id: 106, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\aarabs on 6-7-2025: Record ID 73 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\aarabs on Sun Jul 06 2025: {FileSystemObjectType: 0, Id: 106, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\aarabs on 7-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 8-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 9-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 10-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 11-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 12-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 13-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 14-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 15-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 16-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 17-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 18-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 19-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 20-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 21-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 22-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 23-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 24-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 25-7-2025: Record ID 73 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\aarabs on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\aarabs on 26-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 27-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 28-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 29-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 30-7-2025: Record ID 73 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\aarabs on 31-7-2025: Record ID 73 from 26-5-2025
 Found 1 compensatie items for org\akdagi on Thu Jul 03 2025: [{…}]
 Found 1 compensatie items for org\akdagi on Thu Jul 10 2025: [{…}]
 Found 1 compensatie items for org\akdagi on Thu Jul 17 2025: [{…}]
 âœ… Selected standard UrenPerWeek record for org\akdagi on 1-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 2-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 3-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 03 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 4-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 5-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 6-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 7-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 8-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 9-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 10-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 10 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 11-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 12-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 13-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 14-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 15-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 16-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 17-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 17 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 18-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 19-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 20-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 21-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 22-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 23-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 24-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 24 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 25-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\akdagi on 26-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 27-7-2025: Record ID 88 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\akdagi on 28-7-2025: Record ID 88 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\akdagi on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 105, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\akdagi on 29-7-2025: Record ID 88 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\akdagi on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 105, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\akdagi on 30-7-2025: Record ID 88 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\akdagi on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 105, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\akdagi on 31-7-2025: Record ID 88 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\akdagi on Thu Jul 31 2025: VVD (record from 27-5-2025)
 ðŸŽ¯ Rendering primary item block for org\azahafs on Tue Jul 01 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Fri Jul 04 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sat Jul 05 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sun Jul 06 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Mon Jul 07 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Tue Jul 08 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Wed Jul 09 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Thu Jul 10 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Fri Jul 11 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sat Jul 12 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sun Jul 13 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Mon Jul 14 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Tue Jul 15 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Fri Jul 18 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sat Jul 19 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sun Jul 20 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Fri Jul 25 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sat Jul 26 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Sun Jul 27 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\azahafs on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 297, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 1-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 2-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 3-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 4-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 5-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 6-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 7-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 8-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 9-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 10-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 11-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 12-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 13-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 14-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 15-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 16-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 17-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 18-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 19-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 20-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 21-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 22-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 23-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 24-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 25-7-2025: Record ID 80 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bhaggoes on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 26-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 27-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 28-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 29-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 30-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bhaggoes on 31-7-2025: Record ID 80 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 1-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 2-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 3-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 4-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 04 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 5-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 6-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 7-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 07 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 8-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 9-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 10-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 11-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 11 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 12-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 13-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 14-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 14 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 15-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 16-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 17-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 18-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 18 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 19-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 20-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 21-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 21 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 22-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 23-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 24-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 25-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Fri Jul 25 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 26-7-2025: Record ID 92 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\bicerp on Sat Jul 26 2025: {FileSystemObjectType: 0, Id: 110, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\bicerp on 27-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 28-7-2025: Record ID 92 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bicerp on Mon Jul 28 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bicerp on 29-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 30-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\bicerp on 31-7-2025: Record ID 92 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\biermanl on 1-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Tue Jul 01 2025: {FileSystemObjectType: 0, Id: 290, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 2-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 290, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 3-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 290, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 4-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 04 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 5-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sat Jul 05 2025: {FileSystemObjectType: 0, Id: 290, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 6-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sun Jul 06 2025: {FileSystemObjectType: 0, Id: 290, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 7-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Mon Jul 07 2025: {FileSystemObjectType: 0, Id: 290, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 8-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Tue Jul 08 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 9-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Wed Jul 09 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 10-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Thu Jul 10 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 11-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 11 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 12-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sat Jul 12 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 13-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sun Jul 13 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 14-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Mon Jul 14 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 15-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Tue Jul 15 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 16-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 17-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 18-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 18 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 19-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sat Jul 19 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 20-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sun Jul 20 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 21-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 22-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 23-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 24-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 25-7-2025: Record ID 51 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\biermanl on Fri Jul 25 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\biermanl on 26-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sat Jul 26 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 27-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Sun Jul 27 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 28-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 29-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 30-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\biermanl on 31-7-2025: Record ID 51 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\biermanl on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 296, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 1-7-2025: Record ID 57 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\bijlsmae on Tue Jul 01 2025: {FileSystemObjectType: 0, Id: 93, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 2-7-2025: Record ID 57 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\bijlsmae on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 93, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 3-7-2025: Record ID 57 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\bijlsmae on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 93, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 4-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 5-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 6-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 7-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 8-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 9-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 10-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 11-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 12-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 13-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 14-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 15-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 16-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 17-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 18-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 19-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 20-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 21-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 22-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 23-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 24-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 25-7-2025: Record ID 57 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bijlsmae on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 26-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 27-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 28-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 29-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 30-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bijlsmae on 31-7-2025: Record ID 57 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 1-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 2-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 3-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 4-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 5-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 6-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 7-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 8-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 9-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 10-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 11-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 12-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 13-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 14-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 15-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 16-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 17-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 18-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 19-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 20-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 21-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 92, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\boudraay on 22-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 92, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\boudraay on 23-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 92, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\boudraay on 24-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 92, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\boudraay on 25-7-2025: Record ID 75 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\boudraay on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\boudraay on 26-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 27-7-2025: Record ID 75 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\boudraay on 28-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 172, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\boudraay on 29-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 172, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\boudraay on 30-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 172, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\boudraay on 31-7-2025: Record ID 75 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\boudraay on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 172, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 1-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 2-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 3-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 4-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 5-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 6-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 7-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 8-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 9-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 10-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 11-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 12-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 13-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 14-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 15-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 16-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 17-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 18-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 19-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 20-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 21-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 22-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 23-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 24-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 25-7-2025: Record ID 74 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\bouzerrs on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 26-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 27-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 28-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 29-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 30-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\bouzerrs on 31-7-2025: Record ID 74 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 1-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 2-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 3-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 4-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 5-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 6-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 7-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 8-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 9-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 10-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 11-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 12-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 13-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 14-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 15-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 16-7-2025: Record ID 76 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wita on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 23, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\wita on 17-7-2025: Record ID 76 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wita on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 278, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wita on 18-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 19-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 20-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 21-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 22-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 23-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 24-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 25-7-2025: Record ID 76 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wita on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wita on 26-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 27-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 28-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 29-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 30-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wita on 31-7-2025: Record ID 76 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 1-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 2-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 3-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 4-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 5-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 6-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 7-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 8-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 9-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 10-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 11-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 12-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 13-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 14-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 15-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 16-7-2025: Record ID 89 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\erent on 17-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 18-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 19-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Sat Jul 19 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 20-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Sun Jul 20 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 21-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 22-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 23-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 24-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 25-7-2025: Record ID 89 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\erent on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\erent on 26-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Sat Jul 26 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 27-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Sun Jul 27 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 28-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 29-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 30-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\erent on 31-7-2025: Record ID 89 from 27-5-2025
 ðŸŽ¯ Rendering primary item block for org\erent on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 157, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\helings on 1-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 2-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 3-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 4-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 5-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 6-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 7-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 07 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 8-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 9-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 10-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 11-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 12-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 13-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 14-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 14 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 15-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 16-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 17-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 18-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 19-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 20-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 21-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 21 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 22-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 23-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 24-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 25-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 26-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 27-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 28-7-2025: Record ID 18 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\helings on Mon Jul 28 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\helings on 29-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 30-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\helings on 31-7-2025: Record ID 18 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 1-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 01 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 2-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 02 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 3-7-2025: Record ID 68 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\hendriky on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 104, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\hendriky on 4-7-2025: Record ID 68 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\hendriky on Fri Jul 04 2025: {FileSystemObjectType: 0, Id: 104, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\hendriky on 5-7-2025: Record ID 68 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\hendriky on Sat Jul 05 2025: {FileSystemObjectType: 0, Id: 104, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\hendriky on 6-7-2025: Record ID 68 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\hendriky on Sun Jul 06 2025: {FileSystemObjectType: 0, Id: 104, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\hendriky on 7-7-2025: Record ID 68 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\hendriky on Mon Jul 07 2025: {FileSystemObjectType: 0, Id: 104, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\hendriky on 8-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 08 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 9-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 09 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 10-7-2025: Record ID 68 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\hendriky on Thu Jul 10 2025: {FileSystemObjectType: 0, Id: 16, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\hendriky on 11-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 12-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 13-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 14-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 15-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 15 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 16-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 16 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 17-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 18-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 19-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 20-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 21-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 22-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 22 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 23-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 23 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 24-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 25-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 26-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 27-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 28-7-2025: Record ID 68 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\hendriky on 29-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Tue Jul 29 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 30-7-2025: Record ID 68 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\hendriky on Wed Jul 30 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\hendriky on 31-7-2025: Record ID 68 from 26-5-2025
 Found 1 compensatie items for org\jacobsb on Fri Jul 11 2025: [{…}]
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 1-7-2025: Record ID 101 from 10-6-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 2-7-2025: Record ID 101 from 10-6-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 3-7-2025: Record ID 101 from 10-6-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 4-7-2025: Record ID 123 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 5-7-2025: Record ID 123 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\jacobsb on 6-7-2025: Record ID 123 from 4-7-2025
 ðŸ” Week calculation for 7-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 âœ… Found Week A record for org\jacobsb: ID 156
 ðŸ” Week calculation for 8-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 8-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 9-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 9-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 10-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 10-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 11-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 11-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸŽ¯ Rendering primary item block for org\jacobsb on Fri Jul 11 2025: {FileSystemObjectType: 0, Id: 298, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸ” Week calculation for 12-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 12-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” Week calculation for 13-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 13-7-2025 (week starts 7-7-2025)
 ðŸ” Weeks since cycle start: 0
 ðŸ” Week type: A
 ðŸ” DEBUG: Looking for Week A in rotating period (calculated from cycle start: 7-7-2025)
 ðŸ” Week calculation for 14-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 14-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Rendered UrenPerWeek block for org\jacobsb on Mon Jul 14 2025: VVD (record from 7-7-2025)
 ðŸ” Week calculation for 15-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 15-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 16-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 16-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 17-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 17-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 18-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 18-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” DEBUG: Looking for Week B in rotating period (calculated from cycle start: 7-7-2025)
 ðŸ” Week calculation for 19-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 19-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” Week calculation for 20-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 20-7-2025 (week starts 14-7-2025)
 ðŸ” Weeks since cycle start: 1
 ðŸ” Week type: B
 ðŸ” DEBUG: Looking for Week B in rotating period (calculated from cycle start: 7-7-2025)
 ðŸ” Week calculation for 21-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 21-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 22-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 22-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 23-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 23-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 24-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 24-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 25-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 25-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 26-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 26-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 âœ… Found Week A record for org\jacobsb: ID 156
 ðŸ” Week calculation for 27-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 27-7-2025 (week starts 21-7-2025)
 ðŸ” Weeks since cycle start: 2
 ðŸ” Week type: A
 ðŸ” Week calculation for 28-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 28-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 ðŸ” Rendered UrenPerWeek block for org\jacobsb on Mon Jul 28 2025: VVD (record from 7-7-2025)
 ðŸ” Week calculation for 29-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 29-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 ðŸ” Week calculation for 30-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 30-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 ðŸ” Week calculation for 31-7-2025:
 ðŸ” Cycle start: 7-7-2025 (week starts 7-7-2025)
 ðŸ” Target date: 31-7-2025 (week starts 28-7-2025)
 ðŸ” Weeks since cycle start: 3
 ðŸ” Week type: B
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 1-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 2-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 3-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 4-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 5-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 6-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 7-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 8-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 9-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 10-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 11-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 12-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 13-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 14-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 15-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 16-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 17-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 18-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 19-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 20-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 21-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 22-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 23-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 24-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 25-7-2025: Record ID 83 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\jongsmas on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 26-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 27-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 28-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 29-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 30-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\jongsmas on 31-7-2025: Record ID 83 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 1-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 2-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 3-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 4-7-2025: Record ID 64 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\kropffs on 5-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 6-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 7-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 8-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 9-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 10-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 11-7-2025: Record ID 64 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\kropffs on 12-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 13-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 14-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 15-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 16-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 17-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 18-7-2025: Record ID 64 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\kropffs on 19-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 20-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 21-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 22-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 23-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 24-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 25-7-2025: Record ID 64 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\kropffs on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\kropffs on 26-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 27-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 28-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 29-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 30-7-2025: Record ID 64 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\kropffs on 31-7-2025: Record ID 64 from 26-5-2025
 Found 1 compensatie items for org\mansourk on Fri Jul 18 2025: [{…}]
 âœ… Selected standard UrenPerWeek record for org\mansourk on 1-7-2025: Record ID 49 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 2-7-2025: Record ID 49 from 20-5-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 3-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 4-7-2025: Record ID 13 from 3-7-2025
 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 04 2025: VVD (record from 3-7-2025)
 âœ… Selected standard UrenPerWeek record for org\mansourk on 5-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 6-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 7-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 8-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 9-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 10-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 11-7-2025: Record ID 13 from 3-7-2025
 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 11 2025: VVD (record from 3-7-2025)
 âœ… Selected standard UrenPerWeek record for org\mansourk on 12-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 13-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 14-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 15-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 16-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 17-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 18-7-2025: Record ID 13 from 3-7-2025
 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 18 2025: VVD (record from 3-7-2025)
 âœ… Selected standard UrenPerWeek record for org\mansourk on 19-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 20-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 21-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 22-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 23-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 24-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 25-7-2025: Record ID 13 from 3-7-2025
 ðŸ” Rendered UrenPerWeek block for org\mansourk on Fri Jul 25 2025: VVD (record from 3-7-2025)
 âœ… Selected standard UrenPerWeek record for org\mansourk on 26-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 27-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 28-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 29-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 30-7-2025: Record ID 13 from 3-7-2025
 âœ… Selected standard UrenPerWeek record for org\mansourk on 31-7-2025: Record ID 13 from 3-7-2025
 ðŸŽ¯ Rendering primary item block for org\messaoul on Tue Jul 01 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Fri Jul 04 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sat Jul 05 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sun Jul 06 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Mon Jul 07 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Tue Jul 08 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Wed Jul 09 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Thu Jul 10 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Fri Jul 11 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sat Jul 12 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sun Jul 13 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Mon Jul 14 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Tue Jul 15 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Fri Jul 18 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sat Jul 19 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sun Jul 20 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Fri Jul 25 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sat Jul 26 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Sun Jul 27 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 ðŸŽ¯ Rendering primary item block for org\messaoul on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 295, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\oelenb on 1-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 2-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 3-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 4-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 5-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 6-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 7-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 8-7-2025: Record ID 61 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\oelenb on Tue Jul 08 2025: {FileSystemObjectType: 0, Id: 159, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\oelenb on 9-7-2025: Record ID 61 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\oelenb on Wed Jul 09 2025: {FileSystemObjectType: 0, Id: 11, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\oelenb on 10-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 11-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 12-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 13-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 14-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 15-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 16-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 17-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 18-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 19-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 20-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 21-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 22-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 23-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 24-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 25-7-2025: Record ID 61 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\oelenb on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\oelenb on 26-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 27-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 28-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 29-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 30-7-2025: Record ID 61 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\oelenb on 31-7-2025: Record ID 61 from 26-5-2025
 âš ï¸ No applicable UrenPerWeek record found for org\raufz1 on 2-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 14-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 15-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 16-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 17-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 18-7-2025: Record ID 62 from 14-7-2025
 ðŸ” Rendered UrenPerWeek block for org\raufz1 on Fri Jul 18 2025: VVD (record from 14-7-2025)
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 19-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 20-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 21-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 22-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 23-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 24-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 25-7-2025: Record ID 62 from 14-7-2025
 ðŸ” Rendered UrenPerWeek block for org\raufz1 on Fri Jul 25 2025: VVD (record from 14-7-2025)
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 26-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 27-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 28-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 29-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 30-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\raufz1 on 31-7-2025: Record ID 62 from 14-7-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 1-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 2-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 3-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 4-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 04 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 5-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 6-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 7-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 8-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 9-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 10-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 11-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 11 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 12-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 13-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 14-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 15-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 16-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 17-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 18-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 18 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 19-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 20-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 21-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 22-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 23-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 24-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 25-7-2025: Record ID 56 from 23-5-2025
 ðŸ” Rendered UrenPerWeek block for org\schaikh on Fri Jul 25 2025: VVM (record from 23-5-2025)
 âœ… Selected standard UrenPerWeek record for org\schaikh on 26-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 27-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 28-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 29-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 30-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schaikh on 31-7-2025: Record ID 56 from 23-5-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 1-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 2-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 3-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 4-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 04 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 5-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 6-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 7-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 8-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 9-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 10-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 11-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 11 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 12-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 13-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 14-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 15-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 16-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 17-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 18-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 18 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 19-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 20-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 21-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 22-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 23-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 24-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 25-7-2025: Record ID 15 from 22-4-2025
 ðŸ” Rendered UrenPerWeek block for org\schieved on Fri Jul 25 2025: VVD (record from 22-4-2025)
 âœ… Selected standard UrenPerWeek record for org\schieved on 26-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 27-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 28-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 29-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 30-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\schieved on 31-7-2025: Record ID 15 from 22-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 1-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 2-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 3-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 4-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 04 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 5-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 6-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 7-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 8-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 9-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 10-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 11-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 11 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 12-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 13-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 14-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 15-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 16-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 17-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 18-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 18 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 19-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 20-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 21-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 22-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 23-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 24-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 25-7-2025: Record ID 19 from 23-4-2025
 ðŸ” Rendered UrenPerWeek block for org\tuiln on Fri Jul 25 2025: VVD (record from 23-4-2025)
 âœ… Selected standard UrenPerWeek record for org\tuiln on 26-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 27-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 28-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 29-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 30-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\tuiln on 31-7-2025: Record ID 19 from 23-4-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 1-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 2-7-2025: Record ID 67 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\krabbenb on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 84, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 3-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 4-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 5-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 6-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 7-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 8-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 9-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 10-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 11-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 12-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 13-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 14-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 15-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 16-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 17-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 18-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 19-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 20-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 21-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 22-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 23-7-2025: Record ID 67 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\krabbenb on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 85, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 24-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 25-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 26-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 27-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 28-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 29-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 30-7-2025: Record ID 67 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\krabbenb on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 86, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\krabbenb on 31-7-2025: Record ID 67 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 1-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 2-7-2025: Record ID 65 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\elkm1 on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 178, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 3-7-2025: Record ID 65 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\elkm1 on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 178, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 4-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 5-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 6-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 7-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 8-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 9-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 10-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 11-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 12-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 13-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 14-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 15-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 16-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 17-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 18-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 19-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 20-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 21-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 22-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 23-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 24-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 25-7-2025: Record ID 65 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elkm1 on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 26-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 27-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 28-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 29-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 30-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\elkm1 on 31-7-2025: Record ID 65 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\gooln on 1-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Tue Jul 01 2025: {FileSystemObjectType: 0, Id: 115, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 2-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Wed Jul 02 2025: {FileSystemObjectType: 0, Id: 115, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 3-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 4-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 04 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 5-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sat Jul 05 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 6-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sun Jul 06 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 7-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Mon Jul 07 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 8-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Tue Jul 08 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 9-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Wed Jul 09 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 10-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Thu Jul 10 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 11-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 11 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 12-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sat Jul 12 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 13-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sun Jul 13 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 14-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Mon Jul 14 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 15-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Tue Jul 15 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 16-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 17-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 18-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 18 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 19-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sat Jul 19 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 20-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sun Jul 20 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 21-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 22-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 23-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 24-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 25-7-2025: Record ID 39 from 20-5-2025
 ðŸ” Rendered UrenPerWeek block for org\gooln on Fri Jul 25 2025: VVD (record from 20-5-2025)
 âœ… Selected standard UrenPerWeek record for org\gooln on 26-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sat Jul 26 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 27-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Sun Jul 27 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 28-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 29-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 30-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\gooln on 31-7-2025: Record ID 39 from 20-5-2025
 ðŸŽ¯ Rendering primary item block for org\gooln on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 294, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 1-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 2-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 3-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 4-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 5-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 6-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 7-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 8-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 9-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 10-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 11-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 12-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 13-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 14-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 15-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 16-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 17-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 18-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 19-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 20-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 21-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 95, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 22-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 95, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 23-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 95, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 24-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 95, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 25-7-2025: Record ID 59 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haarlemy on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 26-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 27-7-2025: Record ID 59 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 28-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 97, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 29-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 97, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 30-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 97, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haarlemy on 31-7-2025: Record ID 59 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\haarlemy on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 97, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\haasterm on 1-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 2-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 3-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 4-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 04 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 5-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 6-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 7-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 8-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 9-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 10-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 11-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 11 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 12-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 13-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 14-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 15-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 16-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 17-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 18-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 18 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 19-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 20-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 21-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 22-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 23-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 24-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 25-7-2025: Record ID 58 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\haasterm on Fri Jul 25 2025: VVM (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\haasterm on 26-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 27-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 28-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 29-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 30-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\haasterm on 31-7-2025: Record ID 58 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 1-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 2-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 3-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 4-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 04 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 5-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 6-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 7-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 8-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 9-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 10-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Thu Jul 10 2025: {FileSystemObjectType: 0, Id: 197, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 11-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 11 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 12-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 13-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 14-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Mon Jul 14 2025: {FileSystemObjectType: 0, Id: 142, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 15-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Tue Jul 15 2025: {FileSystemObjectType: 0, Id: 143, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 16-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 143, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 17-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 143, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 18-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 18 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 19-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 20-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 21-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 144, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 22-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 144, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 23-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 144, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 24-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Thu Jul 24 2025: {FileSystemObjectType: 0, Id: 144, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 25-7-2025: Record ID 72 from 26-5-2025
 ðŸ” Rendered UrenPerWeek block for org\wandeleh on Fri Jul 25 2025: VVD (record from 26-5-2025)
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 26-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 27-7-2025: Record ID 72 from 26-5-2025
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 28-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Mon Jul 28 2025: {FileSystemObjectType: 0, Id: 145, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 29-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Tue Jul 29 2025: {FileSystemObjectType: 0, Id: 146, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 30-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Wed Jul 30 2025: {FileSystemObjectType: 0, Id: 146, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wandeleh on 31-7-2025: Record ID 72 from 26-5-2025
 ðŸŽ¯ Rendering primary item block for org\wandeleh on Thu Jul 31 2025: {FileSystemObjectType: 0, Id: 146, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 1-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 2-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 3-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 4-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 04 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 5-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 6-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 7-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 8-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 9-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 10-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 11-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 11 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 12-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 13-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 14-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 15-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 16-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 17-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 18-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 18 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 19-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 20-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 21-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 22-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 23-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 24-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 25-7-2025: Record ID 99 from 2-6-2025
 ðŸ” Rendered UrenPerWeek block for org\wijnenb on Fri Jul 25 2025: VVD (record from 2-6-2025)
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 26-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 27-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 28-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 29-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 30-7-2025: Record ID 99 from 2-6-2025
 âœ… Selected standard UrenPerWeek record for org\wijnenb on 31-7-2025: Record ID 99 from 2-6-2025
 Found 1 compensatie items for org\busselw on Thu Jul 10 2025: [{…}]
 Found 1 compensatie items for org\busselw on Mon Jul 14 2025: [{…}]
 Found 1 compensatie items for org\busselw on Tue Jul 15 2025: [{…}]
 Found 1 compensatie items for org\busselw on Thu Jul 24 2025: [{…}]
 ðŸŽ¯ Rendering primary item block for org\busselw on Thu Jul 03 2025: {FileSystemObjectType: 0, Id: 108, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\busselw on 7-7-2025: Record ID 162 from 7-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 8-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 9-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 10-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 11-7-2025: Record ID 161 from 8-7-2025
 ðŸ” Rendered UrenPerWeek block for org\busselw on Fri Jul 11 2025: VVM (record from 8-7-2025)
 âœ… Selected standard UrenPerWeek record for org\busselw on 12-7-2025: Record ID 161 from 8-7-2025
 ðŸŽ¯ Rendering primary item block for org\busselw on Sat Jul 12 2025: {FileSystemObjectType: 0, Id: 109, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\busselw on 13-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 14-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 15-7-2025: Record ID 161 from 8-7-2025
 ðŸŽ¯ Rendering primary item block for org\busselw on Tue Jul 15 2025: {FileSystemObjectType: 0, Id: 104, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\busselw on 16-7-2025: Record ID 161 from 8-7-2025
 ðŸŽ¯ Rendering primary item block for org\busselw on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 105, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\busselw on 17-7-2025: Record ID 161 from 8-7-2025
 ðŸŽ¯ Rendering primary item block for org\busselw on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 107, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\busselw on 18-7-2025: Record ID 161 from 8-7-2025
 ðŸ” Rendered UrenPerWeek block for org\busselw on Fri Jul 18 2025: VVM (record from 8-7-2025)
 âœ… Selected standard UrenPerWeek record for org\busselw on 19-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 20-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 21-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 22-7-2025: Record ID 161 from 8-7-2025
 ðŸŽ¯ Rendering primary item block for org\busselw on Tue Jul 22 2025: {FileSystemObjectType: 0, Id: 286, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\busselw on 23-7-2025: Record ID 161 from 8-7-2025
 ðŸŽ¯ Rendering primary item block for org\busselw on Wed Jul 23 2025: {FileSystemObjectType: 0, Id: 287, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\busselw on 24-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 25-7-2025: Record ID 161 from 8-7-2025
 ðŸ” Rendered UrenPerWeek block for org\busselw on Fri Jul 25 2025: VVM (record from 8-7-2025)
 âœ… Selected standard UrenPerWeek record for org\busselw on 26-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 27-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 28-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 29-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 30-7-2025: Record ID 161 from 8-7-2025
 âœ… Selected standard UrenPerWeek record for org\busselw on 31-7-2025: Record ID 161 from 8-7-2025
 Found 1 compensatie items for org\wittem1 on Thu Jul 03 2025: [{…}]
 Found 1 compensatie items for org\wittem1 on Sun Jul 06 2025: [{…}]
 Found 1 compensatie items for org\wittem1 on Thu Jul 24 2025: [{…}]
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 4-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Fri Jul 04 2025: {FileSystemObjectType: 0, Id: 101, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 5-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 6-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 7-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 8-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 08 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 9-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Wed Jul 09 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 10-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Thu Jul 10 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 11-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Fri Jul 11 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 12-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Sat Jul 12 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 13-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Sun Jul 13 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 14-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Mon Jul 14 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 15-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 15 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 16-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Wed Jul 16 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 17-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Thu Jul 17 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 18-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Fri Jul 18 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 19-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Sat Jul 19 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 20-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Sun Jul 20 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 21-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Mon Jul 21 2025: {FileSystemObjectType: 0, Id: 128, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01003DBDD863F3470049828EDC58123C8207', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 22-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 22 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 23-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 24-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 25-7-2025: Record ID 130 from 4-7-2025
 ðŸŽ¯ Rendering primary item block for org\wittem1 on Fri Jul 25 2025: {FileSystemObjectType: 0, Id: 102, ServerRedirectedEmbedUri: null, ServerRedirectedEmbedUrl: '', ContentTypeId: '0x01006CD5021067F3364AB91C45D47316F33C', …}
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 26-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 27-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 28-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 29-7-2025: Record ID 130 from 4-7-2025
 ðŸ” Rendered UrenPerWeek block for org\wittem1 on Tue Jul 29 2025: VVD (record from 4-7-2025)
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 30-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\wittem1 on 31-7-2025: Record ID 130 from 4-7-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 1-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 2-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 3-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 4-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 04 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 5-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 6-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 7-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 8-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 9-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 10-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 11-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 11 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 12-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 13-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 14-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 15-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 16-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 17-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 18-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 18 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 19-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 20-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 21-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 22-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 23-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 24-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 25-7-2025: Record ID 85 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\elbersed on Fri Jul 25 2025: VVM (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\elbersed on 26-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 27-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 28-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 29-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 30-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\elbersed on 31-7-2025: Record ID 85 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 1-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 2-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 3-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 4-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 04 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 5-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 6-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 7-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 8-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 9-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 10-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 11-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 11 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 12-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 13-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 14-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 15-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 16-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 17-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 18-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 18 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 19-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 20-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 21-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 22-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 23-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 24-7-2025: Record ID 84 from 27-5-2025
 âœ… Selected standard UrenPerWeek record for org\peteka on 25-7-2025: Record ID 84 from 27-5-2025
 ðŸ” Rendered UrenPerWeek block for org\peteka on Fri Jul 25 2025: VVD (record from 27-5-2025)
 âœ… Selected standard UrenPerWeek record for org\peteka on 26-7-2025: Record ID 84 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\peteka on 27-7-2025: Record ID 84 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\peteka on 28-7-2025: Record ID 84 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\peteka on 29-7-2025: Record ID 84 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\peteka on 30-7-2025: Record ID 84 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\peteka on 31-7-2025: Record ID 84 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 1-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 2-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 3-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 4-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 04 2025: VVD (record from 27-5-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 5-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 6-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 7-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 8-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 9-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 10-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 11-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 11 2025: VVD (record from 27-5-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 12-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 13-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 14-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 15-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 16-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 17-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 18-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 18 2025: VVD (record from 27-5-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 19-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 20-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 21-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 22-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 23-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 24-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 25-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:2336 ðŸ” Rendered UrenPerWeek block for org\stigterm on Fri Jul 25 2025: VVD (record from 27-5-2025)
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 26-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 27-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 28-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 29-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 30-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:1946 âœ… Selected standard UrenPerWeek record for org\stigterm on 31-7-2025: Record ID 86 from 27-5-2025
Verlofrooster.aspx:2506 ðŸŽ¯ About to render UserRegistrationCheck wrapper
Verlofrooster.aspx:406 ðŸš€ UserRegistrationCheck component initialized
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 🔍 Auto-attaching tooltips to DOM elements...
 Found 363 verlof blocks
 Found 28 compensatie blocks
 Found 18 zittingsvrij blocks
 Found 0 ziekte blocks
 Found 0 feestdag elements
 Found 2 button elements
 Found 0 icon/title elements
 ✅ Auto-attach tooltips completed: 379 tooltips attached
 ðŸ”„ Triggering tooltip re-attachment after data load
 🔍 Auto-attaching tooltips to DOM elements...
 Found 363 verlof blocks
 Found 28 compensatie blocks
 Found 18 zittingsvrij blocks
 Found 0 ziekte blocks
 Found 0 feestdag elements
 Found 0 button elements
 Found 0 icon/title elements
 ✅ Auto-attach tooltips completed: 0 tooltips attached
 ⚛️ React update detected, re-attaching tooltips
 Found user via claim-based: i:0#.w|org\sanchesa
 Found user via claim-based: i:0#.w|org\nijburgc
 Found user via claim-based: i:0#.w|org\fessehae
 Attempting direct lookup for user "org\visserm2"
 Found user via claim-based: i:0#.w|org\wissinks
 Found user via claim-based: i:0#.w|org\bhaggoes
 Found user via claim-based: i:0#.w|org\bicerp
 Found user via claim-based: i:0#.w|org\azahafs
 Found user via claim-based: i:0#.w|org\aarabs
 Found user via claim-based: i:0#.w|org\akdagi
 Found user via claim-based: i:0#.w|org\brinkm1
 Found user via claim-based: i:0#.w|org\wita
 Found user via claim-based: i:0#.w|org\bijlsmae
 Found user via claim-based: i:0#.w|org\biermanl
 Found user via claim-based: i:0#.w|org\boudraay
 Found user via claim-based: i:0#.w|org\bouzerrs
 Attempting direct lookup for user "org\busselw11"
 Found user via claim-based: i:0#.w|org\erent
sharepointService.js:104 Found user via claim-based: i:0#.w|org\hendriky
sharepointService.js:104 Found user via claim-based: i:0#.w|org\jacobsb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\jongsmas
sharepointService.js:104 Found user via claim-based: i:0#.w|org\helings
sharepointService.js:104 Found user via claim-based: i:0#.w|org\kropffs
sharepointService.js:104 Found user via claim-based: i:0#.w|org\mansourk
sharepointService.js:104 Found user via claim-based: i:0#.w|org\oelenb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\messaoul
sharepointService.js:104 Found user via claim-based: i:0#.w|org\schaikh
sharepointService.js:104 Found user via claim-based: i:0#.w|org\schieved
sharepointService.js:104 Found user via claim-based: i:0#.w|org\raufz1
sharepointService.js:104 Found user via claim-based: i:0#.w|org\elkm1
sharepointService.js:104 Found user via claim-based: i:0#.w|org\krabbenb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\gooln
sharepointService.js:104 Found user via claim-based: i:0#.w|org\haarlemy
sharepointService.js:104 Found user via claim-based: i:0#.w|org\tuiln
sharepointService.js:104 Found user via claim-based: i:0#.w|org\haasterm
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wandeleh
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wijnenb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wittem1
sharepointService.js:104 Found user via claim-based: i:0#.w|org\elbersed
sharepointService.js:104 Found user via claim-based: i:0#.w|org\westmaat
sharepointService.js:104 Found user via claim-based: i:0#.w|org\busselw
sharepointService.js:224 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:232 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:224 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:232 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
Verlofrooster.aspx:423 Current user from SharePoint: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
Verlofrooster.aspx:441 Formatted login name for comparison: org\busselw
sharepointService.js:104 Found user via claim-based: i:0#.w|org\peteka
sharepointService.js:104 Found user via claim-based: i:0#.w|org\stigterm
Verlofrooster.aspx:406 ðŸš€ UserRegistrationCheck component initialized
tooltipbar.js:466 🔍 Auto-attaching tooltips to DOM elements...
tooltipbar.js:471 Found 363 verlof blocks
tooltipbar.js:484 Found 28 compensatie blocks
tooltipbar.js:497 Found 18 zittingsvrij blocks
tooltipbar.js:510 Found 0 ziekte blocks
tooltipbar.js:523 Found 0 feestdag elements
tooltipbar.js:550 Found 0 button elements
tooltipbar.js:583 Found 0 icon/title elements
tooltipbar.js:594 ✅ Auto-attach tooltips completed: 0 tooltips attached
sharepointService.js:68 Attempting search-all lookup for user "org\visserm2"
 Attempting search-all lookup for user "org\busselw11"
 User data loaded: {permissions: {…}, userInfo: {…}}
 DEBUG - Current user details: {LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', Email: 'w.van.bussel@om.nl'}
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 Total medewerkers found: 43
 Sample medewerkers data: (3) [{…}, {…}, {…}]
 Comparing: "org\busselw" with "org\schaikh"
 Comparing: "org\busselw" with "org\nijburgc"
 Comparing: "org\busselw" with "org\schieved"
 Comparing: "org\busselw" with "org\visserm2"
 Comparing: "org\busselw" with "org\helings"
 Comparing: "org\busselw" with "org\tuiln"
 Comparing: "org\busselw" with "org\wittem1"
 Comparing: "org\busselw" with "org\fessehae"
 Comparing: "org\busselw" with "org\sanchesa"
 Comparing: "org\busselw" with "org\messaoul"
 Comparing: "org\busselw" with "org\wissinks"
 Comparing: "org\busselw" with "org\brinkm1"
 Comparing: "org\busselw" with "org\gooln"
 Comparing: "org\busselw" with "org\mansourk"
 Comparing: "org\busselw" with "org\biermanl"
 Comparing: "org\busselw" with "org\bijlsmae"
 Comparing: "org\busselw" with "org\haasterm"
 Comparing: "org\busselw" with "org\haarlemy"
 Comparing: "org\busselw" with "org\oelenb"
 Comparing: "org\busselw" with "org\raufz1"
 Comparing: "org\busselw" with "org\jongsmas"
 Comparing: "org\busselw" with "org\kropffs"
 Comparing: "org\busselw" with "org\elkm1"
 Comparing: "org\busselw" with "org\krabbenb"
 Comparing: "org\busselw" with "org\hendriky"
 Comparing: "org\busselw" with "org\wandeleh"
 Comparing: "org\busselw" with "org\aarabs"
 Comparing: "org\busselw" with "org\bouzerrs"
 Comparing: "org\busselw" with "org\boudraay"
 Comparing: "org\busselw" with "org\wita"
 Comparing: "org\busselw" with "org\bhaggoes"
 Comparing: "org\busselw" with "org\peteka"
 Comparing: "org\busselw" with "org\elbersed"
 Comparing: "org\busselw" with "org\stigterm"
 Comparing: "org\busselw" with "org\akdagi"
 Comparing: "org\busselw" with "org\erent"
 Comparing: "org\busselw" with "org\bicerp"
 Comparing: "org\busselw" with "org\wijnenb"
 Comparing: "org\busselw" with "org\azahafs"
 Comparing: "org\busselw" with "org\jacobsb"
 Comparing: "org\busselw" with "org\busselw11"
 Comparing: "org\busselw" with "org\westmaat"
 Comparing: "org\busselw" with "org\busselw"
 âœ“ Direct match found!
 User exists in Medewerkers list: true
 âœ… User validation complete, calling onUserValidated(true)
 ðŸ User registration check complete
 ðŸš€ UserRegistrationCheck component initialized
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Adding hover behavior to element for username "org\visserm2"
 ProfielKaarten: Adding hover behavior to element for username "org\visserm2"
 ProfielKaarten: Adding hover behavior to element for username "org\brinkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\brinkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\nijburgc"
 ProfielKaarten: Adding hover behavior to element for username "org\nijburgc"
 ProfielKaarten: Adding hover behavior to element for username "org\fessehae"
 ProfielKaarten: Adding hover behavior to element for username "org\fessehae"
 ProfielKaarten: Adding hover behavior to element for username "org\sanchesa"
 ProfielKaarten: Adding hover behavior to element for username "org\sanchesa"
 ProfielKaarten: Adding hover behavior to element for username "org\wissinks"
 ProfielKaarten: Adding hover behavior to element for username "org\wissinks"
 ProfielKaarten: Adding hover behavior to element for username "org\aarabs"
 ProfielKaarten: Adding hover behavior to element for username "org\aarabs"
 ProfielKaarten: Adding hover behavior to element for username "org\akdagi"
 ProfielKaarten: Adding hover behavior to element for username "org\akdagi"
 ProfielKaarten: Adding hover behavior to element for username "org\azahafs"
 ProfielKaarten: Adding hover behavior to element for username "org\azahafs"
 ProfielKaarten: Adding hover behavior to element for username "org\bhaggoes"
 ProfielKaarten: Adding hover behavior to element for username "org\bhaggoes"
 ProfielKaarten: Adding hover behavior to element for username "org\bicerp"
 ProfielKaarten: Adding hover behavior to element for username "org\bicerp"
 ProfielKaarten: Adding hover behavior to element for username "org\biermanl"
 ProfielKaarten: Adding hover behavior to element for username "org\biermanl"
 ProfielKaarten: Adding hover behavior to element for username "org\bijlsmae"
 ProfielKaarten: Adding hover behavior to element for username "org\bijlsmae"
 ProfielKaarten: Adding hover behavior to element for username "org\boudraay"
 ProfielKaarten: Adding hover behavior to element for username "org\boudraay"
 ProfielKaarten: Adding hover behavior to element for username "org\bouzerrs"
 ProfielKaarten: Adding hover behavior to element for username "org\bouzerrs"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw11"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw11"
 ProfielKaarten: Adding hover behavior to element for username "org\wita"
 ProfielKaarten: Adding hover behavior to element for username "org\wita"
 ProfielKaarten: Adding hover behavior to element for username "org\erent"
 ProfielKaarten: Adding hover behavior to element for username "org\erent"
 ProfielKaarten: Adding hover behavior to element for username "org\helings"
 ProfielKaarten: Adding hover behavior to element for username "org\helings"
 ProfielKaarten: Adding hover behavior to element for username "org\hendriky"
 ProfielKaarten: Adding hover behavior to element for username "org\hendriky"
 ProfielKaarten: Adding hover behavior to element for username "org\jacobsb"
 ProfielKaarten: Adding hover behavior to element for username "org\jacobsb"
 ProfielKaarten: Adding hover behavior to element for username "org\jongsmas"
 ProfielKaarten: Adding hover behavior to element for username "org\jongsmas"
 ProfielKaarten: Adding hover behavior to element for username "org\kropffs"
 ProfielKaarten: Adding hover behavior to element for username "org\kropffs"
 ProfielKaarten: Adding hover behavior to element for username "org\mansourk"
 ProfielKaarten: Adding hover behavior to element for username "org\mansourk"
 ProfielKaarten: Adding hover behavior to element for username "org\messaoul"
 ProfielKaarten: Adding hover behavior to element for username "org\messaoul"
 ProfielKaarten: Adding hover behavior to element for username "org\oelenb"
 ProfielKaarten: Adding hover behavior to element for username "org\oelenb"
 ProfielKaarten: Adding hover behavior to element for username "org\raufz1"
 ProfielKaarten: Adding hover behavior to element for username "org\raufz1"
 ProfielKaarten: Adding hover behavior to element for username "org\schaikh"
 ProfielKaarten: Adding hover behavior to element for username "org\schaikh"
 ProfielKaarten: Adding hover behavior to element for username "org\schieved"
 ProfielKaarten: Adding hover behavior to element for username "org\schieved"
 ProfielKaarten: Adding hover behavior to element for username "org\tuiln"
 ProfielKaarten: Adding hover behavior to element for username "org\tuiln"
 ProfielKaarten: Adding hover behavior to element for username "org\krabbenb"
 ProfielKaarten: Adding hover behavior to element for username "org\krabbenb"
 ProfielKaarten: Adding hover behavior to element for username "org\elkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\elkm1"
 ProfielKaarten: Adding hover behavior to element for username "org\gooln"
 ProfielKaarten: Adding hover behavior to element for username "org\gooln"
 ProfielKaarten: Adding hover behavior to element for username "org\haarlemy"
 ProfielKaarten: Adding hover behavior to element for username "org\haarlemy"
 ProfielKaarten: Adding hover behavior to element for username "org\haasterm"
 ProfielKaarten: Adding hover behavior to element for username "org\haasterm"
 ProfielKaarten: Adding hover behavior to element for username "org\wandeleh"
 ProfielKaarten: Adding hover behavior to element for username "org\wandeleh"
 ProfielKaarten: Adding hover behavior to element for username "org\wijnenb"
 ProfielKaarten: Adding hover behavior to element for username "org\wijnenb"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw"
 ProfielKaarten: Adding hover behavior to element for username "org\busselw"
 ProfielKaarten: Adding hover behavior to element for username "org\westmaat"
 ProfielKaarten: Adding hover behavior to element for username "org\westmaat"
 ProfielKaarten: Adding hover behavior to element for username "org\wittem1"
 ProfielKaarten: Adding hover behavior to element for username "org\wittem1"
 ProfielKaarten: Adding hover behavior to element for username "org\elbersed"
 ProfielKaarten: Adding hover behavior to element for username "org\elbersed"
 ProfielKaarten: Adding hover behavior to element for username "org\peteka"
 ProfielKaarten: Adding hover behavior to element for username "org\peteka"
 ProfielKaarten: Adding hover behavior to element for username "org\stigterm"
 ProfielKaarten: Adding hover behavior to element for username "org\stigterm"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 Trying to find user with loginName: "org\visserm2"
 Attempting claim-based lookup for user "i:0#.w|org\visserm2"
 Trying to find user with loginName: "org\brinkm1"
 Attempting claim-based lookup for user "i:0#.w|org\brinkm1"
 Trying to find user with loginName: "org\nijburgc"
 Attempting claim-based lookup for user "i:0#.w|org\nijburgc"
 Trying to find user with loginName: "org\fessehae"
 Attempting claim-based lookup for user "i:0#.w|org\fessehae"
 Trying to find user with loginName: "org\sanchesa"
 Attempting claim-based lookup for user "i:0#.w|org\sanchesa"
 Trying to find user with loginName: "org\wissinks"
 Attempting claim-based lookup for user "i:0#.w|org\wissinks"
 Trying to find user with loginName: "org\aarabs"
 Attempting claim-based lookup for user "i:0#.w|org\aarabs"
 Trying to find user with loginName: "org\akdagi"
 Attempting claim-based lookup for user "i:0#.w|org\akdagi"
 Trying to find user with loginName: "org\azahafs"
 Attempting claim-based lookup for user "i:0#.w|org\azahafs"
 Trying to find user with loginName: "org\bhaggoes"
 Attempting claim-based lookup for user "i:0#.w|org\bhaggoes"
 Trying to find user with loginName: "org\bicerp"
 Attempting claim-based lookup for user "i:0#.w|org\bicerp"
 Trying to find user with loginName: "org\biermanl"
 Attempting claim-based lookup for user "i:0#.w|org\biermanl"
 Trying to find user with loginName: "org\bijlsmae"
 Attempting claim-based lookup for user "i:0#.w|org\bijlsmae"
 Trying to find user with loginName: "org\boudraay"
 Attempting claim-based lookup for user "i:0#.w|org\boudraay"
 Trying to find user with loginName: "org\bouzerrs"
 Attempting claim-based lookup for user "i:0#.w|org\bouzerrs"
 Trying to find user with loginName: "org\busselw11"
 Attempting claim-based lookup for user "i:0#.w|org\busselw11"
 Trying to find user with loginName: "org\wita"
 Attempting claim-based lookup for user "i:0#.w|org\wita"
 Trying to find user with loginName: "org\erent"
 Attempting claim-based lookup for user "i:0#.w|org\erent"
 Trying to find user with loginName: "org\helings"
 Attempting claim-based lookup for user "i:0#.w|org\helings"
 Trying to find user with loginName: "org\hendriky"
 Attempting claim-based lookup for user "i:0#.w|org\hendriky"
 Trying to find user with loginName: "org\jacobsb"
 Attempting claim-based lookup for user "i:0#.w|org\jacobsb"
 Trying to find user with loginName: "org\jongsmas"
 Attempting claim-based lookup for user "i:0#.w|org\jongsmas"
 Trying to find user with loginName: "org\kropffs"
 Attempting claim-based lookup for user "i:0#.w|org\kropffs"
sharepointService.js:36 Trying to find user with loginName: "org\mansourk"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\mansourk"
sharepointService.js:36 Trying to find user with loginName: "org\messaoul"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\messaoul"
sharepointService.js:36 Trying to find user with loginName: "org\oelenb"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\oelenb"
sharepointService.js:36 Trying to find user with loginName: "org\raufz1"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\raufz1"
sharepointService.js:36 Trying to find user with loginName: "org\schaikh"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\schaikh"
sharepointService.js:36 Trying to find user with loginName: "org\schieved"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\schieved"
sharepointService.js:36 Trying to find user with loginName: "org\tuiln"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\tuiln"
sharepointService.js:36 Trying to find user with loginName: "org\krabbenb"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\krabbenb"
sharepointService.js:36 Trying to find user with loginName: "org\elkm1"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\elkm1"
sharepointService.js:36 Trying to find user with loginName: "org\gooln"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\gooln"
sharepointService.js:36 Trying to find user with loginName: "org\haarlemy"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\haarlemy"
sharepointService.js:36 Trying to find user with loginName: "org\haasterm"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\haasterm"
sharepointService.js:36 Trying to find user with loginName: "org\wandeleh"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\wandeleh"
sharepointService.js:36 Trying to find user with loginName: "org\wijnenb"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\wijnenb"
sharepointService.js:36 Trying to find user with loginName: "org\busselw"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\busselw"
sharepointService.js:36 Trying to find user with loginName: "org\westmaat"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\westmaat"
sharepointService.js:36 Trying to find user with loginName: "org\wittem1"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\wittem1"
sharepointService.js:36 Trying to find user with loginName: "org\elbersed"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\elbersed"
sharepointService.js:36 Trying to find user with loginName: "org\peteka"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\peteka"
sharepointService.js:36 Trying to find user with loginName: "org\stigterm"
sharepointService.js:68 Attempting claim-based lookup for user "i:0#.w|org\stigterm"
sharepointService.js:213 Getting current user from: https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/currentuser
profielkaarten.js:834 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
 ðŸ”„ Triggering tooltip re-attachment after data load
tooltipbar.js:466 🔍 Auto-attaching tooltips to DOM elements...
tooltipbar.js:471 Found 363 verlof blocks
tooltipbar.js:484 Found 28 compensatie blocks
tooltipbar.js:497 Found 18 zittingsvrij blocks
tooltipbar.js:510 Found 0 ziekte blocks
tooltipbar.js:523 Found 0 feestdag elements
tooltipbar.js:550 Found 2 button elements
tooltipbar.js:583 Found 0 icon/title elements
tooltipbar.js:594 ✅ Auto-attach tooltips completed: 379 tooltips attached
tooltipbar.js:1002 ⚛️ React update detected, re-attaching tooltips
profielkaarten.js:813 ProfielKaarten: Initializing with selector ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
sharepointService.js:121  Gebruiker met loginnaam 'org\visserm2' niet gevonden na alle pogingen.
getUserInfo @ sharepointService.js:121
await in getUserInfo
fetchUserData @ userinfo.js:31
(anonymous) @ userinfo.js:40
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
sharepointService.js:121  Gebruiker met loginnaam 'org\busselw11' niet gevonden na alle pogingen.
getUserInfo @ sharepointService.js:121
await in getUserInfo
fetchUserData @ userinfo.js:31
(anonymous) @ userinfo.js:40
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
sharepointService.js:68 Attempting direct lookup for user "org\visserm2"
sharepointService.js:104 Found user via claim-based: i:0#.w|org\brinkm1
sharepointService.js:104 Found user via claim-based: i:0#.w|org\nijburgc
sharepointService.js:104 Found user via claim-based: i:0#.w|org\fessehae
sharepointService.js:104 Found user via claim-based: i:0#.w|org\sanchesa
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wissinks
sharepointService.js:104 Found user via claim-based: i:0#.w|org\azahafs
sharepointService.js:104 Found user via claim-based: i:0#.w|org\akdagi
sharepointService.js:104 Found user via claim-based: i:0#.w|org\aarabs
sharepointService.js:104 Found user via claim-based: i:0#.w|org\bicerp
tooltipbar.js:466 🔍 Auto-attaching tooltips to DOM elements...
tooltipbar.js:471 Found 363 verlof blocks
tooltipbar.js:484 Found 28 compensatie blocks
tooltipbar.js:497 Found 18 zittingsvrij blocks
tooltipbar.js:510 Found 0 ziekte blocks
tooltipbar.js:523 Found 0 feestdag elements
tooltipbar.js:550 Found 0 button elements
tooltipbar.js:583 Found 0 icon/title elements
tooltipbar.js:594 ✅ Auto-attach tooltips completed: 0 tooltips attached
sharepointService.js:104 Found user via claim-based: i:0#.w|org\bhaggoes
sharepointService.js:104 Found user via claim-based: i:0#.w|org\biermanl
sharepointService.js:104 Found user via claim-based: i:0#.w|org\bijlsmae
sharepointService.js:104 Found user via claim-based: i:0#.w|org\boudraay
sharepointService.js:68 Attempting direct lookup for user "org\busselw11"
sharepointService.js:104 Found user via claim-based: i:0#.w|org\erent
sharepointService.js:104 Found user via claim-based: i:0#.w|org\bouzerrs
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wita
sharepointService.js:104 Found user via claim-based: i:0#.w|org\helings
sharepointService.js:104 Found user via claim-based: i:0#.w|org\hendriky
sharepointService.js:104 Found user via claim-based: i:0#.w|org\kropffs
sharepointService.js:104 Found user via claim-based: i:0#.w|org\jongsmas
sharepointService.js:104 Found user via claim-based: i:0#.w|org\jacobsb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\mansourk
sharepointService.js:104 Found user via claim-based: i:0#.w|org\oelenb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\messaoul
sharepointService.js:104 Found user via claim-based: i:0#.w|org\raufz1
sharepointService.js:104 Found user via claim-based: i:0#.w|org\schieved
sharepointService.js:104 Found user via claim-based: i:0#.w|org\tuiln
sharepointService.js:104 Found user via claim-based: i:0#.w|org\schaikh
sharepointService.js:104 Found user via claim-based: i:0#.w|org\krabbenb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\elkm1
sharepointService.js:104 Found user via claim-based: i:0#.w|org\haarlemy
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wandeleh
sharepointService.js:104 Found user via claim-based: i:0#.w|org\gooln
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wijnenb
sharepointService.js:104 Found user via claim-based: i:0#.w|org\busselw
sharepointService.js:104 Found user via claim-based: i:0#.w|org\wittem1
sharepointService.js:104 Found user via claim-based: i:0#.w|org\westmaat
sharepointService.js:104 Found user via claim-based: i:0#.w|org\haasterm
profielkaarten.js:813 ProfielKaarten: Initializing with selector ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
sharepointService.js:104 Found user via claim-based: i:0#.w|org\elbersed
sharepointService.js:104 Found user via claim-based: i:0#.w|org\peteka
sharepointService.js:104 Found user via claim-based: i:0#.w|org\stigterm
sharepointService.js:224 Raw current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:232 Processed current user data: {Id: 6, IsHiddenInUI: false, LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', PrincipalType: 1, …}
sharepointService.js:68 Attempting search-all lookup for user "org\visserm2"
sharepointService.js:68 Attempting search-all lookup for user "org\busselw11"
Verlofrooster.aspx:179 User data loaded: {permissions: {…}, userInfo: {…}}
Verlofrooster.aspx:182 DEBUG - Current user details: {LoginName: 'i:0#.w|org\\busselw', Title: 'Bussel, W. van (Parket Centrale Verwerking OM)', Email: 'w.van.bussel@om.nl'}
profielkaarten.js:834 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
profielkaarten.js:834 ProfielKaarten: Found 86 elements matching ".medewerker-naam, .medewerker-avatar"
sharepointService.js:121  Gebruiker met loginnaam 'org\busselw11' niet gevonden na alle pogingen.
getUserInfo @ sharepointService.js:121
await in getUserInfo
fetchUserData @ userinfo.js:31
(anonymous) @ userinfo.js:40
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
sharepointService.js:121  Gebruiker met loginnaam 'org\visserm2' niet gevonden na alle pogingen.
getUserInfo @ sharepointService.js:121
await in getUserInfo
fetchUserData @ userinfo.js:31
(anonymous) @ userinfo.js:40
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
tooltipbar.js:700 🔄 DOM changed, reattaching tooltips...
tooltipbar.js:466 🔍 Auto-attaching tooltips to DOM elements...
tooltipbar.js:471 Found 363 verlof blocks
tooltipbar.js:484 Found 28 compensatie blocks
tooltipbar.js:497 Found 18 zittingsvrij blocks
tooltipbar.js:510 Found 0 ziekte blocks
tooltipbar.js:523 Found 0 feestdag elements
tooltipbar.js:550 Found 5 button elements
tooltipbar.js:583 Found 0 icon/title elements
tooltipbar.js:594 ✅ Auto-attach tooltips completed: 5 tooltips attached


