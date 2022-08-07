import Box from './box/box.component';
import styles from './deck.module.css';

function Deck() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Box title="0" description="Cards Left" />
        <Box title="0" description="Aces Left" />
      </header>
    </section>
  );
}

export default Deck;
