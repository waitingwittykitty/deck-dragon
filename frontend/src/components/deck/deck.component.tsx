import clsx from 'clsx';
import Spinner from 'react-spinner';
import constants from '../../utils/constants';
import Box from '../box/box.component';
import Button from '../button/button.component';
import CardGroup from '../card-group/card-group.component';
import Paragraph from '../paragraph/paragraph.component';
import { WinnerBadge } from '../svg/svg.component';
import styles from './deck.module.css';
import 'react-spinner/react-spinner.css';

function Deck({ game, loading, onDeal, onReset }: DeckProps) {
  const countPerSuite = process.env.REACT_APP_COUNT_PER_SUITE
    ? Number(process.env.REACT_APP_COUNT_PER_SUITE)
    : 13;
  const isWinner = game?.current.some((card) => !(card % countPerSuite));

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

          {game.finished && isWinner && (
            <div className={styles.badge}>
              <WinnerBadge />
            </div>
          )}

          <main className={styles.main}>
            <CardGroup
              className={clsx({ [styles.wiggle]: game.finished && isWinner })}
              cards={game.current}
            />
          </main>

          <footer>
            {game.finished ? (
              <>
                {!isWinner && (
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
