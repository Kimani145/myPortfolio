export function Certifications() {
  return `
    <section id="certifications" class="py-20 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 section-title">
          My <span class="text-purple-600 dark:text-purple-400">Certifications</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Certification Card 1 -->
          <a href="https://www.credly.com/badges/e29b420c-314d-41bf-a6c2-b0e7374b98a1/linked_in_profile" target="_blank" rel="noopener noreferrer" class="certification-card bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <img src="/images/AI-certificate.png" alt="Certificate Image" class="mx-auto mb-4">
            <div class="text-4xl text-center mb-4 text-blue-500">
              <i class="fas fa-award"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">Artificial Intelligence Fundamentals</h3>
            <p class="text-center text-gray-600 dark:text-gray-400 mt-2">Issued by IBM SkillsBuild</p>
          </a>

          <!-- Certification Card 2 -->
          <a href="https://www.coursera.org/account/accomplishments/verify/6CKSASMGQDUR" target="_blank" rel="noopener noreferrer" class="certification-card bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <img src="/images/Python-certificate.png" alt="Certificate Image" class="mx-auto mb-4">
            <div class="text-4xl text-center mb-4 text-green-500">
              <i class="fas fa-award"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">Python for Data Science, AI & Development</h3>
            <p class="text-center text-gray-600 dark:text-gray-400 mt-2">Issued by IBM</p>
          </a>

          <!-- Certification Card 3 -->
          <div class="certification-card bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <img src="/images/content-certification.jpg" alt="Certificate Image" class="mx-auto mb-4">
            <div class="text-4xl text-center mb-4 text-purple-500">
              <i class="fas fa-award"></i>
            </div>
            <h3 class="text-xl font-semibold text-center">Content Creation Class</h3>
            <p class="text-center text-gray-600 dark:text-gray-400 mt-2"><a href = "https://kenya.dotrust.org/" target="_blank" rel="noopener noreferrer">Issued by <br> Digital Opportunity Trust (DOT) Kenya
            </a></p>
          </div>
        </div>
      </div>
    </section>
  `;
}
