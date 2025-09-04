export function Hero() {
  return `
    <section id="hero" class="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-[#0b1220] text-gray-100">
      <div class="text-center max-w-4xl px-4 relative z-10">
        <!-- Greeting + short bio placeholder -->
        <div class="mb-6 text-center">
          <p class="text-sm text-gray-400 uppercase tracking-wider">Hello, I’m</p>
          <h1 id="hero-name" class="text-4xl md:text-6xl font-extrabold mb-2">
            <span class="bg-gradient-to-r from-[#7c4dff] to-[#00d4ff] bg-clip-text text-transparent">Joseph Kimani</span>
          </h1>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            I design and build web applications with clean UI and thoughtful UX. I enjoy tackling back-end challenges and turning ideas into polished products.
          </p>
        </div>
  <!-- Animated quote area -->
  <p id="hero-quote" class="text-lg md:text-xl italic mb-6 opacity-100 text-gray-300" aria-live="polite" aria-atomic="true"></p>

        <!-- CTAs -->
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#projects" id="cta-projects" class="px-6 py-3 bg-gradient-to-r from-[#7c4dff] to-[#00d4ff] rounded-full shadow-md hover:shadow-lg transition">
            View My Work
          </a>
          <a href="#contact" class="px-6 py-3 border border-[#7c4dff]/60 text-[#c8b8ff] rounded-full hover:bg-white/5 transition">
            Contact Me
          </a>
        </div>

        <!-- Scroll invite (keyboard focusable) -->
        <button id="scroll-invite" class="mt-12 inline-flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer focus:outline-none" aria-label="Scroll to projects">
          <svg class="w-9 h-14" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
            <rect x="3" y="2" width="18" height="28" rx="9" stroke="#3b3250" stroke-width="1.5" fill="transparent"/>
            <circle id="mouse-dot" cx="12" cy="10" r="2.5" fill="#bfa6ff"></circle>
          </svg>
          <span id="scroll-text" class="text-sm text-gray-400">Explore ↓</span>
        </button>

        <!-- Projects preview tooltip -->
        <div id="preview-card" class="hidden pointer-events-none absolute z-50 w-80 max-w-[85vw] rounded-lg shadow-2xl bg-[#0f1724] text-gray-200 p-4 transform -translate-x-1/2 ring-1 ring-white/5">
          <strong id="preview-title" class="block mb-1">Project title</strong>
          <p id="preview-desc" class="text-sm text-gray-400 mb-3">Short project description or quick stat.</p>
          <a id="preview-link" href="#projects" class="text-xs font-medium text-[#7c4dff] underline">Open projects</a>
        </div>
      </div>

      <!-- Local styles (keep) -->
      <style>
        /* subtle blob motion fallback for reduced-motion */
        #mouse-dot { animation: mouseDot 1.6s ease-in-out infinite; transform-origin:center; }
        @keyframes mouseDot { 0% { transform: translateY(0); opacity: 1 } 50% { transform: translateY(8px); opacity: .6 } 100% { transform: translateY(0); opacity: 1 } }

        /* typing caret */
        .typing-caret::after {
          content: '';
          display: inline-block;
          width: 2px;
          height: 1.05em;
          background: #bfa6ff;
          margin-left: 6px;
          animation: caret 1s steps(1) infinite;
          vertical-align: text-bottom;
        }
        @keyframes caret { 50% { opacity: 0 } }

        /* preview card show */
        #preview-card { transition: transform 180ms cubic-bezier(.2,.9,.3,1), opacity 180ms ease; opacity: 0; }
        #preview-card.show { opacity: 1; pointer-events: auto; transform: translateY(2px); }

        @media (prefers-reduced-motion: reduce) {
          #mouse-dot, .typing-caret::after { animation: none !important; }
        }
      </style>

      <!-- Behavior moved to a separate module (hero.client.js) -->
    </section>
  `;
}
