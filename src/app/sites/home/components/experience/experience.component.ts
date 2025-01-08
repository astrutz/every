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
  standalone: true,
  imports: [NgOptimizedImage, TagComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  #activeLocale: string = inject(LOCALE_ID);
  #colorSchemeService: ColorschemeService = inject(ColorschemeService);
  #store: StoreService = inject(StoreService);

  /**
   * @returns The propagated list of experiencs
   */
  protected get experiences(): Experience[] {
    return this.#store.experiences;
  }

  protected getDuration(experience: Experience): string {
    const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const startDateFormatted = experience.started.toLocaleString(this.#activeLocale, dateOptions);
    const endDateFormatted =
      experience.ended?.toLocaleString(this.#activeLocale, dateOptions) ?? 'current';
    return `${startDateFormatted} - ${endDateFormatted}`;
  }

  /**
   * @returns The color of a logo depending on the color scheme
   */
  protected get logoColor(): Colorscheme {
    return this.#colorSchemeService.colorscheme === Colorscheme.light
      ? Colorscheme.dark
      : Colorscheme.light;
  }

  /**
   * @param company Name of the company logo
   * @returns Combined logo path containing root, name and logo color
   */
  protected getLogoPath(company: string): string {
    return `assets/logos/${company}_${this.logoColor}.svg`;
  }
}
