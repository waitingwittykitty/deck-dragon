import { gql } from '@apollo/client';

export const CreateGameDocument = gql`
  mutation CreateGame {
    createGame {
      current
      cardsLeft
      acesLeft
      finished
    }
  }
`;
