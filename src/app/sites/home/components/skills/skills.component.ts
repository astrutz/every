import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TagComponent } from '../../../../components/tag/tag.component';
import { StoreService } from '../../services/store.service';
import { Skill } from '../../types/skill.type';
import {
  Colorscheme,
  ColorschemeService,
} from '../../../../services/colorscheme/colorscheme.service';

/**
 * Displays the skills as a linked logo list
 */
@Component({
  selector: 'every-skills',
  imports: [NgOptimizedImage, TagComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly #store = inject(StoreService);
  readonly #colorschemeService = inject(ColorschemeService);

  protected get skills(): Skill[] {
    return this.#store.skills;
  }

  protected getIconUrl(skill: Skill): string {
    if (skill.hasDarkIcon && this.#colorschemeService.colorscheme === Colorscheme.dark) {
      return skill.darkIcon ?? '';
    }
    return skill.icon;
  }
}
