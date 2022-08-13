import { useMutation, useQuery } from '@apollo/client';
import Deck from '../../components/deck/deck.component';
import ErrorBox from '../../components/error-box/error-box.component';
import { CreateGameDocument } from '../../graphql/mutations/createGame';
import { DealDocument } from '../../graphql/mutations/deal';
import { ResetDocument } from '../../graphql/mutations/reset';
import { GameDetailsDocument } from '../../graphql/queries/game-details';

function Stage() {
  const { data, loading, error } = useQuery(GameDetailsDocument);
  const [deal] = useMutation(DealDocument, {
    refetchQueries: [{ query: GameDetailsDocument }],
  });
  const [reset] = useMutation(ResetDocument, {
    refetchQueries: [{ query: GameDetailsDocument }],
  });
  const [createGame] = useMutation(CreateGameDocument, {
    refetchQueries: [{ query: GameDetailsDocument }],
  });
  const game = data?.game;

  const handleDeal = () => {
    deal();
  };

  const handleReset = () => {
    reset();
  };

  const handleRetry = () => {
    createGame();
  };

  return error ? (
    <ErrorBox error={error} retry={handleRetry} />
  ) : (
    <Deck loading={loading} game={game} onDeal={handleDeal} onReset={handleReset} />
  );
}

export default Stage;
