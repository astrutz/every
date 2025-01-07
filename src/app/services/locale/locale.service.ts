import { inject, Injectable, LOCALE_ID } from '@angular/core';

/**
 * Service containing state of the current locale and language as well as the modal state
 */
@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  public activeLocale: string = inject(LOCALE_ID);

  /**
   * Determines if the modal should be visible
   */
  private _isLanguageSwitcherOpen: boolean = false;

  /**
   * List of supported locales and languages
   */
  public locales = [
    { code: 'bn', name: 'বাংলা' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '官话' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'it', name: 'Italiano' },
    { code: 'ja', name: '日本語' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Pусский' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'vi', name: 'Tiếng Việt' },
  ];

  /**
   * @return State containing the navigation
   */
  get isLanguageSwitcherOpen(): boolean {
    return this._isLanguageSwitcherOpen;
  }

  /**
   * @param newVal State containing the navigation
   */
  set isLanguageSwitcherOpen(newVal: boolean) {
    if (newVal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    this._isLanguageSwitcherOpen = newVal;
  }

  /**
   * Gets a language icon based on lang code
   * @returns The name of the color scheme switcher depending on the current theme
   */
  public getLanguageIconName(lang: string): string {
    return `assets/flags/${lang}.svg`;
  }
}
