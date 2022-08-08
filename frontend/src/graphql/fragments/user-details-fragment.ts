import { gql } from '@apollo/client';

export const UserDetailsFragment = gql`
  fragment UserDetailsFragment on User {
    id
    username
    game {
      id
      current
      cardsLeft
      acesLeft
      finished
    }
  }
`;
