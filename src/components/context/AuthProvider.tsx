import { createContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase/auth';

type Props = {
  children: JSX.Element;
};

type AuthContextProps = {
  currentUser: User | null | undefined;
  isSignedIn: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  isSignedIn: false,
});

const AuthProvider = (props: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsSignedIn(true);

        (async () => {
          const token = await user.getIdToken();
          localStorage.setItem('token', token);
        })();
      } else {
        setCurrentUser(null);
        setIsSignedIn(false);

        localStorage.removeItem('token');
      }
    });
  });

  return (
    <AuthContext.Provider value={{ currentUser, isSignedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
