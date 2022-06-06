import * as React from 'react';
import {
  Space,
  Button,
  Typography,
  Collapsible,
  Row,
  Col,
  BtnCheckbox,
  ColorPicker,
} from '../../../components';
import { Design94 } from '../../../templates/designed/94';
import {
  fontTypeOptions,
  fontSizeOptions,
  fontDecorationOptions,
  alignOptions,
  fontFamilyOptions,
} from '../utils/constants';
import {
  ControlPanelItemContainer,
  ControlPanelItemLabel,
  ControlPanelSettingContainer,
  ControlPanelWrapper,
  SideButtonsContainer,
  TemplateContainer,
} from '../styles/controlPanel.styles';

import Select from 'react-select';
import { ControlPanelProps } from './controlPanel_types';

const ControlPanel: React.FC<ControlPanelProps> = ({
  children,
}: ControlPanelProps) => {
  const [showControlPanel, setShowControlPanel] = React.useState(true);

  const [state, setState] = React.useState({
    fontType: '',
    fontFamily: '',
    fontSize: '',
    fontDecoration: '',
    fontColor: '',
    textAlign: '',
  });

  const handleToggle = () => {
    setShowControlPanel(!showControlPanel);
  };

  const handleChange = (evt: any) => {
    const getLabel = evt.kind ? evt.kind : evt.target.name;
    const getValue = evt.value ? evt.value : evt.target.value;
    setState({
      ...state,
      [getLabel]: getValue,
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <TemplateContainer showControlPanel={showControlPanel}>
        {/*      Design Here    */}
        {children}
      </TemplateContainer>
      <ControlPanelWrapper>
        {showControlPanel && (
          <ControlPanelSettingContainer>
            <Typography variant="h5">Text</Typography>
            <Collapsible open title="Text Setting">
              <ControlPanelItemContainer>
                <ControlPanelItemLabel>Type</ControlPanelItemLabel>
                <Select
                  name="fontType"
                  onChange={handleChange}
                  options={fontTypeOptions}
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
                  <Col span={4}>
                    <ControlPanelItemLabel>Font Size</ControlPanelItemLabel>
                    <Select onChange={handleChange} options={fontSizeOptions} />
                  </Col>
                  <Col span={8}>
                    <ControlPanelItemLabel>
                      Font Decoration
                    </ControlPanelItemLabel>
                    <BtnCheckbox
                      type="radio"
                      name="fontDecoration"
                      onChange={handleChange}
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
            </Collapsible>
            <Collapsible title="Block Setting">Coming Soon ...</Collapsible>
          </ControlPanelSettingContainer>
        )}
        <SideButtonsContainer>
          <Space spacing={10} direction="vertical" align="start">
            <Button onClick={handleToggle} color="primary" rounded>
              +
            </Button>
            <Button color="danger" rounded>
              G
            </Button>
            <Button color="warning" rounded>
              A
            </Button>
          </Space>
        </SideButtonsContainer>
      </ControlPanelWrapper>
    </div>
  );
};
export default ControlPanel;
