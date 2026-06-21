/**
 * hero.client.js — v2
 * Terminal boot sequence behavior.
 * Replaces quotes.json + old blob-morph + old typewriter completely.
 */

const BOOT_SEQUENCE = [
  {
    cmd:  '$ whoami',
    res:  '> Joseph Kimani Nyoike — full-stack developer, Information Science @ TUK'
  },
  {
    cmd:  '$ status --certifications',
    res:  '> Cisco Networking · IBM AI Fundamentals · IBM Python for Data Science'
  },
  {
    cmd:  '$ status --building',
    res:  '> Roomie Finder — roommate-matching platform for TUK students'
  },
  {
    cmd:  '$ status --uptime',
    res:  '> 1 deployed · 2 in active development'
  }
];

const TYPE_SPEED   = 35;   // ms per character
const PAUSE_AFTER  = 2500; // ms hold after res line finishes
const CLEAR_DELAY  = 300;  // ms pause before typing next command

export function initHero() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // — Graph edge draw animation init (CSS-driven, just ensure classes are set)
  // The SVG edges use CSS animation with animation-delay from inline style.
  // Nothing extra to do here — CSS handles it.

  // — Terminal boot sequence
  const cmdEl = document.getElementById('term-cmd');
  const resEl = document.getElementById('term-res');

  if (!cmdEl || !resEl) return;

  // Reduced motion: render first entry statically, stop there
  if (prefersReduced) {
    const first = BOOT_SEQUENCE[0];
    cmdEl.textContent = first.cmd;
    resEl.textContent = first.res;
    return;
  }

  let seqIdx   = 0;
  let charIdx  = 0;
  let phase    = 'cmd';   // 'cmd' | 'pause-cmd' | 'res' | 'pause-res' | 'clear'
  let timer    = null;

  const cursor = document.createElement('span');
  cursor.className = 'terminal__cursor';
  cursor.setAttribute('aria-hidden', 'true');

  function clearTimer() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  function typeChar(el, fullText, onDone) {
    if (charIdx >= fullText.length) {
      onDone();
      return;
    }
    el.textContent = fullText.slice(0, charIdx + 1);
    el.appendChild(cursor);
    charIdx++;
    timer = setTimeout(() => typeChar(el, fullText, onDone), TYPE_SPEED + Math.random() * 20);
  }

  function tick() {
    const entry = BOOT_SEQUENCE[seqIdx];

    if (phase === 'cmd') {
      charIdx = 0;
      cmdEl.textContent = '';
      resEl.textContent = '';
      resEl.appendChild(cursor);
      typeChar(cmdEl, entry.cmd, () => {
        phase = 'pause-cmd';
        timer = setTimeout(tick, 500);
      });

    } else if (phase === 'pause-cmd') {
      phase = 'res';
      charIdx = 0;
      resEl.textContent = '';
      resEl.appendChild(cursor);
      typeChar(resEl, entry.res, () => {
        phase = 'pause-res';
        timer = setTimeout(tick, PAUSE_AFTER);
      });

    } else if (phase === 'pause-res') {
      phase = 'clear';
      timer = setTimeout(tick, CLEAR_DELAY);

    } else if (phase === 'clear') {
      // Advance to next entry
      seqIdx = (seqIdx + 1) % BOOT_SEQUENCE.length;
      phase  = 'cmd';
      // Brief blink-clear effect
      cmdEl.textContent = '';
      resEl.textContent = '';
      resEl.appendChild(cursor);
      timer = setTimeout(tick, 200);
    }
  }

  // Kickoff
  timer = setTimeout(tick, 800);
}
