import { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Layout from '../components/common/Layout';
import { AuthContext } from '../components/context/AuthProvider';
import Auth from '../components/Auth';
import AlreadySignedIn from '../components/AlreadySignedIn';

const SignForm: NextPage = () => {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <Layout>
      <Head>
        <title>e-Hanoi | SignUp/SignIn</title>
      </Head>
      <main>
        <div style={{ margin: 10 }}>
          {isSignedIn ? <AlreadySignedIn /> : <Auth />}
        </div>
      </main>
    </Layout>
  );
};

export default SignForm;
