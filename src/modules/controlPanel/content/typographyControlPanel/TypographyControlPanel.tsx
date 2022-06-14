import React from 'react';

import {
  Row,
  Col,
  BtnCheckbox,
  ColorPicker,
  Collapse,
  Typography,
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
  fontStyleOptions,
} from '../../utils/constants';
import { useTheme } from 'styled-components';
import Select, { StylesConfig } from 'react-select';

const TypographyControlPanel = ({ state, handleChange }: any) => {
  const theme = useTheme();

  const colourStyles: StylesConfig = {
    option: (styles, { data }: any) => {
      return {
        ...styles,
        //@ts-ignore
        ...theme.typography[data.value],
      };
    },
  };

  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Text</Typography>
      <Collapse open title="Text Setting">
        <ControlPanelItemContainer>
          <ControlPanelItemLabel>Type</ControlPanelItemLabel>
          <Select
            name="fontType"
            onChange={handleChange}
            options={fontTypeOptions}
            styles={colourStyles}
          />
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={6}>
              <ControlPanelItemLabel>Font Family</ControlPanelItemLabel>
              <Select
                name="fontFamily"
                onChange={handleChange}
                options={fontFamilyOptions}
              />
            </Col>
            <Col span={6}></Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={6}>
              <ControlPanelItemLabel>Font Size</ControlPanelItemLabel>
              <Select onChange={handleChange} options={fontSizeOptions} />
            </Col>
            <Col span={6}>
              <ControlPanelItemLabel>Font Decoration</ControlPanelItemLabel>
              <BtnCheckbox
                type="checkbox"
                name="textDecoration"
                onChange={handleChange}
                options={fontDecorationOptions}
              />
              <BtnCheckbox
                type="checkbox"
                name="fontStyle"
                onChange={handleChange}
                options={fontStyleOptions}
              />
            </Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={4}>
              <ControlPanelItemLabel>Font color</ControlPanelItemLabel>
              <ColorPicker
                value={state.fontColor}
                onChange={handleChange}
                id="fontColor"
                name="fontColor"
              />
            </Col>
            <Col span={8}>
              <ControlPanelItemLabel>Align Text</ControlPanelItemLabel>
              <BtnCheckbox
                type="radio"
                name="textAlign"
                onChange={handleChange}
                options={alignOptions}
              />
            </Col>
          </Row>
        </ControlPanelItemContainer>
      </Collapse>
      <Collapse title="Block Setting">Coming Soon ...</Collapse>
    </ControlPanelSettingContainer>
  );
};

export default TypographyControlPanel;
