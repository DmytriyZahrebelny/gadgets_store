import { Col, Row } from 'antd';

import { Gadgets } from '../gadgets';
import { Header } from '../header';
import { containerStyles } from './gadget-store.styles';

export const GadgetStore = () => {
  return (
    <>
      <Header />
      <Row className={containerStyles}>
        <Col span={5} style={{ background: 'red' }} />
        <Col span={19}>
          <Gadgets />
        </Col>
      </Row>
    </>
  );
};
