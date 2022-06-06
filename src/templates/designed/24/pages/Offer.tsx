import * as React from 'react';
import {
  Col,
  Container,
  Image,
  Row,
  Space,
  Typography,
} from '../../../../components';
import { TemplateImages } from '../utils/index';
import {
 TemplateBtn,
  TemplateDataCol,
  TemplateDataDiv,
  TemplateMain,
  TemplateWideContainer,
} from '../styles/design24.styles';

export const Offer = () => {
  return (
    <>
      <TemplateWideContainer>
        <Container>
          <TemplateDataDiv padding="4rem 5rem">
            <Row>
              <TemplateDataCol align="flex-start">
                <Typography variant="h2" strong>
                  Introduce your idea
                </Typography>
              </TemplateDataCol>
            </Row>
            <Row>
              <TemplateDataCol sm={12} md={8}>
                <TemplateDataDiv>
                  <Typography variant="body1">
                    Let people find out more about what you do. Use this space
                    to describe your products or services, and highlight their
                    benefits. Want people to know your company? Share
                    information about you and your team members.
                  </Typography>
                </TemplateDataDiv>
              </TemplateDataCol>
              <TemplateDataCol sm={12} md={4}>
                <TemplateDataDiv>
                  <TemplateBtn size="lg">Call to action</TemplateBtn>
                </TemplateDataDiv>
              </TemplateDataCol>
            </Row>
          </TemplateDataDiv>
        </Container>
      </TemplateWideContainer>
      <TemplateDataDiv>
        <Container>
          <Space direction="vertical" spacing={40}>
            <Row>
              <Col lg={4} sm={12}>
                <TemplateDataDiv>
                  <TemplateDataCol align="center">
                    <Image src={TemplateImages.offer.image1} />
                    <Typography variant="body1" style={{ padding: '0 2rem' }}>
                      Tell people more about what you do. Use this space to
                      describe your products or services, and highlight their
                      benefits. Want people to know your company? Share
                      information about you and your team members.
                    </Typography>
                    <TemplateBtn size="lg">Call to Action</TemplateBtn>
                  </TemplateDataCol>
                </TemplateDataDiv>
              </Col>
              <Col lg={4} sm={12}>
                <TemplateDataDiv>
                  <TemplateDataCol align="center">
                    <Image src={TemplateImages.offer.image2} />
                    <Typography variant="body1" style={{ padding: '0 2rem' }}>
                      Tell people more about what you do. Use this space to
                      describe your products or services, and highlight their
                      benefits. Want people to know your company? Share
                      information about you and your team members.
                    </Typography>
                    <TemplateBtn size="lg">Call to Action</TemplateBtn>
                  </TemplateDataCol>
                </TemplateDataDiv>
              </Col>
              <Col lg={4} sm={12}>
                <TemplateDataDiv>
                  <TemplateDataCol align="center">
                    <Image src={TemplateImages.offer.image3} />
                    <Typography variant="body1" style={{ padding: '0 2rem' }}>
                      Tell people more about what you do. Use this space to
                      describe your products or services, and highlight their
                      benefits. Want people to know your company? Share
                      information about you and your team members.
                    </Typography>
                    <TemplateBtn size="lg">Call to Action</TemplateBtn>
                  </TemplateDataCol>
                </TemplateDataDiv>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <Image src={TemplateImages.offer.image4} />
              </Col>
              <Col lg={6} sm={12}>
                <TemplateDataDiv>
                  <TemplateDataCol align="flex-start">
                    <Typography variant="h3">Introduce your idea</Typography>
                    <Typography variant="body1">
                      Tell people more about what you do. Use this space to
                      describe your products or services. Highlight their
                      benefits so they feel compelled to click.
                    </Typography>
                    <TemplateBtn size="lg">Call to Action</TemplateBtn>
                  </TemplateDataCol>
                </TemplateDataDiv>
              </Col>
            </Row>
          </Space>
        </Container>
      </TemplateDataDiv>
    </>
  );
};
