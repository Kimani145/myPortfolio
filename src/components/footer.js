export function Footer() {
  return `
    <footer class="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-gray-600 dark:text-gray-400">
              © ${new Date().getFullYear()} Joseph Kimani. All rights reserved.
            </p>
          </div>
          <div class="flex space-x-6">
            <a href="https://github.com/Kimani145" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/joseph-kimani-kim145" target="_blank" class="text-gray-500 hover:text-blue-600 transition">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://x.com/Kim25031052kim" target="_blank" class="text-gray-500 hover:text-black dark:hover:text-white transition">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}