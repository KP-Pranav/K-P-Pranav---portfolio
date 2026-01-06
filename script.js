/**
 * Function to set up the toggle functionality for a given link and container.
 * @param {string} linkId - The ID of the <a> link element
 * @param {string} containerId - The ID of the <div> container
 * @param {string} [showText='View Certificate'] - Custom text for showing the content
 * @param {string} [hideText='Hide Certificate'] - Custom text for hiding the content
 */
function setupToggle(linkId, containerId, showText = 'View Certificate', hideText = 'Hide Certificate') {
    const link = document.getElementById(linkId);
    const container = document.getElementById(containerId);

    if (link && container) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            // Toggle the 'hidden' class to show or hide the content
            container.classList.toggle('hidden');

            // Change the link text
            if (container.classList.contains('hidden')) {
                link.textContent = showText;
            } else {
                link.textContent = hideText;
            }
        });
    }
}

// ==========================================================
// 1. SETUP INTERNSHIPS
// ==========================================================
setupToggle('hyundai-link', 'hyundai-cert-container');
setupToggle('iovate-link', 'iovate-cert-container');
setupToggle('roots-link', 'roots-cert-container');


// ==========================================================
// 2. SETUP CERTIFICATIONS (INDIVIDUAL LINKS)
// ==========================================================

// --- Data Science & ML Individual Links ---
setupToggle('nptel-link', 'nptel-cert-container');
setupToggle('python-link', 'python-cert-container');
setupToggle('matlab-link', 'matlab-cert-container');

// --- Cloud & Computing Individual Link ---
setupToggle('aws-link', 'aws-cert-container');

// --- Academic Achievements Individual Links ---
setupToggle('scholarship-link', 'scholarship-cert-container', 'View Award Details', 'Hide Award Details'); 
setupToggle('rank-link', 'rank-cert-container', 'View Award Details', 'Hide Award Details');
setupToggle('kurukshetra-link', 'kurukshetra-cert-container', 'View Participation', 'Hide Participation');
