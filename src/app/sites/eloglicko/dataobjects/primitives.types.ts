const gamePieceKeys = ['', 'Bishop', 'King', 'Rook', 'Queen', 'Knight'] as const;
export type GamePiece = typeof gamePieceKeys[number];

export type Matching = 'random' | 'seeded' | 'similar';
export type Ranking = 'elo' | 'glicko';

export type Configuration = {
  matching: Matching;
  ranking: Ranking;
  count: number;
  allowUnderdogWins: boolean;
}

export function getRandomGamePiece(): GamePiece {
  return gamePieceKeys[Math.floor(Math.random() * gamePieceKeys.length)];
}
