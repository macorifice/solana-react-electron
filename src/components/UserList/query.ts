import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query UserList {
    users {
        id,
        firstName,
        lastName,
        isActive
    }
  }
`;