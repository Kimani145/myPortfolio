export function Skills() {
  return `
    <section id="skills" class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 section-title">
          My <span class="text-purple-600 dark:text-purple-400">Skills</span>
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Skill Card 1 -->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-blue-500">
              <i class="fab fa-html5"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">HTML5</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-blue-500 rounded-full" style="width: 90%"></div>
            </div>
          </div>

          <!-- Skill Card 2 -->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-blue-400">
              <i class="fab fa-css3-alt"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">CSS3</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-blue-400 rounded-full" style="width: 85%"></div>
            </div>
          </div>


          <!-- Skill Card 3 -->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-yellow-500">
              <i class="fab fa-js-square"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">JavaScript</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-yellow-500 rounded-full" style="width: 80%"></div>
            </div>
          </div>

          <!-- Skill Card 4 -->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-green-500">
              <i class="fab fa-python"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">Python</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-green-500 rounded-full" style="width: 75%"></div>
            </div>
          </div>

          <!-- Skill Card 5 -->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-purple-500">
              <i class="fab fa-react"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">React</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-purple-500 rounded-full" style="width: 70%"></div>
            </div>
          </div>

          <!-- Skill Card 6 -->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"> 
          <div class="text-4xl text-center mb-4 text-blue-600">
              <i class="fab fa-js-square"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">TypeScript</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-blue-600 rounded-full" style="width: 65%"></div>
            </div>
          </div> 

          <!-- Skill Card 7 Git-->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-orange-500"> 
              <i class="fab fa-git-alt"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">Git</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-orange-500 rounded-full" style="width: 80%"></div>
            </div>
          </div>

          <!-- Skill Card 8 MySQL-->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-blue-700">
              <i class="fas fa-database"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">MySQL</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-blue-700 rounded-full" style="width: 70%"></div>
            </div>
          </div>

          <!-- Skill Card 9 MongoDB-->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-green-600">
              <i class="fas fa-leaf"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">MongoDB</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-green-600 rounded-full" style="width: 60%"></div>
            </div>
          </div>

          <!-- Skill Card 10 Java-->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-orange-600">
              <i class="fab fa-java"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">Java</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-orange-600 rounded-full" style="width: 65%"></div>
            </div>
          </div>

          <!-- Skill Card 11 Firebase-->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-yellow-600">
              <i class="fas fa-fire"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">Firebase</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-yellow-600 rounded-full" style="width: 55%"></div>
            </div>
          </div>

          <!-- Skill Card 12 AI-->
          <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl text-center mb-4 text-red-500">
              <i class="fas fa-robot"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">AI & ML</h3>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-full bg-red-500 rounded-full" style="width: 50%"></div>
            </div>
          </div>
        <!-- Add more skills following the same pattern -->
        </div>
      </div>
    </section>
  `;
}