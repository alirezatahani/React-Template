import {
  Space,
  Button,
  Typography,
  Collapsible,
  Row,
  Col,
  BtnCheckbox,
} from '../../../components';
import * as React from 'react';
import { ControlPanelSettingContainer } from '../styles/controlPanel.styles';
import { BiBold, BiItalic, BiFont } from 'react-icons/bi';
import Select from 'react-select';

const fontTypeOptions = [
  { value: 'h1', label: 'Heading 1' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'body1', label: 'Paragraph' },
];
const fontFamilyOptions = [
  { value: 'h1', label: 'Heading 1' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'body1', label: 'Paragraph' },
];

const fontSizeOptions = [
  { value: '10', label: '10' },
  { value: '12', label: '12' },
  { value: '15', label: '15' },
  { value: '18', label: '18' },
  { value: '20', label: '20' },
];

const checkboxOptions = [
  { value: 'h1', label: <BiBold />, name: 'h1' },
  { value: 'h2', label: <BiItalic />, name: 'h2' },
  { value: 'body1', label: <BiFont />, name: 'body1' },
  { value: 'subtitle1', label: <BiBold />, name: 'subtitle1' },
  { value: 'subtitle2', label: <BiBold />, name: 'subtitle2' },
];

const ControlPanel: React.FC = () => {
  const [showControlPanel, setShowControlPanel] = React.useState(true);

  const handleToggle = () => {
    setShowControlPanel(!showControlPanel);
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ background: '#323232', width: '100%' }}>Content</div>
      <div style={{ background: 'blue', display: 'flex' }}>
        <>
          {showControlPanel && (
            <ControlPanelSettingContainer>
              <Typography variant="h5">Text</Typography>
              <br />
              <Collapsible open title="Text Setting">
                <br />
                <label style={{ fontSize: 12 }}>Type</label>
                <Select options={fontTypeOptions} />
                <br />

                <Row>
                  <Col span={6}>
                    <label style={{ fontSize: 12 }}>Font</label>
                    <Select options={fontFamilyOptions} />
                  </Col>
                  <Col span={6}>
                    <label style={{ fontSize: 12 }}>Font</label>
                    <Select options={fontFamilyOptions} />
                  </Col>
                </Row>

                <br />

                <Row>
                  <Col span={4}>
                    <label style={{ fontSize: 12 }}>Font</label>
                    <Select
                      placeholder={fontSizeOptions[0].label}
                      options={fontSizeOptions}
                    />
                  </Col>
                  <Col span={8}>
                    <label style={{ fontSize: 12 }}>Fodasdnt</label>
                    <BtnCheckbox
                      onChange={handleChange}
                      options={checkboxOptions}
                    />
                  </Col>
                </Row>
              </Collapsible>
              <Collapsible title="Block Setting">Coming Soon ...</Collapsible>
            </ControlPanelSettingContainer>
          )}
          <div
            style={{
              width: 75,
              background: '#323232',
              paddingInline: 20,
              paddingTop: 30,
            }}
          >
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
          </div>
        </>
      </div>
    </div>
  );
};
export default ControlPanel;
