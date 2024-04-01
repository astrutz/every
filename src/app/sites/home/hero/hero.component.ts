import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMapPin } from '@ng-icons/lucide';

@Component({
  selector: 'every-hero',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './hero.component.html',
  viewProviders: [
    provideIcons({
      lucideMapPin,
    }),
  ],
})
export class HeroComponent {}
