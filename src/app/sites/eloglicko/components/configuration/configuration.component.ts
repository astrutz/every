import { Component } from '@angular/core';
import { CardComponent } from '../shared/card.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'eloglicko-configuration',
  imports: [
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './configuration.component.html',
})
export class ConfigurationComponent {
  protected _configurationForm = new FormGroup({
    matching: new FormControl(null, Validators.required),
    ranking: new FormControl(null, Validators.required),
    count: new FormControl(null, Validators.required),
    underdog: new FormControl(false, Validators.required),
  });

  protected _startSimulation() {
    if(this._configurationForm.valid) {
      console.log('start');
    }
  }
}
