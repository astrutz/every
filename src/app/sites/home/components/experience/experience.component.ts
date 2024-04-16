import { Component } from '@angular/core';
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
  constructor(
    private _colorschemeService: ColorschemeService,
    private readonly _store: StoreService,
  ) {}

  /**
   * @returns The propagated list of experiencs
   */
  protected get experiences(): Experience[] {
    return this._store.experiences;
  }

  protected getDuration(experience: Experience): string {
    const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }; // todo when multilang
    const startDateFormatted = experience.started.toLocaleString('en-EN', dateOptions);
    const endDateFormatted = experience.ended?.toLocaleString('en-EN', dateOptions) ?? 'current';
    return `${startDateFormatted} - ${endDateFormatted}`;
  }

  /**
   * @returns The color of a logo depending on the color scheme
   */
  protected get logoColor(): Colorscheme {
    return this._colorschemeService.colorscheme === Colorscheme.light
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
