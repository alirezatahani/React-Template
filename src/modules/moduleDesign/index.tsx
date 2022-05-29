import * as React from 'react';
import { Row, Col } from '../../components';

export const ModuleDesign = () => {
  return (
    <Row>
      <Col xs={3} sm={3} md={6} lg={12} xl={12}>
        <div
          style={{ width: '100%', height: '100vh', background: 'red' }}
        ></div>
      </Col>
      <Col xs={6}>
        {' '}
        <div
          style={{ width: '100%', height: '100vh', background: 'yellow' }}
        ></div>
      </Col>
      <Col xs={3}>
        {' '}
        <div
          style={{ width: '100%', height: '100vh', background: 'blue' }}
        ></div>
      </Col>
    </Row>
  );
};
