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
import { ButtonControlPanelProps } from './buttonControlPanel_types';

const ButtonControlPanel = ({
  initialValue,
  onChange,
}: ButtonControlPanelProps) => {
  const handleChngeBtnStyle = (variant: string) => {
    onChange('btnVariant', variant);
  };

  const handleChangeBtnShape = (round: string) => {
    onChange('btnShape', round);
  };

  const handleChangeBtnText = (event: {
    target: { name: string; value: string };
  }) => {
    onChange(event.target.name, event.target.value);
  };

  const handleChangeCheckBox = (
    event: { target: { name: string } },
    values: string | string[]
  ) => {
    onChange(event.target.name, values);
  };

  const { btnSize, btnText } = initialValue;

  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Button</Typography>
      <Collapse open title="CTA and Linking">
        <ControlPanelItemContainer>
          <ControlPanelItemLabel>Button Text</ControlPanelItemLabel>
          <Input
            onChange={handleChangeBtnText}
            name="btnText"
            placeholder="Enter button text ..."
            value={btnText}
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
          <Input
            name="btnUrl"
            onChange={handleChangeBtnText}
            placeholder="Enter button url ..."
          />
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
                <Button
                  shape="sharp"
                  onClick={() => handleChangeBtnShape('sharp')}
                  variant="filled"
                >
                  Rounded
                </Button>
                <Button
                  shape="rounded"
                  onClick={() => handleChangeBtnShape('rounded')}
                  variant="filled"
                >
                  Standard
                </Button>
              </Space>
            </Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={12}>
              <ControlPanelItemLabel>Button Size</ControlPanelItemLabel>
              <BtnCheckbox
                onChange={handleChangeCheckBox}
                type="radio"
                name="btnSize"
                options={btnSizeOptions}
                defaultValue={btnSize}
              />
            </Col>
          </Row>
        </ControlPanelItemContainer>
      </Collapse>
    </ControlPanelSettingContainer>
  );
};

export default ButtonControlPanel;