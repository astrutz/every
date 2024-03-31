import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideMoon } from '@ng-icons/lucide';
import { ColorschemeService } from '../../services/colorscheme/colorscheme.service';

@Component({
  selector: 'every-header',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './header.component.html',
  viewProviders: [
    provideIcons({
      lucideMoon,
      lucideMenu,
    }),
  ],
})
export class HeaderComponent {
  constructor(private colorschemeService: ColorschemeService) {}

  get iconColor() {
    return this.colorschemeService.colorscheme === 'light' ? '#4b5563' : '#d1d5db';
  }

  toggleColorScheme() {
    this.colorschemeService.toggleColorScheme();
  }
}
