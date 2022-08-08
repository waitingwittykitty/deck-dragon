import clsx from 'clsx';
import Symbol from '../symbol/symbol.component';
import { composeCard } from './card.utils';
import styles from './card.module.css';

function Card({ card, className }: CardProps) {
  const composedCard = composeCard(card);

  return (
    <li className={clsx(className, styles.card)}>
      <h2 className={clsx(styles.number, [styles[composedCard.suite]])}>{composedCard.rank}</h2>
      <div className={styles.background}>
        <Symbol className={styles.symbol} suite={composedCard.suite} variant="small" />
        <Symbol className={styles.image} suite={composedCard.suite} variant="big" />
      </div>
    </li>
  );
}

export default Card;
