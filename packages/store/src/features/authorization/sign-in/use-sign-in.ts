import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';

import { LoginMutation, LoginMutationVariables, LoginInput } from './sign-in.type';
import MutationLogin from './graphql/Login.mutation.gql';

export const useSignIn = () => {
  const [login] = useMutation<LoginMutation, LoginMutationVariables>(MutationLogin);

  const onSubmit = (data: Record<string, unknown>) => {
    const { email, password } = data as LoginInput;
    login({ variables: { input: { email, password } } });
  };

  const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required(),
  });

  return {
    onSubmit,
    validationScheme: yupResolver(schema),
  };
};
