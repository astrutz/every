import { Component, computed, inject, Signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowDown10,
  lucideExternalLink,
  lucideMenu,
  lucideMoon,
  lucideSun,
  lucideMessageCircleQuestionMark,
} from '@ng-icons/lucide';
import { Colorscheme, ColorschemeService } from '../../services/colorscheme/colorscheme.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { LocaleService } from '../../services/locale/locale.service';
import { TitleService } from '../../services/title/title.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { apps, AppService, HeaderLink } from '../../services/app/app.service';
import { DialogComponent } from '../dialog/dialog.component';

/**
 * Displays the header bar including links, a language switcher and a color switcher
 */
@Component({
  selector: 'every-header',
  imports: [NgIcon, FormsModule, NgClass, RouterLink, RouterLinkActive, DialogComponent],
  templateUrl: './header.component.html',
  viewProviders: [
    provideIcons({
      lucideMoon,
      lucideSun,
      lucideMenu,
      lucideArrowDown10,
      lucideExternalLink,
      lucideMessageCircleQuestionMark,
    }),
  ],
})
export class HeaderComponent {
  readonly #colorschemeService: ColorschemeService = inject(ColorschemeService);
  readonly #titleService: TitleService = inject(TitleService);
  protected readonly appService: AppService = inject(AppService);
  protected readonly localeService: LocaleService = inject(LocaleService);
  protected readonly navigationService: NavigationService = inject(NavigationService);

  protected readonly apps = apps;

  protected isAppNavOpen = false;

  protected links$: Signal<HeaderLink[]> = computed(
    () => this.appService.currentApp$().headerLinks,
  );

  protected openNavigation(): void {
    this.navigationService.isOpen = true;
  }

  protected toggleColorScheme(): void {
    this.#colorschemeService.toggleColorScheme();
  }

  protected get colorIconName(): string {
    return this.#colorschemeService.colorscheme === Colorscheme.light ? 'lucideMoon' : 'lucideSun';
  }

  protected get title(): string {
    return this.#titleService.title;
  }
}
