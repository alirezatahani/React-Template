import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Button from './components/button/content/Button';
import { Row, Col } from './components/grid/Index';
import { Input } from './components/input/index';
import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [fnameVal, setFnameVal] = React.useState<string>('');
  const [lnameVal, setLnameVal] = React.useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Row>
          <Col span={4}>
            Size: sm
            <div>
              <Button variant="text" size="sm" rounded>
                Salam
              </Button>
              <Button variant="text" size="md" rounded>
                Salam
              </Button>
              <Button variant="text" size="lg" rounded>
                Salam
              </Button>

              <Button block variant="filled" size="sm">
                Salam
              </Button>
              <Button block disabled variant="filled" size="md">
                block btn
              </Button>
              <Button block variant="filled" size="lg">
                Salam
              </Button>

              <Button variant="outlined" size="sm">
                Salam
              </Button>
              <Button variant="outlined" size="md">
                block btn
              </Button>
              <Button variant="outlined" size="lg">
                Salam
              </Button>
            </div>
          </Col>
          {/* <Col span={4}>
            Size: md or default
            <div>
              <Button disabled kind="primary" size="md">
                Salam
              </Button>
              <Button kind="warning" size="md">
                Salam
              </Button>
              <Button kind="danger" size="md">
                Salam
              </Button>
              <Button shape="round" kind="danger" size="md">
                Salam
              </Button>
              <Button block shape="round" kind="warning" size="md">
                block btn
              </Button>
              <Button size="md">Salam</Button>
            </div>
          </Col>
          <Col span={4}>
            Size: Lg
            <div>
              <Button kind="primary" size="lg">
                Salam
              </Button>
              <Button kind="warning" size="lg">
                Salam
              </Button>
              <Button kind="danger" size="lg">
                Salam
              </Button>
              <Button shape="round" kind="primary" size="lg">
                Salam
              </Button>
              <Button block shape="round" kind="danger" size="lg">
                block btn
              </Button>
              <Button size="lg">Salam</Button>
            </div>
          </Col> */}
        </Row>
        {/*<Row>
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
        </Row> */}
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
