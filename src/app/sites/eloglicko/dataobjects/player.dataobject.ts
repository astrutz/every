import { v4 as uuidv4 } from 'uuid';
import { GamePiece, getRandomGamePiece } from './primitives.types';

export class Player {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _strength: number;
  private _color: string;
  private _piece: GamePiece;

  constructor(name: string, strength: number, color: string) {
    this._id = uuidv4();
    this._name = name;
    this._strength = strength;
    this._color = color;
    this._piece = getRandomGamePiece();
  }

  public get id(): string {
    return this._id;
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

  winsAgainst(other: Player, isRandom = false): number {
    const thisStrengthFactor = isRandom ? Math.random() : 1;
    const otherStrengthFactor = isRandom ? Math.random() : 1;
    const thisPlayingStrength = thisStrengthFactor * this.strength;
    const otherPlayingStrength = otherStrengthFactor * other.strength;

    if (!other || thisPlayingStrength > otherPlayingStrength) return 1;
    if (thisPlayingStrength === otherPlayingStrength) return 0;
    return -1;
  }
}
