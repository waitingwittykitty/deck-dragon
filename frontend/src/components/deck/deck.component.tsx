import Spinner from 'react-spinner';
import constants from '../../utils/constants';
import Box from '../box/box.component';
import Button from '../button/button.component';
import CardGroup from '../card-group/card-group.component';
import styles from './deck.module.css';
import 'react-spinner/react-spinner.css';

function Deck({ cards, loading }: DeckProps) {
  return (
    <section className={styles.section}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header className={styles.header}>
            <Box title="0" description="Cards Left" />
            <Box title="0" description="Aces Left" />
          </header>

          <main className={styles.main}>
            <CardGroup cards={cards} />
          </main>

          <footer>
            <Button className={styles.deal} size="big" variant="primary">
              {constants.deal}
            </Button>

            <Button className={styles.reset} size="small" variant="secondary">
              {constants.reset}
            </Button>
          </footer>
        </>
      )}
    </section>
  );
}

export default Deck;
