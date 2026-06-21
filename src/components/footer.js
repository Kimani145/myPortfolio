export function Footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__inner">
        <p class="site-footer__copy">
          &copy; ${year} Joseph Kimani Nyoike. All rights reserved.
        </p>
        <div class="site-footer__links" aria-label="Social links">
          <a href="https://github.com/Kimani145" target="_blank" rel="noopener noreferrer" class="site-footer__link" aria-label="GitHub profile">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/joseph-kimani-kim145/" target="_blank" rel="noopener noreferrer" class="site-footer__link" aria-label="LinkedIn profile">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://x.com/Kim25031052kim" target="_blank" rel="noopener noreferrer" class="site-footer__link" aria-label="X (Twitter) profile">
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  `;
}