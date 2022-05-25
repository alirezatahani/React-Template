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
  Avatar,
  Badge,
} from './components';
import { Drawer } from './components/drawer';

import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [visible2, setVisible] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <button onClick={() => setVisible(true)}>Drawer</button>

        <Drawer title="Title" visible={visible2} />
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
        <Avatar src="data:image/jpeg;base64,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"></Avatar>
        <Avatar text="taha namdar" size="lg" />
        <Avatar size="sm" />
        <Avatar shape="square" bg="primary" />
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
