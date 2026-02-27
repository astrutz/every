import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Simple state service to keep track of the current page title
 */
@Injectable({
  providedIn: 'root',
})
export class TitleService {
  readonly #router = inject(Router);

  #baseTitle: string = 'alexstrutz';

  #additionalTitles: Map<string, string> = new Map([
    ['', 'dev'],
    ['eurovision', 'eurovision'],
  ]);

  public get title(): string {
    let additionalTitle;
    const route = this.#router.url.split('/');
    if (route.at(-1)?.includes('#')) {
      additionalTitle = this.#additionalTitles.get('');
    } else {
      additionalTitle = this.#additionalTitles.get(this.#router.url.split('/').at(1) ?? '');
    }
    return `${this.#baseTitle}.${additionalTitle}`;
  }
}
