import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TagComponent } from '../../../../components/tag/tag.component';
import { StoreService } from '../../services/store.service';
import { Skill } from '../../types/skill.type';

@Component({
  selector: 'every-skills',
  standalone: true,
  imports: [NgOptimizedImage, TagComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  constructor(private readonly _store: StoreService) {}

  protected get skills(): Skill[] {
    return this._store.skills;
  }
}
