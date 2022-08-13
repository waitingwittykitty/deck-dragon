import { gql } from '@apollo/client';

export const GameDetailsDocument = gql`
  query GameDetails {
    game {
      id
      current
      cardsLeft
      acesLeft
      finished
    }
  }
`;
