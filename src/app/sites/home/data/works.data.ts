import { Work } from '../types/work.type';

export const works: Work[] = [
  {
    title: $localize`Digitale Publikationen der Bundesbank`,
    description: $localize`An intuitive platform for finding and reading digital publications. It includes a simple progress tracker, easy navigation, and is designed with accessibility and performance in mind.`,
    href: $localize`https://publikationen.bundesbank.de`,
    preview: `/assets/works/digipub.webp`,
    technologies: [
      `Angular`,
      `TypeScript`,
      `NX`,
      `SSR`,
      `EveryLayout`,
      `TailwindCSS`,
      $localize`Accessibility`,
    ],
  },
  {
    title: $localize`Compodoc`,
    description: $localize`The missing documentation tool for your Angular, Nest & Stencil application.`,
    href: $localize`https://compodoc.app/`,
    preview: `/assets/works/compodoc.webp`,
    technologies: [
      $localize`Open Source`,
      `Angular`,
      `TypeScript`,
      `Handlebars`,
      `TS-Morph`,
      $localize`Collaborative`,
      `SCSS`,
    ],
  },
  {
    title: $localize`Grailify`,
    description: $localize`A user-friendly web application for sneaker enthusiasts to find detailed information quickly and efficiently.`,
    href: $localize`https://grailify.com`,
    preview: `/assets/works/grailify.webp`,
    technologies: [
      `Vue.js`,
      `Ruby on Rails`,
      `Gridsome`,
      `Turbolinks`,
      `Server-Side Generation`,
      `SCSS`,
      `SEO`,
    ],
  },
  {
    title: $localize`Basler`,
    description: $localize`An online store offering a wide range of optical lenses, featuring a comprehensive search and filter system for an easy shopping experience.`,
    href: $localize`https://www.baslerweb.com/`,
    preview: `/assets/works/basler.webp`,
    technologies: [`React`, `FirstSpirit CMS`, `Java`, `High-Performance`, `SEO`],
  },
];
