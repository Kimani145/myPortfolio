import '../styles/skills.css';

// ============================================================
// SINGLE SOURCE OF TRUTH — derived from the same graph data
// as the hero Build Graph. Any skill that is a graph node gets
// a "→ used in N projects" badge computed from the edge list.
// Skills with no graph node get a plain pill. No bars. No %.
// ============================================================

/**
 * Graph edge map: which infra/tech nodes connect to which projects.
 * Must stay in sync with hero.js GRAPH.edges.
 * solid = in use, dashed = planned (both count as "used in").
 */
const GRAPH_USAGE = {
  // infra node id → list of project names it connects to
  'react':     ['Roomie Finder', 'This Portfolio'],
  'firestore': ['Roomie Finder', 'Knot Just Braids'],   // GlowBook→Firestore is dashed (planned) — count it
  'firebase':  ['Fitness Tracker Pro', 'Knot Just Braids'],
  'supabase':  ['YSC'],
  'drf':       ['YSC'],
};

// Map display skill name → graph node id (if any)
const SKILL_TO_NODE = {
  'React':         'react',
  'Firestore':     'firestore',
  'Firebase':      'firebase',
  'Supabase':      'supabase',
  'Django / DRF':  'drf',
};

const CATEGORIES = [
  {
    key:   'languages',
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML / CSS']
  },
  {
    key:   'frameworks',
    label: 'Frameworks & Tools',
    skills: ['React', 'Django / DRF', 'Vite', 'Git', 'REST APIs', 'Firebase', 'Firestore', 'Supabase', 'Celery / Redis']
  },
  {
    key:   'data',
    label: 'Data & AI',
    skills: ['Machine Learning', 'NLP', 'AI Ethics', 'Data Analysis', 'IBM AI Fundamentals']
  },
  {
    key:   'networking',
    label: 'Networking',
    skills: ['Network Design', 'Cisco IOS', 'IP Addressing', 'IPv4 / IPv6', 'Switches & Routers', 'Help Desk Support']
  },
  {
    key:   'practice',
    label: 'Practice',
    skills: ['System Architecture', 'RBAC Design', 'Documentation', 'Technical Writing', 'Code Review', 'Debugging']
  }
];

function usageBadge(skillName) {
  const nodeId = SKILL_TO_NODE[skillName];
  if (!nodeId) return '';
  const projects = GRAPH_USAGE[nodeId];
  if (!projects || projects.length === 0) return '';
  const count = projects.length;
  const label = count === 1
    ? `→ used in 1 project`
    : `→ used in ${count} projects`;
  return `<span class="skill-pill__usage" title="${projects.join(', ')}">${label}</span>`;
}

function renderPill(skillName) {
  const badge = usageBadge(skillName);
  const hasUsage = badge !== '';
  return `
    <span class="skill-pill${hasUsage ? ' skill-pill--linked' : ''}">
      ${skillName}${badge}
    </span>
  `;
}

export function Skills() {
  return `
    <section id="skills" class="section skills" aria-labelledby="skills-heading">
      <div class="section-inner">
        <p class="section-label">Skill Set</p>
        <h2 class="section-title" id="skills-heading">Technical Stack</h2>

        <div id="skills-board">
          ${CATEGORIES.map(cat => `
            <div class="skills__category">
              <p class="skills__category-label">${cat.label}</p>
              <div class="skills__pills">
                ${cat.skills.map(renderPill).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <p class="skills__graph-note">
          <span class="font-mono" style="color:var(--accent); font-size:0.7rem;">→ used in N projects</span>
          badges are derived from the Build Graph above — not separately asserted.
        </p>
      </div>
    </section>

    <!-- Education — same token system -->
    <section id="education" class="section education" aria-labelledby="education-heading">
      <div class="section-inner">
        <p class="section-label">Background</p>
        <h2 class="section-title" id="education-heading">Education</h2>
        <div class="edu-card fade-up">
          <div class="edu-card__icon" aria-hidden="true"><i class="fas fa-graduation-cap"></i></div>
          <div class="edu-card__body">
            <div class="edu-card__institution">Technical University of Kenya (TUK)</div>
            <div class="edu-card__degree">Bachelor of Science — Information Science</div>
            <div class="edu-card__meta">
              <span class="edu-card__year">2022 – Present</span>
              <span class="tech-tag">Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
