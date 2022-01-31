import * as React from 'react';
import { UserListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: UserListQuery;
}

const className = 'UserList';

const UserList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Users</h3>
    <ol className={`${className}__list`}>
      {!!data.users &&
        data.users.map(
          (user, i) =>
            !!user && (
              <li key={i} className={`${className}__item`}>
                {user.firstName} ({user.lastName})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default UserList;