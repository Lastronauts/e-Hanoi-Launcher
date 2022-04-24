import { useRankingScoreQuery } from '../../queries/score/rankingScore.generated';
import Loading from '../../../components/common/Loading';
import RankingTable, {
  createTableData,
} from '../../../components/RankingTable';

export default function RankingScore() {
  const { loading, error, data } = useRankingScoreQuery();

  if (loading) {
    return <Loading />;
  }
  if (error || !data) {
    console.error(JSON.stringify(error, null, 2));
    console.error(JSON.stringify(data, null, 2));
    return (
      <div>
        <p>Error: {JSON.stringify(error, null, 2)}</p>
        <p>Data: {JSON.stringify(data, null, 2)}</p>
      </div>
    );
  }

  const tableData = data.rankingScore.map((score) => {
    return createTableData(score.user.name, score.clearTime, score.createdAt);
  });

  return <RankingTable rows={tableData} />;
}
