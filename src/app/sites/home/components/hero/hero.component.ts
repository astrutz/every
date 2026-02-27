import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideInstagram, lucideLinkedin, lucideMapPin } from '@ng-icons/lucide';
import { SocialsComponent } from '../../../../components/socials/socials.component';
import { Social } from '../../types/social.type';
import { StoreService } from '../../services/store.service';
import { simpleXing } from '@ng-icons/simple-icons';
import { NgOptimizedImage } from '@angular/common';

/**
 * Displays a hero stage with a large image and an introductory text
 */
@Component({
  selector: 'every-hero',
  imports: [NgIcon, SocialsComponent, NgOptimizedImage],
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
  styleUrl: 'hero.component.scss',
})
export class HeroComponent {
  readonly #store = inject(StoreService);

  protected get socials(): Social[] {
    return this.#store.socials;
  }
}
