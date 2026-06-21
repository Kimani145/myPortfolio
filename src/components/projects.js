import '../styles/projects.css';

// ============================================================
// LOCKED PROJECT LIST — v3 patch
// ============================================================

// ---- Roomie Finder: LIVE MVP (deployed, actively evolving) ----
const ROOMIE_FINDER = {
  id:     'roomie-finder',
  title:  'Roomie Finder (Colony)',
  status: 'LIVE — MVP',
  statusClass: 'status-progress',   // amber: deployed but actively evolving
  stack:  ['React', 'Firestore', 'Firebase Auth', 'Vercel'],
  url:    'https://tuk-roomie-finder.vercel.app/',
  desc:   'A roommate-matching and student-housing discovery platform built for TUK students. Live MVP: compatibility filtering, listing management, messaging, and host contact flows are all running in production.',
  caseStudy: {
    label: 'Engineering Note',
    text:  `The core matching challenge was Firestore's compound query limit — you can't filter on more than one array-contains at a time. Early builds required users to over-specify preferences and still returned thin result sets. The fix: a two-pass architecture where the Firestore query is deliberately relaxed (fewer constraints) and a client-side filter pass narrows results against the full preference object. This keeps query costs predictable and result quality high regardless of dataset sparsity. The trade-off is a slightly larger read volume — a conscious choice, documented in the data layer.`
  }
};

// ---- Knot Just Braids (GlowBook): LIVE PRODUCTION — real business, full case study ----
const KNOT_JUST = {
  id:     'knot-just-braids',
  title:  'Knot Just Braids (GlowBook)',
  status: 'LIVE — PRODUCTION',
  statusClass: 'status-live',
  stack:  ['React', 'Firebase', 'Commerce flows', 'Vercel'],
  url:    'https://knotjustbraids.vercel.app/',
  desc:   'A dual-mode salon and bead storefront built for a real operating business. Replaces scattered DMs and WhatsApp order handling with a structured browsing, booking, and cart experience.',
  caseStudy: {
    label: 'Shipped to a Paying Business',
    text:  `The client's previous workflow was entirely WhatsApp-based: screenshots of styles, back-and-forth availability checks, manual order tracking. The brief was to replace that with something that didn't require a learning curve on their end. The result is a dual-mode storefront — switching cleanly between braids and beads — where customers browse styles, submit booking requests, and complete cart flows, while the business owner gets appointment and order state surfaced in one place. Shipped and live. The admin surface handles real transaction volume without a separate backend service, which kept the hosting cost at zero for the business during the launch window.`
  }
};

// ---- YSC: Build note (architecture-complete, not implemented) ----
const YSC = {
  id:         'ysc',
  title:      'YSC — Youth Social Club, Ruiru Parish',
  status:     'CONCEPT / ARCHITECTURE',
  statusClass:'status-concept',
  label:      'Build Note',
  stack:      ['PostgreSQL', 'Supabase', 'Django/DRF', 'Celery/Redis', 'React/TS'],
  text:       'Architecture-complete, not yet implemented. Full system design document produced: PostgreSQL schema, 7-role RBAC matrix (Member → Parish Admin), Celery/Redis task queue for notification and scheduling workflows, and a React/TypeScript frontend. Architecture iterated through external review before any code was written.'
};

// ---- Standard cards ----
const STANDARD_CARDS = [
  {
    id:         'fitness-tracker',
    title:      'Fitness Tracker Pro',
    status:     'DEPLOYED',
    statusClass:'status-live',
    stack:      ['React', 'JavaScript', 'Netlify'],
    url:        'https://fitness-tracker-pro-01.netlify.app',
    desc:       'A deployed fitness logging application. Users track workouts, set goals, and monitor progress over time. Handles state persistence and data visualization client-side.'
  },
  {
    id:         'this-portfolio',
    title:      'This Portfolio',
    status:     'LIVE',
    statusClass:'status-live',
    stack:      ['JavaScript', 'Vite', 'Vanilla CSS'],
    url:        'https://josephkimani.netlify.app',
    desc:       "The site you're reading. Vanilla JS component architecture, design-token-driven CSS, IBM Plex type system, and an SVG Build Graph that truthfully maps current stack use vs. planned migrations."
  }
];

// ---- Render helpers ----

