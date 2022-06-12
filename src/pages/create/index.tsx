import React from 'react';
import { Blank3 } from '@templates/plain/blank3';
import { ControlPanel } from '@modules/index';
import { Row, Col, Container } from '@components/index';
import SideActionButtons from '@modules/controlPanel/content/sideActionButtons/SideActionButtons';

export const Create = () => {
  const [selected, setSelected] = React.useState(null);
  const [state, setState] = React.useState({});
  return (
    <Container fluid>
      <Row>
        <Col span={8}>
          <Blank3 state={state} setSelected={setSelected} />
        </Col>
        <Col span={3}>
          <ControlPanel state={state} setState={setState} selected={selected} />
        </Col>
        <Col span={1}>
          <SideActionButtons />
        </Col>
      </Row>
    </Container>
  );
};
