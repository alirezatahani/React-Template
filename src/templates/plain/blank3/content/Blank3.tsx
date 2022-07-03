import React from 'react';
import {
  TemplateContainer,
  HeroFormInput,
  HeroCard,
  MainContainer,
  Jumbotron,
  SectionFluid,
  HeroButton,
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
  Container,
} from '@components/index';
import { CardMedia } from '@components/card/content/cardMedia/index';
import { CardContent } from '@components/card/content/cardContent/index';

export const Blank3 = ({ setSelected, state }: any) => {
  return (
    <React.Fragment>
      <Navbar />
      <SectionFluid>
        <MainContainer fluid>
          <MainContainer>
            <Row>
              <Col
                xs={12}
                style={{
                  justifyContent: state.alignMent,
                  display: 'flex',
                }}
              >
                {!state.file ? (
                  <Image
                    src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png"
                    onClick={() => setSelected({ type: 'image' })}
                    width={state.width}
                    height={state.height}
                    style={{
                      paddingTop: Number(state.paddingTop),
                      paddingBottom: Number(state.paddingBottom),
                      paddingRight: Number(state.paddingRight),
                      paddingLeft: Number(state.paddingLeft),
                    }}
                  />
                ) : (
                  <Image
                    src={state.file}
                    alt={state.altText}
                    width={state.width}
                    height={state.height}
                    onClick={() => setSelected({ type: 'image' })}
                    style={{
                      paddingTop: state.paddingTop,
                    }}
                  />
                )}
              </Col>
            </Row>
          </MainContainer>

          <Row>
            <Col xs={12}>
              <Typography
                onClick={() => setSelected({ type: 'typography' })}
                variant={state.fontType}
                textAlign={state.textAlign}
                style={{
                  textDecoration: state.textDecoration,
                  color: state.fontColor,
                }}
              >
                Share more about what you do. Use this space to describe your
                products or services, and highlight their benefits. Customize
                the image to draw people in and drive your point home.
              </Typography>
            </Col>
          </Row>
          <Row>
            <Col xs={12} alignItems="center" justify="center" display="flex">
              <HeroButton
                onClick={() => setSelected({ type: 'button' })}
                variant={state.btnVariant}
                size={state.btnSize}
                shape={state.btnShape}
              >
                {state.btnText}
              </HeroButton>
            </Col>
          </Row>
        </MainContainer>
      </SectionFluid>

      <Section>
        <Container>
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
        </Container>
      </Section>

      <Section>
        <Container>
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

      <Footer />
    </React.Fragment>
  );
};
