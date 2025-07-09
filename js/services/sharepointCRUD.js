/**
 * @file sharepointCRUD.js
 * @description Dit bestand bevat algemene functies voor CRUD-operaties (Create, Read, Update, Delete) 
 * met SharePoint-lijsten via de REST API.
 */

/**
 * Haalt de Request Digest op van de SharePoint 2019 _api/contextinfo endpoint.
 * Dit is nodig voor alle schrijfacties (POST, MERGE, DELETE).
 * @returns {Promise<string>} Een Promise die wordt vervuld met de Form Digest waarde.
 */
export async function getRequestDigest() {
    const url = "https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/contextinfo";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose"
        }
    });
    const data = await response.json();
    return data.d.GetContextWebInformation.FormDigestValue;
}

/**
 * Helperfunctie voor het uitvoeren van API-calls naar SharePoint.
 * Voegt automatisch de request digest toe voor niet-GET verzoeken.
 * @private
 * @param {string} endpoint - Het specifieke API-endpoint (bv. "lists/getbytitle('MijnLijst')/items").
 * @param {string} [methode="GET"] - De HTTP-methode.
 * @param {object|null} [body=null] - De data voor POST/MERGE verzoeken.
 * @param {object} [extraHeaders={}] - Extra headers voor het verzoek.
 * @returns {Promise<any>} De JSON-respons van de server.
 */
async function roepSharePointApi(endpoint, methode = "GET", body = null, extraHeaders = {}) {
    const url = `https://som.org.om.local/sites/MulderT/CustomPW/Verlof/_api/web/${endpoint}`;
    const headers = {
        "Accept": "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose",
        ...extraHeaders
    };

    if (methode !== "GET") {
        const requestDigest = await getRequestDigest();
        headers["X-RequestDigest"] = requestDigest;
    }

    const opties = {
        method: methode,
        headers
    };

    if (body) {
        opties.body = JSON.stringify(body);
    }

    const response = await fetch(url, opties);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Fout bij ${methode} verzoek naar ${endpoint}: ${response.status} - ${error}`);
    }

    // Probeer altijd de response als JSON te parsen voor consistente return types.
    // Sommige DELETE of MERGE responses hebben mogelijk geen body, dus vang de error op.
    try {
        return await response.json();
    } catch (e) {
        // Geen JSON body aanwezig, return een lege object voor consistentie.
        return {};
    }
}
/**
 * Maakt een nieuw item aan in een SharePoint-lijst.
 * @param {string} lijstNaam - De naam van de SharePoint-lijst.
 * @param {object} itemData - Een object met de kolomwaarden voor het nieuwe item.
 * @returns {Promise<object>} De data van het aangemaakte item.
 */
export async function maakItem(lijstNaam, itemData) {
    const endpoint = `lists/getbytitle('${lijstNaam}')/items`;
    return roepSharePointApi(endpoint, "POST", itemData);
}

/**
 * Leest items uit een SharePoint-lijst.
 * @param {string} lijstNaam - De naam van de SharePoint-lijst.
 * @param {string} [query=""] - Optionele OData query string (bv. "?$filter=...").
 * @returns {Promise<object>} Een object met de lijstitems.
 */
export async function leesItems(lijstNaam, query = "") {
    let endpoint = `lists/getbytitle('${lijstNaam}')/items`;
    if (query) {
        endpoint += query;
    }
    return roepSharePointApi(endpoint, "GET");
}

/**
 * Bewerkt een bestaand item in een SharePoint-lijst.
 * @param {string} lijstNaam - De naam van de SharePoint-lijst.
 * @param {number} itemId - De ID van het item dat bewerkt moet worden.
 * @param {object} itemData - Een object met de bij te werken kolomwaarden.
 * @returns {Promise<Response>} De fetch response.
 */
export async function bewerkItem(lijstNaam, itemId, itemData) {
    const endpoint = `lists/getbytitle('${lijstNaam}')/items(${itemId})`;
    const extraHeaders = {
        "IF-MATCH": "*",
        "X-HTTP-Method": "MERGE"
    };
    return roepSharePointApi(endpoint, "POST", itemData, extraHeaders);
}

/**
 * Verwijdert een item uit een SharePoint-lijst.
 * @param {string} lijstNaam - De naam van de SharePoint-lijst.
 * @param {number} itemId - De ID van het item dat verwijderd moet worden.
 * @returns {Promise<Response>} De fetch response.
 */
export async function verwijderItem(lijstNaam, itemId) {
    const endpoint = `lists/getbytitle('${lijstNaam}')/items(${itemId})`;
    const extraHeaders = {
        "IF-MATCH": "*",
        "X-HTTP-Method": "DELETE"
    };
    return roepSharePointApi(endpoint, "POST", null, extraHeaders);
}
