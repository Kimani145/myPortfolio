import '../styles/sections.css';

// All five entries now link to verified Credly transcript URLs.
// Order: newest-first per Credly transcript.
const CERTS = [
  {
    id:        'ibm-python',
    name:      'Python for Data Science, AI & Development',
    issuer:    'IBM',
    iconClass: 'cert-row__icon--ibm',
    icon:      'fas fa-database',
    url:       'https://www.credly.com/badges/0569b1fe-7925-4771-bc32-cdd7ffb64e00/academic_transcript',
    urlLabel:  'Verify on Credly ↗'
  },
  {
    id:        'ibm-ai',
    name:      'Artificial Intelligence Fundamentals',
    issuer:    'IBM SkillsBuild',
    iconClass: 'cert-row__icon--ibm',
    icon:      'fas fa-brain',
    url:       'https://www.credly.com/badges/e29b420c-314d-41bf-a6c2-b0e7374b98a1/academic_transcript',
    urlLabel:  'Verify on Credly ↗'
  },
  {
    id:        'cisco-network-technician',
    name:      'Network Technician Career Path',
    issuer:    'Cisco Networking Academy',
    iconClass: 'cert-row__icon--cisco',
    icon:      'fas fa-network-wired',
    url:       'https://www.credly.com/badges/725dcf4c-1ec5-41f4-8946-fa7f570465f3/academic_transcript',
    urlLabel:  'Verify on Credly ↗'
  },
  {
    id:        'cisco-learnathon',
    name:      'Networking Academy Learn-A-Thon',
    issuer:    'Cisco Networking Academy',
    iconClass: 'cert-row__icon--cisco',
    icon:      'fas fa-trophy',
    url:       'https://www.credly.com/badges/8933d3c7-c1a2-4e24-bdc8-6bd8c8fb29f6/academic_transcript',
    urlLabel:  'Verify on Credly ↗'
  },
  {
    id:        'cisco-learnathon-2026',
    name:      'Cisco Networking Academy Learn-A-Thon 2026',
    issuer:    'Cisco Networking Academy',
    iconClass: 'cert-row__icon--cisco',
    icon:      'fas fa-medal',
    url:       'https://www.credly.com/badges/ad669e1d-b447-449b-8f52-3cacf81cf00b/academic_transcript',
    urlLabel:  'Verify on Credly ↗'
  }
];

function renderCertRow(c) {
  // All rows are now links — no fallback div needed
  return `
    <a
      href="${c.url}"
      target="_blank"
      rel="noopener noreferrer"
      class="cert-row"
      id="${c.id}"
      aria-label="${c.name} — ${c.issuer}"
    >
      <div class="cert-row__icon ${c.iconClass}" aria-hidden="true">
        <i class="${c.icon}"></i>
      </div>
      <div class="cert-row__body">
        <div class="cert-row__name">${c.name}</div>
        <div class="cert-row__issuer">${c.issuer}</div>
      </div>
      <div class="cert-row__action">${c.urlLabel}</div>
    </a>
  `;
}

export function Certifications() {
  return `
    <section id="certifications" class="section certifications" aria-labelledby="certs-heading">
      <div class="section-inner">
        <p class="section-label">Credentials</p>
        <h2 class="section-title" id="certs-heading">Certifications</h2>
        <div class="cert-ledger fade-up" role="list" aria-label="Certifications list">
          ${CERTS.map(renderCertRow).join('')}
        </div>
      </div>
    </section>
  `;
}
