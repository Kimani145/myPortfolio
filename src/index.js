/**
 * index.js — v2 entry point
 * Joseph Kimani Nyoike Portfolio
 */

import { Header }         from './components/header.js';
import { Hero }           from './components/hero.js';
import { initHero }       from './components/hero.client.js';
import { Skills }         from './components/skills.js';
import { Projects }       from './components/projects.js';
import { Certifications } from './components/certifications.js';
import { Contact }        from './components/contact.js';
import { Footer }         from './components/footer.js';
import { sendEmailDual }  from './utils/emailService.js';

import './styles/global.css';

// ─── 1. Render DOM ───────────────────────────────────────────
document.getElementById('app').innerHTML = `
  ${Header()}
  <main id="main-content">
    ${Hero()}
    ${Skills()}
    ${Projects()}
    ${Certifications()}
    ${Contact()}
  </main>
  ${Footer()}
`;

// ─── 2. Dark Mode ────────────────────────────────────────────
function initTheme() {
  const root     = document.documentElement;
  const toggle   = document.getElementById('theme-toggle');
  const icon     = document.getElementById('theme-icon');

  // Determine initial theme
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored === 'dark' || (!stored && prefersDark);

  function applyTheme(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (icon) {
      icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  applyTheme(isDark);

  toggle?.addEventListener('click', () => {
    const currentlyDark = root.getAttribute('data-theme') === 'dark';
    applyTheme(!currentlyDark);
  });
}

// ─── 3. EmailJS init ─────────────────────────────────────────
function initEmailJS() {
  if (window.emailjs) {
    window.emailjs.init('IsT5U0mRNPdYjZ3hL');
  } else {
    console.error('[EmailJS] SDK not loaded — check index.html script tag order');
  }
}

// ─── 4. Contact Form (single listener — fixes double-submit) ─
const setupContactForm = () => {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  if (!form) return;

  let sending = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (sending) return;              // guard against double-fire
    sending = true;

    const btn = form.querySelector('[type="submit"]');
    if (btn) btn.disabled = true;

    statusEl?.classList.remove('hidden');
    statusEl?.classList.remove('success', 'error');
    if (statusEl) statusEl.textContent = 'Sending…';

    try {
      await sendEmailDual(form);
      if (statusEl) {
        statusEl.textContent = 'Message sent.';
        statusEl.classList.add('success');
      }
      form.reset();
    } catch (err) {
      console.error('[EmailJS] send error:', err);
      if (statusEl) {
        statusEl.textContent = `Failed to send — ${err?.text ?? err?.message ?? 'unknown error'}. Try emailing kimnyoski145@gmail.com directly.`;
        statusEl.classList.add('error');
      }
    } finally {
      sending = false;
      if (btn) btn.disabled = false;
    }
  });
};

// ─── 5. Intersection Observer — fade-up ──────────────────────
function initScrollAnimations() {
  const fadeEls = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeEls.forEach(el => observer.observe(el));
}

// ─── 6. Boot ─────────────────────────────────────────────────
// Use DOMContentLoaded (body.innerHTML is sync so DOM is ready immediately,
// but waiting guards against any edge-case race with font loading)
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEmailJS();
  setupContactForm();
  initHero();
  initScrollAnimations();
});
