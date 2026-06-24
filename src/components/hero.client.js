/**
 * hero.client.js — v3 (Personal Operating System)
 * Terminal boot sequence and graph interactivity.
 */

const BOOT_SEQUENCE = [
  {
    cmd:  '$ whoami',
    res:  'Joseph Kimani Nyoike — Developer & Information Science researcher. I organize unstructured knowledge schemas and engineer robust data pipelines.'
  },
  {
    cmd:  '$ status --uptime',
    res:  'Operating system running. Hover or click any graph node to explore identity, projects, and technologies.'
  },
  {
    cmd:  '$ cat identity/core-competency',
    res:  'Bridging academic information systems (classification, records management) with modern full-stack web engineering.'
  }
];

const NODE_TERMINAL_DATA = {
  // Center
  center: {
    cmd: '$ whoami',
    res: 'Joseph Kimani Nyoike — Developer & Information Science researcher. I organize unstructured knowledge schemas and engineer robust data pipelines.'
  },
  
  // Identity (Intellectual disciplines)
  infosc: {
    cmd: '$ cat identity/disciplines/information-science',
    res: 'Purpose: The structural organization and management of human knowledge. Application: Foundational theory used to architect the Roomie Finder classification matching system and this portfolio graph structure.'
  },
  datasys: {
    cmd: '$ cat identity/disciplines/data-systems',
    res: 'Purpose: Building high-performance, structured data storage and pipelines. Application: Relational tables on Supabase for YSC, and real-time document schemas on Firestore for Roomie Finder.'
  },
  records: {
    cmd: '$ cat identity/disciplines/records-management',
    res: 'Purpose: Governing the lifecycle, authenticity, and compliance of organizational records. Application: Ledger histories inside GlowBook and competency tracking metrics inside YSC.'
  },
  prompt: {
    cmd: '$ cat identity/disciplines/prompt-engineering',
    res: 'Purpose: Instructing generative LLMs via precise, structured templates. Application: Parsing roommate bios to extract interest profiles on Roomie Finder, and powering automated scheduler helpers in GlowBook.'
  },
  ai: {
    cmd: '$ cat identity/disciplines/artificial-intelligence',
    res: 'Purpose: Automating complex data classification and cognitive tasks. Application: Semantically pairing students on Roomie Finder, and predicting customer booking frequencies inside GlowBook.'
  },
  softeng: {
    cmd: '$ cat identity/disciplines/software-engineering',
    res: 'Purpose: Translating theoretical schemas into performant, reliable applications. Application: The architectural backbone uniting all systems, projects, and user interfaces.'
  },

  // Projects
  roomie: {
    cmd: '$ inspect --project roomie-finder',
    res: 'Roomie Finder: A roommate matching platform built with React, Firestore, and AI classification. Solves student housing allocation gaps at TUK by mapping compatibility profiles.'
  },
  glowbook: {
    cmd: '$ inspect --project glowbook',
    res: 'GlowBook: A beauty client ledger system. Tracks transaction histories and customer schedules using records management principles, preparing for a serverless Firestore migration.'
  },
  ysc: {
    cmd: '$ inspect --project youth-skills-ledger',
    res: 'YSC Ledger: A community credential platform built with React, Django REST Framework, and Supabase. Tracks and verifies youth vocational skills across regional training centers.'
  },
  fitness: {
    cmd: '$ inspect --project fitness-tracker',
    res: 'Fitness Tracker: An overload tracking application built with React and Firebase. Logs routine structures and visualizes progression trends over time.'
  },
  portfolio: {
    cmd: '$ inspect --project this-portfolio',
    res: 'Portfolio: This dynamic dashboard built with client-side React. Integrates a single-template dynamic EmailJS flow and a live interactive state representation graph.'
  },

  // Technologies
  react: {
    cmd: '$ man tools/react',
    res: 'React: Component UI framework. Leveraged to render stateful, responsive frontends including Roomie Finder, the YSC dashboard, and this interactive system graph.'
  },
  firestore: {
    cmd: '$ man tools/firestore',
    res: 'Cloud Firestore: Real-time NoSQL document database. Selected for Roomie Finder to enable immediate student chat updates and low-latency profile matching queries.'
  },
  supabase: {
    cmd: '$ man tools/supabase',
    res: 'Supabase: Open-source relational SQL backend. Selected for YSC to manage structural relationships between competency standards and certification transcripts.'
  },
  drf: {
    cmd: '$ man tools/django-rest-framework',
    res: 'Django REST Framework: Python web API. Chosen for YSC to enforce strict server-side validation, role permissions, and token-based authentication.'
  },
  firebase: {
    cmd: '$ man tools/firebase',
    res: 'Firebase Platform: Suite of hosting, auth, and cloud functions. Enables rapid serverless deployments and user authentication for Roomie Finder and Fitness Tracker.'
  }
};

