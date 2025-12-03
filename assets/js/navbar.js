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

  const navbarHTML = `
    <!-- Navigation Bar -->
    <nav class="main-nav" id="mainNav">
      <div class="container">
        <div class="nav-content">
          <a href="${logoHref}" class="nav-logo">MMC</a>
          <ul class="nav-menu">
            <li><a href="${aboutHref}">À Propos</a></li>
            <li><a href="${worksHref}">Projets</a></li>
            <li><a href="${contactHref}">Contact</a></li>
          </ul>
          <button class="nav-toggle" id="navToggle">
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
          navMenu.classList.toggle('active');
          navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
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
