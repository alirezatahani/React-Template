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
import {
  fontTypeOptions,
  fontSizeOptions,
  fontDecorationOptions,
  alignOptions,
  fontFamilyOptions,
} from '../../utils/constants';

import Select from 'react-select';
import { btnLinkOptions, btnSizeOptions } from './constants';

const ButtonControlPanel = () => {
  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Button</Typography>
      <Collapse open title="CTA and Linking">
        <ControlPanelItemContainer>
          <ControlPanelItemLabel>Button Text</ControlPanelItemLabel>
          <Input name="textBtn" placeholder="Enter button text ..." />
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
                <Button>Filled</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
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
