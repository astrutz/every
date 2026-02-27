import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Service containing the state of the current locale and language as well as the modal state
 */
@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  public readonly activeLocale: string = inject(LOCALE_ID);
  readonly #router = inject(Router);

  #isLanguageSwitcherOpen: boolean = false;

  #isMobileLanguageSwitcherOpen: boolean = false;

  public locales = [
    { code: 'bn', name: 'বাংলা' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '官话' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fa', name: 'فارسی' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'it', name: 'Italiano' },
    { code: 'ja', name: '日本語' },
    { code: 'jv', name: 'basa Jawa' },
    { code: 'pl', name: 'Polski' },
    { code: 'pt', name: 'Português' },
    { code: 'ro', name: 'Româna' },
    { code: 'ru', name: 'Pусский' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'uk', name: 'українська' },
    { code: 'vi', name: 'Tiếng Việt' },
  ];

  public get shouldShowLanguageSwitcher(): boolean {
    return !this.#router.url.includes('/eurovision');
  }

  public get isLanguageSwitcherOpen(): boolean {
    return this.#isLanguageSwitcherOpen;
  }

  public set isLanguageSwitcherOpen(newVal: boolean) {
    if (newVal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    this.#isLanguageSwitcherOpen = newVal;
  }

  public get isMobileLanguageSwitcherOpen(): boolean {
    return this.#isMobileLanguageSwitcherOpen;
  }

  public set isMobileLanguageSwitcherOpen(newVal: boolean) {
    this.#isMobileLanguageSwitcherOpen = newVal;
  }

  public getLanguageIconName(lang: string): string {
    return `assets/flags/${lang}.svg`;
  }
}
