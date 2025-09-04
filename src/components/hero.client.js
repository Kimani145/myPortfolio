export function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const quoteEl = document.getElementById('hero-quote');
  const nameEl = document.getElementById('hero-name');
  const scrollInvite = document.getElementById('scroll-invite');
  const ctaProjects = document.getElementById('cta-projects');
  const previewCard = document.getElementById('preview-card');
  const previewTitle = document.getElementById('preview-title');
  const previewDesc = document.getElementById('preview-desc');
  const previewLink = document.getElementById('preview-link');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  async function loadQuotes() {
    try {
      // Vite serves public/ at root — fetch from /data/quotes.json
      const resp = await fetch('/data/quotes.json', { cache: 'no-cache' });
      if (!resp.ok) throw new Error('no quotes file');
      const data = await resp.json();
      if (!Array.isArray(data)) throw new Error('quotes must be an array');
      return data;
    } catch (err) {
      // fallback quotes
      return [
        "Code never lies, comments sometimes do",
        "Make it work, make it right, make it fast",
        "Programs must be written for people to read, and only incidentally for machines to execute"
      ];
    }
  }

  // Typing effect
  function createTyper(quotes, opts = {}) {
    const { typeSpeed = 40, deleteSpeed = 30, pause = 2500 } = opts;
    let i = Math.floor(Math.random() * quotes.length);
    let charIdx = 0;
    let typing = true;
    let timer = null;

    if (!quoteEl) return { stop: () => {} };

    if (prefersReduced) {
      quoteEl.textContent = '"' + quotes[i] + '"';
      quoteEl.style.opacity = '1';
      return { stop: () => {} };
    }

    quoteEl.classList.add('typing-caret');
    quoteEl.style.opacity = '1';

    function tick() {
      const text = quotes[i] || '';
      if (typing) {
        charIdx++;
        quoteEl.textContent = '"' + text.slice(0, charIdx) + '"';
        if (charIdx >= text.length) {
          typing = false;
          timer = setTimeout(tick, pause);
        } else {
          timer = setTimeout(tick, typeSpeed + Math.random() * 30);
        }
      } else {
        charIdx--;
        quoteEl.textContent = '"' + text.slice(0, charIdx) + '"';
        if (charIdx <= 0) {
          typing = true;
          i = (i + 1) % quotes.length;
          timer = setTimeout(tick, 220);
        } else {
          timer = setTimeout(tick, deleteSpeed + Math.random() * 20);
        }
      }
    }

    tick();

    return {
      stop() { if (timer) clearTimeout(timer); }
    };
  }

  // Minimal morph animator (safe, no external libs)
  function createMorphAnimator(pathEl, shapes, interval = 3500) {
    if (!pathEl || !shapes || shapes.length === 0 || prefersReduced) {
      if (pathEl && shapes && shapes[0]) pathEl.setAttribute('d', shapes[0]);
      return { stop: () => {} };
    }

    let idx = 0;
    let raf = null;
    let timeout = null;

    function setShape(i) {
      pathEl.setAttribute('d', shapes[i]);
      // subtle transform to emphasize change
      pathEl.style.transition = 'transform 800ms ease';
      pathEl.style.transform = `scale(${1 + (Math.sin(i) * 0.01)})`;
      // remove transform after transition
      clearTimeout(timeout);
      timeout = setTimeout(() => pathEl.style.transform = '', 900);
    }

    function loop() {
      idx = (idx + 1) % shapes.length;
      setShape(idx);
      raf = requestAnimationFrame(() => {
        timeout = setTimeout(loop, interval);
      });
    }

    // kickoff
    setShape(0);
    timeout = setTimeout(loop, interval);

    return {
      stop() { if (raf) cancelAnimationFrame(raf); clearTimeout(timeout); }
    };
  }

  // Preview card helpers (simple positioning)
  function showPreviewAt(x, y, title = '', desc = '', href = '#') {
    if (!previewCard) return;
    previewTitle && (previewTitle.textContent = title || 'Project');
    previewDesc && (previewDesc.textContent = desc || '');
    previewLink && (previewLink.href = href);

    previewCard.style.left = `${x}px`;
    previewCard.style.top = `${y}px`;
    previewCard.classList.add('show');
  }

  function hidePreview() {
    previewCard && previewCard.classList.remove('show');
  }

  (async function boot() {
    const quotes = await loadQuotes();
    const typer = createTyper(quotes, { typeSpeed: 36, deleteSpeed: 28, pause: 1500 });

    const shapes = [
      "M421.5,357.5Q402,465,296.5,478.5Q191,492,109,410Q27,328,66.5,221.5Q106,115,212.5,84.5Q319,54,387.5,121Q456,188,421.5,357.5Z",
      "M455.5,333.5Q429,417,329,459.5Q229,502,146.5,432Q64,362,85,238Q106,114,218,87.5Q330,61,402,127Q474,193,455.5,333.5Z",
      "M392,349.5Q374,445,286.5,470Q199,495,120.5,420.5Q42,346.5,74,240.5Q106,134.5,206,96Q306,57.5,374,112Q442,166.5,392,349.5Z"
    ];

    const blobPath = document.getElementById('blob-path');
    const morph = createMorphAnimator(blobPath, shapes);

    // scoped pointer move for parallax (attach to hero only)
    if (!prefersReduced && hero) {
      const handlePointer = (e) => {
        const rect = hero.getBoundingClientRect();
        const cx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const cy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        const tx = cx * 10;
        const ty = cy * 10;
        if (blobPath) blobPath.style.transform = `translate(${tx}px,${ty}px) rotate(${cx * 3}deg)`;
        if (nameEl) nameEl.style.transform = `translate(${-tx * 0.35}px,${-ty * 0.35}px)`;
      };
      hero.addEventListener('pointermove', handlePointer);
      // cleanup not currently exposed but kept scoped to page lifecycle
    }

    // Optional: show preview when hovering project links (if you add data attributes later)
    // Example: document.querySelectorAll('[data-preview]').forEach(el => { ... })

    // leave typer and morph running; no returned cleanup currently
  })();
}