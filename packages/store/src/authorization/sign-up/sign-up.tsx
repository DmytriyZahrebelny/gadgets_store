import { Button } from 'antd';

import { Form, Field } from '../../components/form-components';
import { useSignUp } from './use-sign-up';
import { formStyles } from '../authorization.styles';

export const SignUp = () => {
  const { onSubmit, validationScheme } = useSignUp();

  return (
    <Form className={formStyles} onSubmit={onSubmit} formConfig={{ resolver: validationScheme }}>
      <Field type="text" name="name" label="Name" required />
      <Field type="text" name="email" label="Email" required />
      <Field type="password" name="password" label="Password" required />
      <Button htmlType="submit" type="primary">
        Create an account
      </Button>
    </Form>
  );
};
