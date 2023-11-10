import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Participant } from '../../dataobjects/participant.dataobject';
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
  standalone: true,
  selector: 'eloglicko-participant',
  templateUrl: './participants.component.html',
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
  })],
})
export class ParticipantsComponent {
  protected _participants: Participant[] = [];

  protected _participantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    strength: new FormControl(null, Validators.required),
  });

  constructor(private _simulationService: SimulationService) {
  }

  protected _createParticipant(): void {
    const name = this._participantForm.get('name')?.value;
    const strength = this._participantForm.get('strength')?.value;
    if (this._participantForm.valid) {
      this._simulationService.simulation.createParticipant(name ?? '', strength ?? 1);
      this._participantForm.reset();
    }
  }

  protected _changeParticipantColor(index: number): void {
    this._simulationService.simulation.changeParticipantColor(index);

  }

  protected _deleteParticipant(index: number): void {
    this._simulationService.simulation.deleteParticipant(index);
  }
}
