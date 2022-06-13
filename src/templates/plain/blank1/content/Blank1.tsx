import React from 'react';
import { Jumbotron, HeroButton, Section } from '../styles/blank1.styles';
import {
  Navbar,
  Footer,
  Image,
  Row,
  Col,
  Typography,
  Container,
} from '@components/index';

export const Blank1 = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Section>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ padding: '20px 90px 20px ' }}
            >
              <Typography variant="h2" style={{ marginBottom: '1rem' }}>
                Introduce your idea
              </Typography>

              <Typography variant="body1">
                Tell people more about what you do. Use this space to describe
                your products or services. Highlight their benefits so they feel
                compelled to click.
              </Typography>

              <HeroButton variant="outlined" size="lg">
                Call To Action
              </HeroButton>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Image
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png"
                height={440}
              />
            </Col>
          </Row>
        </Container>
      </Section>

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
                Add your title
              </Typography>
            </Col>
          </Row>

          <Row style={{ padding: '0px 300px' }}>
            <Col xs={12}>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on the ideas introduced in the
                title. Connect with your visitors. Include the information that
                makes the most sense for your brand. Try sharing your mission to
                build trust. Or, briefly explain how your product works and the
                value it brings, so they feel compelled to explore your site.
                The sky is the limit.
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

              <HeroButton variant="outlined" size="lg">
                Call to Action
              </HeroButton>
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
              <HeroButton variant="outlined" size="lg">
                Call to Action
              </HeroButton>
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
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ padding: '20px 100px 20px ' }}
            >
              <Typography variant="h3">Summarize your list here</Typography>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ padding: '20px 20px 20px ' }}
            >
              <Typography variant="body1">
                <li>Use bullet points to highlight important information</li>
              </Typography>{' '}
              <Typography variant="body1">
                <li>Use bullet points to highlight important information</li>
              </Typography>{' '}
              <Typography variant="body1">
                <li>Use bullet points to highlight important information</li>
              </Typography>{' '}
              <Typography variant="body1">
                <li>Use bullet points to highlight important information</li>
              </Typography>{' '}
              <Typography variant="body1">
                <li>Use bullet points to highlight important information</li>
              </Typography>
            </Col>
          </Row>
        </Container>
      </Section>

      <Footer />
    </React.Fragment>
  );
};
