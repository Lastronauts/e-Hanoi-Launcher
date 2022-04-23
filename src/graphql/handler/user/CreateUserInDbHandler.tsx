import Router from 'next/router';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../../../components/common/AuthProvider';
import { useCreateUserInDbMutation } from '../../queries/user/createUserInDB.generated';
import { logout } from '../../../utils/firebase/auth';

export default function CreateUserInDbHandler() {
  const [createUserInDbMutation, { loading, error, data }] =
    useCreateUserInDbMutation();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (currentUser && currentUser.displayName) {
        await createUserInDbMutation({
          variables: {
            newUser: {
              name: currentUser.displayName,
            },
          },
        });
      }
    })();
  }, [currentUser, createUserInDbMutation]);

  if (error) {
    console.error(error);
    logout();
    Router.push('/');
  }

  if (data) {
    Router.push('/');
  }

  return (
    <div>
      <div>{loading ? 'loading' : ''}</div>
    </div>
  );
}
