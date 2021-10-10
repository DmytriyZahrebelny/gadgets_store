import { Route, Switch } from 'react-router-dom';
import { css } from '@emotion/css';

import Layout from 'antd/lib/layout/layout';
import { Authorization } from './authorization';
import { GadgetStore } from './gadget-store';
import { ROUTES } from './app.constants';

export const contentStyles = css`
  height: 100vh;
  overflow: auto;
`;

const App = () => (
  <Layout className={contentStyles}>
    <Switch>
      <Route exact path={['/', ROUTES.gadgets]} component={GadgetStore} />
      <Route path={[ROUTES.singIn, ROUTES.signUp]} component={Authorization} />
    </Switch>
  </Layout>
);

export default App;
