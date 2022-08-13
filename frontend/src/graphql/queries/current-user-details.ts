import { gql } from '@apollo/client';
import { UserDetailsFragment } from '../fragments/user-details-fragment';

export const CurrentUserDetailsDocument = gql`
  query CurrentUserDetails {
    me {
      ...UserDetailsFragment
    }
  }
  ${UserDetailsFragment}
`;