export function initHero() {
  const cmdEl = document.getElementById('term-cmd');
  const resEl = document.getElementById('term-res');
  const svg = document.querySelector('.build-graph__svg');

  if (!cmdEl || !resEl || !svg) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = svg.querySelectorAll('.graph-node');
  const edges = svg.querySelectorAll('.graph-edge');

  let typingTimer = null;
  let bootTimer = null;
  let bootSeqIdx = 0;

  let isLocked = false;
  let lockedNodeId = null;
  let hoverTimeout = null;

  // Fix edge draw animation: stamp the exact SVG path length on each edge so the
  // CSS animation (stroke-dasharray / stroke-dashoffset) uses a precise value
  // instead of the hard-coded fallback.  Without this, any edge longer than 200
  // SVG units (many of them in the 560×400 viewBox) renders only partially.
  svg.querySelectorAll('.graph-edge.animated').forEach(edge => {
    const len = Math.ceil(edge.getTotalLength());
    edge.style.setProperty('--edge-len', `${len}`);
    // Re-stamp the inline properties so the browser re-reads the updated custom prop
    edge.style.strokeDasharray  = len;
    edge.style.strokeDashoffset = len;
  });

  const cursor = document.createElement('span');
  cursor.className = 'terminal__cursor';
  cursor.setAttribute('aria-hidden', 'true');

  function cancelTyping() {
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
  }

  function typeText(el, fullText, speed, onDone) {
    if (prefersReduced) {
      el.textContent = fullText;
      el.appendChild(cursor);
      onDone();
      return;
    }

    let charIdx = 0;
    el.textContent = '';
    el.appendChild(cursor);

    function nextChar() {
      if (charIdx >= fullText.length) {
        onDone();
        return;
      }
      el.textContent = fullText.slice(0, charIdx + 1);
      el.appendChild(cursor);
      charIdx++;
      typingTimer = setTimeout(nextChar, speed);
    }
    nextChar();
  }

  function displayTerminalContent(cmdText, resText) {
    cancelTyping();
    cmdEl.textContent = '';
    resEl.textContent = '';
    cmdEl.appendChild(cursor);

    typeText(cmdEl, cmdText, 20, () => {
      typingTimer = setTimeout(() => {
        typeText(resEl, resText, 10, () => {
          resEl.appendChild(cursor);
        });
      }, 100);
    });
  }

  function stopBootSequence() {
    if (bootTimer) {
      clearTimeout(bootTimer);
      bootTimer = null;
    }
    cancelTyping();
  }

  function startBootSequence() {
    stopBootSequence();
    if (isLocked) return;

    function playNext() {
      const entry = BOOT_SEQUENCE[bootSeqIdx];
      cmdEl.textContent = '';
      resEl.textContent = '';
      cmdEl.appendChild(cursor);

      typeText(cmdEl, entry.cmd, 35, () => {
        bootTimer = setTimeout(() => {
          typeText(resEl, entry.res, 18, () => {
            bootSeqIdx = (bootSeqIdx + 1) % BOOT_SEQUENCE.length;
            bootTimer = setTimeout(playNext, 3000);
          });
        }, 500);
      });
    }

    playNext();
  }

  function updateHighlighting(activeId) {
    if (!activeId) {
      nodes.forEach(n => n.classList.remove('faded', 'highlighted', 'active'));
      edges.forEach(e => e.classList.remove('faded', 'highlighted'));
      return;
    }

    const connectedIds = new Set([activeId]);

    // Find all edges sharing a relationship with the active node
    edges.forEach(edge => {
      const from = edge.getAttribute('data-from');
      const to = edge.getAttribute('data-to');
      if (from === activeId || to === activeId) {
        edge.classList.add('highlighted');
        edge.classList.remove('faded');
        if (from) connectedIds.add(from);
        if (to) connectedIds.add(to);
      } else {
        edge.classList.add('faded');
        edge.classList.remove('highlighted');
      }
    });

    // Highlight all related nodes and fade out the rest
    nodes.forEach(node => {
      const nodeId = node.getAttribute('data-node-id');
      if (connectedIds.has(nodeId)) {
        node.classList.add('highlighted');
        node.classList.remove('faded');
        if (nodeId === activeId) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      } else {
        node.classList.add('faded');
        node.classList.remove('highlighted', 'active');
      }
    });
  }

  function resetSelection() {
    isLocked = false;
    lockedNodeId = null;
    updateHighlighting(null);
    startBootSequence();
  }

  // Register interactive graph behaviors
  nodes.forEach(node => {
    const nodeId = node.getAttribute('data-node-id');

    node.addEventListener('mouseenter', () => {
      if (isLocked) return;

      if (hoverTimeout) clearTimeout(hoverTimeout);
      stopBootSequence();

      // 250ms Hover Delay before updating terminal
      hoverTimeout = setTimeout(() => {
        updateHighlighting(nodeId);
        const data = NODE_TERMINAL_DATA[nodeId];
        if (data) {
          displayTerminalContent(data.cmd, data.res);
        }
      }, 250);
    });

    node.addEventListener('mouseleave', () => {
      if (isLocked) return;

      if (hoverTimeout) clearTimeout(hoverTimeout);

      // Restore boot sequence on mouse leave
      hoverTimeout = setTimeout(() => {
        updateHighlighting(null);
        startBootSequence();
      }, 150);
    });

    node.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent background click handler from firing

      if (nodeId === 'center') {
        resetSelection();
      } else if (isLocked && lockedNodeId === nodeId) {
        // Toggle lock off if clicking the same node again
        resetSelection();
      } else {
        // Lock this node persistently
        isLocked = true;
        lockedNodeId = nodeId;
        stopBootSequence();
        updateHighlighting(nodeId);
        const data = NODE_TERMINAL_DATA[nodeId];
        if (data) {
          displayTerminalContent(data.cmd, data.res);
        }
      }
    });
  });

  // Background clicks clear the selection
  svg.addEventListener('click', (e) => {
    const nodeEl = e.target.closest('.graph-node');
    if (!nodeEl && isLocked) {
      resetSelection();
    }
  });

  // Initial sequence boot
  startBootSequence();
}
