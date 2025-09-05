import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'eurovision-countries',
  templateUrl: 'countries.component.html',
  standalone: true,
  imports: [BreadcrumbComponent],
})
export class CountriesComponent {}
