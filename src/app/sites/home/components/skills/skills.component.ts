import { Component } from '@angular/core';
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
  standalone: true,
  imports: [NgOptimizedImage, TagComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  constructor(
    private readonly _colorschemeService: ColorschemeService,
    private readonly _store: StoreService,
  ) {}

  /**
   * @returns The propagated list of skills
   */
  protected get skills(): Skill[] {
    return this._store.skills;
  }

  /**
   * @param skill Icon name to be used
   * @returns Icon name (url) depending on color scheme
   */
  protected getIconUrl(skill: Skill): string {
    if (skill.hasDarkIcon && this._colorschemeService.colorscheme === Colorscheme.dark) {
      return skill.darkIcon ?? '';
    }
    return skill.icon;
  }
}
