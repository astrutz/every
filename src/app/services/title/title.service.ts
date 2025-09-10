import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Simple state service to keep track of the current page title
 */
@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private _router = inject(Router);

  /**
   * State containing the base title which is visible every time
   */
  private readonly _baseTitle: string = 'alexstrutz';

  /**
   * State containing the suffix title depending on the page
   */
  private readonly _additionalTitles: Map<string, string> = new Map([
    ['', 'dev'],
    ['eurovision', 'eurovision'],
  ]);

  /**
   * @return State containing the title
   */
  get title(): string {
    let additionalTitle;
    const route = this._router.url.split('/');
    if (route.at(-1)?.includes('#')) {
      additionalTitle = this._additionalTitles.get('');
    } else {
      additionalTitle = this._additionalTitles.get(this._router.url.split('/').at(1) ?? '');
    }
    return `${this._baseTitle}.${additionalTitle}`;
  }
}
