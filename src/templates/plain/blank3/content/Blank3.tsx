import * as React from 'react';
import {
  SectionContainer,
  TemplateContainer,
  HeroFormInput,
  HeroCard,
  MainContainer,
  Jumbotron,
  Section,
} from '../styles/blank3.styles';
import {
  Navbar,
  Footer,
  Image,
  Row,
  Col,
  Button,
  Typography,
} from '../../../../components';
import { CardMedia } from '../../../../components/card/content/cardMedia/index';
import { CardContent } from '../../../../components/card/content/cardContent/index';

export const Blank3 = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Section>
        <MainContainer fluid>
          <Row>
            <Col xs={12}>
              <Image src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Typography
                variant="h2"
                style={{ textAlign: 'center', marginBottom: '2rem' }}
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
        </MainContainer>
      </Section>

      <SectionContainer>
        <TemplateContainer>
          <Row>
            <TemplateContainer xs={12}>
              <Typography variant="h2">Add your title</Typography>
            </TemplateContainer>
          </Row>
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
              <Typography variant="h4">
                Use this space to elaborate on the ideas introduced in the
                title. Connect with your visitors. Include the information that
                makes the most sense for your brand.t.
              </Typography>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ textAlign: 'center', marginTop: '3rem' }}
            >
              <HeroFormInput placeholder="Name" />
              <HeroFormInput placeholder="Email" />
              <Button variant="outlined">Sign Up</Button>
            </Col>
          </Row>
        </TemplateContainer>
      </SectionContainer>

      <SectionContainer>
        <TemplateContainer>
          <Row>
            <Col xs={12} sm={12} md={4} lg={6} xl={4}>
              <HeroCard>
                <CardMedia src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
                <CardContent title="Item title">
                  Let people find out more about what you do. Use this space to
                  describe your products or services, and highlight their
                  benefits. Want people to know your company? Share information
                  about you and your team members.
                </CardContent>
              </HeroCard>
            </Col>
            <Col xs={12} sm={12} md={4} lg={6} xl={4}>
              <HeroCard>
                <CardMedia src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
                <CardContent title="Item title">
                  Let people find out more about what you do. Use this space to
                  describe your products or services, and highlight their
                  benefits. Want people to know your company? Share information
                  about you and your team members.
                </CardContent>
              </HeroCard>
            </Col>
            <Col xs={12} sm={12} md={4} lg={6} xl={4}>
              <HeroCard>
                <CardMedia src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
                <CardContent title="Item title">
                  Let people find out more about what you do. Use this space to
                  describe your products or services, and highlight their
                  benefits. Want people to know your company? Share information
                  about you and your team members.
                </CardContent>
              </HeroCard>
            </Col>
          </Row>
        </TemplateContainer>
      </SectionContainer>
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
            <Col xs={12} alignItems="center" justify="center" display="flex">
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

      <Footer />
    </React.Fragment>
  );
};
