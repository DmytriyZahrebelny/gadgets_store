import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import RegisterMutation from '../../graphql/Register.mutation.gql';
import { RegisterMutationType, RegistrMutationVariables, RegisterInput } from '../../types';
import { ROUTES } from '../../app.constants';

export const useSignUp = () => {
  const history = useHistory();
  const [register] = useMutation<RegisterMutationType, RegistrMutationVariables>(RegisterMutation);

  const onSubmit = (data: RegisterInput) => {
    const { email, password, name } = data;
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
