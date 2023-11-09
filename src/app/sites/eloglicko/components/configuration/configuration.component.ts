import { Component } from '@angular/core';
import { CardComponent } from '../shared/card.component';

@Component({
  standalone: true,
  selector: 'eloglicko-configuration',
  imports: [
    CardComponent,
  ],
  templateUrl: './configuration.component.html',
})
export class ConfigurationComponent {
}
