import { Component } from '@angular/core';
import { ContentAreaComponent } from '../../components/content-area/content-area.component';
import { CardComponent } from './components/card/card.component';
import { Plant } from './dataobjects/plant.dataobject';

@Component({
  selector: 'plantu-home',
  templateUrl: 'home.component.html',
  imports: [ContentAreaComponent, CardComponent],
})
export class HomeComponent {
  get testPlants(): Plant[] {
    return [
      {
        _id: 'sdfsdfsdf',
        name: 'Duftender Drachenbaum',
        wateringInterval: 5,
        birthDate: new Date(),
        location: 'Arbeitszimmer',
      },
      {
        _id: 'sdfsdfdsfsdf',
        name: 'Rostfeige',
        wateringInterval: 8,
        birthDate: new Date(),
        location: 'Schlafzimmer',
      },
      {
        _id: 'sdfsdfsdfasdf',
        name: 'Aloe Vera',
        wateringInterval: 21,
        birthDate: new Date(),
        location: 'Wohnzimmer',
      },
    ];
  }
}
