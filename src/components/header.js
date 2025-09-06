export function Header() {
  return `
    <header class="fixed w-full bg-gray-900/60 backdrop-blur-sm z-50 py-4 px-8 border-b border-gray-700">
      <nav class="max-w-6xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Joseph Kimani
        </h1>
        <ul class="flex gap-6">
          <li><a href="#skills" class="text-blue-500 hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#projects" class="text-blue-500 hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#contact" class="text-blue-500 hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;
}