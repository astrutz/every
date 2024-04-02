import { Work } from '../types/work.type';

export const works: Work[] = [
  {
    title: 'Digitale Publikationen der Bundesbank',
    description:
      'A modern platform for searching and reading digital publications of the German Federal Bank. This page includes a reactive read progress indication, as well as multiple navigations and an excellent accessibility and performance.',
    href: 'https://www.publikationen.bundesbank.de',
    preview: '/assets/works/digipub.webp',
    technologies: [
      'Angular',
      'TypeScript',
      'NX',
      'SSR',
      'EveryLayout',
      'TailwindCSS',
      'Accessibility',
    ],
  },
  {
    title: 'Grailify',
    description: 'A high-performant web-application for researching sneaker information.',
    href: 'https://grailify.com',
    preview: '/assets/works/grailify.webp',
    technologies: [
      'Vue.js',
      'Ruby on Rails',
      'Gridsome',
      'Turbolinks',
      'Server-Side Generation',
      'SCSS',
      'SEO',
    ],
  },
  {
    title: 'OfficeClean24',
    description:
      'A fast webpage to book cleaning services. Includes a self-written Markdown parser, which works as a CMS.',
    href: 'https://grailify.com',
    preview: '/assets/works/officeclean.webp',
    technologies: [
      'Vue.js',
      'Markdown to Code',
      'Gridsome',
      'Turbolinks',
      'Server-Side Generation',
      'High-Performance',
      'SEO',
    ],
  },
  {
    title: 'Basler',
    description:
      'A comprehensive shop to buy optical lenses, including an extensive filtering and search backend application.',
    href: 'https://www.baslerweb.com/',
    preview: '/assets/works/basler.webp',
    technologies: ['React', 'FirstSpirit CMS', 'Java', 'High-Performance', 'SEO'],
  },
];
