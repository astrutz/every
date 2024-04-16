import { Component, Inject, LOCALE_ID, OnChanges } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { Colorscheme, ColorschemeService } from '../../services/colorscheme/colorscheme.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

/**
 * Displays the header bar including links, a language switcher and a color switcher
 */
@Component({
  selector: 'every-header',
  standalone: true,
  imports: [NgIcon, FormsModule, NgClass],
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
  locales = [
    { code: 'de', name: 'Deutsch' },
    { code: 'en', name: 'Englisch' },
  ];

  public isLanguageSwitcherOpen = false;

  constructor(
    protected colorschemeService: ColorschemeService,
    protected _navigationService: NavigationService,
    private _router: Router,
    @Inject(LOCALE_ID) public activeLocale: string,
  ) {}

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
   * Gets a language icon based on lang code
   * @returns The name of the color scheme switcher depending on the current theme
   */
  protected getLanguageIconName(lang: string): string {
    return `assets/flags/${lang}.svg`;
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
  protected toggleColorScheme(): void {
    this.colorschemeService.toggleColorScheme();
  }

  /**
   * Redirects when the language is changed
   */
  onLanguageChange(): void {
    this._router.navigate([`/${this.activeLocale}`]);
    // window.location.href = `/${this.activeLocale}`;
  }
}
