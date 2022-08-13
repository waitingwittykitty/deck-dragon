import { gql } from '@apollo/client';

export const ResetDocument = gql`
  mutation Reset {
    reset {
      current
      cardsLeft
      acesLeft
      finished
    }
  }
`;
