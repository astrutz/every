import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HeaderComponent } from '../header/header.component';
import { lucideX, lucideMoon, lucideSun } from '@ng-icons/lucide';

/**
 * Displays a mobile navigation, hidden on w > 768px
 * @extends HeaderComponent in order to get the injected {@link NavigationService}
 */
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
  /**
   * Closes the mobile navigation, this happens nowhere else
   */
  protected closeNavigation(): void {
    this.navigationService.isOpen = false;
  }

  /**
   * Propagates the open state from {@link NavigationService}
   */
  protected get isOpen(): boolean {
    return this.navigationService.isOpen;
  }
}
