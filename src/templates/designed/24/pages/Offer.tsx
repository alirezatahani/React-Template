import React from 'react';
import {
  Col,
  Container,
  Footer,
  Image,
  Row,
  Space,
  Typography,
} from '../../../../components';
import { TemplateImages } from '../utils/index';
import {
  HeroContainer,
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
          <Row>
            <TemplateDataCol align="flex-start">
              <Typography variant="h2" strong>
                Introduce your idea
              </Typography>
            </TemplateDataCol>
          </Row>
          <Row>
            <TemplateDataCol sm={12} md={9}>
              <Typography variant="body1">
                Let people find out more about what you do. Use this space to
                describe your products or services, and highlight their
                benefits. Want people to know your company? Share information
                about you and your team members.
              </Typography>
            </TemplateDataCol>
            <TemplateDataCol sm={6} md={3}>
              <TemplateBtn size="lg">Call to action</TemplateBtn>
            </TemplateDataCol>
          </Row>
        </Container>
      </TemplateWideContainer>
      <TemplateDataDiv>
        <Container>
          <Space direction="vertical" spacing={40}>
            <Row>
              <Col xl={4} md={12} sm={12}>
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
              <Col xl={4} md={12} sm={12}>
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
              <Col xl={4} md={12} sm={12}>
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
              <Col xl={6} md={12} sm={12}>
                <Image src={TemplateImages.offer.image4} />
              </Col>
              <Col xl={6} md={12} sm={12}>
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
