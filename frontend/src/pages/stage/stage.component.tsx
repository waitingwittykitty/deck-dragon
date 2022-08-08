import { useQuery } from '@apollo/client';
import Deck from '../../components/deck/deck.component';
import ErrorBox from '../../components/error-box/error-box.component';
import { CurrentUserDetailsDocument } from '../../graphql/queries/current-user-details';

function Stage() {
  const { data, loading, error, refetch } = useQuery(CurrentUserDetailsDocument);
  const cards = data?.me?.game?.current;

  return error ? (
    <ErrorBox error={error} retry={refetch} />
  ) : (
    <Deck loading={loading} cards={cards} />
  );
}

export default Stage;
