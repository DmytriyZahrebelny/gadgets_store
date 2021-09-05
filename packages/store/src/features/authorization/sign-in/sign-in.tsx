import { Button } from 'antd';

import { Form, Field } from '../../../components/form-components';
import { useSignIn } from './use-sign-in';
import { formStyles } from '../authorization.styles';

export const SignIn = () => {
  const { onSubmit, validationScheme } = useSignIn();

  return (
    <Form className={formStyles} onSubmit={onSubmit} formConfig={{ resolver: validationScheme }}>
      <Field type="text" name="email" label="Email" required />
      <Field type="password" name="password" label="Password" required />
      <Button htmlType="submit" type="primary">
        Log in
      </Button>
    </Form>
  );
};
