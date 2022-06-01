// import { Typography } from '../../../../components/typography/content/Typography';
import {
  Col,
  Button,
  Space,
  Row,
  Typography,
  Container,
  Input,
  Image,
  Footer,
} from '../../../../components';
import * as React from 'react';
import {
  HeroContainer,
  HeroForm,
  HeroFormInput,
  HeroFormSubmit,
  IconContainer,
  PeopleContainer,
  SocialContainer,
  SocialItemContainer,
  TemplateContainer,
} from '../styles/design37.styles';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Design37 = () => {
  return (
    <>
      <HeroContainer image="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjA3MjcxOTE&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop&fm=webp&q=75">
        <Container>
          <HeroForm>
            <Typography style={{ color: '#fff', zIndex: 6 }} variant="h2">
              Add your title
            </Typography>
            <Typography
              style={{ color: '#fff', zIndex: 6, marginTop: '2rem' }}
              variant="body1"
            >
              Use this space to elaborate on the ideas introduced in the title.
              Include the information that makes the most sense for your brand.
            </Typography>
            <HeroFormInput placeholder="Name*" />
            <HeroFormInput placeholder="Email*" />
            <HeroFormSubmit size="lg">
              <span>Sign up</span>
            </HeroFormSubmit>
          </HeroForm>
        </Container>
      </HeroContainer>
      <Container>
        <Typography
          variant="h2"
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          Add your title
        </Typography>
        <Typography variant="body1" style={{ textAlign: 'center' }}>
          Use this space to elaborate on the ideas introduced in the title.
          Connect with your visitors. Include the information that makes the
          most sense for your brand. Try sharing your mission to build trust.
          Or, briefly explain how your product works and the value it brings, so
          they feel compelled to explore your site. The sky is the limit.
        </Typography>
      </Container>
      <IconContainer>
        <TemplateContainer>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/db494c0a-6f2e-4782-bde2-cc7f55f2adab.png"
                width="42px"
                height="42px"
              />
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on the ideas introduced in the
                title.
              </Typography>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/a3780bd2-e615-431c-9cf0-4ff48731bd16.png"
                width="48px"
                height="42px"
              />
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on the ideas introduced in the
                title.
              </Typography>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/aa18c61a-1e3b-44d2-acbd-da9da82c42ee.png"
                width="32px"
                height="42px"
              />
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on the ideas introduced in the
                title.
              </Typography>
            </Col>
          </Row>
        </TemplateContainer>
      </IconContainer>
      <PeopleContainer>
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
              }}
            >
              <Typography variant="h3">Jane Smith</Typography>
              <a href="" style={{ textDecoration: 'none' }}>
                Add your file
              </a>
              <Typography variant="body1">
                Use this space to elaborate on your headline and connect with
                your visitors. You can build on the first idea or add your
                second point.
              </Typography>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ textAlign: 'center' }}
            >
              <Image
                width="560px"
                height="460px"
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/5f7dd048-1122-4c54-ab4f-12b9077b48f8.jpg"
              />
            </Col>
          </Row>
        </TemplateContainer>
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
              }}
            >
              <Typography variant="h3">Mike Smith</Typography>
              <a href="" style={{ textDecoration: 'none' }}>
                Add your file
              </a>
              <Typography variant="body1">
                Use this space to elaborate on your headline and connect with
                your visitors. You can build on the first idea or add your
                second point.
              </Typography>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ textAlign: 'center' }}
            >
              <Image
                width="560px"
                height="460px"
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/6fbbe657-1a8e-45bb-80e7-a36303a81bbd.png"
              />
            </Col>
          </Row>
        </TemplateContainer>
      </PeopleContainer>
      <Container>
        <TemplateContainer style={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            Add your title
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            Use this space to elaborate on the ideas introduced in the title.
            Connect with your visitors. Include the information that makes the
            most sense for your brand. Try sharing your mission to build trust.
            Or, briefly explain how your product works and the value it brings,
            so they feel compelled to explore your site. The sky is the limit.
          </Typography>
          <Button
            style={{
              background: '#1274f6',
              color: '#fff',
              borderRadius: '0',
              marginTop: '2rem',
            }}
            size="lg"
          >
            Call to Action
          </Button>
        </TemplateContainer>
      </Container>
      <Container>
        <SocialContainer>
          <SocialItemContainer>
            <FaFacebook size={18} />
          </SocialItemContainer>
          <SocialItemContainer>
            <FaTwitter size={18} />
          </SocialItemContainer>
          <SocialItemContainer>
            <FaInstagram size={18} />
          </SocialItemContainer>
        </SocialContainer>
      </Container>
    </>
  );
};
export default Design37;
