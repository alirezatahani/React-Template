import React, { useState } from 'react';
import { Blank3 } from '@templates/plain/blank3';
import { ControlPanel } from '@modules/index';
import { Row, Col, Container } from '@components/index';
import SideActionButtons from '@modules/controlPanel/content/sideActionButtons/SideActionButtons';

export const Create = () => {
  const [selected, setSelected] = useState(null);
  const [initialValue, setInitialValue] = useState({
    fontType: 'h2',
    fontFamily: 'Roboto',
    fontSize: 12,
    textDecoration: ['underline'],
    fontColor: '#c3c3c3',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
  });

  return (
    <Container fluid>
      <Row>
        <Col span={8}>
          <Blank3 state={initialValue} setSelected={setSelected} />
        </Col>
        <Col span={3}>
          <ControlPanel
            initialValue={initialValue}
            setInitialValue={setInitialValue}
            selected={selected}
          />
        </Col>
        <Col span={1}>
          <SideActionButtons />
        </Col>
      </Row>
    </Container>
  );
};
