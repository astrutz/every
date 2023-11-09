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
    strength: new FormControl(0, Validators.required),
  });

  protected _createParticipant(): void {
    const name = this._participantForm.get('name')?.value;
    const strength = this._participantForm.get('strength')?.value;
    if (name && strength) {
      this._participants.push(new Participant(name, strength, this.randomColor));
      this._participantForm.reset();
    }
  }

  protected _deleteParticipant(index: number): void {
    this._participants = this._participants.filter((participant, i) => i !== index);
  }

  protected _changeParticipantColor(index: number): void {
    this._participants.forEach((participant, i) => {
      if(index === i) {
        participant.color = this.randomColor;
        participant.setRandomPiece();
      }
    });
  }

  get randomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
