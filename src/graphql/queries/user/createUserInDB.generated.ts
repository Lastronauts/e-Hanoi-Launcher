import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateUserInDbMutationVariables = Types.Exact<{
  newUser: Types.NewUser;
}>;


export type CreateUserInDbMutation = { __typename?: 'Mutation', createUserInDB: { __typename?: 'User', id: string, name: string } };


export const CreateUserInDbDocument = gql`
    mutation createUserInDB($newUser: NewUser!) {
  createUserInDB(newUser: $newUser) {
    id
    name
  }
}
    `;
export type CreateUserInDbMutationFn = Apollo.MutationFunction<CreateUserInDbMutation, CreateUserInDbMutationVariables>;

/**
 * __useCreateUserInDbMutation__
 *
 * To run a mutation, you first call `useCreateUserInDbMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserInDbMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserInDbMutation, { data, loading, error }] = useCreateUserInDbMutation({
 *   variables: {
 *      newUser: // value for 'newUser'
 *   },
 * });
 */
export function useCreateUserInDbMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserInDbMutation, CreateUserInDbMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserInDbMutation, CreateUserInDbMutationVariables>(CreateUserInDbDocument, options);
      }
export type CreateUserInDbMutationHookResult = ReturnType<typeof useCreateUserInDbMutation>;
export type CreateUserInDbMutationResult = Apollo.MutationResult<CreateUserInDbMutation>;
export type CreateUserInDbMutationOptions = Apollo.BaseMutationOptions<CreateUserInDbMutation, CreateUserInDbMutationVariables>;