import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideInstagram, lucideLinkedin, lucideMapPin } from '@ng-icons/lucide';
import { SocialsComponent } from '../../../../components/socials/socials.component';

@Component({
  selector: 'every-hero',
  standalone: true,
  imports: [NgIcon, SocialsComponent],
  templateUrl: './hero.component.html',
  viewProviders: [
    provideIcons({
      lucideMapPin,
      lucideGithub,
      lucideLinkedin,
      lucideInstagram,
    }),
  ],
})
export class HeroComponent {
  contact = {
    mail: 'hello@alexstrutz.dev',
    links: [
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
    ],
  };
}
