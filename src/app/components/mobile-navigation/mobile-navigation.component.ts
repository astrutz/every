import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HeaderComponent } from '../header/header.component';
import { lucideX, lucideMoon, lucideSun } from '@ng-icons/lucide';

@Component({
  selector: 'every-mobile-navigation',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './mobile-navigation.component.html',
  viewProviders: [
    provideIcons({
      lucideMoon,
      lucideSun,
      lucideX,
    }),
  ],
})
export class MobileNavigationComponent extends HeaderComponent {
  protected closeNavigation(): void {
    this._navigationService.isOpen = false;
  }

  protected get isOpen(): boolean {
    return this._navigationService.isOpen;
  }
}
