import * as React from 'react';
import {
  SectionContainer,
  TemplateContainer,
  Jumbotron,
  Section,
} from '../styles/blank2.styles';
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

      <Section>
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
            <Col xs={12}>
              <Button
                style={{
                  marginTop: '2rem',
                  marginBottom: '4rem',
                }}
                variant="outlined"
                size="lg"
              >
                Call to Action
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </Section>

      <SectionContainer>
        <TemplateContainer>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                rowGap: '1rem',
                marginTop: '2rem',
              }}
            >
              <Image src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ textAlign: 'center', marginTop: '3rem', padding: 40 }}
            >
              <Row>
                <Col xs={12} style={{ textAlign: 'left' }}>
                  <Typography variant="h3">Introduce your idea</Typography>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12}>
                  <Typography variant="body1" style={{ textAlign: 'justify' }}>
                    Tell people more about what you do. Use this space to
                    describe your products or services. Highlight their benefits
                    so they feel compelled to click.
                  </Typography>
                </Col>
              </Row>

              <br />
              <Row>
                <Col xs={12} style={{ textAlign: 'left' }}>
                  <Button variant="outlined" size="lg">
                    Call To Action
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </TemplateContainer>
      </SectionContainer>

      <SectionContainer>
        <TemplateContainer>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ textAlign: 'center', marginTop: '3rem', padding: 40 }}
            >
              <Row>
                <Col xs={12} style={{ textAlign: 'left' }}>
                  <Typography variant="h3">Introduce your idea</Typography>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12}>
                  <Typography variant="body1" style={{ textAlign: 'justify' }}>
                    Tell people more about what you do. Use this space to
                    describe your products or services. Highlight their benefits
                    so they feel compelled to click.
                  </Typography>
                </Col>
              </Row>

              <br />
              <Row>
                <Col xs={12} style={{ textAlign: 'left' }}>
                  <Button variant="outlined" size="lg">
                    Call To Action
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                rowGap: '1rem',
                marginTop: '2rem',
              }}
            >
              <Image src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
            </Col>
          </Row>
        </TemplateContainer>
      </SectionContainer>

      <Section>
        <Container fluid>
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
            <Col xs={12}>
              <Button
                style={{
                  marginTop: '2rem',
                  marginBottom: '4rem',
                }}
                variant="outlined"
                size="lg"
              >
                Call to Action
              </Button>
            </Col>
          </Row>
        </Container>
      </Section>

      <Footer />
    </React.Fragment>
  );
};
