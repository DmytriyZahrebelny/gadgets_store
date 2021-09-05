import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import MutationRegister from './graphql/register.mutation.gql';
import { RegisterMutation, RegistrMutationVariables, RegisterInput } from './sign-up.type';
import { ROUTES } from '../../../app.constants';

export const useSignUp = () => {
  const history = useHistory();
  const [register] = useMutation<RegisterMutation, RegistrMutationVariables>(MutationRegister);

  const onSubmit = (data: Record<string, unknown>) => {
    const { email, password, name } = data as RegisterInput;
    register({ variables: { input: { email, password, name } } });

    history.push(ROUTES.singIn);
  };

  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    email: yup.string().min(3).required().email(),
    password: yup.string().min(8).max(40).required(),
  });

  return {
    onSubmit,
    validationScheme: yupResolver(schema),
  };
};
