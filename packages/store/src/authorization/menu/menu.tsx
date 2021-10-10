import { Link, useLocation } from 'react-router-dom';
import { cx } from '@emotion/css';

import { ROUTES } from '../../app.constants';
import { menuStyles, activeLinkStyle } from './menu.styles';

export const Menu = () => {
  const { pathname } = useLocation();

  return (
    <div className={menuStyles}>
      <Link className={cx({ [activeLinkStyle]: pathname === ROUTES.singIn })} to={ROUTES.singIn}>
        Log in
      </Link>
      <Link className={cx({ [activeLinkStyle]: pathname === ROUTES.signUp })} to={ROUTES.signUp}>
        Create an account
      </Link>
    </div>
  );
};
