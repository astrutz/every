import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { lucideX } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { LocaleService } from '../../services/locale/locale.service';

/**
 * Global overlay do choose a preferred language
 */
@Component({
  selector: 'every-language-switch',
  imports: [NgClass, NgIcon],
  templateUrl: './language-switch.component.html',
  viewProviders: [
    provideIcons({
      lucideX,
    }),
  ],
})
export class LanguageSwitchComponent {
  protected readonly localeService: LocaleService = inject(LocaleService);
}
