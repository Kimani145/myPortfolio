// theme.js
// Reusable email design system using the latest portfolio branding colors.

export const EMAIL_THEMES = {
  light: {
    primary: "#2D5BFF",         // --accent
    primaryHover: "#1A45E8",    // --accent-hover
    background: "#F3F5F7",      // --bg
    surface: "#FFFFFF",         // --panel
    text: "#10161D",            // --ink
    textMuted: "#6B7280",       // Subdued gray
    border: "rgba(16, 22, 29, 0.08)",
    fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  },
  dark: {
    primary: "#6E93FF",         // --accent (dark theme variant)
    primaryHover: "#8AABFF",    // --accent-hover (dark theme variant)
    background: "#0E1318",      // --bg (dark)
    surface: "#161C22",         // --panel (dark)
    text: "#E6EAF0",            // --ink (dark)
    textMuted: "#9CA3AF",       // Subdued gray (dark)
    border: "rgba(230, 234, 240, 0.08)",
    fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  }
};
