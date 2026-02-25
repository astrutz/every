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

  /**
   * State containing the base title which is visible every time
   */
  #baseTitle: string = 'alexstrutz';

  /**
   * State containing the suffix title depending on the page
   */
  #additionalTitles: Map<string, string> = new Map([
    ['', 'dev'],
    ['eurovision', 'eurovision'],
  ]);

  /**
   * @return State containing the title
   */
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
