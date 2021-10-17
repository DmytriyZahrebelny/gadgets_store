export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Maybe<T> = T | null;

export type Product = {
  __typename?: 'Product';
  modelName: string;
  price: number;
  images: string;
  _id: string;
  company: { __typename?: 'Company'; _id: string; name: string };
};

export type GadgetsQueryType = {
  products: Product[];
};

export type MeQueryType = {
  me?: { __typename?: 'User'; _id: string; email: string; name: string } | null;
};

export type RegisterInput = {
  email: string;
  password: string;
  name: string;
};

export type RegistrMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutationType = {
  __typename?: 'Mutation';
  login?: Maybe<{ __typename?: 'User'; _id: string; name: string; email: string }>;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutationType = {
  __typename?: 'Mutation';
  login?: Maybe<{ __typename?: 'User'; _id: string; name: string; email: string }>;
};
