import { Component } from '@angular/core';
import { ContentAreaComponent } from '../../components/content-area/content-area.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'plantu-home',
  templateUrl: 'home.component.html',
  imports: [ContentAreaComponent, CardComponent],
})
export class HomeComponent {}
