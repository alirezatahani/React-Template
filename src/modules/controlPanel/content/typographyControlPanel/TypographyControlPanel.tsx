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
  typographyTranslator,
} from '../../utils/constants';
import { useTheme } from 'styled-components';
import Select, { StylesConfig } from 'react-select';

const TypographyControlPanel = ({ initialValue, onChange }: any) => {
  const theme = useTheme();

  const fontTypesStyles: StylesConfig = {
    option: (styles, { data }: any) => {
      return {
        ...styles,
        //@ts-ignore
        ...theme.typography[data.value],
      };
    },
  };

  const handleChangeSelect = (event: { kind: string; value: string }) => {
    onChange(event.kind, event.value);
  };
  const handleChangeCheckBox = (
    event: { target: { name: string } },
    values: string | string[]
  ) => {
    onChange(event.target.name, values);
  };

  const {
    fontType,
    fontFamily,
    fontSize,
    textDecoration,
    fontColor,
    textAlign,
  } = initialValue;

  const fontTypes = Object.keys(theme.typography)
    .filter(
      (typography: any) =>
        typography !== 'button' &&
        typography !== 'input' &&
        typography !== 'table' &&
        typography !== 'table2' &&
        typography !== 'overLineCaption' &&
        typography !== 'link' &&
        typography !== 'fontFamily' &&
        typography !== 'typographyDitypographyabled' &&
        typography !== 'fontStyles'
    )
    .map((key: any) => ({
      value: key,
      //@ts-ignore
      label: typographyTranslator[key],
      kind: 'fontType',
    }));

  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Text</Typography>
      <Collapse open title="Text Setting">
        <ControlPanelItemContainer>
          <ControlPanelItemLabel>Type</ControlPanelItemLabel>
          <Select
            name="fontType"
            onChange={handleChangeSelect}
            defaultValue={fontTypes.filter(
              (fontTypeOption) => fontTypeOption.value === fontType
            )}
            options={fontTypes}
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
                onChange={() => handleChangeSelect}
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
                onChange={handleChangeCheckBox}
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
