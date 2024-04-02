import { Component } from '@angular/core';
import {
  lucideCopy,
  lucideGithub,
  lucideInstagram,
  lucideLinkedin,
  lucideMail,
  lucideX,
} from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'every-contact',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './contact.component.html',
  viewProviders: [
    provideIcons({
      lucideGithub,
      lucideLinkedin,
      lucideInstagram,
      lucideCopy,
      lucideMail,
    }),
  ],
})
export class ContactComponent {
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

  copyTextToClipboard(text: string) {
    if (navigator && 'clipboard' in navigator) {
      navigator.clipboard.writeText(text);
    }
  }
}
