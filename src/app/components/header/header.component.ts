import { Component, computed, inject, Signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowDown10,
  lucideExternalLink,
  lucideMenu,
  lucideMoon,
  lucideSun,
} from '@ng-icons/lucide';
import { Colorscheme, ColorschemeService } from '../../services/colorscheme/colorscheme.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { LocaleService } from '../../services/locale/locale.service';
import { TitleService } from '../../services/title/title.service';
import { RouterLink } from '@angular/router';
import { apps, AppService, HeaderLink } from '../../services/app/app.service';

/**
 * Displays the header bar including links, a language switcher and a color switcher
 */
@Component({
  selector: 'every-header',
  imports: [NgIcon, FormsModule, NgClass, RouterLink],
  templateUrl: './header.component.html',
  viewProviders: [
    provideIcons({
      lucideMoon,
      lucideSun,
      lucideMenu,
      lucideArrowDown10,
      lucideExternalLink,
    }),
  ],
})
export class HeaderComponent {
  readonly #colorschemeService: ColorschemeService = inject(ColorschemeService);
  protected readonly navigationService: NavigationService = inject(NavigationService);
  protected readonly localeService: LocaleService = inject(LocaleService);
  readonly #titleService: TitleService = inject(TitleService);
  protected readonly appService: AppService = inject(AppService);

  protected isAppNavOpen = false;

  protected links$: Signal<HeaderLink[]> = computed(
    () => this.appService.currentApp$().headerLinks,
  );

  /**
   * @returns The name of the color scheme switcher depending on the current theme
   */
  protected get colorIconName(): string {
    return this.#colorschemeService.colorscheme === Colorscheme.light ? 'lucideMoon' : 'lucideSun';
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
    this.#colorschemeService.toggleColorScheme();
  }

  protected get title(): string {
    return this.#titleService.title;
  }

  protected readonly apps = apps;
}
