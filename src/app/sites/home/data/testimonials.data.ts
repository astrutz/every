import { Testimonial } from '../types/testimonial.type';

export const testimonials: Testimonial[] = [
  {
    name: `Daniel Gröper-Sajber`,
    position: $localize`Teamlead CoreMedia - babiel`,
    text: $localize`"Alex is a person who sets very high standards for himself. Software architecture and code quality are accordingly exemplary"`,
    avatar: `assets/testimonials/daniel.webp`,
  },
  // {
  //   name: $localize`Philipp Müller`,
  //   position: $localize`Product Owner - Deutsche Bundesbank`,
  //   text: $localize`"todo"`,
  //   avatar: `assets/testimonials/philipp.webp`,
  // },
  {
    name: `Georgi Yanev`,
    position: $localize`Senior Fullstack Engineer - babiel`,
    text: $localize`"We had just started developing a new system using Angular when Alex joined our team. In no time, he familiarized himself with the system and began contributing to its further development, bringing in numerous ideas and improvements. Alex doesn’t just write code; he anticipates future needs. Everyone wants Alex on their team!"`,
    // text: $localize`"Wir hatten gerade mit der Entwicklung eines neuen Systems mit Angular begonnen, als Alex unserem Team beitrat. In kürzester Zeit arbeitete er sich in das System ein und begann es weiterzuentwickeln, wobei er viele Ideen und Verbesserungen einbrachte. Er programmiert nicht nur, er denkt voraus. Jeder möchte Alex in seinem Team haben."`,
    avatar: `assets/testimonials/georgi.webp`,
  },
];
