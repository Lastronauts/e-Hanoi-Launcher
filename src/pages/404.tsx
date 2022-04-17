import ErrorPage from 'next/error';
import Layout from '../components/common/Layout';

export default function Error404() {
  return (
    <Layout>
      <ErrorPage statusCode={404} />
    </Layout>
  );
}
