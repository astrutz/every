import { Injectable } from '@angular/core';
import { Simulation } from '../dataobjects/simulation.dataobject';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  readonly simulation: Simulation;

  constructor() {
    this.simulation = new Simulation();
  }

  simulate(): void {
    console.log('go');
  }
}