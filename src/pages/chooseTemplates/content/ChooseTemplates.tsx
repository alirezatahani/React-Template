import React from 'react';
import { Container } from '@components/container';
import { Col } from '@components/grid';
import { Tab } from '@components/tab';
import { TemplateCart } from '@components/templateCart';
import {
  PageTitle,
  TemlatesContainer,
  TemplatesSection,
} from '../styles/chooseTemplates';
import { AllTemplatesImage } from '../utils/images';
import { routes } from '../../../routes';

const ChooseTemplates: React.FC = () => {
  const filteredProdesign = routes.filter((template) => {
    return template.path.includes('predesign');
  });
  const filteredBlank = routes.filter((template) => {
    return template.path.includes('blank');
  });
  return (
    <>
      <TemplatesSection>
        <Container>
          <Col xs={12} alignItems="center">
            <PageTitle variant="h3" strong>Pick your template</PageTitle>
          </Col>
          <Col xs={12}>
            <Tab
              items={['Predesigned Templates', 'Balnk templates']}
              align="center"
            >
              <TemlatesContainer>
                {filteredProdesign.map((route) => {
                  const src =
                    AllTemplatesImage[
                      route.path as keyof typeof AllTemplatesImage
                    ];
                  return <TemplateCart template={route} src={src} />;
                })}
              </TemlatesContainer>
              <TemlatesContainer>
                {filteredBlank.map((route) => {
                  const src =
                    AllTemplatesImage[
                      route.path as keyof typeof AllTemplatesImage
                    ];
                  return <TemplateCart template={route} src={src} />;
                })}
              </TemlatesContainer>
            </Tab>
          </Col>
        </Container>
      </TemplatesSection>
    </>
  );
};

export default ChooseTemplates;
