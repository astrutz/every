import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Player } from '../../dataobjects/player.dataobject';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideUserMinus, lucideUserPlus } from '@ng-icons/lucide';
import {
  tablerChessBishopFilled,
  tablerChessFilled,
  tablerChessKingFilled,
  tablerChessKnightFilled,
  tablerChessQueenFilled, tablerChessRookFilled,
} from '@ng-icons/tabler-icons';
import { CardComponent } from '../shared/card.component';
import { SimulationService } from '../../services/simulation.service';


@Component({
    selector: 'eloglicko-player',
    templateUrl: './player.component.html',
    imports: [CommonModule, ReactiveFormsModule, NgIconComponent, CardComponent],
    viewProviders: [provideIcons({
            lucideUserMinus,
            lucideUserPlus,
            tablerChessFilled,
            tablerChessKnightFilled,
            tablerChessQueenFilled,
            tablerChessKingFilled,
            tablerChessRookFilled,
            tablerChessBishopFilled,
        })]
})
export class PlayerComponent {
  protected _players: Player[] = [];

  protected _playerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    strength: new FormControl(null, Validators.required),
  });

  constructor(protected _simulationService: SimulationService) {
  }

  protected _createPlayer(): void {
    const name = this._playerForm.get('name')?.value;
    const strength = this._playerForm.get('strength')?.value;
    if (this._playerForm.valid) {
      this._simulationService.simulation.createPlayer(name ?? '', strength ?? 1);
      this._playerForm.reset();
    }
  }

  protected _changePlayerColor(index: number): void {
    this._simulationService.simulation.changePlayerColor(index);

  }

  protected _deletePlayer(index: number): void {
    this._simulationService.simulation.deletePlayer(index);
  }
}
