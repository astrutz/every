import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { ColorschemeService } from '../../services/colorscheme/colorscheme.service';

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
  constructor(private colorschemeService: ColorschemeService) {}

  get iconName() {
    return this.colorschemeService.colorscheme === 'light' ? 'lucideMoon' : 'lucideSun';
  }

  toggleColorScheme() {
    this.colorschemeService.toggleColorScheme();
  }
}
