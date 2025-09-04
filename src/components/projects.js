export function Projects() {
  return `
    <section id="projects" class="py-20 px-4 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 section-title">
          My <span class="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- Project Placeholder 1 (uses Netlify preview image) -->
          <div class="project-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-2">
            <a href="https://fitness-tracker-pro-01.netlify.app/" target="_blank" rel="noopener noreferrer" class="block">
              <div class="h-48 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center overflow-hidden">
                <img src="/images/fitness-preview.png" alt="Fitnesstracker Pro preview" class="w-full h-full object-cover">
              </div>
            </a>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Fitnesstracker Pro</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Currently in development (NDA protected)</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">Python</span>
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
          </div>

          <!-- Project Placeholder 2 -->
          <div class="project-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-2">
            <div class="h-48 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 flex items-center justify-center">
              <i class="fas fa-lock text-4xl text-gray-400"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Roomie finder</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Prototype coming soon - currently in development</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm">NLP</span>
                <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>

          <!-- Project Placeholder 3 portfolio-->
          <div class="project-card border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-2">
            <a href="https://josephkimani.dev" target="_blank" rel="noopener noreferrer" class="block">
              <div class="h-48 bg-gradient-to-r from-pink-100 to-yellow-100 dark:from-pink-900/50 dark:to-yellow-900/50 flex items-center justify-center overflow-hidden">
                <img src="/images/portfolio-preview.png" alt="Portfolio preview" class="w-full h-full object-cover">
              </div>
            </a>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">This Portfolio</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">The very portfolio you are viewing right now!</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200 rounded-full text-sm">JavaScript</span>
                <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}