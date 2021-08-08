import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID'];
  name: Scalars['String'];
  books: Array<Book>;
};

export type Book = {
  __typename?: 'Book';
  _id: Scalars['ID'];
  title: Scalars['String'];
  isbn: Scalars['String'];
  author: Author;
};

export type ConfirmUserInput = {
  email: Scalars['String'];
  confirmToken: Scalars['String'];
};

export type CreateAuthorInput = {
  name: Scalars['String'];
};

export type CreateBookInput = {
  title: Scalars['String'];
  isbn: Scalars['String'];
  author: Scalars['String'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FindBookInput = {
  _id: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  registerUser: User;
  confirmUser: User;
  login?: Maybe<User>;
};

export type MutationCreateAuthorArgs = {
  input: CreateAuthorInput;
};

export type MutationCreateBookArgs = {
  input: CreateBookInput;
};

export type MutationRegisterUserArgs = {
  input: CreateUserInput;
};

export type MutationConfirmUserArgs = {
  input: ConfirmUserInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  authors: Array<Author>;
  books: Array<Book>;
  book: Book;
  me?: Maybe<User>;
  logout?: Maybe<User>;
};

export type QueryBookArgs = {
  input: FindBookInput;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  token: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: Maybe<{ __typename?: 'User'; _id: string; name: string; email: string }>;
};

export type LoginQueryVariables = Exact<{ [key: string]: never }>;

export type LoginQuery = {
  __typename?: 'Query';
  me?: Maybe<{ __typename?: 'User'; _id: string; email: string; name: string }>;
};

export const LoginDocument = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      _id
      name
      email
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginQuery(baseOptions?: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
}
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
