import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ColorschemeService } from './services/colorscheme/colorscheme.service';
import { FooterComponent } from './components/footer/footer.component';
import { MobileNavigationComponent } from "./components/mobile-navigation/mobile-navigation.component";

@Component({
  selector: 'every-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, MobileNavigationComponent],
})
export class AppComponent {
  title = 'every';

  constructor(private colorschemeService: ColorschemeService) {
    this.colorschemeService.init();
  }
}
