// ===== CONFIGURATION =====
const defaultConfig = {
    network_name: 'CONVERGE-IA',
    tagline: 'Shared knowledge with responsible AI',
    hero_title: 'Academic Convergence Network in Artificial Intelligence',
    primary_color: '#0a1628',
    secondary_color: '#131f35',
    text_color: '#e8eef5',
    accent_gold: '#c9a227',
    accent_blue: '#4a90d9'
};

let config = { ...defaultConfig };
let currentPage = 'home';
let membershipType = 'institution';

// ===== UI UPDATE FUNCTION =====
function updateUI() {
    // Update text content
    const navBrand = document.getElementById('nav-brand');
    if (navBrand) navBrand.textContent = config.network_name || defaultConfig.network_name;

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        const title = config.hero_title || defaultConfig.hero_title;
        heroTitle.innerHTML = title.replace('Artificial Intelligence', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">Artificial Intelligence</span>');
    }

    const heroTagline = document.getElementById('hero-tagline');
    if (heroTagline) heroTagline.textContent = `"${config.tagline || defaultConfig.tagline}"`;

    // Update colors
    const root = document.documentElement;
    root.style.setProperty('--primary-bg', config.primary_color || defaultConfig.primary_color);
    root.style.setProperty('--secondary-surface', config.secondary_color || defaultConfig.secondary_color);
    root.style.setProperty('--text-primary', config.text_color || defaultConfig.text_color);
    root.style.setProperty('--accent-gold', config.accent_gold || defaultConfig.accent_gold);
    root.style.setProperty('--accent-blue', config.accent_blue || defaultConfig.accent_blue);
}

// ===== NAVIGATION =====
function navigateTo(page) {
    // Prevent default if called from event handler without preventDefault
    // (though usually called inline onclick)

    // Update State (URL hash) logic
    // We only update hash if it's different to avoid loops or redundant history entries
    if (window.location.hash.substring(1) !== page) {
        window.history.pushState(null, '', `#${page}`);
    }

    renderPage(page);
}

// Function to actually render the page changes
function renderPage(page) {
    if (!page) page = 'home';

    // Hide all pages
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;

        // Scroll to top
        const appContainer = document.getElementById('app-container');
        if (appContainer) appContainer.scrollTop = 0;

        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });
    } else {
        // Fallback to home if page not found
        if (page !== 'home') navigateTo('home');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>';
    } else {
        menu.classList.add('hidden');
        icon.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    }
}

// ===== MEMBERSHIP TYPE SELECTION =====


// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

    toast.className = `toast ${bgColor} text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 mb-3`;
    toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'success'
            ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
            : type === 'error'
                ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
        }
    </svg>
    <span>${message}</span>
  `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ===== FORM HANDLERS =====
// ===== FORM HANDLERS =====
// Removed Auth Handlers


// ===== FORM SUBMISSIONS =====
// ===== FORM SUBMISSIONS =====
const loginForm = document.getElementById('login-form');
if (loginForm) {
    // Login form removed
}

const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
    // Registration form removed
}

// ===== FILTER FUNCTIONS =====
function filterResources(type) {
    const cards = document.querySelectorAll('.resource-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active', 'border-amber-400', 'text-amber-400');
        btn.classList.add('border-gray-600', 'text-gray-400');
    });

    event.target.classList.add('active', 'border-amber-400', 'text-amber-400');
    event.target.classList.remove('border-gray-600', 'text-gray-400');

    cards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterProjects(status) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.project-filter');

    buttons.forEach(btn => {
        btn.classList.remove('active', 'border-amber-400', 'text-amber-400');
        btn.classList.add('border-gray-600', 'text-gray-400');
    });

    event.target.classList.add('active', 'border-amber-400', 'text-amber-400');
    event.target.classList.remove('border-gray-600', 'text-gray-400');

    cards.forEach(card => {
        if (status === 'all' || card.dataset.status === status) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== ACTION HANDLERS =====
function handleResourceAccess() {
    // Removed auth check
}

function handleProjectInterest(projectId) {
    showToast('Sending your interest in participating...', 'info');
    setTimeout(() => {
        showToast('Thank you! We will contact you soon', 'success');
    }, 1500);
}

function handleGovernanceRequest() {
    showToast('Opening request form...', 'info');
    setTimeout(() => {
        const email = 'governance@converge-ia.org';
        const subject = 'Accompaniment Request - AI Governance';
        const body = 'I would like to request information about the AI governance accompaniment program for my institution.';
        window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
        // showToast('Se abrió tu cliente de correo', 'success'); // Browser might block popups or not show success immediately
    }, 500);
}

// ===== GENERIC FORM HANDLERS =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast('Sending message...', 'info');

        setTimeout(() => {
            showToast('Message sent! We will contact you soon', 'success');
            this.reset();
        }, 1500);
    });
}

const govRequestForm = document.getElementById('governance-request-form');
if (govRequestForm) {
    govRequestForm.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast('Sending advisory request...', 'info');

        setTimeout(() => {
            showToast('Request sent! A specialist will contact you soon', 'success');
            this.reset();
            navigateTo('home');
        }, 2000);
    });
}

const contributeForm = document.getElementById('contribute-form');
if (contributeForm) {
    contributeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast('Sending your contribution...', 'info');

        setTimeout(() => {
            showToast('Thank you for your contribution! It will be reviewed by our editorial team', 'success');
            this.reset();
            navigateTo('home');
        }, 2000);
    });
}


// ===== INITIALIZATION & HISTORY HANDLING =====

// Handle Back/Forward buttons
window.addEventListener('popstate', () => {
    // When history changes (user presses Back), update the UI based on the new hash
    const hash = window.location.hash.substring(1);
    renderPage(hash || 'home');
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    const hash = window.location.hash.substring(1);
    renderPage(hash || 'home');
});