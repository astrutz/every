import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HeaderComponent } from '../header/header.component';
import { lucideX, lucideMoon, lucideSun, lucideChevronDown } from '@ng-icons/lucide';
import { RouterLink } from '@angular/router';
import { apps } from '../../services/app/app.service';
import { NgClass } from '@angular/common';

/**
 * Displays a mobile navigation, hidden on w > 768px
 * @extends HeaderComponent in order to get the injected {@link NavigationService}
 */
@Component({
    selector: 'every-mobile-navigation',
    imports: [NgIcon, RouterLink, NgClass],
    templateUrl: './mobile-navigation.component.html',
    viewProviders: [
        provideIcons({
            lucideMoon,
            lucideSun,
            lucideX,
            lucideChevronDown,
        }),
    ]
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

  protected override readonly apps = apps;
}
