import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HeaderComponent } from '../header/header.component';
import {
  lucideX,
  lucideMoon,
  lucideSun,
  lucideChevronDown,
  lucideExternalLink,
} from '@ng-icons/lucide';
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
      lucideExternalLink,
    }),
  ],
})
export class MobileNavigationComponent extends HeaderComponent {
  protected closeNavigation(): void {
    this.navigationService.isOpen = false;
  }

  protected get isOpen(): boolean {
    return this.navigationService.isOpen;
  }

  protected set isOpen(newVal: boolean) {
    this.navigationService.isOpen = newVal;
  }

  protected override readonly apps = apps;
}
