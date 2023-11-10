import { Match } from './match.dataobject';
import { PlayerRating } from './playerrating.dataobject';
import { Ranking } from './ranking.dataobject';

export class MatchMaker {
  matches: Match[] = [];
  rounds: Match[][] = [[]];

  ranking: Ranking;
  useRandom: boolean;

  constructor(ranking: Ranking, useRandom: boolean = false) {
    this.ranking = ranking;
    this.useRandom = useRandom;
  }
  // @ts-ignore
  addMatch(...matches): void {
    this.matches.push(...matches);
    this.rounds.slice(-1)[0].push(...matches);
  }

  closeRound(): void {
    this.rounds.push([]);
  }

  /**
   * Generates possible match pairing based on the current rating of the players
   * Expects playerRatings to be in the order of sortPlayerRatingsByCurrentRatingDesc().
   *
   * Will group Players like:
   * [[1, 2], [3, 4], [5, 6], ...]
   *
   * If the number of players is odd a random player will not play ("spielfrei")
   * @returns {[[PlayerRating]]} A list of opponents
   */
  getCurrentRatingPairMatches(): Match[] {
    this.ranking.sortPlayerRatingsByCurrentRatingDesc();
    const playerRatingsCopy = [...this.ranking.playerRatings];
    const res = [];
    let freilosPlayerRating;

    // Give a random player "spielfrei"
    if (playerRatingsCopy.length % 2 !== 0) {
      freilosPlayerRating = playerRatingsCopy.splice(Math.floor(Math.random() * playerRatingsCopy.length), 1);
    }

    // the minus one is, so we don't get a single element if we have an odd number of players
    for (let i = 0; i < playerRatingsCopy.length; i += 2) {
      res.push(
        new Match(
          playerRatingsCopy[i],
          playerRatingsCopy[i + 1],
          this.useRandom
        ),
      );
    }
    if (freilosPlayerRating) {
      // @ts-ignore
      res.push(new Match(...[freilosPlayerRating[0], null]));
    }

    return res;
  }

  /**
   * Creates a list of random matches
   * @returns {[[PlayerRating]]} A list of opponents
   */
  getRandomOpponentMatches(): Match[] {
    const playerRatingsCopy = [...this.ranking.playerRatings];

    const res = [];
    for (let i = 0; i < this.ranking.playerRatings.length - 1; i += 2) {
      let opponents: PlayerRating[] = [];
      for (let j = 0; j < 2; j++) {
        opponents = opponents.concat(
          playerRatingsCopy.splice(
            Math.floor(Math.random() * playerRatingsCopy.length),
            1,
          ),
        );
      }
      // @ts-ignore
      res.push(new Match(...opponents, this.useRandom));
    }
    playerRatingsCopy.forEach((rating) => {
      // @ts-ignore
      res.push(new Match(...[rating, null]));
    });
    return res;
  }

  /**
   * Generates possible match pairing based on the current rating of the players as seeding
   * Expects playerRatings to be in the order of sortPlayerRatingsByCurrentRatingDesc().
   *
   * Will group n Players like:
   * [[1, n], [2, n - 1], [3, n - 2], ...]
   *
   * For 8 players it will be:
   * [[1, 8], [2, 7], [3, 6], [4, 5]]
   *
   * If the number of players is odd a random player will not play ("spielfrei")
   * @returns {[[PlayerRating]]} A list of opponents
   */
  getSeedingMatches(): Match[] {
    this.ranking.sortPlayerRatingsByCurrentRatingDesc();
    const playerRatingsCopy = [...this.ranking.playerRatings];
    const res = [];
    let freilosPlayerRating;


    // Give a random player "spielfrei"
    if (playerRatingsCopy.length % 2 !== 0) {
      freilosPlayerRating = playerRatingsCopy.splice(Math.floor(Math.random() * playerRatingsCopy.length), 1);
    }

    for (let i = 0; i < playerRatingsCopy.length / 2; i++) {
      res.push(
        new Match(
          playerRatingsCopy[i],
          playerRatingsCopy[playerRatingsCopy.length - i - 1],
          this.useRandom,
        ),
      );
    }
    if (freilosPlayerRating) {
      // @ts-ignore
      res.push(new Match(...[freilosPlayerRating[0], null]));
    }
    return res;
  }
}