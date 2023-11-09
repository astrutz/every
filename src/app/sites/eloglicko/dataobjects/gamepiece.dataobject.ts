const gamePieceKeys = ['', 'Bishop', 'King', 'Rook', 'Queen', 'Knight'] as const;
export type GamePiece = typeof gamePieceKeys[number];

export function getRandomGamePiece(): GamePiece {
  return gamePieceKeys[Math.floor(Math.random()*gamePieceKeys.length)];
}
