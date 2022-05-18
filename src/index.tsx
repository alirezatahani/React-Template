import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Input, Col, Row, Button } from './components';
import { Alert, Toast } from './components/alert/content/Alert';
import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [fnameVal, setFnameVal] = React.useState<string>('');
  const [lnameVal, setLnameVal] = React.useState<string>('');

  const [test, setTest] = React.useState<boolean>(false);

  const tog = () => setTest(!test);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Row>
          <Col span={4}>
            <div>
              <Button color="warning" variant="text" size="sm" rounded>
                Salam
              </Button>
              <Button variant="text" size="md" rounded>
                Salam
              </Button>
              <Button variant="text" size="lg" rounded>
                Salam
              </Button>

              <Button block color="danger" variant="filled" size="lg">
                Salam
              </Button>
              <Button block disabled variant="filled" size="md">
                disabled btn
              </Button>
              <Button block variant="filled" size="lg">
                Salam
              </Button>

              <Button color="secondary" variant="outlined" size="sm">
                Salam2
              </Button>
              <Button rounded color="success" variant="filled" size="md">
                block btn
              </Button>
              <Button disabled color="success" variant="outlined" size="lg">
                Salam
              </Button>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <button onClick={tog}>Toggle Alert</button>

        <Toast message="Toast ?">
          <Alert
            kind="toast"
            open={test}
            onClose={() => console.log('salam')}
            message="this is an alert"
            type="danger"
            variant="filled"
          />
          <Alert
            kind="toast"
            open={test}
            onClose={() => console.log('salam')}
            message="this is an alert"
            type="danger"
            variant="filled"
          />
        </Toast>

        {/* <Row>
          <Col span={4}>
            <Alert message="this is an alert" variant="filled" />
            <Alert type="success" message="this is an alert" variant="filled" />
            <Alert type="warning" message="this is an alert" variant="filled" />
            <Alert type="danger" message="this is an alert" variant="filled" />
          </Col>
          <Col span={4}>
            <Alert message="this is an alert" />
            <Alert type="warning" message="this is an alert" />
            <Alert type="danger" message="this is an alert" />
            <Alert type="success" message="this is an alert" />
          </Col>
          <Col span={4}>
            <Alert
              description="with Description and closable"
              message="this is an alert"
              closable
            />
            <Alert
              type="warning"
              description="with Description and closable"
              message="this is an alert"
              closable
            />
            <Alert
              type="danger"
              variant="filled"
              description="with Description and closable"
              message="this is an alert"
              closable
            />
            <Alert
              type="success"
              variant="filled"
              description="with Description and closable"
              message="this is an alert"
              closable
            />
          </Col>
        </Row> */}

        <br />
        <br />
        <Row>
          <Col span={4}>
            <Input
              scale="sm"
              status="danger"
              name="site"
              variant="filled"
              label="salam"
              placeholder="place"
              disabled
            />
          </Col>
          <Col span={4}>
            <Input rounded scale="md" label="salam" placeholder="place" />
          </Col>
          <Col span={4}>
            <Input status="danger" disabled scale="lg" placeholder="place" />
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Input
              leftAddon="https://"
              name="site"
              rightAddon=".com"
              scale="sm"
              label="sa"
              placeholder="place"
            />
          </Col>
          <Col span={4}>
            <Input
              scale="md"
              variant="standard"
              status="success"
              label="salam"
              placeholder="place"
            />
            <Input
              scale="md"
              variant="standard"
              label="asdasds"
              placeholder="place"
            />
          </Col>
          <Col span={4}>
            <Input
              leftAddon="salamasdassaa"
              status="danger"
              scale="lg"
              placeholder="place"
            />
          </Col>
        </Row>
        <Col span={6}>
          <Input
            leftAddon="https://"
            rightAddon=".com"
            variant="outlined"
            scale="lg"
            placeholder="Warning outlined"
          />
        </Col>
        <Col span={6}>
          <Input
            leftAddon="LeftAddon"
            variant="outlined"
            scale="lg"
            placeholder="Warning outlined"
          />
        </Col>
        <Col span={6}>
          <Input
            rightAddon=".com"
            variant="filled"
            scale="lg"
            placeholder="Warning outlined"
          />
        </Col>
        <Col span={6}>
          <Input
            leftAddon="LeftAddon"
            rightAddon="RightAddon"
            variant="standard"
            scale="lg"
            placeholder="Warning outlined"
          />
        </Col>

        <Input variant="outlined" scale="lg" placeholder="Warning outlined" />
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
            <Input variant="standard" scale="lg" placeholder="Standard" />
          </Col>
          <Col span={4}>
            <Input variant="outlined" scale="lg" placeholder="outlined" />
          </Col>
          <Col span={4}>
            <Input variant="filled" scale="lg" placeholder="filled" />
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Input
              status="danger"
              variant="standard"
              scale="lg"
              placeholder="Error Standard"
            />
          </Col>
          <Col span={4}>
            <Input
              status="warning"
              variant="outlined"
              scale="lg"
              placeholder="Warning outlined"
            />
          </Col>
          <Col span={4}>
            <Input
              status="success"
              variant="filled"
              scale="lg"
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
