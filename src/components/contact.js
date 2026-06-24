// contact.js — v2
// Note: form submission is handled centrally in index.js (single listener, no duplicate).
// The inline <script> from the old version is removed to prevent double-submit.

export function Contact() {
  return `
    <section id="contact" class="section contact" aria-labelledby="contact-heading">
      <div class="section-inner">
        <div class="contact__grid">

          <!-- Left: info + socials -->
          <div class="contact__info">
            <p class="section-label">Say Hello</p>
            <h2 class="section-title" id="contact-heading">Let's Connect</h2>
            <p class="contact__tagline">
              Open to collaborations, internships, and freelance work.
              Reach out via the form or directly on any of the channels below.
            </p>

            <div class="contact__detail-list">
              <div class="contact__detail">
                <i class="fas fa-envelope" aria-hidden="true"></i>
                <a href="mailto:kimnyoski145@gmail.com">kimnyoski145@gmail.com</a>
              </div>
              <div class="contact__detail">
                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            <div class="contact__socials">
              <div class="contact__socials-label">Socials</div>
              <a href="https://github.com/Kimani145" target="_blank" rel="noopener noreferrer" class="social-link" id="social-github">
                <i class="fab fa-github" aria-hidden="true"></i>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/joseph-kimani-kim145/" target="_blank" rel="noopener noreferrer" class="social-link" id="social-linkedin">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
                LinkedIn
              </a>
              <a href="https://x.com/Kim25031052kim" target="_blank" rel="noopener noreferrer" class="social-link" id="social-twitter">
                <i class="fab fa-twitter" aria-hidden="true"></i>
                X (Twitter)
              </a>
            </div>
          </div>

          <!-- Right: contact form -->
          <div>
            <form id="contact-form" class="contact-form" novalidate aria-label="Contact form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="input-name">Your Name</label>
                  <input
                    id="input-name"
                    type="text"
                    name="from_name"
                    class="form-input"
                    placeholder="Wanjiku Mwangi"
                    required
                    autocomplete="name"
                  >
                </div>
                <div class="form-group">
                  <label class="form-label" for="input-email">Your Email</label>
                  <input
                    id="input-email"
                    type="email"
                    name="reply_to"
                    class="form-input"
                    placeholder="wanjiku@example.com"
                    required
                    autocomplete="email"
                  >
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="input-subject">Subject</label>
                <input
                  id="input-subject"
                  type="text"
                  name="subject"
                  class="form-input"
                  placeholder="Collaboration Inquiry"
                >
              </div>

              <div class="form-group">
                <label class="form-label" for="input-message">Message</label>
                <textarea
                  id="input-message"
                  name="message"
                  class="form-textarea"
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                id="form-submit-btn"
                class="btn-primary"
                style="width:100%; justify-content:center;"
              >
                Send Message
              </button>

              <div id="form-status" class="form-status hidden" role="status" aria-live="polite"></div>
            </form>
          </div>

        </div>
      </div>
    </section>
  `;
}
