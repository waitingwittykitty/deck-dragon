import client from './client';
import type { Game, GameResult, DealResult } from './db.d';

export function composeGameResult(game: Game): GameResult {
  return {
    id: game.id,
    user: game.user,
    current: game.cards.slice(game.indicator - game.hand, game.indicator),
    cardsLeft: game.cards.length - game.indicator,
    acesLeft: game.acesLeft,
    finished: game.finished,
  };
}

export function composeDealResult(game: Game): DealResult {
  const gameResult = composeGameResult(game);
  const { current, cardsLeft, acesLeft, finished } = gameResult;

  return { current, cardsLeft, acesLeft, finished };
}

export async function getGameWithId(id: string): Promise<Game> {
  const gameString = await client.hGet('games', id);

  if (!gameString) {
    throw new Error('Game is not found');
  }

  return JSON.parse(gameString) as Game;
}
