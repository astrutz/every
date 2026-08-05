import { Player } from './player.dataobject';
import { PlayerRating } from './playerrating.dataobject';

export class Ranking {
  playerRatings: PlayerRating[] = [];
  players: Player[] = [];

  addPlayer(player: Player): void {
    this.playerRatings.push(new PlayerRating(player));
    this.players.push(player);
    this.players.sort((a, b) => b.winsAgainst(a));
  }

  getDeviationsFromStrenghtRating(): {
    playerRating: PlayerRating;
    currentPosition: number;
    strengthPosition: number;
  }[] {
    const deviations = [];

    for (const playerRating of this.playerRatings) {
      const currentPosition = this.getPlayerCurrentPosition(playerRating.player);
      const strengthPosition = this.getPlayerExpectedPosition(playerRating.player);
      if (strengthPosition !== currentPosition) {
        deviations.push({
          playerRating,
          currentPosition,
          strengthPosition,
        });
      }
    }

    return deviations;
  }

  getPlayerCurrentPosition(player: Player): number {
    let currentPosition = this.playerRatings.length;
    let currentPlayerRating;
    for (let i = this.playerRatings.length - 1; i >= 0; i--) {
      const playerRating = this.playerRatings[i];
      // @ts-expect-error - todo
      if (playerRating.player.winsAgainst(currentPlayerRating) !== 0) {
        currentPlayerRating = playerRating;
        currentPosition--;
      }
      if (playerRating.player === player) {
        return currentPosition;
      }
    }
    return currentPosition;
  }

  getPlayerExpectedPosition(player: Player): number {
    let currentPosition = this.players.length;
    let currentPlayer;
    for (let i = this.players.length - 1; i >= 0; i--) {
      const cPlayer = this.players[i];
      // @ts-expect-error - todo
      if (cPlayer.winsAgainst(currentPlayer) !== 0) {
        currentPlayer = cPlayer;
        currentPosition--;
      }
      if (cPlayer === player) {
        return currentPosition;
      }
    }
    return currentPosition;
  }

  getPlayerRatingForPlayer(player: Player) {
    return this.playerRatings.find((p) => p.player.id === player.id);
  }

  randomizePlayerRatingsOrder(): void {
    for (let i = this.playerRatings.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playerRatings[i], this.playerRatings[j]] = [
        this.playerRatings[j],
        this.playerRatings[i],
      ];
    }
  }

  sortPlayerRatingsByCurrentRatingAsc(): void {
    this.playerRatings.sort((a, b) => a.currentRating - b.currentRating);
  }

  sortPlayerRatingsByCurrentRatingDesc(): void {
    this.playerRatings.sort((a, b) => b.currentRating - a.currentRating);
  }

  sortPlayerRatingsByStrengthAsc(): void {
    this.playerRatings.sort((a, b) => a.player.winsAgainst(b.player));
  }

  sortPlayerRatingsByStrengthDesc(): void {
    this.playerRatings.sort((a, b) => b.player.winsAgainst(a.player));
  }
}
