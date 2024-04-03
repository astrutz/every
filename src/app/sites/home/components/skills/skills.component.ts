import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TagComponent } from '../../../../components/tag/tag.component';
import { StoreService } from '../../services/store.service';
import { Skill } from '../../types/skill.type';
import { ColorschemeService } from '../../../../services/colorscheme/colorscheme.service';

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

  protected get skills(): Skill[] {
    return this._store.skills;
  }

  protected getIconUrl(skill: Skill): string {
    if (skill.hasDarkIcon && this._colorschemeService.colorscheme === 'dark') {
      return skill.darkIcon ?? '';
    }
    return skill.icon;
  }
}
