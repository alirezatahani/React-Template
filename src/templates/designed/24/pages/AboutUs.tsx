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
import {
  TemplateBtn,
  TemplateDataCol,
  TemplateDataDiv,
} from '../styles/design24.styles';
import { TemplateImages } from '../utils/index';

export const AboutUs = () => {
  return (
    <>
      <Container>
        <Space direction="vertical" spacing={30}>
          <TemplateDataDiv width="90%">
            <Row>
              <Col sm={12}>
                <Typography variant="h2" strong>
                  Add your title
                </Typography>
              </Col>
            </Row>
            <Row>
              <TemplateDataCol sm={12} md={6} align="flex-start">
                <TemplateDataDiv width="500px">
                  <Typography variant="body1">
                    Use this space to elaborate on the ideas introduced in the
                    title. Include the information that makes the most sense for
                    your brand. Try sharing your mission to build trust. Or,
                    briefly explain how your product works and the value it
                    brings, so they feel compelled to give it a go.
                  </Typography>
                </TemplateDataDiv>
              </TemplateDataCol>
              <TemplateDataCol sm={12} md={6}>
                <TemplateDataDiv width="500px">
                  <Typography variant="body1">
                    Use this space to elaborate on the ideas introduced in the
                    title. Include the information that makes the most sense for
                    your brand. Try sharing your mission to build trust. Or,
                    briefly explain how your product works and the value it
                    brings, so they feel compelled to give it a go.
                  </Typography>
                </TemplateDataDiv>
              </TemplateDataCol>
            </Row>
          </TemplateDataDiv>
          <TemplateDataDiv>
            <Col sm={12}>
              <Image src={TemplateImages.aboutUs} />
            </Col>
          </TemplateDataDiv>
          <TemplateDataDiv width="90%">
            <TemplateDataCol align="flex-start">
              <Space direction="vertical" spacing={30}>
                <Typography variant="h3">Introduce your idea</Typography>
                <Typography variant="body1">
                  Let people find out more about what you do. Use this space to
                  describe your products or services, and highlight their
                  benefits. Want people to know your company? Share information
                  about you and your team members.
                </Typography>
                <Typography variant="body1">
                  Use this space to elaborate on the ideas introduced in the
                  title. Include the information that makes the most sense for
                  your brand. Try sharing your mission to build trust. Or,
                  briefly explain how your product works and the value it
                  brings, so they feel compelled to give it a go.
                </Typography>
              </Space>
              <TemplateBtn size="lg">Call to Action</TemplateBtn>
            </TemplateDataCol>
          </TemplateDataDiv>
        </Space>
      </Container>
    </>
  );
};
