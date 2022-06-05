import React from 'react';
import {
  Col,
  Button,
  Space,
  Row,
  Typography,
  Container,
} from '../../../../components';
import {
  HeroContainer,
  ContactUsContainer,
  CallToActionRow,
  SectionImage,
} from '../styles/design94.styles';
import Design94Contact from './about/content/Design94Contact';

const Design94 = () => {
  return (
    <>
      <HeroContainer
        image="https://images.unsplash.com/photo-1539815208687-a0f05e15d601?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw0MHx8ZG9jdG9ycyUyMG9mZmljZXN8ZW58MHx8fHwxNjIwNTYzMTA1&ixlib=rb-1.2.1&w=1920&h=1440&crop=faces&fit=crop&fm=webp&q=75"
        fluid
      >
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <Typography style={{ color: '#fff', zIndex: 6 }} variant="h1">
                Introduce your idea
              </Typography>

              <Typography
                style={{ color: '#fff', zIndex: 6 }}
                variant="subtitle1"
              >
                Share more about what you do. Use this space to describe your
                products or services, and highlight their benefits. Customize
                the image to draw people in and drive your point home.
              </Typography>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <Button
                style={{ background: 'white', color: 'purple' }}
                size="lg"
              >
                Call to Action
              </Button>
            </Col>
          </Row>
        </Container>
      </HeroContainer>

      <ContactUsContainer fluid>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Space spacing={20} align="center" alignItems="center">
              <img
                width={40}
                src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/c56b196b-36a0-4ccf-a9ea-5ee1451e4d04.png"
              />
              <Typography style={{ color: '#fff' }} variant="h5">
                Address line 1, City, State
              </Typography>
            </Space>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Space spacing={20} align="center" alignItems="center">
              <img
                width={40}
                src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/c56b196b-36a0-4ccf-a9ea-5ee1451e4d04.png"
              />
              <Typography style={{ color: '#fff' }} variant="h5">
                Address line 1, City, State
              </Typography>
            </Space>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Space spacing={20} align="center" alignItems="center">
              <img
                width={40}
                src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/c56b196b-36a0-4ccf-a9ea-5ee1451e4d04.png"
              />
              <Typography style={{ color: '#fff' }} variant="h5">
                Address line 1, City, State
              </Typography>
            </Space>
          </Col>
        </Row>
      </ContactUsContainer>

      {/* Start Body */}
      <Container>
        <Row>
          <Col span={12}>
            <Typography variant="h2">Add Your Title</Typography>
          </Col>
        </Row>
        <CallToActionRow spacing={20}>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <SectionImage
              width={350}
              src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw5fHxtYXNzYWdlJTIwdGhlcmFweXxlbnwwfHx8fDE2MjM1NzI5Njg&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop&fm=webp&q=75"
            />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="h4">Item title</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members.
            </Typography>
          </Col>
        </CallToActionRow>
        <CallToActionRow spacing={20}>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <SectionImage
              width={350}
              src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw5fHxtYXNzYWdlJTIwdGhlcmFweXxlbnwwfHx8fDE2MjM1NzI5Njg&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop&fm=webp&q=75"
            />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="h4">Item title</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members.
            </Typography>
          </Col>
        </CallToActionRow>
        <CallToActionRow>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <SectionImage
              width={350}
              src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixid=MnwyMjUyNTN8MHwxfHNlYXJjaHw5fHxtYXNzYWdlJTIwdGhlcmFweXxlbnwwfHx8fDE2MjM1NzI5Njg&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop&fm=webp&q=75"
            />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography variant="h4">Item title</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members.
            </Typography>
          </Col>
        </CallToActionRow>
      </Container>
      <Container>
        <Row>
          <Col xs={6} sm={6} md={3} lg={3} xl={3}>
            <Typography color="primary" variant="h1">
              01
            </Typography>
            <Typography variant="h3">Phase #1</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members.
            </Typography>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3}>
            <Typography color="primary" variant="h1">
              01
            </Typography>
            <Typography variant="h3">Phase #1</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members.
            </Typography>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3}>
            <Typography color="primary" variant="h1">
              01
            </Typography>
            <Typography variant="h3">Phase #1</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members.
            </Typography>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3}>
            <Typography color="primary" variant="h1">
              01
            </Typography>
            <Typography variant="h3">Phase #1</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members.
            </Typography>
          </Col>
        </Row>
      </Container>
      <Container>
        <Typography variant="h1">Add Your Title</Typography>
        <br />
        <Typography variant="body1">
          Tell people what you can do for them. Describe your project, talk
          about your accomplishments, and share some figures that prove your
          product is worth checking out. Focus on what makes the most sense for
          your brand.
        </Typography>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h1" color="primary">
              270
            </Typography>
            <Typography variant="h3" color="secondary">
              Description
            </Typography>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h1" color="primary">
              270
            </Typography>
            <Typography variant="h3" color="secondary">
              Description
            </Typography>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h1" color="primary">
              270
            </Typography>
            <Typography variant="h3" color="secondary">
              Description
            </Typography>
          </Col>
        </Row>
      </Container>
    </>
    // <>
    //   <Design94Contact />
    // </>
  );
};

export default Design94;
