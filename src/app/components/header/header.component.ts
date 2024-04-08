import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { Colorscheme, ColorschemeService } from '../../services/colorscheme/colorscheme.service';
import { NavigationService } from '../../services/navigation/navigation.service';

/**
 * Displays the header bar including links, a language switcher and a color switcher
 */
@Component({
  selector: 'every-header',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './header.component.html',
  viewProviders: [
    provideIcons({
      lucideMoon,
      lucideSun,
      lucideMenu,
    }),
  ],
})
export class HeaderComponent {
  constructor(
    protected colorschemeService: ColorschemeService,
    protected _navigationService: NavigationService,
  ) {}

  protected get links(): string[] {
    return [$localize`About`, $localize`Experience`, 'Work', 'Testimonials', $localize`Contact`];
  }

  /**
   * @returns The name of the color scheme switcher depending on the current theme
   */
  protected get iconName(): string {
    return this.colorschemeService.colorscheme === Colorscheme.light ? 'lucideMoon' : 'lucideSun';
  }

  /**
   * Opens the mobile navigation, this happens nowhere else
   */
  protected openNavigation(): void {
    this._navigationService.isOpen = true;
  }

  /**
   * Toggles the color scheme (dark/light) on switcher click
   */
  protected toggleColorScheme() {
    this.colorschemeService.toggleColorScheme();
  }

  protected readonly $localize = $localize;
}
