import { inject, Injectable, DOCUMENT } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _document = inject(DOCUMENT);

  getBackgroundPrimary(year: number): string {
    switch (year) {
      case 2025:
        return 'bg-contest2025-primary';
      case 2024:
        return 'bg-contest2024-primary';
      case 2023:
        return 'bg-contest2023-primary';
      case 2022:
        return 'bg-contest2022-primary';
      case 2021:
        return 'bg-contest2021-primary';
      case 2019:
        return 'bg-contest2019-primary';
      case 2018:
        return 'bg-contest2018-primary';
      case 2017:
        return 'bg-contest2017-primary';
      case 2016:
        return 'bg-contest2016-primary';
    }
    return '';
  }

  getBackgroundSecondary(year: number): string {
    switch (year) {
      case 2025:
        return 'bg-contest2025-secondary';
      case 2024:
        return 'bg-contest2024-secondary';
      case 2023:
        return 'bg-contest2023-secondary';
      case 2022:
        return 'bg-contest2022-secondary';
      case 2021:
        return 'bg-contest2021-secondary';
      case 2019:
        return 'bg-contest2019-secondary';
      case 2018:
        return 'bg-contest2018-secondary';
      case 2017:
        return 'bg-contest2017-secondary';
      case 2016:
        return 'bg-contest2016-secondary';
    }
    return '';
  }

  getTextPrimary(year: number): string {
    switch (year) {
      case 2025:
        return 'text-contest2025-primaryText';
      case 2024:
        return 'text-contest2024-primaryText';
      case 2023:
        return 'text-contest2023-primaryText';
      case 2022:
        return 'text-contest2022-primaryText';
      case 2021:
        return 'text-contest2021-primaryText';
      case 2019:
        return 'text-contest2019-primaryText';
      case 2018:
        return 'text-contest2018-primaryText';
      case 2017:
        return 'text-contest2017-primaryText';
      case 2016:
        return 'text-contest2016-primaryText';
    }
    return '';
  }

  getTextSecondary(year: number): string {
    switch (year) {
      case 2025:
        return 'text-contest2025-secondaryText';
      case 2024:
        return 'text-contest2024-secondaryText';
      case 2023:
        return 'text-contest2023-secondaryText';
      case 2022:
        return 'text-contest2022-secondaryText';
      case 2021:
        return 'text-contest2021-secondaryText';
      case 2019:
        return 'text-contest2019-secondaryText';
      case 2018:
        return 'text-contest2018-secondaryText';
      case 2017:
        return 'text-contest2017-secondaryText';
      case 2016:
        return 'text-contest2016-secondaryText';
    }
    return '';
  }

  get flagBackground(): string {
    return this._document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  }
}
