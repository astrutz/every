import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { ColorschemeService } from '../../services/colorscheme/colorscheme.service';
import { NavigationService } from '../../services/navigation/navigation.service';

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

  get iconName() {
    return this.colorschemeService.colorscheme === 'light' ? 'lucideMoon' : 'lucideSun';
  }

  protected openNavigation(): void {
    this._navigationService.isOpen = true;
  }

  protected toggleColorScheme() {
    this.colorschemeService.toggleColorScheme();
  }
}
