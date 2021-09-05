import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Menu } from './menu';
import { SignUp } from './sign-up';
import { SignIn } from './sign-in';
import { Icon } from '../../components/Icon';
import { contentStyles, headerStyles, containerStyles, authorizationStyles } from './authorization.styles';
import { ROUTES } from '../../app.constants';

export const Authorization = () => {
  return (
    <Layout className={contentStyles}>
      <header className={headerStyles}>
        <Icon name="logo" />
      </header>
      <div className={authorizationStyles}>
        <div className={containerStyles}>
          <Menu />
          <Switch>
            <Redirect exact from="/" to={ROUTES.singIn} />
            <Route exact path={ROUTES.singIn} component={SignIn} />
            <Route exact path={ROUTES.signUp} component={SignUp} />
          </Switch>
        </div>
      </div>
    </Layout>
  );
};
