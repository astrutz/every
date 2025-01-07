import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { lucideX } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { LocaleService } from '../../services/locale/locale.service';

@Component({
  selector: 'every-language-switch',
  standalone: true,
  imports: [NgClass, RouterLink, NgIcon],
  templateUrl: './language-switch.component.html',
  viewProviders: [
    provideIcons({
      lucideX,
    }),
  ],
})
export class LanguageSwitchComponent {
  protected localeService: LocaleService = inject(LocaleService);
}
