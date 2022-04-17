import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import Layout from '../components/common/Layout';
import Auth from '../components/Auth';
import AlreadySignedIn from '../components/AlreadySignedIn';
import { auth } from '../utils/firebase/auth';

const SignForm: NextPage = () => {
  const [userState, setUser] = useState<User | null>(null);

  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    }),
    []
  );

  return (
    <Layout>
      <Head>
        <title>e-Hanoi | SignUp/SignIn</title>
      </Head>
      <main>
        <div style={{ margin: 10 }}>
          {userState ? <AlreadySignedIn /> : <Auth />}
        </div>
      </main>
    </Layout>
  );
};

export default SignForm;
