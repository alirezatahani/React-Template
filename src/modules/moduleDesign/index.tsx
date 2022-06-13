import { Design94 } from '../../templates/designed/94';
import React from 'react';
import { Row, Col } from '../../components';

export const ModuleDesign = () => {
  return (
    <Row>
      {/* <Col xs={3} sm={3} md={6} lg={3} xl={3}>
        <div
          style={{ width: '100%', height: '100vh', background: 'red' }}
        ></div>
      </Col> */}
      <Col xs={12}>
        <div>
          <Design94 />
        </div>
      </Col>
      {/* <Col xs={3}>
        {' '}
        <div
          style={{ width: '100%', height: '100vh', background: 'blue' }}
        ></div> */}
      {/* </Col> */}
    </Row>
  );
};
