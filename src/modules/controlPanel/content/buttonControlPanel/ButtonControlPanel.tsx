import React from 'react';
import {
  Row,
  Col,
  BtnCheckbox,
  Space,
  Collapse,
  Typography,
  Input,
  Button,
} from '@components/index';

import {
  ControlPanelItemContainer,
  ControlPanelItemLabel,
  ControlPanelSettingContainer,
} from '../../styles/controlPanel.styles';

import Select from 'react-select';
import { btnLinkOptions, btnSizeOptions } from './constants';

const ButtonControlPanel = ({ state, handleChange }: any) => {
  const handleChngeBtnStyle = (variant: string) => {
    handleChange({
      kind: 'variant',
      value: variant,
    });
  };
  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Button</Typography>
      <Collapse open title="CTA and Linking">
        <ControlPanelItemContainer>
          <ControlPanelItemLabel>Button Text</ControlPanelItemLabel>
          <Input
            onChange={handleChange}
            name="btnText"
            placeholder="Enter button text ..."
          />
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={12}>
              <ControlPanelItemLabel>
                What should your button link to?
              </ControlPanelItemLabel>
              <Select name="fontFamily" options={btnLinkOptions} />
            </Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <ControlPanelItemLabel>Url</ControlPanelItemLabel>
          <Input name="btnUrl" placeholder="Enter button url ..." />
        </ControlPanelItemContainer>
      </Collapse>
      <Collapse open title="Button Design">
        <ControlPanelItemContainer>
          <Row>
            <Col span={12}>
              <ControlPanelItemLabel>Button Style</ControlPanelItemLabel>
              <Space spacing={20}>
                <Button onClick={() => handleChngeBtnStyle('filled')}>
                  Filled
                </Button>
                <Button
                  onClick={() => handleChngeBtnStyle('outlined')}
                  variant="outlined"
                >
                  Outlined
                </Button>
                <Button
                  onClick={() => handleChngeBtnStyle('text')}
                  variant="text"
                >
                  Text
                </Button>
              </Space>
            </Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={12}>
              <ControlPanelItemLabel>Button Shape</ControlPanelItemLabel>
              <Space spacing={20}>
                <Button rounded variant="filled">
                  Rounded
                </Button>
                <Button variant="filled">Standard</Button>
              </Space>
            </Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={12}>
              <ControlPanelItemLabel>Button Size</ControlPanelItemLabel>
              <BtnCheckbox
                onChange={handleChange}
                type="radio"
                name="btnSize"
                options={btnSizeOptions}
              />
            </Col>
          </Row>
        </ControlPanelItemContainer>
      </Collapse>
    </ControlPanelSettingContainer>
  );
};

export default ButtonControlPanel;
