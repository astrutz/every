import { Component } from '@angular/core';
import {
  lucideCopy,
  lucideGithub,
  lucideInstagram,
  lucideLinkedin,
  lucideMail,
} from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { SocialsComponent } from '../../../../components/socials/socials.component';
import { StoreService } from '../../services/store.service';
import { Social } from '../../types/social.type';

@Component({
  selector: 'every-contact',
  standalone: true,
  imports: [NgIcon, SocialsComponent],
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
  showCopyChip = false;

  mail = 'hello@alexstrutz.dev';

  constructor(private readonly _store: StoreService) {}

  protected get socials(): Social[] {
    return this._store.socials;
  }

  copyTextToClipboard(text: string) {
    if (navigator && 'clipboard' in navigator) {
      navigator.clipboard.writeText(text);
      this.showCopyChip = true;
    }
  }
}
