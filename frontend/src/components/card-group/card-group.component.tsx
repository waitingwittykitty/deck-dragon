import clsx from 'clsx';
import { useMemo } from 'react';
import Card from '../card/card.component';
import styles from './card-group.module.css';

function CardGroup({ cards, className }: CardGroupProps) {
  const length = cards?.length || 0;

  const classNames = useMemo(() => {
    if (length === 5) {
      return ['-curved-2', '-curved-1', 'curved', 'curved-1', 'curved-2'];
    }
    if (length === 4) {
      return ['-curved-1', 'curved', 'curved', 'curved-1'];
    }
    if (length === 3) {
      return ['-curved-1', 'curved', 'curved-1'];
    }
    if (length === 2) {
      return ['curved', 'curved'];
    }

    return ['curved'];
  }, [length]);

  return (
    <ul className={styles.group}>
      {cards?.map((card, index) => (
        <Card
          key={card}
          className={clsx(className, styles.card, styles[classNames[index]])}
          card={card}
        />
      ))}
    </ul>
  );
}

export default CardGroup;
