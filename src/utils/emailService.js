// emailService.js
// Utility wrapper for EmailJS. index.js initializes EmailJS with your user id.
// This module exposes a helper to send a form or template params.

const SERVICE_ID = 'service_20mgute';
const TEMPLATE_ID = 'template_faun4li';

export function sendEmail(formOrParams) {
  if (typeof window === 'undefined' || !window.emailjs) {
    return Promise.reject(new Error('EmailJS client not loaded'));
  }

  // If a form element is passed, use sendForm. Otherwise assume an object of template params and use send.
  if (formOrParams instanceof HTMLFormElement) {
    return window.emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formOrParams);
  }

  if (formOrParams && typeof formOrParams === 'object') {
    return window.emailjs.send(SERVICE_ID, TEMPLATE_ID, formOrParams);
  }

  return Promise.reject(new Error('Invalid argument to sendEmail: expected HTMLFormElement or params object'));
}