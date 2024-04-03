import { Component } from '@angular/core';

@Component({
  selector: 'every-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  get currentYear(): string {
    return new Date().getFullYear().toString();
  }
}
