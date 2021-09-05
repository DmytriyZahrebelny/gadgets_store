export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Maybe<T> = T | null;

export type RegisterInput = {
  email: string;
  password: string;
  name: string;
};

export type RegistrMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  login?: Maybe<{ __typename?: 'User'; _id: string; name: string; email: string }>;
};
