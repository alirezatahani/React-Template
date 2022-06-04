import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Col, Row, Typography, Container, Image } from '../../../../components';
import {
  HeroContainer,
  HeroForm,
  HeroFormInput,
  TemplateBtn,
  HeroText,
  HeroTitle,
  IconContainer,
  PeopleContainer,
  PropleDesc,
  SocialSection,
  SocialItemContainer,
  TemplateDataCol,
  TemplateDataSection,
} from '../styles/design37.styles';
import { templateImages } from '../utils';

export const Home = () => {
  return (
    <>
      <HeroContainer image={templateImages.heroImage}>
        <Container>
          <HeroForm>
            <HeroTitle variant="h2">Add your title</HeroTitle>
            <HeroText variant="body1">
              Use this space to elaborate on the ideas introduced in the title.
              Include the information that makes the most sense for your brand.
            </HeroText>
            <HeroFormInput placeholder="Name*" />
            <HeroFormInput placeholder="Email*" />
            <TemplateBtn size="lg">
              <span>Sign up</span>
            </TemplateBtn>
          </HeroForm>
        </Container>
      </HeroContainer>
      <TemplateDataSection>
        <Container>
          <TemplateDataCol sm={12}>
            <Typography
              variant="h2"
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              Add your title
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              Use this space to elaborate on the ideas introduced in the title.
              Connect with your visitors. Include the information that makes the
              most sense for your brand. Try sharing your mission to build
              trust. Or, briefly explain how your product works and the value it
              brings, so they feel compelled to explore your site. The sky is
              the limit.
            </Typography>
          </TemplateDataCol>
        </Container>
      </TemplateDataSection>
      <IconContainer>
        <Container>
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
                src={templateImages.icons.first}
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
                src={templateImages.icons.second}
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
                src={templateImages.icons.third}
                width="32px"
                height="42px"
              />
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on the ideas introduced in the
                title.
              </Typography>
            </Col>
          </Row>
        </Container>
      </IconContainer>
      <PeopleContainer>
        <Container>
          <Row>
            <PropleDesc xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h3">Jane Smith</Typography>
              <a href="" style={{ textDecoration: 'none' }}>
                Add your file
              </a>
              <Typography variant="body1">
                Use this space to elaborate on your headline and connect with
                your visitors. You can build on the first idea or add your
                second point.
              </Typography>
            </PropleDesc>
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
                src={templateImages.personOne}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <PropleDesc xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h3">Mike Smith</Typography>
              <a href="" style={{ textDecoration: 'none' }}>
                Add your file
              </a>
              <Typography variant="body1">
                Use this space to elaborate on your headline and connect with
                your visitors. You can build on the first idea or add your
                second point.
              </Typography>
            </PropleDesc>
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
                src={templateImages.personTwo}
              />
            </Col>
          </Row>
        </Container>
      </PeopleContainer>
      <TemplateDataSection>
        <Container>
          <TemplateDataCol sm={12}>
            <Typography
              variant="h2"
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              Add your title
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              Use this space to elaborate on the ideas introduced in the title.
              Connect with your visitors. Include the information that makes the
              most sense for your brand. Try sharing your mission to build
              trust. Or, briefly explain how your product works and the value it
              brings, so they feel compelled to explore your site. The sky is
              the limit.
            </Typography>
            <TemplateBtn size="lg">Call to Action</TemplateBtn>
          </TemplateDataCol>
        </Container>
      </TemplateDataSection>
      <SocialSection>
        <SocialItemContainer>
          <FaFacebook size={18} />
        </SocialItemContainer>
        <SocialItemContainer>
          <FaTwitter size={18} />
        </SocialItemContainer>
        <SocialItemContainer>
          <FaInstagram size={18} />
        </SocialItemContainer>
      </SocialSection>
    </>
  );
};
