import { gql } from '@apollo/client';

export const UserDetailsFragment = gql`
  fragment UserDetailsFragment on User {
    id
    username
  }
`;
