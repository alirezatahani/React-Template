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
import { CardContent } from './components/cardContent';
import { CardMedia } from './components/cardMedia';

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
            <Card size="small">
              <CardMedia src="data:image/jpeg;base64,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" />
              <CardContent>
                <Typography italic variant="subtitle2">
                  some text some text some some text some text some some text
                  some text some
                </Typography>
              </CardContent>
              <CardMedia />
            </Card>
          </Col>
          <Col span={3}>
            <Card title="title">
              <CardContent title="Title">
                <Typography italic variant="subtitle2">
                  some text some text some
                </Typography>
              </CardContent>
            </Card>
          </Col>
          <Col span={3}>
            <Card title="title" size="large">
              <CardContent title="Title">
                <CardMedia src="data:image/jpeg;base64,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" />

                <Typography italic variant="subtitle2">
                  some text some text some
                </Typography>
              </CardContent>
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
