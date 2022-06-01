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
  checkboxOptions,
  alignOptions,
  fontFamilyOptions,
} from '../utils/constants';
import {
  ControlPanelItemContainer,
  ControlPanelItemLabel,
  ControlPanelSettingContainer,
  SideButtonsContainer,
} from '../styles/controlPanel.styles';

import Select from 'react-select';

const ControlPanel: React.FC = () => {
  const [showControlPanel, setShowControlPanel] = React.useState(true);
  const [color, setColor] = React.useState('red');

  const handleToggle = () => {
    setShowControlPanel(!showControlPanel);
  };

  const handleChange = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          color: color,
          width: showControlPanel ? 'calc(100% - 360px)' : '100%',
        }}
      >
        {/* <h1>Content</h1> */}
        <Design94 />
      </div>
      <div
        style={{
          background: 'blue',
          display: 'flex',
          position: 'fixed',
          right: 0,
          top: 0,
          zIndex: 999,
          height: '100vh',
        }}
      >
        {showControlPanel && (
          <ControlPanelSettingContainer>
            <Typography variant="h5">Text</Typography>
            <Collapsible open title="Text Setting">
              <ControlPanelItemContainer>
                <ControlPanelItemLabel>Type</ControlPanelItemLabel>
                <Select options={fontTypeOptions} />
              </ControlPanelItemContainer>
              <ControlPanelItemContainer>
                <Row>
                  <Col span={6}>
                    <ControlPanelItemLabel>Font Family</ControlPanelItemLabel>
                    <Select options={fontFamilyOptions} />
                  </Col>
                  <Col span={6}></Col>
                </Row>
              </ControlPanelItemContainer>
              <ControlPanelItemContainer>
                <Row>
                  <Col span={4}>
                    <ControlPanelItemLabel>Font Size</ControlPanelItemLabel>
                    <Select
                      placeholder={fontSizeOptions[0].label}
                      options={fontSizeOptions}
                    />
                  </Col>
                  <Col span={8}>
                    <ControlPanelItemLabel>
                      Font Decoration
                    </ControlPanelItemLabel>
                    <BtnCheckbox
                      onChange={handleChange}
                      options={checkboxOptions}
                    />
                  </Col>
                </Row>
              </ControlPanelItemContainer>
              <ControlPanelItemContainer>
                <Row>
                  <Col span={4}>
                    <ControlPanelItemLabel>Font color</ControlPanelItemLabel>
                    <ColorPicker
                      onChange={handleChange}
                      id="head"
                      name="head"
                      value={color}
                    />
                  </Col>
                  <Col span={8}>
                    <ControlPanelItemLabel>Align Text</ControlPanelItemLabel>
                    <BtnCheckbox
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
      </div>
    </div>
  );
};
export default ControlPanel;
