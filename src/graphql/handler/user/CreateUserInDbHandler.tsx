import Router from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../components/context/AuthProvider';
import Loading from '../../../components/common/Loading';
import { useListUserLazyQuery } from '../../queries/user/listUser.generated';
import { useCreateUserInDbMutation } from '../../queries/user/createUserInDB.generated';
import { logout } from '../../../utils/firebase/auth';

export default function CreateUserInDbHandler() {
  const [listUserQuery, listUserState] = useListUserLazyQuery();
  const [createUserInDbMutation, { loading, error, data }] =
    useCreateUserInDbMutation();

  const [isSignedIn, setIsSignedIn] = useState<boolean | undefined>(undefined);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (currentUser && currentUser.displayName) {
        const listUser = await listUserQuery({
          variables: {
            name: currentUser.displayName,
          },
        });

        if (listUser.data) {
          const isIncludesUID = listUser.data.listUser
            .map((user) => {
              return user.id;
            })
            .includes(currentUser.uid);
          if (!isIncludesUID) {
            await createUserInDbMutation({
              variables: {
                newUser: {
                  name: currentUser.displayName,
                },
              },
            });
          } else {
            setIsSignedIn(true);
          }
        }
      }
    })();
  }, [currentUser, createUserInDbMutation, listUserQuery]);

  useEffect(() => {
    if (isSignedIn) {
      Router.push('/');
    }
  }, [isSignedIn]);

  if (error) {
    console.error(error);
    logout();
    Router.push('/');
  }

  if (data) {
    Router.push('/');
  }

  return <div>{loading ? <Loading /> : ''}</div>;
}
