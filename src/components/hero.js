import '../styles/hero.css';

/**
 * Graph data representation for the personal operating system.
 * Three categories of nodes:
 * 1. Identity (intellectual background and disciplines)
 * 2. Projects (systems built)
 * 3. Technologies (tools and frameworks used)
 */
const GRAPH = {
  center: { id: 'center', x: 280, y: 200, label: 'JKN', r: 32, category: 'center' },

  nodes: [
    // 1. Identity Category (Academic / Intellectual Framework)
    { id: 'infosc',    x: 325, y: 122, label: 'Info\nScience',     r: 28, category: 'identity' },
    { id: 'datasys',   x: 325, y: 278, label: 'Data\nSystems',     r: 28, category: 'identity' },
    { id: 'records',   x: 235, y: 278, label: 'Records\nMgmt',      r: 28, category: 'identity' },
    { id: 'prompt',    x: 190, y: 200, label: 'Prompt\nEng',       r: 28, category: 'identity' },
    { id: 'ai',        x: 370, y: 200, label: 'Artificial\nIntel', r: 28, category: 'identity' },
    { id: 'softeng',   x: 235, y: 122, label: 'Software\nEng',     r: 28, category: 'identity' },

    // 2. Projects Category (What I build)
    { id: 'roomie',    x: 100, y: 80,  label: 'Roomie\nFinder',    r: 34, category: 'project' },
    { id: 'glowbook',  x: 460, y: 80,  label: 'GlowBook',          r: 30, category: 'project' },
    { id: 'ysc',       x: 460, y: 320, label: 'YSC',               r: 28, category: 'project' },
    { id: 'fitness',   x: 280, y: 355, label: 'Fitness\nTracker',  r: 30, category: 'project' },
    { id: 'portfolio', x: 100, y: 320, label: 'Portfolio',         r: 30, category: 'project' },

    // 3. Technologies Category (Tools I use)
    { id: 'react',     x: 50,  y: 200, label: 'React',             r: 22, category: 'technology' },
    { id: 'firestore', x: 200, y: 50,  label: 'Firestore',         r: 22, category: 'technology' },
    { id: 'supabase',  x: 510, y: 200, label: 'Supabase',          r: 22, category: 'technology' },
    { id: 'drf',       x: 410, y: 340, label: 'DRF',               r: 20, category: 'technology' },
    { id: 'firebase',  x: 200, y: 350, label: 'Firebase',          r: 22, category: 'technology' }
  ],

  edges: [
    // Center (JKN) ↔ Identity
    ['center', 'softeng',   'solid',  0],
    ['center', 'infosc',    'solid',  50],
    ['center', 'prompt',    'solid',  100],
    ['center', 'datasys',   'solid',  150],
    ['center', 'records',   'solid',  200],
    ['center', 'ai',        'solid',  250],

    // Identity ↔ Projects
    ['softeng',   'roomie',    'solid',  300],
    ['softeng',   'glowbook',  'solid',  320],
    ['softeng',   'ysc',       'solid',  340],
    ['softeng',   'fitness',   'solid',  360],
    ['softeng',   'portfolio', 'solid',  380],

    ['infosc',    'roomie',    'solid',  400],
    ['infosc',    'portfolio', 'solid',  420],

    ['prompt',    'roomie',    'solid',  440],
    ['prompt',    'glowbook',  'dashed', 460],

    ['datasys',   'roomie',    'solid',  480],
    ['datasys',   'ysc',       'solid',  500],

    ['records',   'glowbook',  'solid',  520],
    ['records',   'ysc',       'solid',  540],

    ['ai',        'roomie',    'dashed', 560],
    ['ai',        'glowbook',  'dashed', 580],

    // Projects ↔ Technologies
    ['roomie',    'firestore', 'solid',  600],
    ['roomie',    'react',     'solid',  620],
    ['glowbook',  'firestore', 'dashed', 640],
    ['ysc',       'supabase',  'solid',  660],
    ['ysc',       'drf',       'solid',  680],
    ['fitness',   'firebase',  'solid',  700],
    ['portfolio', 'react',     'solid',  720]
  ]
};

function getNodeById(id) {
  if (id === 'center') return GRAPH.center;
  return GRAPH.nodes.find(n => n.id === id);
}

function renderEdge(fromId, toId, style, delay) {
  const a = getNodeById(fromId);
  const b = getNodeById(toId);
  if (!a || !b) return '';
  const classes = `graph-edge ${style} animated`;
  const dashAttr = style === 'dashed' ? 'stroke-dasharray="5 4"' : '';
  return `<line
    class="${classes}"
    data-from="${fromId}"
    data-to="${toId}"
    x1="${a.x}" y1="${a.y}"
    x2="${b.x}" y2="${b.y}"
    ${dashAttr}
    style="animation-delay:${delay}ms"
  />`;
}

function renderNode(n) {
  const lines = n.label.split('\n');
  const lineHeight = 11;
  const totalH = lines.length * lineHeight;
  const startY = n.y - totalH / 2 + lineHeight / 2;

  const isCenter = n.id === 'center';
  const circleClass = `graph-node-circle ${n.category}`;
  const labelClass = `graph-label ${n.category}`;

  return `
    <g class="graph-node ${n.category}" data-node-id="${n.id}" role="img" aria-label="${n.label.replace('\n', ' ')}">
      <circle class="${circleClass}" cx="${n.x}" cy="${n.y}" r="${n.r}" ${isCenter ? 'filter="url(#node-glow)"' : ''}/>
      ${lines.map((line, i) =>
        `<text class="${labelClass}" x="${n.x}" y="${startY + i * lineHeight}">${line}</text>`
      ).join('')}
    </g>
  `;
}

function renderGraph() {
  const edgesSVG = GRAPH.edges.map(([a, b, style, delay]) =>
    renderEdge(a, b, style, delay)
  ).join('');

  const allNodes = [GRAPH.center, ...GRAPH.nodes];
  const nodesSVG = allNodes.map(renderNode).join('');

  return `
    <svg
      class="build-graph__svg"
      viewBox="0 0 560 400"
      role="img"
      aria-label="Build graph showing Joseph Kimani Nyoike's disciplines, projects, and tech stacks"
    >
      <defs>
        <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Edges (drawn first, below nodes) -->
      ${edgesSVG}

      <!-- All nodes -->
      ${nodesSVG}
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
          <div class="build-graph" aria-label="Interactive project dependency graph" id="graph-container">
            ${renderGraph()}
            <div class="graph-legend" aria-label="Graph legend">
              <div class="graph-legend__row">
                <span class="graph-legend__item">
                  <span class="graph-legend__indicator identity"></span>
                  Identity
                </span>
                <span class="graph-legend__item">
                  <span class="graph-legend__indicator project"></span>
                  Projects
                </span>
                <span class="graph-legend__item">
                  <span class="graph-legend__indicator technology"></span>
                  Technologies
                </span>
              </div>
              <div class="graph-legend__row" style="margin-top: 6px;">
                <span class="graph-legend__item">
                  <span class="graph-legend__line solid"></span>
                  Active Connection
                </span>
                <span class="graph-legend__item">
                  <span class="graph-legend__line dashed"></span>
                  Planned Connection
                </span>
              </div>
            </div>
          </div>
          ${renderTerminal()}
        </div>

      </div>
    </section>
  `;
}
