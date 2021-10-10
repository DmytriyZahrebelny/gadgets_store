import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';

import { LoginMutation, LoginMutationVariables, LoginInput } from './sign-in.type';
import MutationLogin from '../../graphql/Login.mutation.gql';
import QueryMe from '../../graphql/Me.query.gql';

export const useSignIn = () => {
  const [login, { error, loading }] = useMutation<LoginMutation, LoginMutationVariables>(MutationLogin, {
    refetchQueries: [{ query: QueryMe }],
  });

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
    error,
    loading,
    validationScheme: yupResolver(schema),
  };
};
