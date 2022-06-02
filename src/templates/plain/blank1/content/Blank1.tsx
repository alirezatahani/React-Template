import * as React from 'react';
import { Jumbotron } from '../styles/blank1.style';
import {
  Navbar,
  Footer,
  Image,
  Typography,
  Row,
  Col,
  Button,
  Container,
} from '../../../../components';

export const Blank1 = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Row>
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={1}></Col>
                <Col xs={3}>
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
                <Col xs={8}>
                  <Image src="https://www.groupestate.gr/images/joomlart/demo/default.jpg" />
                </Col>
              </Row>
              <br />
              <br />
            </Col>
          </Row>
        </Container>

        <Col xs={12}>
          <Jumbotron>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Row>
                <Col xs={3}></Col>
                <Col xs={5}>
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
            </Col>
            <Col xs={3}></Col>
          </Jumbotron>
        </Col>
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={1}></Col>
                <Col xs={3}>
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
                <Col xs={8}>
                  <Image src="https://www.groupestate.gr/images/joomlart/demo/default.jpg" />
                </Col>
              </Row>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={1}></Col>
                <Col xs={3}>
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
                <Col xs={8}>
                  <Image src="https://www.groupestate.gr/images/joomlart/demo/default.jpg" />
                </Col>
              </Row>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={1}></Col>
                <Col xs={6}>
                  <Typography variant="h3">Indroduce your idea</Typography>
                </Col>
                <Col xs={5}>
                  <Typography variant="body1">
                    Use bullet points to highlight important information
                  </Typography>
                  <Typography variant="body1">
                    Use bullet points to highlight important information
                  </Typography>
                  <Typography variant="body1">
                    Use bullet points to highlight important information
                  </Typography>
                  <Typography variant="body1">
                    Use bullet points to highlight important information
                  </Typography>
                </Col>
              </Row>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </Row>
      <Footer />
    </React.Fragment>
  );
};
