import { NextPage } from 'next';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Layout from '../components/common/Layout';
import RankingScoreHandler from '../graphql/handler/score/RankingScoreHandler';

const RankingScore: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>e-Hanoi | Ranking</title>
      </Head>
      <main>
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid container style={{ justifyContent: 'center' }} item margin={3}>
            <Typography variant="h3">👑</Typography>
          </Grid>
        </Grid>
        <Grid container style={{ justifyContent: 'center' }}>
          <RankingScoreHandler />
        </Grid>
      </main>
    </Layout>
  );
};

export default RankingScore;
