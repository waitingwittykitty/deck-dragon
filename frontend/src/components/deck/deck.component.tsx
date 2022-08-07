import AceCounter from './ace-counter/ace-counter.component';
import CardCounter from './card-counter/card-counter.component';
import styles from './deck.module.css';

function Deck() {
  return (
    <section>
      <header className={styles.header}>
        <CardCounter count={0} />

        <AceCounter count={0} />
      </header>
    </section>
  );
}

export default Deck;
