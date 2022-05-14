import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Row, Col } from './components/grid/Index';
import { Input } from './components/input/index';
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
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
