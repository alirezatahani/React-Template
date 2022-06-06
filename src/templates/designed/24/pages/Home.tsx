import * as React from 'react';
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
  TemplateContainer,
  TemplateDataCol,
  TemplateDataDiv,
  TemplateMain,
  TemplateTypo,
  TemplateWideContainer,
} from '../styles/design24.styles';
export const Home = () => {
  return (
    <>
      <HeroContainer image={TemplateImages.heroImage}>
        <Container >
          <TemplateDataDiv width="730px" display='flex' height='100%'>
            <TemplateDataCol align="center" >
              <Typography strong variant="h2">
                Add your title
              </Typography>
              <Typography variant="h5" style={{ textAlign: 'center'}}>
                Use this space to elaborate on the ideas introduced in the
                title. Include the information that makes the most sense for
                your brand. Try sharing your company's mission to build trust.
                Or, briefly explain how your product works and the value it
                brings, so they feel compelled to give it a go. Customize the
                background image to draw people in and drive your point home.
              </Typography>
              <TemplateBtn size="lg">Call to Action</TemplateBtn>
            </TemplateDataCol>
          </TemplateDataDiv>
        </Container>
      </HeroContainer>
      <TemplateMain>
        <TemplateContainer>
          <Space direction="vertical" spacing={30}>
            <Row spacing={2}>
              <Col xl={6} md={6} sm={12}>
                <TemplateDataDiv>
                  <TemplateDataCol align="flex-start">
                    <Typography variant="h3" strong>Introduce your idea</Typography>
                    <Typography variant="body1">
                      Tell people more about what you do. Use this space to
                      describe your products or services. Highlight their
                      benefits so they feel compelled to click.
                    </Typography>
                    <TemplateBtn size="lg">Call to Action</TemplateBtn>
                  </TemplateDataCol>
                </TemplateDataDiv>
              </Col>
              <Col xl={6} md={6} sm={12}>
                <Image src={TemplateImages.mainImages.imageOne} />
              </Col>
            </Row>
            <Row>
              <Col xl={6} md={6} sm={12}>
                <Image src={TemplateImages.mainImages.imageTwo} />
              </Col>
              <Col xl={6} md={6} sm={12}>
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
        </TemplateContainer>
      </TemplateMain>
      <TemplateWideContainer>
        <TemplateContainer>
          <TemplateDataDiv width='942px'>
            <TemplateDataCol align="center">
              <Typography strong variant="h2">
                Add your title
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Use this space to elaborate on the ideas introduced in the
                title. Include the information that makes the most sense for
                your brand. Try sharing your mission to build trust. Or, briefly
                explain how your product works and the value it brings, so they
                feel compelled to give it a go.
              </Typography>
              <TemplateBtn size="lg">Call to Action</TemplateBtn>
            </TemplateDataCol>
          </TemplateDataDiv>
        </TemplateContainer>
      </TemplateWideContainer>
      <Footer/>
    </>
  );
};
