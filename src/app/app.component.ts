import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ColorschemeService } from './services/colorscheme/colorscheme.service';

@Component({
  selector: 'every-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
})
export class AppComponent {
  title = 'every';

  constructor(private colorschemeService: ColorschemeService) {
    this.colorschemeService.init();
  }
}
