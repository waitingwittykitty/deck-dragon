import { gql } from '@apollo/client';

export const DealDocument = gql`
  mutation Deal($dealId: Int!) {
    deal(id: $dealId) {
      current
      cardsLeft
      acesLeft
      finished
    }
  }
`;
