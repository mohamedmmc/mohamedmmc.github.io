// Footer template - loaded dynamically on all pages
(function() {
  const footerHTML = `
    <!-- Contact Section / Footer -->
    <section id="contact-section" style="padding: 100px 0; background: #0a0a0a">
      <div class="container">
        <div class="text-center" style="margin-bottom: 60px">
          <h2 class="section-title" data-i18n="contact_title">CONTACTEZ-MOI</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle" data-i18n="contact_subtitle">
            Vous avez un projet en tête ? Discutons-en !
          </p>
        </div>
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="contact-cta">
              <p class="contact-text" data-i18n="contact_text">
                Je suis toujours ouvert à de nouvelles opportunités et
                collaborations. N'hésitez pas à me contacter pour discuter de vos
                projets.
              </p>
              <div class="contact-buttons">
                <a
                  href="mailto:contact@melekchtourou.com"
                  class="cybr-btn contact-btn"
                >
                  <i class="fa fa-envelope language-transition"></i> <span data-i18n="contact_cta">M'envoyer un email</span>
                  <span aria-hidden class="cybr-btn__glitch">EMAIL</span>
                </a>
              </div>
              <div class="social-links-section">
                <a
                  href="https://github.com/mohamedmmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link github language-transition"
                >
                  <i class="fa fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-melek-chtourou-a6a2561b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link linkedin language-transition"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/tiktikatikadesuka"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link facebook language-transition"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/mohamed_chtourou93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link instagram language-transition"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer id="site-footer" role="contentinfo" style="background: #000; color: #eee; padding: 40px 0">
      <div class="container">
        <div style="text-align: center; color: #bbb">
          <p class="language-transition">
            &copy; <span id="footer-year"></span> Mohamed Melek Chtourou. <span data-i18n="footer_rights">Tous
            droits réservés.</span>
          </p>
        </div>
      </div>
    </footer>
  `;

  // Load footer when DOM is ready
  function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.innerHTML = footerHTML;

      // Set the current year
      const yearElement = document.getElementById('footer-year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }

      // Re-initialize translations if LanguageManager is available
      if (window.LanguageManager) {
        window.LanguageManager.updateLanguage(window.LanguageManager.currentLanguage, false);
      }
    }
  }

  // Execute when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
  } else {
    loadFooter();
  }
})();
