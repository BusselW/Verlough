<!DOCTYPE html>
<!-- Following coding instructions from .github/copilot-instructions.md -->
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verlofaanvragen Behandelen</title>
    <link rel="icon" type="image/svg+xml" href="../../icons/favicon/favicon.svg">
    
    <!-- Fonts and Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- CSS files -->
    <link rel="stylesheet" href="../../css/verlofrooster_stijl.css">
    <link rel="stylesheet" href="../../css/verlofrooster_styling.css">
    <link rel="stylesheet" href="css/behandelCentrumN.css">
</head>
<body class="light-theme">
    <!-- Hoofd Header -->
    <div class="header">
        <div class="header-content">
            <div class="header-left">
                <h1>Verlofaanvragen Behandelcentrum</h1>
            </div>
            <div class="header-acties">
                <!-- Emulation dropdown for super user -->
                <div id="header-emulation-container" class="header-emulation" style="display: none;">
                    <span class="header-emulation-label">Bekijk als teamleider:</span>
                    <select id="header-emulation-select" class="header-emulation-select">
                        <option value="">Alle teams (standaard)</option>
                    </select>
                </div>
                
                <div class="navigation-buttons">
                    <div class="nav-buttons-right">
                        <a href="../../verlofRooster.aspx" class="btn btn-functional">
                            <i class="fas fa-arrow-left"></i>
                            <span>Terug naar rooster</span>
                        </a>
                        <div class="user-info">
                            <span class="user-name" id="huidige-gebruiker">Gebruiker wordt geladen...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Hoofd Container -->
    <div id="app-container" class="app-container">
        <!-- Main Content Area -->
        <div class="content-container">
            <div id="behandelcentrum-root"></div>
        </div>
        
        <!-- Footer -->
        <footer class="page-footer" id="pagina-footer">
            <p class="footer-text">
                &copy; <span id="huidig-jaar"></span> Verlofrooster Applicatie
            </p>
        </footer>
    </div>
    
    <!-- JS files -->
    <!-- React libraries from CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        // Declare h as global variable for React
        const h = React.createElement;
    </script>
    
    <script src="../../js/config/configLijst.js"></script>
    <script src="../../js/config/configHelper.js"></script>
    <script src="../../js/services/sharepointService-global.js"></script>
    <script src="../../js/services/linkInfo-global.js"></script>
    <script src="js/app.js"></script>
</body>
</html>