import constants from '../../utils/constants';
import Box from '../box/box.component';
import Button from '../button/button.component';
import styles from './deck.module.css';

function Deck() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Box title="0" description="Cards Left" />
        <Box title="0" description="Aces Left" />
      </header>

      <main className={styles.main} />

      <footer className={styles.footer}>
        <Button size="big" variant="primary" position="center">
          {constants.deal}
        </Button>

        <Button size="small" variant="secondary" position="end">
          {constants.reset}
        </Button>
      </footer>
    </section>
  );
}

export default Deck;
