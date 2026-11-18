import { inject, Injectable, DOCUMENT } from '@angular/core';

/**
 * Service used to display different themes based on a eurovision contest
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly #document = inject(DOCUMENT);

  public getBackgroundPrimary(year?: string): string {
    if (!year) {
      return 'bg-oldies-primary';
    }
    return `bg-contest${year}-primary`;
  }

  public getBackgroundSecondary(year: string): string {
    if (!year) {
      return 'bg-oldies-secondary';
    }
    return `bg-contest${year}-secondary`;
  }

  public getTextPrimary(year?: string): string {
    if (!year) {
      return 'text-oldies-primaryText';
    }
    return `text-contest${year}-primaryText`;
  }

  public getTextSecondary(year: string): string {
    if (!year) {
      return 'text-oldies-secondaryText';
    }
    return `text-contest${year}-secondaryText`;
  }

  public get flagBackground(): string {
    return this.#document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  }
}
