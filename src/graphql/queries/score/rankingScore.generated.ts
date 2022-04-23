import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RankingScoreQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RankingScoreQuery = { __typename?: 'Query', rankingScore: Array<{ __typename?: 'Score', id: string, userID: string, clearTime: number, createdAt: number, user: { __typename?: 'User', id: string, name: string } }> };


export const RankingScoreDocument = gql`
    query rankingScore {
  rankingScore {
    id
    userID
    clearTime
    createdAt
    user {
      id
      name
    }
  }
}
    `;

/**
 * __useRankingScoreQuery__
 *
 * To run a query within a React component, call `useRankingScoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useRankingScoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRankingScoreQuery({
 *   variables: {
 *   },
 * });
 */
export function useRankingScoreQuery(baseOptions?: Apollo.QueryHookOptions<RankingScoreQuery, RankingScoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RankingScoreQuery, RankingScoreQueryVariables>(RankingScoreDocument, options);
      }
export function useRankingScoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RankingScoreQuery, RankingScoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RankingScoreQuery, RankingScoreQueryVariables>(RankingScoreDocument, options);
        }
export type RankingScoreQueryHookResult = ReturnType<typeof useRankingScoreQuery>;
export type RankingScoreLazyQueryHookResult = ReturnType<typeof useRankingScoreLazyQuery>;
export type RankingScoreQueryResult = Apollo.QueryResult<RankingScoreQuery, RankingScoreQueryVariables>;