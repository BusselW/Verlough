/**
 * User-related utility functions
 * Pure functions for user data processing and formatting
 */

/**
 * Get initials from a full name
 * @param {string} naam - Full name
 * @returns {string} Initials (max 2 characters)
 */
export const getInitialen = (naam) => {
    if (!naam) return '';
    return naam.split(' ')
        .filter(d => d.length > 0)
        .map(d => d[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

/**
 * Get SharePoint profile photo URL for a user
 * @param {Object} gebruiker - User object with Username or LoginName
 * @param {string} grootte - Photo size ('S', 'M', 'L')
 * @returns {string|null} Profile photo URL or null
 */
export const getProfilePhotoUrl = (gebruiker, grootte = 'M') => {
    const loginName = gebruiker?.Username || gebruiker?.LoginName;
    if (!loginName) return null;
    
    // Extract username from domain\username format
    const usernameOnly = loginName.includes('\\') ? loginName.split('\\')[1] : loginName;
    
    // Construct URL to SharePoint profile photo
    const siteUrl = appConfiguratie?.instellingen?.siteUrl || '';
    return `${siteUrl}/_layouts/15/userphoto.aspx?size=${grootte}&accountname=${usernameOnly}@org.om.local`;
};

console.log("User utilities loaded successfully.");
