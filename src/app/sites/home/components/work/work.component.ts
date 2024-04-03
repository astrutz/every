import { Component } from '@angular/core';
import { TagComponent } from '../../../../components/tag/tag.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideExternalLink } from '@ng-icons/lucide';
import { NgOptimizedImage } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { Work } from '../../types/work.type';

@Component({
  selector: 'every-work',
  standalone: true,
  imports: [TagComponent, NgIcon, NgOptimizedImage],
  templateUrl: './work.component.html',
  viewProviders: [
    provideIcons({
      lucideExternalLink,
    }),
  ],
})
export class WorkComponent {
  constructor(private readonly _store: StoreService) {}

  protected get works(): Work[] {
    return this._store.works;
  }
}
