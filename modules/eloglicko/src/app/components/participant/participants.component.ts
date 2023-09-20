import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Participant } from '../../dataobjects/participant.dataobject';

@Component({
  standalone: true,
  selector: 'eloglicko-participant',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
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
      this._participants.push(new Participant(name, strength));
    }
  }
}
