import '../styles/header.css';

export function Header() {
  return `
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <a href="#hero" class="site-header__logo" aria-label="Joseph Kimani Nyoike — home">
          <img
            src="/images/JK_favicon.small.jpg"
            alt="JK logo"
            class="site-header__logo-img"
          >
        </a>
        <nav class="site-header__nav" aria-label="Primary navigation">
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#certifications">Certs</a>
          <a href="#contact" class="mobile-show">Contact</a>
          <button
            id="theme-toggle"
            class="theme-toggle"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <i class="fas fa-moon" id="theme-icon" aria-hidden="true"></i>
          </button>
        </nav>
      </div>
    </header>
  `;
}