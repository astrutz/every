import { Player } from './player.dataobject';
import { PlayerRating } from './playerrating.dataobject';

export class Ranking {
  players: Player[] = [];
  playerRatings: PlayerRating[] = [];

  addPlayer(player: Player): void {
    this.playerRatings.push(new PlayerRating(player));
    this.players.push(player);
    this.players.sort((a, b) => b.winsAgainst(a));
  }

  getPlayerRatingForPlayer(player: Player) {
    return this.playerRatings.find((p) => p.player.id === player.id);
  }

  getDeviationsFromStrenghtRating(): { playerRating: PlayerRating, currentPosition: number, strengthPosition: number }[] {
    const deviations = [];

    for (const playerRating of this.playerRatings) {
      const currentPosition = this.getPlayerCurrentPosition(
        playerRating.player,
      );
      const strengthPosition = this.getPlayerExpectedPosition(
        playerRating.player,
      );
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

  getPlayerExpectedPosition(player: Player): number {
    let currentPosition = this.players.length;
    let currentPlayer;
    for (let i = this.players.length - 1; i >= 0; i--) {
      const cPlayer = this.players[i];
      // @ts-ignore
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

  getPlayerCurrentPosition(player: Player): number {
    let currentPosition = this.playerRatings.length;
    let currentPlayerRating;
    for (let i = this.playerRatings.length - 1; i >= 0; i--) {
      const playerRating = this.playerRatings[i];
      // @ts-ignore
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

  randomizePlayerRatingsOrder(): void {
    for (let i = this.playerRatings.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playerRatings[i], this.playerRatings[j]] = [
        this.playerRatings[j],
        this.playerRatings[i],
      ];
    }
  }

  sortPlayerRatingsByStrengthDesc(): void {
    this.playerRatings.sort((a, b) => b.player.winsAgainst(a.player));
  }

  sortPlayerRatingsByStrengthAsc(): void {
    this.playerRatings.sort((a, b) => a.player.winsAgainst(b.player));
  }

  sortPlayerRatingsByCurrentRatingDesc(): void {
    this.playerRatings.sort((a, b) => b.currentRating - a.currentRating);
  }

  sortPlayerRatingsByCurrentRatingAsc(): void {
    this.playerRatings.sort((a, b) => a.currentRating - b.currentRating);
  }

}