function renderTechTag(t) {
  return `<span class="tech-tag">${t}</span>`;
}

function renderFlagshipCard(f) {
  const artLines = {
    'roomie-finder': `┌─────────────────────┐
│  ROOMIE FINDER      │
│  LIVE MVP · TUK     │
├─────────────────────┤
│ [Auth] → [Profile]  │
│    ↓                │
│ [Discovery Feed]    │
│    ↓                │
│ [Match / Message]   │
├─────────────────────┤
│ Firestore · React   │
└─────────────────────┘`,
    'knot-just-braids': `┌─────────────────────┐
│  KNOT JUST BRAIDS   │
│  LIVE · PRODUCTION  │
├─────────────────────┤
│ [Browse Styles]     │
│    ↓                │
│ [Book / Cart]       │
│    ↓                │
│ [Order State]       │
├─────────────────────┤
│ Firebase · React    │
└─────────────────────┘`
  };

  const art = artLines[f.id] || '';

  return `
    <article class="project-flagship fade-up" id="${f.id}" aria-labelledby="${f.id}-title">
      <div class="project-flagship__inner">
        <div class="project-flagship__meta">
          <div class="project-flagship__title-row">
            <h3 class="project-flagship__title" id="${f.id}-title">${f.title}</h3>
            <span class="status-tag ${f.statusClass}">${f.status}</span>
          </div>

          <p class="project-flagship__desc">${f.desc}</p>

          <div class="case-study-block">
            <div class="case-study-block__label">${f.caseStudy.label}</div>
            <p class="case-study-block__text">${f.caseStudy.text}</p>
          </div>

          <div class="project-flagship__stack">
            ${f.stack.map(renderTechTag).join('')}
          </div>

          <div class="project-flagship__actions">
            <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="btn-primary">
              View Live ↗
            </a>
          </div>
        </div>

        <div class="project-flagship__visual" aria-hidden="true">
          <pre class="project-visual-art">${art}</pre>
        </div>
      </div>
    </article>
  `;
}

function renderBuildNote(p) {
  return `
    <article class="project-build-note fade-up" id="${p.id}" aria-labelledby="${p.id}-title">
      <div class="project-build-note__title-row">
        <h3 class="project-build-note__title" id="${p.id}-title">${p.title}</h3>
        <span class="status-tag ${p.statusClass}">${p.status}</span>
      </div>
      <p class="project-build-note__label">${p.label}</p>
      <p class="project-build-note__text">${p.text}</p>
      <div class="project-build-note__stack">
        ${p.stack.map(renderTechTag).join('')}
      </div>
    </article>
  `;
}

function renderStandardCard(p) {
  const linkEl = p.url
    ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="project-standard__link" aria-label="Visit ${p.title}">Visit ↗</a>`
    : '';
  return `
    <article class="project-standard fade-up" id="${p.id}" aria-labelledby="${p.id}-title">
      <div class="project-standard__title-row">
        <h3 class="project-standard__title" id="${p.id}-title">${p.title}</h3>
        <span class="status-tag ${p.statusClass}">${p.status}</span>
      </div>
      <p class="project-standard__desc">${p.desc}</p>
      <div class="project-standard__stack">
        ${p.stack.map(renderTechTag).join('')}
      </div>
      ${linkEl}
    </article>
  `;
}

export function Projects() {
  return `
    <section id="projects" class="section projects" aria-labelledby="projects-heading">
      <div class="section-inner">
        <div class="projects__header">
          <p class="section-label">Work</p>
          <h2 class="section-title" id="projects-heading">Build Status</h2>
          <p class="projects__subtitle">Real projects, honest status. Solid edges in the graph above = in use today. Dashed = planned next.</p>
        </div>

        <!-- Flagship case studies: Roomie Finder + Knot Just Braids -->
        ${renderFlagshipCard(ROOMIE_FINDER)}
        ${renderFlagshipCard(KNOT_JUST)}

        <!-- Build note: YSC (architecture-complete) -->
        <div class="projects__secondary projects__secondary--single">
          ${renderBuildNote(YSC)}
        </div>

        <!-- Standard cards: Fitness Tracker + Portfolio -->
        <div class="projects__standard">
          ${STANDARD_CARDS.map(renderStandardCard).join('')}
        </div>
      </div>
    </section>
  `;
}
