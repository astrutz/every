import { Injectable } from '@angular/core';

/**
 * Contains the color scheme as a global state and saves/reads it to/from the localStorage
 */
@Injectable({
  providedIn: 'root',
})
export class ColorschemeService {
  public get colorscheme(): Colorscheme {
    return localStorage['theme'];
  }

  /**
   * Reads the initial color scheme from localStorage and sets it globally, only called once on app startup
   */
  public init(): void {
    if (
      this.colorscheme === Colorscheme.dark ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.#setDarkTheme();
    } else {
      this.#setLightTheme();
    }
  }

  public toggleColorScheme(): void {
    if (this.colorscheme === Colorscheme.light) {
      this.#setDarkTheme();
    } else {
      this.#setLightTheme();
    }
  }

  #setLightTheme(): void {
    document.documentElement.classList.remove('dark');
    localStorage['theme'] = Colorscheme.light;
  }

  #setDarkTheme(): void {
    document.documentElement.classList.add('dark');
    localStorage['theme'] = Colorscheme.dark;
  }
}

export enum Colorscheme {
  light = 'light',
  dark = 'dark',
}
