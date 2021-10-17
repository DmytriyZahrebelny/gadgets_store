import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

import { headerStyles, headerContainerStyles } from './header.styles';
import { HeaderSearch } from './header-search';
import { HeaderLogin } from './header-login';

export const Header = () => {
  return (
    <div className={headerStyles}>
      <Row className={headerContainerStyles} align="middle">
        <Col span={5}>
          <Link to="/">
            <Icon name="logo" />
          </Link>
        </Col>
        <Col span={14}>
          <HeaderSearch />
        </Col>
        <Col span={2}>
          <HeaderLogin />
        </Col>
        <Col span={2}>sign-in</Col>
      </Row>
    </div>
  );
};
