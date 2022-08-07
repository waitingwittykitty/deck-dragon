import constants from '../../utils/constants';
import Box from '../box/box.component';
import Button from '../button/button.component';
import CardGroup from '../card-group/card-group.component';
import styles from './deck.module.css';

function Deck() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Box title="0" description="Cards Left" />
        <Box title="0" description="Aces Left" />
      </header>

      <main className={styles.main}>
        <CardGroup
          cards={[
            { rank: 'A', suite: 'spade' },
            { rank: '7', suite: 'diamond' },
            { rank: 'K', suite: 'clover' },
            { rank: '9', suite: 'heart' },
            { rank: '4', suite: 'clover' },
          ]}
        />
      </main>

      <footer>
        <Button className={styles.deal} size="big" variant="primary">
          {constants.deal}
        </Button>

        <Button className={styles.reset} size="small" variant="secondary">
          {constants.reset}
        </Button>
      </footer>
    </section>
  );
}

export default Deck;
