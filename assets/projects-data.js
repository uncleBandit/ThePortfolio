const accentStyles = {
  sky: {
    category: 'bg-sky-500/10 border border-sky-500/20 text-sky-400',
  },
  orange: {
    category: 'bg-orange-500/10 border border-orange-500/20 text-orange-400',
  },
  purple: {
    category: 'bg-purple-500/10 border border-purple-500/20 text-purple-400',
  },
  pink: {
    category: 'bg-pink-500/10 border border-pink-500/20 text-pink-400',
  },
  yellow: {
    status: 'bg-yellow-500',
  },
  green: {
    status: 'bg-green-500',
  },
};

const portfolioProjects = [
  {
    id: 'holidayhub',
    category: 'Travel-Tech',
    categoryAccent: 'sky',
    status: 'Live',
    statusAccent: 'green',
    title: 'HolidayHub',
    description: 'Multi-destination booking engine optimized for speed and conversion through simplified travel workflows.',
    badges: ['LARAVEL', 'FIREBASE', 'VUE.JS'],
    primaryAction: { label: 'Live Demo', url: 'https://holidayhub.unclecanvas.com/', style: 'bg-sky-500 hover:bg-sky-400', target: '_blank' },
    caseStudyAction: { label: 'Case Study', url: 'holidayhub.html', style: 'border-slate-700 hover:bg-slate-800', target: '_self' },
    featured: true,
  },
  {
    id: 'plumrum',
    category: 'Marketplace',
    categoryAccent: 'orange',
    status: 'Live',
    statusAccent: 'green',
    title: 'PlumRum',
    description: 'Integrated e-commerce ecosystem connecting vendors, customers, and delivery partners with real-time order tracking.',
    badges: ['MYSQL', 'ECOSYSTEM', 'DASHBOARDS'],
    primaryAction: { label: 'Live Demo', url: 'https://plumrum.unclecanvas.com/', style: 'bg-orange-500 hover:bg-orange-400', target: '_blank' },
    caseStudyAction: { label: 'Case Study', url: 'plumrum.html', style: 'border-slate-700 hover:bg-slate-800', target: '_self' },
    featured: true,
  },
  {
    id: 'theeshop-api',
    category: 'Infrastructure',
    categoryAccent: 'purple',
    status: 'Open Source',
    statusAccent: 'purple',
    title: 'The Eshop API',
    description: 'Modular API architecture engineered for high availability, low latency, and easy integration across multi-tenant app ecosystems.',
    badges: ['DOCKER', 'RESTFUL', 'PHP 8.x'],
    primaryAction: { label: 'GitHub Repo', url: 'https://github.com/uncleBandit/LaravelApi', style: 'bg-slate-800 hover:bg-slate-700', target: '_blank' },
    caseStudyAction: { label: 'Case Study', url: 'theeshopapi/theEshop_api.html', style: 'border-slate-700 hover:bg-slate-800', target: '_self' },
    featured: true,
  },
  {
    id: 'gymbro',
    category: 'Wellness',
    categoryAccent: 'pink',
    status: 'In Development',
    statusAccent: 'yellow',
    title: 'GymBro',
    description: 'Modern fitness assistant that designs routines based on biometric inputs while keeping form and safety top of mind.',
    badges: ['KOTLIN', 'JETPACK', 'FIREBASE'],
    primaryAction: { label: 'Live Demo', url: '#', style: 'bg-slate-800 hover:bg-slate-700', target: '_self' },
    caseStudyAction: { label: 'Case Study', url: '#', style: 'border-slate-700 hover:bg-slate-800', target: '_self' },
    featured: false,
  }
];

function renderProjectCards(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const projects = options.onlyFeatured
    ? portfolioProjects.filter((project) => project.featured)
    : portfolioProjects;

  container.innerHTML = projects
    .map((project, index) => {
      const delay = project.featured ? index * 100 : index * 50;
      const categoryClasses = accentStyles[project.categoryAccent]?.category || 'bg-slate-700/10 border border-slate-700 text-slate-300';
      const statusClasses = accentStyles[project.statusAccent]?.status || 'bg-slate-500';
      return `
        <article class="project-card bg-slate-900 p-8 rounded-3xl border border-slate-800 transition-all reveal" style="transition-delay: ${delay}ms;">
          <div class="flex justify-between mb-6">
            <span class="px-3 py-1 rounded-full ${categoryClasses} text-xs font-bold uppercase tracking-widest">${project.category}</span>
            <div class="flex gap-2 items-center">
              <div class="w-2 h-2 rounded-full ${statusClasses} animate-pulse"></div>
              <span class="text-[10px] font-bold text-slate-500 uppercase">${project.status}</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4">${project.title}</h3>
          <p class="text-slate-400 text-sm mb-6 leading-relaxed">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-8">
            ${project.badges.map((badge) => `<span class="text-[10px] font-bold px-2 py-1 bg-slate-800 rounded">${badge}</span>`).join('')}
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="${project.primaryAction.url}" target="${project.primaryAction.target}" class="flex-1 text-center py-3 rounded-xl ${project.primaryAction.style} text-white font-bold text-sm transition">${project.primaryAction.label}</a>
            <a href="${project.caseStudyAction.url}" target="${project.caseStudyAction.target}" class="flex-1 text-center py-3 rounded-xl border ${project.caseStudyAction.style} text-sm transition">${project.caseStudyAction.label}</a>
          </div>
        </article>
      `;
    })
    .join('');

  container.querySelectorAll('.reveal').forEach((card) => {
    requestAnimationFrame(() => card.classList.add('show'));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderProjectCards('projectsGrid', { onlyFeatured: true });
  renderProjectCards('allProjectsGrid', { onlyFeatured: false });
});
