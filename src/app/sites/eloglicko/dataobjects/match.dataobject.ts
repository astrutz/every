import { v4 as uuidv4 } from "uuid";
import { PlayerRating } from './playerrating.dataobject';

export class Match {
  id = '';
  opponents: [PlayerRating, PlayerRating | undefined];
  winner: PlayerRating | undefined;
  loser: PlayerRating | undefined | -1;

  constructor(playerRatingA: PlayerRating, playerRatingB: PlayerRating | undefined, useRandom = false) {
    this.id = uuidv4();
    this.opponents = [playerRatingA, playerRatingB];
    if (playerRatingB) {
      const result = playerRatingA.player.winsAgainst(playerRatingB.player, useRandom);
      if (result < 0) {
        this.winner = playerRatingB;
        this.loser = playerRatingA;
      } else if (result > 0) {
        this.winner = playerRatingA;
        this.loser = playerRatingB;
      } else if (result === 0) {
        this.winner = undefined;
        this.loser = undefined;
      }
    } else {
      this.winner = undefined;
      this.loser = -1;
    }
  }
}