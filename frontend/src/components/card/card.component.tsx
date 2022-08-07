import clsx from 'clsx';
import Symbol from '../symbol/symbol.component';
import styles from './card.module.css';

function Card({ card, className }: CardProps) {
  return (
    <li className={clsx(className, styles.card)}>
      <h2 className={clsx(styles.number, [styles[card.suite]])}>{card.rank}</h2>
      <div className={styles.background}>
        <Symbol className={styles.symbol} suite={card.suite} variant="small" />
        <Symbol className={styles.image} suite={card.suite} variant="big" />
      </div>
    </li>
  );
}

export default Card;
