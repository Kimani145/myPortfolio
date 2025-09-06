import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { initHero } from './components/hero.client.js'; // <-- new import
import { Skills } from './components/skills.js';
import { Projects } from './components/projects.js';
import { Contact } from './components/contact.js';
import { Footer } from './components/footer.js';
import { Certifications } from './components/certifications.js';
import './styles/certifications.css';
//import './styles/animations.css';
//import './styles/tailwind.css';  // removed when using CDN

// 1. Initialize EmailJS
const initEmailJS = () => {
  window.emailjs.init('IsT5U0mRNPdYjZ3hL');
};

// 2. Dark Mode Toggle Logic
const initTheme = () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
  
  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });
};

// 3. Contact Form Handler
const setupContactForm = () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    window.emailjs.sendForm(
      'service_20mgute',
      'template_faun4li',
      form
    )
    .then(() => {
      alert('Message sent!');
      form.reset();
    })
    .catch((error) => {
      alert(`Error: ${error.text}`);
    });
  });
};

// 5. Render Entire App
document.body.innerHTML = `
  ${Header()}
  ${Hero()}
  ${Skills()}
  ${Projects()}
  ${Certifications()}
  ${Contact()}
  ${Footer()}
`;

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupContactForm();
  initEmailJS();
  initHero(); // initialize hero behaviors that were moved out of innerHTML
});


