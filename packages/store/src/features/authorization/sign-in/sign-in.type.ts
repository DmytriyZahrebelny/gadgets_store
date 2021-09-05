export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Maybe<T> = T | null;

export type LoginInput = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: Maybe<{ __typename?: 'User'; _id: string; name: string; email: string }>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;
