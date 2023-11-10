import { Player } from './player.dataobject';
import { Configuration  } from './primitives.types';
import { MatchMaker } from './matchmaker.dataobject';

export class Simulation {
  private _players: Player[] = [];
  private _configuration: Configuration | null = null;
  private _tournament: MatchMaker | null = null;

  constructor() {
  }

  get players(): Player[] {
    return this._players ?? [];
  }

  createPlayer(name: string, strength: number): void {
    this._players.push(new Player(name ?? '', strength ?? 0, this.randomColor));
  }

  changePlayerColor(index: number): void {
    this._players.forEach((player, i) => {
      if (index === i) {
        player.color = this.randomColor;
        player.setRandomPiece();
      }
    });
  }

  deletePlayer(index: number): void {
    this._players = this._players.filter((player, i) => i !== index);
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

  get tournament(): MatchMaker | null {
    return this._tournament;
  }

  set tournament(tournament: MatchMaker) {
    this._tournament = tournament;
  }
}