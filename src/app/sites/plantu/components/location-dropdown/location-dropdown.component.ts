import { Component, output } from '@angular/core';
import { Location as PlantLocation } from '../../dataobjects/location.dataobject';

@Component({
  selector: 'plantu-location-dropdown',
  templateUrl: './location-dropdown.component.html',
})
export class LocationDropdownComponent {
  public changeFilter$ = output<PlantLocation>();

  protected onFilterChange(event: Event) {
    const filter = (event.target as HTMLSelectElement).value;
    this.changeFilter$.emit(filter as PlantLocation);
  }
}
