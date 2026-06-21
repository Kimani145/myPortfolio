import '../styles/hero.css';

/**
 * Build Graph SVG data
 * Center: JKN
 * Projects: Roomie Finder, GlowBook, YSC, Fitness Tracker Pro, This Portfolio
 * Infra: React, Firestore, Supabase, Django/DRF, Firebase
 * Edge key: solid = currently used, dashed = planned/target
 */

const GRAPH = {
  // SVG viewBox: 0 0 480 320
  center: { x: 240, y: 160, label: 'JKN', r: 32 },

  projectNodes: [
    { id: 'roomie',    x: 100, y: 64,  label: 'Roomie\nFinder', r: 34 },
    { id: 'glowbook',  x: 380, y: 64,  label: 'GlowBook',       r: 30 },
    { id: 'ysc',       x: 420, y: 200, label: 'YSC',            r: 28 },
    { id: 'fitness',   x: 340, y: 286, label: 'Fitness\nTracker', r: 30 },
    { id: 'portfolio', x: 130, y: 276, label: 'Portfolio',       r: 30 },
  ],

  infraNodes: [
    { id: 'react',     x: 60,  y: 180, label: 'React',      r: 22 },
    { id: 'firestore', x: 180, y: 44,  label: 'Firestore',  r: 22 },
    { id: 'supabase',  x: 440, y: 130, label: 'Supabase',   r: 22 },
    { id: 'drf',       x: 420, y: 290, label: 'DRF',        r: 20 },
    { id: 'firebase',  x: 280, y: 300, label: 'Firebase',   r: 22 },
  ],

  // [from_id, to_id, 'solid'|'dashed', animated_delay_ms]
  edges: [
    // Project ↔ Center
    ['center', 'roomie',    'solid',  0],
    ['center', 'glowbook',  'solid',  100],
    ['center', 'ysc',       'solid',  200],
    ['center', 'fitness',   'solid',  300],
    ['center', 'portfolio', 'solid',  400],

    // Infra ↔ Projects (solid = in use, dashed = planned)
    ['roomie',    'firestore', 'solid',  500],   // Roomie → Firestore (in use)
    ['glowbook',  'firestore', 'dashed', 600],   // GlowBook → Firestore (planned migration)
    ['roomie',    'react',     'solid',  550],   // Roomie → React
    ['portfolio', 'react',     'solid',  450],   // Portfolio → React
    ['ysc',       'supabase',  'solid',  700],   // YSC → Supabase
    ['ysc',       'drf',       'solid',  750],   // YSC → Django/DRF
    ['fitness',   'firebase',  'solid',  800],   // Fitness → Firebase
  ]
};

function getNodeById(id) {
  if (id === 'center') return GRAPH.center;
  return (
    GRAPH.projectNodes.find(n => n.id === id) ||
    GRAPH.infraNodes.find(n => n.id === id)
  );
}

function renderEdge(fromId, toId, style, delay) {
  const a = getNodeById(fromId);
  const b = getNodeById(toId);
  if (!a || !b) return '';
  const classes = `graph-edge ${style} animated`;
  const dashAttr = style === 'dashed' ? 'stroke-dasharray="5 4"' : '';
  return `<line
    class="${classes}"
    x1="${a.x}" y1="${a.y}"
    x2="${b.x}" y2="${b.y}"
    ${dashAttr}
    style="animation-delay:${delay}ms"
  />`;
}

function renderProjectNode(n) {
  const lines = n.label.split('\n');
  const lineHeight = 13;
  const totalH = lines.length * lineHeight;
  const startY = n.y - totalH / 2 + lineHeight / 2;

  return `
    <g class="graph-project-node" role="img" aria-label="${n.label.replace('\n', ' ')}">
      <circle class="graph-node-circle project" cx="${n.x}" cy="${n.y}" r="${n.r}"/>
      ${lines.map((line, i) =>
        `<text class="graph-label" x="${n.x}" y="${startY + i * lineHeight}">${line}</text>`
      ).join('')}
    </g>
  `;
}

function renderInfraNode(n) {
  return `
    <g class="graph-infra-node" role="img" aria-label="${n.label} — infrastructure">
      <circle class="graph-node-circle infra" cx="${n.x}" cy="${n.y}" r="${n.r}"/>
      <text class="graph-label infra" x="${n.x}" y="${n.y}">${n.label}</text>
    </g>
  `;
}

function renderGraph() {
  const edgesSVG = GRAPH.edges.map(([a, b, style, delay]) =>
    renderEdge(a, b, style, delay)
  ).join('');

  const infraSVG = GRAPH.infraNodes.map(renderInfraNode).join('');
  const projectSVG = GRAPH.projectNodes.map(renderProjectNode).join('');

  const c = GRAPH.center;

  return `
    <svg
      class="build-graph__svg"
      viewBox="0 0 480 320"
      role="img"
      aria-label="Build graph showing Joseph Kimani Nyoike's projects and their tech stack connections"
    >
      <defs>
        <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Edges (drawn first, below nodes) -->
      ${edgesSVG}

      <!-- Infrastructure nodes -->
      ${infraSVG}

      <!-- Project nodes -->
      ${projectSVG}

      <!-- Center JKN node -->
      <g class="graph-center-node" role="img" aria-label="JKN — Joseph Kimani Nyoike">
        <circle class="graph-node-circle center" cx="${c.x}" cy="${c.y}" r="${c.r}" filter="url(#node-glow)"/>
        <text class="graph-label center" x="${c.x}" y="${c.y}">${c.label}</text>
      </g>
    </svg>
  `;
}

function renderTerminal() {
  return `
    <div class="terminal" role="region" aria-label="Terminal status readout" aria-live="polite">
      <div class="terminal__chrome" aria-hidden="true">
        <span class="terminal__dot terminal__dot--close"></span>
        <span class="terminal__dot terminal__dot--min"></span>
        <span class="terminal__dot terminal__dot--max"></span>
        <span class="terminal__title">jkn@portfolio ~ zsh</span>
      </div>
      <div class="terminal__body">
        <div class="terminal__cmd-line" id="term-cmd" aria-label="Terminal command"></div>
        <div class="terminal__res-line" id="term-res" aria-label="Terminal response"><span class="terminal__cursor" aria-hidden="true"></span></div>
      </div>
    </div>
  `;
}

export function Hero() {
  return `
    <section id="hero" class="hero" aria-labelledby="hero-name">
      <div class="hero__inner">

        <!-- Left: Name + Bio + CTAs -->
        <div class="hero__left">
          <p class="hero__greeting" aria-hidden="true">$ whoami</p>

          <h1 class="hero__name" id="hero-name">
            <span class="hero__name-first">Joseph Kimani</span>
            <span class="hero__name-last">Nyoike</span>
          </h1>

          <p class="hero__positioning">
            I design the schema, build the system, and ship it to production — then debug it live.
          </p>

          <div class="hero__ctas">
            <a href="#projects" id="cta-work" class="btn-primary">View Work ↓</a>
            <a href="#contact" class="btn-ghost">Contact</a>
          </div>
        </div>

        <!-- Right: Build Graph + Terminal -->
        <div class="hero__right">
          <div class="build-graph" aria-label="Interactive project dependency graph">
            ${renderGraph()}
            <div class="graph-legend" aria-label="Graph legend">
              <span class="graph-legend__item">
                <span class="graph-legend__line solid"></span>
                Currently in use
              </span>
              <span class="graph-legend__item">
                <span class="graph-legend__line dashed"></span>
                Planned migration
              </span>
            </div>
          </div>
          ${renderTerminal()}
        </div>

      </div>
    </section>
  `;
}
