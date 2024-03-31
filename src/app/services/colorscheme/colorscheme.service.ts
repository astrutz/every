import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorschemeService {
  get colorscheme(): string {
    return localStorage['theme'];
  }

  init(): void {
    if (
      this.colorscheme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this._setDarkTheme();
    } else {
      this._setLightTheme();
    }
  }

  toggleColorScheme() {
    if (this.colorscheme === 'light') {
      this._setDarkTheme();
    } else {
      this._setLightTheme();
    }
  }

  private _setLightTheme() {
    document.documentElement.classList.remove('dark');
    localStorage['theme'] = 'light';
  }

  private _setDarkTheme() {
    document.documentElement.classList.add('dark');
    localStorage['theme'] = 'dark';
  }
}
