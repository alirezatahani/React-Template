import { HeroContainer } from '../../../styles/design94.styles';
import React from 'react';
import {
  Container,
  Typography,
  Col,
  Row,
  Button,
} from '../../../../../../components';

const Design94Contact: React.FC = () => {
  return (
    <div>
      <HeroContainer
        image="https://images.unsplash.com/photo-1615505367812-0973facb1289?ixid=MnwyMjUyNTN8MHwxfGFsbHx8fHx8fHx8fDE2MjM3MDY2Njk&ixlib=rb-1.2.1&w=1920&h=1280&crop=faces&fit=crop&fm=webp&q=75"
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
      <Container>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7} xl={7}>
            <Typography variant="h2">Your Title</Typography>
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members. Use this space to elaborate on your headline
              and connect with your visitors. You can build on the first idea or
              add your second point. Now that you've got your visitors'
              attention, let them know what they can expect, and encourage them
              to explore your site.e
            </Typography>
            <br />
            <Typography variant="body1">
              Let people find out more about what you do. Use this space to
              describe your products or services, and highlight their benefits.
              Want people to know your company? Share information about you and
              your team members. Use this space to elaborate on your headline
              and connect with your visitors. You can build on the first idea or
              add your second point. Now that you've got your visitors'
              attention, let them know what they can expect, and encourage them
              to explore your site.e
            </Typography>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5} xl={5}>
            <img
              height={500}
              src="https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/9e188a41-942d-49de-a3f5-3ba2d1a7ae5a.png"
              alt="image"
            />
          </Col>
        </Row>
        <br />

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
    </div>
  );
};

export default Design94Contact;
