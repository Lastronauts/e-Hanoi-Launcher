import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListUserQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  range?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type ListUserQuery = { __typename?: 'Query', listUser: Array<{ __typename?: 'User', id: string, name: string }> };


export const ListUserDocument = gql`
    query listUser($name: String!, $start: Int, $range: Int) {
  listUser(name: $name, start: $start, range: $range) {
    id
    name
  }
}
    `;

/**
 * __useListUserQuery__
 *
 * To run a query within a React component, call `useListUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUserQuery({
 *   variables: {
 *      name: // value for 'name'
 *      start: // value for 'start'
 *      range: // value for 'range'
 *   },
 * });
 */
export function useListUserQuery(baseOptions: Apollo.QueryHookOptions<ListUserQuery, ListUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUserQuery, ListUserQueryVariables>(ListUserDocument, options);
      }
export function useListUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUserQuery, ListUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUserQuery, ListUserQueryVariables>(ListUserDocument, options);
        }
export type ListUserQueryHookResult = ReturnType<typeof useListUserQuery>;
export type ListUserLazyQueryHookResult = ReturnType<typeof useListUserLazyQuery>;
export type ListUserQueryResult = Apollo.QueryResult<ListUserQuery, ListUserQueryVariables>;