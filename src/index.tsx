import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import {
  Input,
  Col,
  Row,
  Button,
  Typography,
  Divider,
  Alert,
  Badge,
} from './components';
import { Card } from './components/card';

import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Row>
          <Col span={6}>
            <Typography copyable variant="h1">
              Amir(h1)
            </Typography>
            <Divider align="left" middle />
            <Typography
              italic
              onClick={() => console.log('sdasd')}
              variant="h2"
            >
              Amir(h2)
            </Typography>
            <Divider align="center" middle />
            <Typography variant="h3">Amir(h3)</Typography>
            <Divider align="right" middle />
            <Typography variant="h4">Amir(h4)</Typography>
            <Typography variant="h5">Amir(h5)</Typography>
            <Typography variant="subtitle1">Amir(subtitle1)</Typography>
            <Typography italic variant="subtitle2">
              Amir(subtitle2)
            </Typography>
            <Typography italic variant="body1">
              Amir(body1)
            </Typography>
          </Col>
          <Col span={6}>
            <Typography color="primary" variant="h1">
              Amir(h1)
            </Typography>
            <Typography underline color="danger" variant="h2">
              Amir(h2)
            </Typography>
            <Typography color="warning" variant="h3">
              Amir(h3)
            </Typography>
            <Typography color="secondary" variant="h4">
              Amir(h4)
            </Typography>
            <Typography color="success" variant="h5">
              Amir(h5)
            </Typography>
            <Divider>Center Text</Divider>
            <Divider orientation="left">Left Text</Divider>
            <Divider orientation="right">RightText</Divider>
            <Typography variant="subtitle1">
              <span style={{ color: 'cyan' }}>
                Amir(subtitle1) custom color
              </span>
            </Typography>
            <Typography strong disabled color="success" variant="subtitle2">
              Amir disabled
            </Typography>
            <Typography strong copyable color="success" variant="body1">
              Amir(body1)
            </Typography>
          </Col>
        </Row>
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
              <Divider align="center" middle />
              <Button block disabled variant="filled" size="md">
                disabled btn
              </Button>
              <Divider align="center" middle />
              <Button block variant="filled" size="lg">
                Salam
              </Button>
              <Divider align="center" middle />
              <Button color="secondary" variant="outlined" size="sm">
                Salam2
              </Button>
              <Divider align="center" middle />
              <Button rounded color="success" variant="filled" size="md">
                block btn
              </Button>

              <Divider align="center" middle />
              <Button disabled color="success" variant="outlined" size="lg">
                Salam
              </Button>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={3}>
            <Alert
              action={
                <>
                  <Button color="success">OK</Button>
                  <Button>undo</Button>
                </>
              }
              message="this is an alert"
              type="info"
              variant="filled"
              closable
              onClose={() => console.log('onCloseFire')}
            />
            <Alert message="this is an alert" type="success" variant="filled" />
            <Alert message="this is an alert" type="warning" variant="filled" />
            <Alert message="this is an alert" type="danger" variant="filled" />
            <Alert
              message="this is an alert"
              type="secondary"
              variant="filled"
            />
          </Col>
          <Col span={3}>
            <Alert message="this is an alert" type="info" variant="outlined" />
            <Alert
              message="this is an alert"
              type="success"
              variant="outlined"
              action={
                <>
                  <Button color="success">OK</Button>
                  <Button>undo</Button>
                </>
              }
            />
            <Alert
              message="this is an alert"
              type="warning"
              variant="outlined"
            />
            <Alert
              message="this is an alert"
              type="danger"
              variant="outlined"
            />
            <Alert
              message="this is an alert"
              type="secondary"
              variant="outlined"
            />
          </Col>
          <Col span={3}>
            <Alert
              closable
              message="this is an alert"
              type="info"
              variant="filled"
            />
            <Alert closable message="this is an alert" type="success" />
            <Alert closable message="this is an alert" type="warning" />
            <Alert
              variant="filled"
              closable
              message="this is an alert"
              type="danger"
            />
            <Alert closable message="this is an alert" type="secondary" />
          </Col>
          <Col span={3}>
            <Alert
              closable
              description="This is a Description"
              message="this is an alert"
              type="info"
              variant="filled"
            />
            <Alert
              description="This is a Description"
              action={
                <>
                  <Button color="success">OK</Button>
                  <Button size="sm">undo</Button>
                </>
              }
              closable
              message="this is an alert"
              type="success"
            />
            <Alert
              description="This is a Description"
              action={
                <>
                  <Button color="success">OK</Button>
                  <Button>undo</Button>
                </>
              }
              closable
              message="this is an alert"
              type="warning"
            />
            <Alert
              variant="filled"
              closable
              message="this is an alert"
              type="danger"
              description="This is a Description"
            />
            <Alert
              description="This is a Description"
              closable
              message="Whit OnClose CallBack"
              type="secondary"
              onClose={() => alert('SALAM')}
            />
          </Col>
        </Row>
        <br />
        {/* <Badge max={100} badgeContent={1000}>
            test
          </Badge>
          <Badge max={100} badgeContent={10} rounded color="danger"></Badge>
          <Badge badgeContent={100} color="secondary">
            <Button>button as a children</Button>
          </Badge>
          <Badge max={100} badgeContent={10} variant="dot" color="success">
            variant dot
          </Badge> */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '50%',
          }}
        >
          {/* <Badge max={100} badgeContent={10} variant="dot" color="success">
              <p>This is for test</p>
            </Badge> */}
          <Badge color="success" placement="rightCenter">
            <div
              style={{ width: 100, height: 100, backgroundColor: 'red' }}
            ></div>
          </Badge>
        </div>
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

        <br />

        <Row>
          <Col span={3}>
            <Card title="title" size="small">
              <Typography italic variant="subtitle2">
                some text some text some
              </Typography>
            </Card>
          </Col>
          <Col span={3}>
            <Card title="title">
              <Typography italic variant="subtitle2">
                some text some text some
              </Typography>
            </Card>
          </Col>
          <Col span={3}>
            <Card title="title" size="large">
              <Typography italic variant="subtitle2">
                some text some text some
              </Typography>
            </Card>
          </Col>
        </Row>
        <br />
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
              name="fname"
              variant="outlined"
              label="First Name"
              placeholder="First Name"
            />
          </Col>
          <Col span={6}>
            <Input
              name="lname"
              variant="outlined"
              label="Last Name"
              placeholder="Last Name"
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
