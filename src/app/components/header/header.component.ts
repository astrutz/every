import { Component, computed, inject, Signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideMoon, lucideSun, lucideArrowDown10 } from '@ng-icons/lucide';
import { Colorscheme, ColorschemeService } from '../../services/colorscheme/colorscheme.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';
import { LocaleService } from '../../services/locale/locale.service';
import { TitleService } from '../../services/title/title.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { apps, AppService, HeaderLink } from '../../services/app/app.service';

/**
 * Displays the header bar including links, a language switcher and a color switcher
 */
@Component({
  selector: 'every-header',
  standalone: true,
  imports: [NgIcon, FormsModule, NgClass, LanguageSwitchComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  viewProviders: [
    provideIcons({
      lucideMoon,
      lucideSun,
      lucideMenu,
      lucideArrowDown10,
    }),
  ],
})
export class HeaderComponent {
  protected colorschemeService: ColorschemeService = inject(ColorschemeService);
  protected navigationService: NavigationService = inject(NavigationService);
  protected localeService: LocaleService = inject(LocaleService);
  private _titleService: TitleService = inject(TitleService);
  protected appService: AppService = inject(AppService);

  protected isAppNavOpen = false;

  protected links$: Signal<HeaderLink[]> = computed(
    () => this.appService.currentApp$().headerLinks,
  );

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

  protected get title(): string {
    return this._titleService.title;
  }

  protected readonly apps = apps;
}
