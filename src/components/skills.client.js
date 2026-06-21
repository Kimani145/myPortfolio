/**
 * skills.client.js — v2
 * Skills animation is now handled via IntersectionObserver in index.js.
 * This file is kept as a no-op export for backward compatibility with the import in index.js.
 */
export function initSkills() {
  // No-op: bar animations are driven by .skills-visible class added via
  // IntersectionObserver in index.js. See skill-item__bar-fill CSS transition.
}
