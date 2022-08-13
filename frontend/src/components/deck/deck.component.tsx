import clsx from 'clsx';
import Spinner from 'react-spinner';
import constants from '../../utils/constants';
import { isAce } from '../../utils/helpers';
import Box from '../box/box.component';
import Button from '../button/button.component';
import CardGroup from '../card-group/card-group.component';
import Paragraph from '../paragraph/paragraph.component';
import { WinnerBadge } from '../svg/svg.component';
import styles from './deck.module.css';
import 'react-spinner/react-spinner.css';

function Deck({ game, loading, onDeal, onReset }: DeckProps) {
  const hasAce = game?.current.some((card) => isAce(card));
  const isWinner = game?.finished && hasAce;

  return (
    <section className={styles.section}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header className={styles.header}>
            <Box title={game.cardsLeft.toString()} description="Cards Left" />
            <Box title={game.acesLeft.toString()} description="Aces Left" />
          </header>

          {isWinner && (
            <div className={styles.badge}>
              <WinnerBadge />
            </div>
          )}

          <main className={styles.main}>
            <CardGroup className={clsx({ [styles.wiggle]: isWinner })} cards={game.current} />
          </main>

          <footer>
            {game.finished ? (
              <>
                {!hasAce && (
                  <>
                    <Paragraph>{constants.lost}</Paragraph>
                    <Paragraph>{constants.lostDescription}</Paragraph>
                  </>
                )}

                <Button className={styles.again} size="small" variant="secondary" onClick={onReset}>
                  {constants.playAgain}
                </Button>
              </>
            ) : (
              <>
                <Button className={styles.deal} size="big" variant="primary" onClick={onDeal}>
                  {constants.deal}
                </Button>

                <Button className={styles.reset} size="small" variant="secondary" onClick={onReset}>
                  {constants.reset}
                </Button>
              </>
            )}
          </footer>
        </>
      )}
    </section>
  );
}

export default Deck;
