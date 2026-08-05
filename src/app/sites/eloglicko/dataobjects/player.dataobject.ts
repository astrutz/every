import { v4 as uuidv4 } from 'uuid';
import { GamePiece, getRandomGamePiece } from './primitives.types';

export class Player {
  constructor(name: string, strength: number, color: string) {
    this._id = uuidv4();
    this._name = name;
    this._strength = strength;
    this._color = color;
    this._piece = getRandomGamePiece();
  }
  private _color: string;
  private readonly _id: string;
  private readonly _name: string;
  private _piece: GamePiece;

  private readonly _strength: number;

  public setRandomPiece(): void {
    this._piece = getRandomGamePiece();
  }

  winsAgainst(other: Player, isRandom = false): number {
    const thisStrengthFactor = isRandom ? Math.random() : 1;
    const otherStrengthFactor = isRandom ? Math.random() : 1;
    const thisPlayingStrength = thisStrengthFactor * this.strength;
    const otherPlayingStrength = otherStrengthFactor * other.strength;

    if (!other || thisPlayingStrength > otherPlayingStrength) return 1;
    if (thisPlayingStrength === otherPlayingStrength) return 0;
    return -1;
  }

  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get piece(): GamePiece {
    return this._piece;
  }

  public get strength(): number {
    return this._strength;
  }
}
