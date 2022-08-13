import { useApolloClient, useQuery } from '@apollo/client';
import { CurrentUserDetailsDocument } from '../../graphql/queries/current-user-details';
import constants from '../../utils/constants';
import Button from '../button/button.component';
import styles from './user-menu.module.css';

function UserMenu() {
  const client = useApolloClient();
  const { data } = useQuery(CurrentUserDetailsDocument);
  const username = data?.me?.username;

  const handleLogout = () => {
    localStorage.removeItem('token');
    client.refetchQueries({ include: [CurrentUserDetailsDocument] });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {username && (
          <>
            <li className={styles.item}>
              <span className={styles.hello}>{constants.hello}</span>
              <span className={styles.name}>{username}</span>
            </li>

            <li className={styles.item}>
              <Button size="small" variant="secondary" onClick={handleLogout}>
                {constants.logout}
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default UserMenu;
