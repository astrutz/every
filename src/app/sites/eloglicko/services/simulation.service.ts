import { Injectable } from '@angular/core';
import { Simulation } from '../dataobjects/simulation.dataobject';
import { MatchMaker } from '../dataobjects/matchmaker.dataobject';
import { Ranking } from '../dataobjects/ranking.dataobject';
import { Match } from '../dataobjects/match.dataobject';
import { Matching, Ranking as RankingSystem } from '../dataobjects/primitives.types';
import { PlayerRating } from '../dataobjects/playerrating.dataobject';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  readonly simulation: Simulation;

  constructor() {
    this.simulation = new Simulation();
  }

  simulate(): void {
    if (this.simulation.configuration) {
      const ranking = this._getInitialRanking();
      const matchMaker = new MatchMaker(ranking);
      for (let i = 0; i < this.simulation.configuration.count; i++) {
        const matches = this._getMatches(matchMaker);
        matchMaker.addMatch(matches);
        this._setPlayerRatings(matches, ranking);
      }
      this.simulation.tournament = matchMaker;
      console.log(matchMaker);
    }
  }

  _getInitialRanking(): Ranking {
    const ranking = new Ranking();
    this.simulation.players.forEach((player) => ranking.addPlayer(player));
    return ranking;
  }

  private _getMatches(matchMaker: MatchMaker): Match[] {
    let matches: Match[] = [];
    switch (this.simulation.configuration?.matching) {
      case 'random' as Matching:
        matches = matchMaker.getRandomOpponentMatches();
        break;
      case 'seeding' as Matching:
        matches = matchMaker.getSeedingMatches();
        break;
      case 'similar' as Matching:
        matches = matchMaker.getCurrentRatingPairMatches();
        break;
    }
    return matches;
  }

  private _setPlayerRatings(matches: Match[], ranking: Ranking): void {
    switch (this.simulation.configuration?.ranking) {
      case 'elo' as RankingSystem:
        this._setPlayerRatingsElo(matches);
        break;
      case 'glicko' as RankingSystem:
        this._setPlayerRatingsGlicko(matches, ranking);
        break;
      default:
        console.error('Invalid Rating System');
    }
    ranking.sortPlayerRatingsByCurrentRatingDesc();
  }

  private _setPlayerRatingsElo(matches: Match[]): void {
    matches.forEach((match) => {
      if (match.winner && match.loser) {
        // Sieg/Niederlage
        // @ts-ignore
        match.winner.calculateEloScore(match.loser, 1);
        // @ts-ignore
        match.loser.calculateEloScore(match.winner, -1);
      } else if (match.opponents[1]) {
        // Unentschieden
        // @ts-ignore
        match.opponents[0].calculateEloScore(match.opponents[1], 0);
        // @ts-ignore
        match.opponents[1].calculateEloScore(match.opponents[0], 0);
      } else {
        // Spielfrei
        // Spielfrei am ersten Spieltag
        if (match.opponents[0].ratings.length === 1) {
          match.opponents[0].ratings.push(100);
          match.opponents[0].ratings.push(100);
        } else {
          // eslint-disable-next-line no-self-assign
          match.opponents[0].currentRating = match.opponents[0].currentRating;
        }
      }
    });
  }

  _setPlayerRatingsGlicko(matches: Match[], ranking: Ranking): void {
    matches = matches.filter((match) => match.opponents[1]);
    // collect playerInfos with win/loose info
    const matchResultsByPlayer: Map<PlayerRating | undefined | -1, {
      opponent: PlayerRating | undefined | -1,
      result: 0 | 0.5 | 1
    }[]> = new Map();

    for (const match of matches) {
      if (!matchResultsByPlayer.has(match.winner)) {
        matchResultsByPlayer.set(match.winner, []);
      }
      if (!matchResultsByPlayer.has(match.loser)) {
        matchResultsByPlayer.set(match.loser, []);
      }
      if (!match.winner) {
        // draw
        matchResultsByPlayer
          .get(match.opponents[0])
          ?.push({ opponent: match.opponents[1], result: 0.5 });
        matchResultsByPlayer
          .get(match.opponents[1])
          ?.push({ opponent: match.opponents[0], result: 0.5 });
      } else {
        // one player won
        matchResultsByPlayer
          .get(match.winner)
          ?.push({ opponent: match.loser, result: 1 });
        matchResultsByPlayer
          .get(match.loser)
          ?.push({ opponent: match.winner, result: 0 });
      }
    }

    // Update player Rating and RD
    // We need to do it in two loops, since we first need to calc all new values without changing the old ones
    const newRatings: Map<PlayerRating | undefined, {
      rating: number | undefined,
      rd: number | undefined
    }>  = new Map();
    for (const [player, matchResults] of matchResultsByPlayer.entries()) {
      // @ts-ignore
      newRatings.set(player, {
        // @ts-ignore
        rating: player?.calculateGlickoScore(matchResults),
        // @ts-ignore
        rd: player?.glickoNewPlayerRD(matchResults),
      });
    }
    // @ts-ignore
    for (const [player, newRatings] of newRatings) {
      player.currentRating = newRatings.rating;
      player.currentGlickoRD = newRatings.rd;
      player.glickoTimeSinceLastGame = 0;
    }

    // Update all players glickoTimeSinceLastGame+=1
    ranking.playerRatings.forEach(
      (playerRating) => {
        playerRating.glickoTimeSinceLastGame++;
        // this player hat a free pass this round, so his ratings were duplicated
        if (!newRatings.has(playerRating)) {
          // eslint-disable-next-line no-self-assign
          playerRating.currentRating = playerRating.currentRating;
        }
      },
    );
  }
}