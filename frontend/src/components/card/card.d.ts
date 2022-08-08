type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

type Suite = 'clover' | 'diamond' | 'heart' | 'spade';

type Card = {
  rank: Rank;
  suite: Suite;
};

type CardNumber = number;

interface CardProps {
  className: string;
  card: CardNumber;
}
