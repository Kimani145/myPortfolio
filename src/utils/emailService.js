// emailService.js
import { generateOwnerEmail } from './emailTemplates/ownerTemplate.js';
import { generateVisitorEmail } from './emailTemplates/visitorTemplate.js';

const SERVICE_ID = "service_20mgute";
const DYNAMIC_TEMPLATE_ID = "template_mzm3n9t";
const OWNER_EMAIL = "kimnyoski145@gmail.com";

/**
 * Sends a dual email (one to the owner as notification, one to the visitor as auto-reply)
 * using a single dynamic HTML EmailJS template.
 * 
 * @param {HTMLFormElement|Object} formOrParams - The form element or a params object containing from_name, reply_to, subject, and message.
 * @returns {Promise<Array>} A promise that resolves when both emails are sent successfully.
 */
export function sendEmailDual(formOrParams) {
  if (typeof window === "undefined" || !window.emailjs) {
    return Promise.reject(new Error("EmailJS client not loaded"));
  }

  let params = {};
  if (formOrParams instanceof HTMLFormElement) {
    const formData = new FormData(formOrParams);
    params = Object.fromEntries(formData.entries());
  } else if (formOrParams && typeof formOrParams === "object") {
    params = { ...formOrParams };
  } else {
    return Promise.reject(new Error("Invalid argument to sendEmailDual"));
  }

  const { from_name, reply_to, subject, message } = params;

  // Basic validation
  if (!from_name || !reply_to || !message) {
    return Promise.reject(new Error("Missing required fields: from_name, reply_to, and message are required."));
  }

  const emailSubject = subject || "Portfolio Collaboration Inquiry";

  // 1. Generate owner HTML
  const ownerHtml = generateOwnerEmail({
    from_name,
    reply_to,
    subject: emailSubject,
    message
  });

  // 2. Generate visitor HTML
  const visitorHtml = generateVisitorEmail({
    from_name,
    reply_to,
    subject: emailSubject,
    message
  });

  // 3. Prepare promises for both emails using the same dynamic template
  const ownerPromise = window.emailjs.send(SERVICE_ID, DYNAMIC_TEMPLATE_ID, {
    subject: `New Portfolio Message: ${emailSubject} (from ${from_name})`,
    to_email: OWNER_EMAIL,
    html_content: ownerHtml
  });

  const visitorPromise = window.emailjs.send(SERVICE_ID, DYNAMIC_TEMPLATE_ID, {
    subject: `Thank you for reaching out, ${from_name}!`,
    to_email: reply_to,
    html_content: visitorHtml
  });

  // 4. Resolve only when both succeed
  return Promise.all([ownerPromise, visitorPromise]);
}
