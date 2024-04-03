import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideInstagram, lucideLinkedin, lucideMapPin } from '@ng-icons/lucide';
import { SocialsComponent } from '../../../../components/socials/socials.component';
import { Social } from '../../types/social.type';
import { StoreService } from '../../services/store.service';
import { simpleXing } from '@ng-icons/simple-icons';

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
      simpleXing,
    }),
  ],
})
export class HeroComponent {
  constructor(private readonly _store: StoreService) {}

  protected get socials(): Social[] {
    return this._store.socials;
  }
}
