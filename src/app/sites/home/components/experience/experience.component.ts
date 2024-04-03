import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ColorschemeService } from '../../../../services/colorscheme/colorscheme.service';
import { TagComponent } from '../../../../components/tag/tag.component';
import { StoreService } from '../../services/store.service';
import { Experience } from '../../types/experience.type';

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

  protected get experiences(): Experience[] {
    return this._store.experiences;
  }

  get logoColor(): string {
    return this._colorschemeService.colorscheme === 'light' ? 'dark' : 'light';
  }

  getLogoPath(company: string): string {
    return `/assets/logos/${company}_${this.logoColor}.svg`;
  }
}
