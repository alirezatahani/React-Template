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
import { CardContent } from './components/card/content/cardContent';
import { CardMedia } from './components/card/content/cardMedia';

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
            <Card>
              <CardMedia src="data:image/jpeg;base64,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" />
              <CardContent>
                some text some text some some text some text some some text some
                text some
              </CardContent>
              <CardMedia />
            </Card>
          </Col>
          <Col span={3}>
            <Card>
              <CardContent title="Title">some text some text some</CardContent>
            </Card>
          </Col>
          <Col span={3}>
            <Card>
              <CardContent title="Title">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </CardContent>
            </Card>
          </Col>
          <Col span={3}>
            <Card>
              <CardContent title="Title">
                <CardMedia src="https://picsum.photos/seed/picsum/200/300" />
                some text some text some
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
