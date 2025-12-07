import { Component } from '@angular/core';
import { CardComponent } from '../shared/card.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { SimulationService } from '../../services/simulation.service';

@Component({
    selector: 'eloglicko-configuration',
    imports: [
        CardComponent,
        FormsModule,
        ReactiveFormsModule,
        NgClass,
    ],
    templateUrl: './configuration.component.html'
})
export class ConfigurationComponent {
  protected _configurationForm = new FormGroup({
    matching: new FormControl(null, Validators.required),
    ranking: new FormControl(null, Validators.required),
    count: new FormControl(null, Validators.required),
    underdog: new FormControl(false, Validators.required),
  });

  constructor(private _simulationService: SimulationService) {
  }

  protected _startSimulation() {
    if(this._configurationForm.valid) {
      this._simulationService.simulation.configuration = {
        matching: this._configurationForm.get('matching')?.value ?? 'random',
        ranking: this._configurationForm.get('ranking')?.value ?? 'elo',
        count: this._configurationForm.get('count')?.value ?? 1,
        allowUnderdogWins: this._configurationForm.get('underdog')?.value ?? false,
      };
      this._simulationService.simulate();
    }
  }
}
