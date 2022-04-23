import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/common/Layout';
import CreateUserInDbHandler from '../graphql/handler/user/CreateUserInDbHandler';

const CreateUser: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>e-Hanoi | SignUp</title>
      </Head>
      <main>
        <CreateUserInDbHandler />
      </main>
    </Layout>
  );
};

export default CreateUser;
