import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { Colorscheme, ColorschemeService } from '../../services/colorscheme/colorscheme.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';
import { LocaleService } from '../../services/locale/locale.service';

/**
 * Displays the header bar including links, a language switcher and a color switcher
 */
@Component({
  selector: 'every-header',
  standalone: true,
  imports: [NgIcon, FormsModule, NgClass, LanguageSwitchComponent],
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
  protected colorschemeService: ColorschemeService = inject(ColorschemeService);
  protected navigationService: NavigationService = inject(NavigationService);
  protected localeService: LocaleService = inject(LocaleService);

  protected get links(): string[] {
    return [$localize`About`, $localize`Experience`, 'Work', 'Testimonials', $localize`Contact`];
  }

  /**
   * @returns The name of the color scheme switcher depending on the current theme
   */
  protected get colorIconName(): string {
    return this.colorschemeService.colorscheme === Colorscheme.light ? 'lucideMoon' : 'lucideSun';
  }

  /**
   * Opens the mobile navigation, this happens nowhere else
   */
  protected openNavigation(): void {
    this.navigationService.isOpen = true;
  }

  /**
   * Toggles the color scheme (dark/light) on switcher click
   */
  protected toggleColorScheme(): void {
    this.colorschemeService.toggleColorScheme();
  }
}
