import range from 'lodash/range';
import shuffle from 'lodash/shuffle';
import uniqueId from 'lodash/uniqueId';
import client from './client';
import type { GameResult, Game } from './db.d';
import { composeDealResult, composeGameResult, getGameWithId } from './utils';

const countAll = process.env.COUNT_ALL ? Number(process.env.COUNT_ALL) : 52;
const countPerSuite = process.env.COUNT_PER_SUITE ? Number(process.env.COUNT_PER_SUITE) : 13;
const handCount = process.env.HAND ? Number(process.env.HAND) : 5;
const KEY_GAME = 'games';

export async function createGame(user: number): Promise<GameResult> {
  const id = uniqueId('deck_');

  const cards = shuffle(range(0, countAll));

  const acesLeft = cards.filter((value) => !(value % countPerSuite)).length;
  const game: Game = {
    id,
    user,
    cards,
    indicator: 0,
    hand: 0,
    acesLeft,
    finished: false,
  };

  await client.hSet(KEY_GAME, id, JSON.stringify(game));

  return {
    id,
    user: game.user,
    current: [],
    cardsLeft: game.cards.length,
    acesLeft: game.acesLeft,
    finished: false,
  };
}

export async function getGame(id: string): Promise<GameResult> {
  const game = await getGameWithId(id);

  return composeGameResult(game);
}

export async function saveGame(game: Game) {
  await client.hSet(KEY_GAME, game.id, JSON.stringify(game));
}

export async function resetGame(id: string) {
  const game = await getGameWithId(id);
  game.cards = shuffle(range(0, countAll));
  game.acesLeft = game.cards.filter((value) => !(value % countPerSuite)).length;
  game.indicator = 0;
  game.hand = 0;
  game.finished = false;
  await client.hSet(KEY_GAME, game.id, JSON.stringify(game));

  return composeDealResult(game);
}

export async function deal(id: string) {
  const game = await getGameWithId(id);

  if (game.finished) {
    return composeDealResult(game);
  }

  if (game.indicator + handCount >= game.cards.length) {
    game.finished = true;
    game.hand = game.cards.length - game.indicator;
  } else {
    game.hand = handCount;
  }

  const currentCards = game.cards.slice(game.indicator, game.indicator + game.hand);
  game.indicator += game.hand;
  game.acesLeft -= currentCards.filter((card: number) => !(card % countPerSuite)).length;
  await saveGame(game);

  return composeDealResult(game);
}
