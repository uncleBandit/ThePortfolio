const productionProjects = [
  {
    id: 'jennim-travel',
    title: 'Jennim Travel',
    description: 'Full-scale travel booking engine built for the Kenyan safari market. Engineered with SEO-first architecture and dynamic package management.',
    liveUrl: 'https://jennimkenya.com',
    caseStudyUrl: 'jennim-travel.html',
    liveLabel: 'Explore Live Site',
    caseStudyLabel: 'View Case Study',
    impact: 'Automated SEO Indexing',
    stack: 'Next.js 15, SSR, JSON-LD, Laravel(PHP 8.x),MySQL',
    accent: 'sky',
  },
  {
    id: 'pitah-mzalendo',
    title: 'Pitah Mzalendo',
    description: 'A digital identity platform focused on high-performance content delivery. Implemented custom analytics and secure lead capture systems.',
    liveUrl: 'https://pitahmzalendo.com',
    caseStudyUrl: 'pitah-mzalendo.html',
    liveLabel: 'Explore Live Site',
    caseStudyLabel: 'View Case Study',
    impact: 'Optimized Core Web Vitals',
    stack: 'Next.js 15, SSR, Tailwind CSS, Laravel(PHP 8.x), MySQL',
    accent: 'orange',
  },
  {
    id: 'hyssop-lms',
    title: 'Hyssop LMS',
    description: 'Enterprise-grade Loan Management System for the East African market. Features a modular DDD architecture covering investor funds, borrower workflows, collateral tracking, CRB integration, and immutable ledger accounting.',
    liveUrl: 'https://investment.hyssop.co.ke/',
    caseStudyUrl: 'hyssop-lms.html',
    liveLabel: 'Explore Live Site',
    caseStudyLabel: 'View Case Study',
    impact: 'Full Financial Audit Trail',
    stack: 'Next.js 15, Laravel (PHP 8.x), PostgreSQL, Redis, JWT/OAuth2',
    accent: 'emerald',
  },
];

function renderProductionProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productionProjects
    .map((project) => {
      const accentBg = project.accent === 'orange'
    ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400'
    : project.accent === 'emerald'
    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
    : 'bg-sky-500/10 border border-sky-500/20 text-sky-400';

    const hoverBorderClass = project.accent === 'orange'
    ? 'hover:border-orange-500/50'
    : project.accent === 'emerald'
    ? 'hover:border-emerald-500/50'
    : 'hover:border-sky-500/50';

      return `
        <div class="group relative bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden ${hoverBorderClass} transition-all reveal">
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <div class="px-4 py-1 rounded-full ${accentBg} font-black uppercase tracking-widest text-[10px]">Live Production</div>
              <div class="flex gap-2">
                <span class="text-xs text-slate-500 italic font-medium">99+ Lighthouse Score</span>
              </div>
            </div>
            <h4 class="text-3xl font-bold mb-2">${project.title}</h4>
            <p class="text-slate-400 mb-6">${project.description}</p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                <div class="text-[10px] text-slate-500 uppercase font-bold mb-1">Impact</div>
                <div class="text-sm font-semibold">${project.impact}</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                <div class="text-[10px] text-slate-500 uppercase font-bold mb-1">Stack</div>
                <div class="text-sm font-semibold">${project.stack}</div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="${project.liveUrl}" target="_blank" class="flex-1 text-center py-3 rounded-xl bg-sky-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-sky-400 transition-colors">
                ${project.liveLabel}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="${project.caseStudyUrl}" class="flex-1 text-center py-3 rounded-xl border border-slate-700 text-sm font-bold hover:bg-slate-800 transition-colors">
                ${project.caseStudyLabel}
              </a>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  container.querySelectorAll('.reveal').forEach((card) => {
    requestAnimationFrame(() => card.classList.add('show'));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderProductionProjects('productionProjectsGrid');
});
