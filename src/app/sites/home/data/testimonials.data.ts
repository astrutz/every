import { Testimonial } from '../types/testimonial.type';

export const testimonials: Testimonial[] = [
  {
    name: `Daniel Gröper-Sajber`,
    position: $localize`Teamlead CoreMedia - babiel`,
    text: $localize`"Alex is a person who sets very high standards for himself. Software architecture and code quality are accordingly exemplary"`,
    avatar: `assets/testimonials/daniel.webp`,
    link: 'https://www.xing.com/profile/Daniel_GroeperSajber',
  },
  {
    name: `Georgi Yanev`,
    position: $localize`Senior Fullstack Engineer - babiel`,
    text: $localize`"We had just started developing a new system using Angular when Alex joined our team. In no time, he familiarized himself with the system and began contributing to its further development, bringing in numerous ideas and improvements. Alex doesn’t just write code; he anticipates future needs. Everyone wants Alex on their team!"`,
    avatar: `assets/testimonials/georgi.webp`,
    link: 'https://www.linkedin.com/in/yanevg/',
  },
  {
    name: $localize`Philipp Müller`,
    position: $localize`Product Owner - Deutsche Bundesbank`,
    text: $localize`"You are in good hands! Alex has an eye for detail while keeping the big picture in mind. He is a great person to work with."`,
    avatar: `assets/testimonials/philipp.webp`,
    link: 'https://gravatar.com/mullerphilipp',
  },
];
