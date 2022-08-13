interface DeckProps {
  game: {
    current: CardNumber[];
    acesLeft: number;
    cardsLeft: number;
    finished: boolean;
  };
  loading: boolean;
  onDeal: () => void;
  onReset: () => void;
}
