import { Injectable } from '@angular/core';
import { Work } from '../types/work.type';
import { Testimonial } from '../types/testimonial.type';
import { Experience } from '../types/experience.type';
import { Social } from '../types/social.type';
import { Skill } from '../types/skill.type';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly _skills: Skill[];
  private readonly _experiences: Experience[];
  private readonly _works: Work[];
  private readonly _testimonials: Testimonial[];
  private readonly _socials: Social[];

  constructor() {
    this._skills = skills;
    this._experiences = experiences;
    this._works = works;
    this._testimonials = testimonials;
    this._socials = socials;
  }

  public get skills(): Skill[] {
    return this._skills;
  }

  public get experiences(): Experience[] {
    return this._experiences;
  }

  public get works(): Work[] {
    return this._works;
  }

  public get testimonials(): Testimonial[] {
    return this._testimonials;
  }

  public get socials(): Social[] {
    return this._socials;
  }
}

const skills: Skill[] = [
  {
    name: 'Javascript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Typescript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Angular',
    href: 'https://angular.io/',
  },
  {
    name: 'Vue',
    href: 'https://vuejs.org/',
  },
  // todo: add more skills and add them to xing and linkedin accordingly
];

const experiences: Experience[] = [
  {
    title: 'Full Stack Engineer',
    company: 'babiel',
    href: 'https://www.babiel.com',
    tasks: [
      'Relaunch and implementation of an Angular based web app for display of publications and statistics.',
      'Worked with a variety of technologies, including Angular, Typescript, TailwindCSS, EveryLayout, GraphQL, Compodoc, Jest and others.',
      'Acted as mentor, foreman and technical frontend lead.',
    ],
    duration: 'Jan 2023 - Present',
  },
  {
    title: 'Web Developer (Working Student)',
    company: 'appsoluts',
    href: 'https://appsoluts.de',
    tasks: ['todo'],
    duration: 'Apr 2022 - Dec 2022',
  },
  // todo: add experiences
];

const works: Work[] = [
  {
    title: 'Digitale Publikationen der Bundesbank',
    description:
      'A modern platform for searching and reading digital publications of the German Federal Bank. This page includes a reactive read progress indication, as well as multiple navigations and an excellent accessibility and performance.',
    href: 'https://www.publikationen.bundesbank.de',
    preview: '/assets/works/digipub.png',
    technologies: ['Angular', 'todo'],
  },
  // todo: more
];

const testimonials: Testimonial[] = [
  {
    name: 'Daniel Gröper-Sajber',
    position: 'Teamlead CoreMedia - babiel',
    text: '"Alex is a person who sets very high standards for himself. Software architecture and code quality are accordingly exemplary"',
    avatar: 'assets/testimonials/daniel.webp',
  },
  {
    name: 'Philipp Müller',
    position: 'Product Owner - Deutsche Bundesbank',
    text: '"todo todo todo"',
    avatar: 'assets/testimonials/philipp.webp',
  },
  {
    name: 'Georgi Yanev',
    position: 'Senior Fullstack Engineer - babiel',
    text: '"Wir hatten gerade mit der Entwicklung eines neuen Systems mit Angular begonnen, als Alex unserem Team beitrat. In kürzester Zeit arbeitete er sich in das System ein und begann es weiterzuentwickeln, wobei er viele Ideen und Verbesserungen einbrachte. Er programmiert nicht nur, er denkt voraus. Jeder möchte Alex in seinem Team haben."',
    avatar: 'assets/testimonials/georgi.webp',
  },
];

const socials: Social[] = [
  {
    icon: 'lucideGithub',
    href: 'https://github.com/astrutz',
  },
  {
    icon: 'lucideLinkedin',
    href: 'https://de.linkedin.com/in/alexander-strutz-36a799230',
  },
  {
    icon: 'lucideXing',
    href: 'todo',
  },
  {
    icon: 'lucideInstagram',
    href: 'todo',
  },
  // todo: add xing logo and links
];
