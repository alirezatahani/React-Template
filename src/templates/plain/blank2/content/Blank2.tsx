import * as React from 'react';
import { Jumbotron } from '../styles/blank2.styles';
import {
  Navbar,
  Footer,
  Image,
  Row,
  Col,
  Button,
  Typography,
  Container,
} from '../../../../components';

export const Blank2 = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Row>
        <Col xs={12}>
          <Jumbotron>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                  <Typography variant="h2">Add your title</Typography>
                </Col>
                <Col xs={2}></Col>
              </Row>
              <br />
              <Typography variant="body1">
                Use this space to elaborate on the ideas introduced in the
                title. Connect with your visitors. Include the information that
                makes the most sense for your brand. Try sharing your mission to
                build trust. Or, briefly explain how your product works and the
                value it brings, so they feel compelled to explore your site.
                The sky is the limit.
              </Typography>
              <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                  <Button
                    variant="outlined"
                    size="lg"
                    style={{
                      marginTop: '1rem',
                    }}
                  >
                    CALL TO ACTION
                  </Button>
                </Col>
                <Col xs={4}></Col>
              </Row>
            </Col>
            <Col xs={3}></Col>
          </Jumbotron>
        </Col>
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={6}>
                  <Image src="https://www.groupestate.gr/images/joomlart/demo/default.jpg" />
                </Col>
                <Col xs={1}></Col>
                <Col xs={5}>
                  <Typography variant="h3">Introduce your idea</Typography>
                  <br />
                  <Typography variant="body1">
                    Tell people more about what you do. Use this space to
                    describe your products or services. Highlight their benefits
                    so they feel compelled to click.
                  </Typography>
                  <br />
                  <Button variant="outlined" size="lg">
                    Call To Action
                  </Button>
                </Col>
              </Row>
              <br />
              <br />
            </Col>
          </Row>
        </Container>

        <br />
        <br />
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={5}>
                  <Typography variant="h3">Introduce your idea</Typography>
                  <br />
                  <Typography variant="body1">
                    Tell people more about what you do. Use this space to
                    describe your products or services. Highlight their benefits
                    so they feel compelled to click.
                  </Typography>
                  <br />
                  <Button variant="outlined" size="lg">
                    Call To Action
                  </Button>
                </Col>
                <Col xs={1}></Col>
                <Col xs={6}>
                  <Image src="https://www.groupestate.gr/images/joomlart/demo/default.jpg" />
                </Col>
              </Row>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
        <Col xs={12}>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Row>
                <Col xs={2}></Col>
                <Col xs={10}>
                  <Typography variant="h4">
                    Tell people what you will help them do
                  </Typography>
                </Col>
                <Col xs={2}></Col>
              </Row>
              <br />
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on your headline and connect with
                your visitors. Include the information that makes the most sense
                for your brand. Try sharing your company's mission to build
                trust. Or, briefly explain how your product works and the value
                it brings, so they feel compelled to give it a go.
              </Typography>
              <Row>
                <Col xs={4}></Col>
                <Col xs={5}>
                  <Button
                    variant="outlined"
                    size="lg"
                    style={{
                      marginTop: '1rem',
                    }}
                  >
                    CALL TO ACTION
                  </Button>
                </Col>
                <Col xs={3}></Col>
              </Row>
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
};
