import { Work } from '../types/work.type';

export const works: Work[] = [
  {
    title: 'Digitale Publikationen der Bundesbank',
    description:
      'An intuitive platform for finding and reading digital publications. It includes a simple progress tracker, easy navigation, and is designed with accessibility and performance in mind.',
    href: 'https://publikationen.bundesbank.de',
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
    title: 'Compodoc (contributions)',
    description: 'The missing documentation tool for your Angular, Nest & Stencil application.',
    href: 'https://compodoc.app/',
    preview: '/assets/works/compodoc.webp',
    technologies: [
      'Open Source',
      'Angular',
      'TypeScript',
      'Handlebars',
      'TS-Morph',
      'Collaborative',
      'SCSS',
    ],
  },
  {
    title: 'Grailify',
    description: 'A user-friendly web application for sneaker enthusiasts to find detailed information quickly and efficiently.',
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
    title: 'Basler',
    description:
      'An online store offering a wide range of optical lenses, featuring a comprehensive search and filter system for an easy shopping experience.',
    href: 'https://www.baslerweb.com/',
    preview: '/assets/works/basler.webp',
    technologies: ['React', 'FirstSpirit CMS', 'Java', 'High-Performance', 'SEO'],
  },
  // todo: replace officeclean with amazing map or other projects?
];
