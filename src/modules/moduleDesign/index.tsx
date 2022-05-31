<<<<<<< HEAD
=======
import { Design94 } from '../../templates/designed/preDesigned#94';
>>>>>>> baa43e65bbb8c40af9a62a3ba755b352f8ba310a
import * as React from 'react';
import { Row, Col } from '../../components';

export const ModuleDesign = () => {
  return (
    <Row>
<<<<<<< HEAD
      <Col xs={3} sm={3} md={6} lg={3} xl={3}>
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
=======
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
>>>>>>> baa43e65bbb8c40af9a62a3ba755b352f8ba310a
    </Row>
  );
};
