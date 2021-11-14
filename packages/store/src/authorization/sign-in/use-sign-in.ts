import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import LoginMutation from '../../graphql/Login.mutation.gql';
import QueryMe from '../../graphql/Me.query.gql';
import { LoginMutationType, LoginMutationVariables, LoginInput } from '../../types';

export const useSignIn = () => {
  const history = useHistory();
  const [login, { error, loading }] = useMutation<LoginMutationType, LoginMutationVariables>(LoginMutation, {
    refetchQueries: [{ query: QueryMe }],
  });

  const onSubmit = (data: LoginInput) => {
    const { email, password } = data;
    login({ variables: { input: { email, password } } });

    history.push('/');
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
