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
    bgImageColor: '#F5F5F5',
    textAlign: 'center',
    btnText: 'Some text',
    btnSize: 'md',
    imageOpacity: '100',
    boxShadow: {
      PositionX: '0px',
      PositionY: '0px',
      spread: '0px',
      blur: '0px',
    },
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
