import Card from '../card/card.component';
import styles from './card-group.module.css';

function CardGroup({ cards }: CardGroupProps) {
  return (
    <ul className={styles.group}>
      {cards.map((card, index) => (
        <Card key={index} className={styles[`curved-${cards.length}`]} card={card} />
      ))}
    </ul>
  );
}

export default CardGroup;
