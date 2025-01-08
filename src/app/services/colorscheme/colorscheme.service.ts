import { Injectable } from '@angular/core';

/**
 * Contains the color scheme as a global state and saves/reads it to/from the localStorage
 */
@Injectable({
  providedIn: 'root',
})
export class ColorschemeService {
  /**
   * @returns The current color scheme from localStorage
   */
  get colorscheme(): Colorscheme {
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
      this._setDarkTheme();
    } else {
      this._setLightTheme();
    }
  }

  /**
   * Changes the color scheme to the "other" value
   */
  public toggleColorScheme(): void {
    if (this.colorscheme === Colorscheme.light) {
      this._setDarkTheme();
    } else {
      this._setLightTheme();
    }
  }

  /**
   * Sets the light theme in localStorage and removes the dark mode html class
   */
  private _setLightTheme(): void {
    document.documentElement.classList.remove('dark');
    localStorage['theme'] = Colorscheme.light;
  }

  /**
   * Sets the dark theme in localStorage and adds the dark mode html class
   */
  private _setDarkTheme(): void {
    document.documentElement.classList.add('dark');
    localStorage['theme'] = Colorscheme.dark;
  }
}

/**
 * Defines the current color scheme as simple string
 */
export enum Colorscheme {
  light = 'light',
  dark = 'dark',
}
