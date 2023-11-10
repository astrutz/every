import { GamePiece, getRandomGamePiece } from './primitives.types';

export class Participant {
  private readonly _name: string;
  private readonly _strength: number;
  private _color: string;
  private _piece: GamePiece;

  constructor(name: string, strength: number, color: string) {
    this._name = name;
    this._strength = strength;
    this._color = color;
    this._piece = getRandomGamePiece();
  }

  public get name(): string {
    return this._name;
  }

  public get strength(): number {
    return this._strength;
  }

  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get piece(): GamePiece {
    return this._piece;
  }

  public setRandomPiece(): void {
    this._piece = getRandomGamePiece();
  }
}
