export type Game = {
  id: string;
  user: number;
  cards: number[];
  indicator: number;
  hand: number;
  acesLeft: number;
  finished: boolean;
};

export type GameResult = {
  id: string;
  user: number;
  current: number[];
  cardsLeft: number;
  acesLeft: number;
  finished: boolean;
};

export type DealResult = {
  current: number[];
  cardsLeft: number;
  acesLeft: number;
  finished: boolean;
};
