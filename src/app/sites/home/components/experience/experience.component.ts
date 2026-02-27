import { Component, inject, LOCALE_ID } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  Colorscheme,
  ColorschemeService,
} from '../../../../services/colorscheme/colorscheme.service';
import { TagComponent } from '../../../../components/tag/tag.component';
import { StoreService } from '../../services/store.service';
import { Experience } from '../../types/experience.type';

/**
 * Displays the last jobs in a list with images
 */
@Component({
  selector: 'every-experience',
  imports: [NgOptimizedImage, TagComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly #activeLocale: string = inject(LOCALE_ID);
  readonly #colorSchemeService: ColorschemeService = inject(ColorschemeService);
  readonly #store: StoreService = inject(StoreService);

  protected get experiences(): Experience[] {
    return this.#store.experiences;
  }

  protected getDuration(experience: Experience): string {
    const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const startDateFormatted = experience.started.toLocaleString(this.#activeLocale, dateOptions);
    const endDateFormatted =
      experience.ended?.toLocaleString(this.#activeLocale, dateOptions) ?? $localize`current`;
    return `${startDateFormatted} - ${endDateFormatted}`;
  }

  protected get logoColor(): Colorscheme {
    return this.#colorSchemeService.colorscheme === Colorscheme.light
      ? Colorscheme.dark
      : Colorscheme.light;
  }

  protected getLogoPath(company: string): string {
    return `assets/logos/${company}_${this.logoColor}.svg`;
  }
}
