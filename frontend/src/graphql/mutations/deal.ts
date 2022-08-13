import { gql } from '@apollo/client';

export const DealDocument = gql`
  mutation Deal {
    deal {
      current
      cardsLeft
      acesLeft
      finished
    }
  }
`;
