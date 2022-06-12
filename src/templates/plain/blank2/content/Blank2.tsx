import React from 'react';
import { Jumbotron, HeroButton, Section } from '../styles/blank2.styles';
import {
  Navbar,
  Footer,
  Image,
  Row,
  Col,
  Typography,
  Container,
} from '@components/index';

export const Blank2 = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section>
        <Jumbotron fluid>
          <Row>
            <Col xs={12}>
              <Typography
                variant="h2"
                style={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  marginTop: '6rem',
                }}
              >
                Introduce your idea
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Share more about what you do. Use this space to describe your
                products or services, and highlight their benefits. Customize
                the image to draw people in and drive your point home.
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col xs={12} alignItems="center" justify="center" display="flex">
              <HeroButton variant="outlined" size="lg">
                Call to Action
              </HeroButton>
            </Col>
          </Row>
        </Jumbotron>
      </section>

      <Section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Image src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ padding: '20px 80px 20px ' }}
            >
              <Typography variant="h4">Introduce your idea</Typography>

              <Typography variant="body1">
                Tell people more about what you do. Use this space to describe
                your products or services. Highlight their benefits so they feel
                compelled to click.
              </Typography>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ padding: '20px 80px 20px ' }}
            >
              <Typography variant="h4">Introduce your idea</Typography>

              <Typography variant="body1">
                Tell people more about what you do. Use this space to describe
                your products or services. Highlight their benefits so they feel
                compelled to click.
              </Typography>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Image src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col xs={12}>
              <Typography
                variant="h2"
                style={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  marginTop: '6rem',
                }}
              >
                Tell people what you will help them do
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on your headline and connect with
                your visitors. Include the information that makes the most sense
                for your brand. Try sharing your company's mission to build
                trust. Or, briefly explain how your product works and the value
                it brings, so they feel compelled to give it a go.
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col xs={12} alignItems="center" justify="center" display="flex">
              <HeroButton variant="outlined" size="lg">
                Call to Action
              </HeroButton>
            </Col>
          </Row>
        </Container>
      </Section>

      <Footer />
    </React.Fragment>
  );
};
