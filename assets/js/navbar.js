// Navbar template - loaded dynamically on all pages
(function() {
  const currentPath = window.location.pathname;
  const isInProjectsFolder = currentPath.includes('/pages/projects/');
  const isOnHomePage = currentPath.endsWith('/') || currentPath.endsWith('index.html') || !currentPath.includes('/pages/');
  const homeUrl = isInProjectsFolder ? '../../index.html' : 'index.html';

  const logoHref = isOnHomePage ? '#block' : homeUrl;
  const aboutHref = isOnHomePage ? '#about' : `${homeUrl}#about`;
  const worksHref = isOnHomePage ? '#works' : `${homeUrl}#works`;
  const contactHref = isOnHomePage ? '#contact-section' : `${homeUrl}#contact-section`;

  // Check if current page should have multilingual support
  const multilingualPages = [
    '/index.html',
    '/',
    '/pages/projects/thelandlord.html',
    '/pages/projects/tesa.html',
    '/pages/projects/artisanDart.html',
    '/pages/projects/randev.html',
    '/pages/projects/espritApp.html',
    '/pages/projects/lost-found.html'
  ];

  const isMultilingualPage = multilingualPages.some(page =>
    currentPath.endsWith(page) ||
    (page === '/' && (currentPath === '/' || currentPath.endsWith('/mohamedmmc.github.io/')))
  );

  const languageSelectorHTML = isMultilingualPage ? `
    <li class="language-selector">
      <button class="lang-btn active" data-language="fr" title="Français" aria-label="Français" aria-pressed="true">
        <span aria-hidden="true">🇫🇷</span>
      </button>
      <button class="lang-btn" data-language="en" title="English" aria-label="English" aria-pressed="false">
        <span aria-hidden="true">🇬🇧</span>
      </button>
    </li>
  ` : '';

  const navbarHTML = `
    <!-- Navigation Bar -->
    <nav class="main-nav" id="mainNav">
      <div class="container">
        <div class="nav-content">
          <a href="${logoHref}" class="nav-logo">MMC</a>
          <ul class="nav-menu" id="navMenu">
            <li><a href="${aboutHref}" data-i18n="nav_about">À Propos</a></li>
            <li><a href="${worksHref}" data-i18n="nav_projects">Projets</a></li>
            <li><a href="${contactHref}" data-i18n="nav_contact">Contact</a></li>
            ${languageSelectorHTML}
          </ul>
          <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-controls="navMenu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  `;

  // Load navbar when DOM is ready
  function loadNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
      placeholder.innerHTML = navbarHTML;

      // Initialize mobile menu toggle after navbar is loaded
      const navToggle = document.getElementById('navToggle');
      const navMenu = document.querySelector('.nav-menu');

      if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
          const open = navMenu.classList.toggle('active');
          navToggle.classList.toggle('active');
          navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
          });
        });
      }
    }
  }

  // Execute when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
  } else {
    loadNavbar();
  }
})();
