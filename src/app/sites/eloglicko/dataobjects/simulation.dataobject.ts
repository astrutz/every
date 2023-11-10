import { Participant } from './participant.dataobject';
import { Configuration  } from './primitives.types';

export class Simulation {
  private _participants: Participant[] = [];
  private _configuration: Configuration | null = null;

  constructor() {
  }

  get participants(): Participant[] {
    return this._participants ?? [];
  }

  createParticipant(name: string, strength: number): void {
    this._participants.push(new Participant(name ?? '', strength ?? 0, this.randomColor));
  }

  changeParticipantColor(index: number): void {
    this._participants.forEach((participant, i) => {
      if (index === i) {
        participant.color = this.randomColor;
        participant.setRandomPiece();
      }
    });
  }

  deleteParticipant(index: number): void {
    this._participants = this._participants.filter((participant, i) => i !== index);
  }

  get randomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  get configuration(): Configuration | null {
    return this._configuration;
  }

  set configuration(configuration: Configuration) {
    this._configuration = configuration;
  }
}