import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Row, Col } from './components/grid/Index';
import { Input } from './components/input/index';
import { Toggle } from './components/toggle/index';
import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [fnameVal, setFnameVal] = React.useState<string>('');
  const [lnameVal, setLnameVal] = React.useState<string>('');

  console.log(fnameVal, lnameVal);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Row>
          <Col span={6}>
            <Input
              leftAddon="https://"
              rightAddon=".com"
              variant="outlined"
              size="lg"
              placeholder="Warning outlined"
            />
          </Col>
          <Col span={6}>
            <Input
              leftAddon="LeftAddon"
              variant="outlined"
              size="lg"
              placeholder="Warning outlined"
            />
          </Col>
          <Col span={6}>
            <Input
              rightAddon=".com"
              variant="filled"
              size="lg"
              placeholder="Warning outlined"
            />
          </Col>
          <Col span={6}>
            <Input
              leftAddon="LeftAddon"
              rightAddon="RightAddon"
              variant="standard"
              size="lg"
              placeholder="Warning outlined"
            />
          </Col>
        </Row>

        <Input variant="outlined" size="lg" placeholder="Warning outlined" />
        <Row>
          <Col span={6}>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFnameVal(e.target.value)
              }
              name="fname"
              variant="outlined"
              label="First Name"
              placeholder="First Name"
              value={fnameVal}
            />
          </Col>
          <Col span={6}>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLnameVal(e.target.value)
              }
              name="lname"
              variant="outlined"
              label="Last Name"
              placeholder="Last Name"
              value={lnameVal}
            />
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Input variant="standard" size="lg" placeholder="Standard" />
          </Col>
          <Col span={4}>
            <Input variant="outlined" size="lg" placeholder="outlined" />
          </Col>
          <Col span={4}>
            <Input variant="filled" size="lg" placeholder="filled" />
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Input
              status="error"
              variant="standard"
              size="lg"
              placeholder="Error Standard"
            />
          </Col>
          <Col span={4}>
            <Input
              status="warning"
              variant="outlined"
              size="lg"
              placeholder="Warning outlined"
            />
          </Col>
          <Col span={4}>
            <Input
              status="success"
              variant="filled"
              size="lg"
              placeholder="Success Filled"
            />
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <h3>Default (Primary)</h3>
            <Toggle />
          </Col>
          <Col span={3}>
            <h3>Success</h3>
            <Toggle theme="success" />
          </Col>
          <Col span={3}>
            <h3>Warning</h3>
            <Toggle theme="warning" />
          </Col>
          <Col span={3}>
            <h3>Danger</h3>
            <Toggle theme="danger" />
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <h3>Small</h3>
            <Toggle size={48} />
          </Col>
          <Col span={3}>
            <h3>Medium</h3>
            <Toggle size={64} />
          </Col>
          <Col span={3}>
            <h3>Big</h3>
            <Toggle size={88} />
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <h3>With Callback</h3>
            <Toggle
              size={48}
              onChange={(checked: Boolean) =>
                alert(`Toggle ${checked ? 'Checked' : 'Unchecked'}`)
              }
            />
          </Col>
        </Row>
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
