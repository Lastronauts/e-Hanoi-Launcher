import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/common/Layout';
import Introduce from '../components/Introduce';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>e-Hanoi</title>
      </Head>
      <main>
        <Introduce />
      </main>
    </Layout>
  );
};

export default Home;
