// emailService.js
const SERVICE_ID = "service_20mgute";
const TEMPLATE_IDS = {
  contact: "template_faun4li",      // Contact form (to you)
  notification: "template_qkty9mp", // Auto-reply (to sender)
};

export function sendEmailDual(formOrParams) {
  if (typeof window === "undefined" || !window.emailjs) {
    return Promise.reject(new Error("EmailJS client not loaded"));
  }

  const contactTemplate = TEMPLATE_IDS.contact;
  const notifyTemplate = TEMPLATE_IDS.notification;

  let contactPromise, notifyPromise;

  if (formOrParams instanceof HTMLFormElement) {
    // Send to you
    contactPromise = window.emailjs.sendForm(SERVICE_ID, contactTemplate, formOrParams);

    // Extract params for the visitor confirmation
    const formData = new FormData(formOrParams);
    const params = Object.fromEntries(formData.entries());
    notifyPromise = window.emailjs.send(SERVICE_ID, notifyTemplate, params);
  } else if (formOrParams && typeof formOrParams === "object") {
    // Send using params object
    contactPromise = window.emailjs.send(SERVICE_ID, contactTemplate, formOrParams);
    notifyPromise = window.emailjs.send(SERVICE_ID, notifyTemplate, formOrParams);
  } else {
    return Promise.reject(new Error("Invalid argument to sendEmailDual"));
  }

  // Wait for both before resolving
  return Promise.all([contactPromise, notifyPromise]);
}
