import Router from 'next/router';
import { useEffect, useContext } from 'react';;
import { useCreateUserInDbMutation } from '../../queries/user/createUserInDB.generated';
import { AuthContext } from '../../../components/common/AuthProvider';
import { logout } from '../../../utils/firebase/auth'

export default function CreateUserInDbHandler() {
  const [createUserInDbMutation, { loading, error, data }] =
    useCreateUserInDbMutation();

  const { currentUser } = useContext(AuthContext);

  if (currentUser && currentUser.displayName) {
    createUserInDbMutation({
      variables: {
        newUser: {
          name: currentUser.displayName,
        },
      },
    });
  }

  useEffect(() => {
    if (error) {
      console.error(error);
      logout();
      Router.push('/');
    }
  });

  return (
    <div>
      <div>{loading ? 'loading' : ''}</div>
      <div>{data ? data.createUserInDB.name : 'undefined'}</div>
    </div>
  );
}
