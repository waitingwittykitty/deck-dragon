import Deck from '../../components/deck/deck.component';

function Stage() {
  return (
    <Deck
      cards={[
        { rank: 'A', suite: 'spade' },
        { rank: '7', suite: 'diamond' },
        { rank: 'K', suite: 'clover' },
        { rank: '9', suite: 'heart' },
        { rank: '4', suite: 'clover' },
      ]}
    />
  );
}

export default Stage;
