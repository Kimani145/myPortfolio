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
 * Generates the dark-themed HTML email for the portfolio owner (Joseph Kimani).
 * 
 * @param {Object} params
 * @param {string} params.from_name - Name of the sender
 * @param {string} params.reply_to - Email of the sender
 * @param {string} params.subject - Subject of the inquiry
 * @param {string} params.message - Content of the message
 * @returns {string} Fully styled HTML string
 */
export function generateOwnerEmail({ from_name, reply_to, subject, message }) {
  const theme = EMAIL_THEMES.dark;
  const safeName = escapeHtml(from_name);
  const safeEmail = escapeHtml(reply_to);
  const safeSubject = escapeHtml(subject || 'No Subject');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${theme.background}; font-family: ${theme.fontFamily}; color: ${theme.text}; -webkit-font-smoothing: antialiased;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${theme.background}; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Card Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: ${theme.surface}; border: 1px solid ${theme.border}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; border-bottom: 1px solid ${theme.border};">
              <span style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: ${theme.primary}; display: block; margin-bottom: 8px;">
                Portfolio Notification
              </span>
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; color: ${theme.text};">
                New Message Received
              </h1>
            </td>
          </tr>

          <!-- Sender Details Grid -->
          <tr>
            <td style="padding: 30px 40px 20px 40px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="30%" valign="top" style="padding-bottom: 12px;">
                    <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: ${theme.textMuted}; display: block;">From</span>
                  </td>
                  <td width="70%" valign="top" style="padding-bottom: 12px;">
                    <span style="font-size: 15px; font-weight: 500; color: ${theme.text};">${safeName}</span>
                  </td>
                </tr>
                <tr>
                  <td width="30%" valign="top" style="padding-bottom: 12px;">
                    <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: ${theme.textMuted}; display: block;">Email</span>
                  </td>
                  <td width="70%" valign="top" style="padding-bottom: 12px;">
                    <a href="mailto:${safeEmail}" style="font-size: 15px; color: ${theme.primary}; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td width="30%" valign="top" style="padding-bottom: 12px;">
                    <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: ${theme.textMuted}; display: block;">Subject</span>
                  </td>
                  <td width="70%" valign="top" style="padding-bottom: 12px;">
                    <span style="font-size: 15px; font-weight: 500; color: ${theme.text};">${safeSubject}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <div style="background-color: ${theme.background}; border: 1px solid ${theme.border}; border-radius: 8px; padding: 24px; margin-top: 10px;">
                <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: ${theme.textMuted}; display: block; margin-bottom: 12px; border-bottom: 1px solid ${theme.border}; padding-bottom: 8px;">
                  Message Body
                </span>
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: ${theme.text}; word-break: break-word;">
                  ${safeMessage}
                </p>
              </div>
            </td>
          </tr>

          <!-- Quick Action Footer -->
          <tr>
            <td style="padding: 20px 40px 40px 40px; text-align: center; border-top: 1px solid ${theme.border};">
              <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(safeSubject)}" style="display: inline-block; background-color: ${theme.primary}; color: #ffffff; font-family: 'IBM Plex Mono', monospace; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-decoration: none; padding: 12px 28px; border-radius: 6px;">
                Reply Directly
              </a>
            </td>
          </tr>

        </table>
        
        <!-- Bottom Brand Mark -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin-top: 20px;">
          <tr>
            <td align="center" style="font-size: 12px; color: ${theme.textMuted}; font-family: 'IBM Plex Mono', monospace;">
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
