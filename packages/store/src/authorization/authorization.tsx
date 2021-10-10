import { Layout } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';

import { Menu } from './menu';
import { SignUp } from './sign-up';
import { SignIn } from './sign-in';
import { Icon } from '../components/Icon';
import { headerStyles, containerStyles, authorizationStyles } from './authorization.styles';
import { ROUTES } from '../app.constants';

export const Authorization = () => (
  <Layout>
    <header className={headerStyles}>
      <Link to={ROUTES.gadgets}>
        <Icon name="logo" />
      </Link>
    </header>
    <div className={authorizationStyles}>
      <div className={containerStyles}>
        <Menu />
        <Switch>
          <Route path={ROUTES.singIn} component={SignIn} />
          <Route path={ROUTES.signUp} component={SignUp} />
        </Switch>
      </div>
    </div>
  </Layout>
);
