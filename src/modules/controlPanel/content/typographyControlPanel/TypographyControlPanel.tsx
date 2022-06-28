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
  fontSizeOptions,
  fontDecorationOptions,
  alignOptions,
  fontFamilyOptions,
  fontTypeOptions,
} from '../../utils/constants';
import { useTheme } from 'styled-components';
import Select, { StylesConfig } from 'react-select';
import {
  FontTypeOptionDataType,
  TypographyControlPanelProps,
} from './typographyControlPanel_types';

const TypographyControlPanel: React.FC<TypographyControlPanelProps> = ({
  initialValue,
  onChange,
}: TypographyControlPanelProps) => {
  const theme = useTheme();

  const fontTypesStyles: StylesConfig = {
    option: (styles, data: FontTypeOptionDataType) => {
      return {
        ...styles,
        ...theme.typography[data.value as string],
      };
    },
  };

  const handleChangeSelect = (event: {
    kind: string;
    value: string | number;
  }) => {
    onChange(event.kind, event.value);
  };

  const handleChangeCheckBox = (
    event: { target: { name: string } },
    values: string | string[]
  ) => {
    onChange(event.target.name, values);
  };

  //for simple input fields other than checkboxes and selects
  const handleChangeInputElement = (event: {
    target: { name: string; value: string };
  }) => {
    onChange(event.target.name, event.target.value);
  };

  const {
    fontType,
    fontFamily,
    fontSize,
    textDecoration,
    fontColor,
    textAlign,
  } = initialValue;

  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Text</Typography>
      <Collapse open title="Text Setting">
        <ControlPanelItemContainer>
          <ControlPanelItemLabel>Type</ControlPanelItemLabel>
          <Select
            name="fontType"
            onChange={handleChangeSelect}
            defaultValue={fontTypeOptions.filter(
              (fontTypeOption) => fontTypeOption.value === fontType
            )}
            options={fontTypeOptions}
            styles={fontTypesStyles}
          />
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={12}>
              <ControlPanelItemLabel>Font Family</ControlPanelItemLabel>
              <Select
                name="fontFamily"
                onChange={handleChangeSelect}
                defaultValue={fontFamilyOptions.filter(
                  (fontFamilyOption) => fontFamilyOption.value === fontFamily
                )}
                options={fontFamilyOptions}
              />
            </Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={6}>
              <ControlPanelItemLabel>Font Size</ControlPanelItemLabel>
              <Select
                name="fontSize"
                defaultValue={fontSizeOptions.filter(
                  (fontSizeOption) => fontSizeOption.value === fontSize
                )}
                onChange={handleChangeSelect}
                options={fontSizeOptions}
              />
            </Col>
            <Col span={6}>
              <ControlPanelItemLabel>Font Decoration</ControlPanelItemLabel>
              <BtnCheckbox
                type="checkbox"
                name="textDecoration"
                onChange={handleChangeCheckBox}
                defaultValue={textDecoration}
                options={fontDecorationOptions}
              />
            </Col>
          </Row>
        </ControlPanelItemContainer>
        <ControlPanelItemContainer>
          <Row>
            <Col span={4}>
              <ControlPanelItemLabel>Font color</ControlPanelItemLabel>
              <ColorPicker
                value={fontColor}
                onChange={handleChangeInputElement}
                id="fontColor"
                name="fontColor"
              />
            </Col>
            <Col span={8}>
              <ControlPanelItemLabel>Align Text</ControlPanelItemLabel>
              <BtnCheckbox
                type="radio"
                name="textAlign"
                defaultValue={textAlign}
                onChange={handleChangeCheckBox}
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