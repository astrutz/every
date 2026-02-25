import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Service containing state of the current locale and language as well as the modal state
 */
@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  public readonly activeLocale: string = inject(LOCALE_ID);
  readonly #router = inject(Router);

  /**
   * Determines if the modal should be visible
   */
  #isLanguageSwitcherOpen: boolean = false;

  /**
   * Determines if the mobile modal should be visible
   */
  #isMobileLanguageSwitcherOpen: boolean = false;

  /**
   * List of supported locales and languages
   */
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

  /**
   * @return State containing the navigation
   */
  public get shouldShowLanguageSwitcher(): boolean {
    return !this.#router.url.includes('/eurovision');
  }

  /**
   * @return State containing the navigation
   */
  public get isLanguageSwitcherOpen(): boolean {
    return this.#isLanguageSwitcherOpen;
  }

  /**
   * @param newVal State containing the navigation
   */
  public set isLanguageSwitcherOpen(newVal: boolean) {
    if (newVal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    this.#isLanguageSwitcherOpen = newVal;
  }

  /**
   * @return State containing the navigation
   */
  public get isMobileLanguageSwitcherOpen(): boolean {
    return this.#isMobileLanguageSwitcherOpen;
  }

  /**
   * @param newVal State containing the navigation
   */
  public set isMobileLanguageSwitcherOpen(newVal: boolean) {
    this.#isMobileLanguageSwitcherOpen = newVal;
  }

  /**
   * Gets a language icon based on lang code
   * @returns The name of the color scheme switcher depending on the current theme
   */
  public getLanguageIconName(lang: string): string {
    return `assets/flags/${lang}.svg`;
  }
}
