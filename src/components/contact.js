export function Contact() {
  return `
    <!-- CONTACT SECTION -->
    <section id="contact" class="py-20 px-8 bg-gray-900 text-gradient">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        
        <!-- LEFT: CONTACT INFO + SOCIALS -->
        <div class="lg:col-span-1 space-y-8">
          <header>
            <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Let’s Connect</h2>
            <p class="text-gray-300 mt-2">
              I’m open to collaborations, internships, and freelance work. Send a message or reach me via socials.
            </p>
          </header>

          <div class="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 space-y-4">
            <div class="flex items-center gap-3">
              <i class="fas fa-envelope text-blue-400"></i>
              <a href="mailto:kimnyoski145@gmail.com" class="hover:underline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">kimnyoski145@gmail.com</a>
            </div>
            <div class="flex items-center gap-3">
              <i class="fas fa-map-marker-alt text-pink-400"></i>
              <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nairobi, Kenya</span>
            </div>
          </div>

          <div class="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
            <h3 class="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Socials</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a href="https://github.com/Kimani145" target="_blank" rel="noopener"
                class="group flex items-center gap-2 rounded-xl border border-gray-700 px-3 py-2 hover:bg-gray-800 transition">
                <i class="fab fa-github"></i>
                <span class="text-sm group-hover:underline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/joseph-kimani-kim145/" target="_blank" rel="noopener"
                class="group flex items-center gap-2 rounded-xl border border-gray-700 px-3 py-2 hover:bg-gray-800 transition">
                <i class="fab fa-linkedin"></i>
                <span class="text-sm group-hover:underline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">LinkedIn</span>
              </a>
              <a href="mailto:kimnyoski145@gmail.com"
                class="group flex items-center gap-2 rounded-xl border border-gray-700 px-3 py-2 hover:bg-gray-800 transition">
                <i class="fas fa-envelope"></i>
                <span class="text-sm group-hover:underline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Email</span>
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT: CONTACT FORM -->
        <div class="lg:col-span-2">
          <form id="contact-form" class="bg-gray-800/60 border border-gray-700 p-8 rounded-2xl shadow-xl space-y-5 max-w-3xl ml-auto">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Name</label>
                <input type="text" name="from_name" required
                  class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-100">
              </div>
              <div>
                <label class="block text-sm mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Email</label>
                <input type="email" name="reply_to" required
                  class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-100">
              </div>
            </div>

            <div>
              <label class="block text-sm mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Subject</label>
              <input type="text" name="subject"
                class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-100"
                placeholder="e.g., Collaboration Inquiry">
            </div>

            <div>
              <label class="block text-sm mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Message</label>
              <textarea name="message" rows="6" required
                class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-100"
                placeholder="Tell me about your project or idea..."></textarea>
            </div>

            <button type="submit"
              class="w-full py-3 font-medium bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-[1.01] hover:shadow-lg transition text-white">
              Send Message
            </button>

            <!-- Status alert -->
            <div id="form-status" class="hidden mt-4 rounded-xl p-3 text-sm border"></div>
          </form>
        </div>
      </div>

      <script type="module">
        import { sendEmailDual } from '../utils/emailService.js';

        const form = document.getElementById('contact-form');
        const statusEl = document.getElementById('form-status');

        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          statusEl.className = "mt-4 rounded-xl p-3 text-sm border border-gray-700 bg-gray-800 text-gray-300";
          statusEl.textContent = "Sending...";
          statusEl.classList.remove('hidden');

          try {
            await sendEmailDual(form);
            statusEl.textContent = "Message sent successfully!";
            statusEl.className = "mt-4 rounded-xl p-3 text-sm border border-green-500 bg-green-500/10 text-green-400";
            form.reset();
          } catch (err) {
            console.error(err);
            statusEl.textContent = "Failed to send. Please try again.";
            statusEl.className = "mt-4 rounded-xl p-3 text-sm border border-red-500 bg-red-500/10 text-red-400";
          }
        });
      </script>
    </section>
  `;
}
