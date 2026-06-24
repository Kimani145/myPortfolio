import { EMAIL_THEMES } from './theme.js';

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generates the light-themed HTML email for visitors (auto-reply).
 * 
 * @param {Object} params
 * @param {string} params.from_name - Name of the visitor
 * @param {string} params.reply_to - Email of the visitor
 * @param {string} params.subject - Subject of the inquiry
 * @param {string} params.message - Content of the message
 * @returns {string} Fully styled HTML string
 */
export function generateVisitorEmail({ from_name, reply_to, subject, message }) {
  const theme = EMAIL_THEMES.light;
  const safeName = escapeHtml(from_name);
  const safeSubject = escapeHtml(subject || 'your inquiry');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Reaching Out</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${theme.background}; font-family: ${theme.fontFamily}; color: ${theme.text}; -webkit-font-smoothing: antialiased;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${theme.background}; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Card Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: ${theme.surface}; border: 1px solid ${theme.border}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
          
          <!-- Header Accent Bar -->
          <tr>
            <td height="4" style="background-color: ${theme.primary};"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px;">
              <span style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: ${theme.primary}; display: block; margin-bottom: 8px;">
                Message Received
              </span>
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; color: ${theme.text};">
                Thank You, ${safeName}
              </h1>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 0 40px 30px 40px; font-size: 15px; line-height: 1.6; color: ${theme.text};">
              <p style="margin-top: 0; margin-bottom: 20px;">
                Thank you for reaching out! I've received your message regarding "<strong>${safeSubject}</strong>" and appreciate you taking the time to connect.
              </p>
              <p style="margin-bottom: 20px;">
                This is an automated confirmation to let you know your submission went through successfully. I personally review all inquiries and will get back to you as soon as possible—typically within 24 to 48 hours.
              </p>
              <p style="margin-bottom: 20px;">
                In the meantime, feel free to explore more of my work on GitHub or connect with me on LinkedIn.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <hr style="border: none; border-top: 1px solid ${theme.border}; margin: 0;">
            </td>
          </tr>

          <!-- Signature / Personal Branding -->
          <tr>
            <td style="padding: 30px 40px 40px 40px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td valign="middle">
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: ${theme.text};">Joseph Kimani Nyoike</p>
                    <p style="margin: 2px 0 0 0; font-size: 13px; color: ${theme.textMuted};">Software Engineer & Developer</p>
                    <p style="margin: 8px 0 0 0; font-size: 13px;">
                      <a href="mailto:kimnyoski145@gmail.com" style="color: ${theme.primary}; text-decoration: none;">kimnyoski145@gmail.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Social Links Footer Section -->
          <tr>
            <td style="background-color: ${theme.background}; padding: 24px 40px; text-align: center; border-top: 1px solid ${theme.border};">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="https://github.com/Kimani145" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin: 0 10px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; color: ${theme.textMuted}; text-decoration: none;">
                      GitHub
                    </a>
                    <span style="color: ${theme.border};">|</span>
                    <a href="https://www.linkedin.com/in/joseph-kimani-kim145/" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin: 0 10px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; color: ${theme.textMuted}; text-decoration: none;">
                      LinkedIn
                    </a>
                    <span style="color: ${theme.border};">|</span>
                    <a href="https://x.com/Kim25031052kim" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin: 0 10px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; color: ${theme.textMuted}; text-decoration: none;">
                      X (Twitter)
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        
        <!-- Bottom Disclaimer -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin-top: 20px;">
          <tr>
            <td align="center" style="font-size: 11px; color: ${theme.textMuted}; font-family: 'IBM Plex Mono', monospace; line-height: 1.4;">
              This is an automated receipt for your contact form submission.<br>
              Joseph Kimani Nyoike Portfolio © ${new Date().getFullYear()}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
