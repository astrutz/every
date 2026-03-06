import { inject, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { translations } from '../translations/country-translations';

type LocaleKey = keyof typeof translations;

/**
 * Translates dynamic database strings like country names depending on the locale (from URL)
 */
@Pipe({
  name: 'translate',
})
export class TranslationPipe implements PipeTransform {
  readonly #router = inject(Router);

  public transform(key: string): string {
    if (!this.#locale || this.#locale === 'en') {
      return key;
    }
    if (this.#locale in translations) {
      const locale = this.#locale as LocaleKey;
      const translation = translations[locale];
      if (key in translation) {
        const indexedKey = key as keyof typeof translation;
        return translation[indexedKey];
      }
    }
    return key;
  }

  get #locale(): string | null {
    const locale = this.#router.url.split('/')?.[1];
    if (locale?.length !== 2) {
      return 'de';
    }
    return locale ?? null;
  }
}
