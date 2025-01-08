import { Experience } from '../types/experience.type';

export const experiences: Experience[] = [
  {
    title: $localize`Full Stack Engineer`,
    company: $localize`babiel`,
    href: $localize`https://www.babiel.com`,
    tasks: [
      $localize`Spearheaded the successful relaunch of a digital publication and statistics application.`,
      $localize`Demonstrated proficiency in a diverse tech stack, including Angular, Typescript, TailwindCSS, EveryLayout, GraphQL, Compodoc, Jest, among others.      `,
      $localize`Provided leadership as a mentor and technical foreman, guiding the frontend development team.`,
    ],
    started: new Date(`2023-01-01`),
    ended: null,
  },
  {
    title: $localize`Web Developer (Working Student)`,
    company: $localize`appsoluts`,
    href: $localize`https://appsoluts.de`,
    tasks: [
      $localize`Engineered and optimized high-performance web applications for enhanced user experience.`,
      $localize`Fulfilled the role of a full-stack developer, proficient in Vue.js and Ruby on Rails ecosystems.`,
    ],
    started: new Date(`2022-04-01`),
    ended: new Date(`2022-12-31`),
  },
  {
    title: $localize`ECM Developer (Working Student)`,
    company: $localize`able`,
    href: $localize`https://www.able-group.de`,
    tasks: [
      $localize`Developed and deployed standalone web-based plugins to enhance a document management system's functionality.`,
      $localize`Assumed a comprehensive role encompassing requirements engineering, conceptual design, product development, testing, and operations management.`,
      $localize`Collaborated closely with in-house clients to ideate and refine product features, ensuring alignment with business objectives.`,
    ],
    started: new Date(`2020-02-01`),
    ended: new Date(`2022-03-31`),
  },
  {
    title: $localize`Java Developer (Working Student)`,
    company: $localize`kernpunkt`,
    href: $localize`https://www.kernpunkt.de`,
    tasks: [
      $localize`Executed the development of Java-based CMS extensions and web templates, enhancing system capabilities and user interface.`,
      $localize`Played an important role in the operational Scrum transformation process, contributing to the adoption of agile methodologies.`,
    ],
    started: new Date(`2017-08-01`),
    ended: new Date(`2020-01-31`),
  },
];
