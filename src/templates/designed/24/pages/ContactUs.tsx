import React from 'react';
import { Container, Typography,Textarea } from '../../../../components';
import {
  HeroContainer,
  TemplateBtn,
  TemplateDataCol,
  TemplateDataDiv,
  TemplateInput,
  TemplateInputLabel,
  TemplateTextarea,
} from '../styles/design24.styles';
import { TemplateImages } from '../utils/index';

export const ContactUs = () => {
  return (
    <>
      <HeroContainer image={TemplateImages.offer.image1} backgroundFullImage>
        <Container>
          <TemplateDataDiv backgroundColor="white" padding="2rem" width="80%">
            <TemplateDataCol align="center">
              <Typography variant="h3" strong>
                Encourage people to get in touch
              </Typography>
              <Typography variant='h5'>
                Let visitors know how you can help. You can describe your offer.
                Or, share your story to connect with them.
              </Typography>
              <TemplateDataDiv width="80%">
                <TemplateInputLabel htmlFor="name">Name*</TemplateInputLabel>
                <TemplateInput name="name" type="text" />
              </TemplateDataDiv>
              <TemplateDataDiv width="80%">
                <TemplateInputLabel htmlFor="email">Email*</TemplateInputLabel>
                <TemplateInput name="email" type="email" />
              </TemplateDataDiv>
              <TemplateDataDiv width="80%">
                <TemplateInputLabel htmlFor="phone">Phone*</TemplateInputLabel>
                <TemplateInput name="phone" type="phone" />
              </TemplateDataDiv>
              <TemplateDataDiv width="80%">
                <TemplateTextarea htmlFor="message" label="Message*" placeholder="Type Your Message..."  height="200px" direction="column" />
              </TemplateDataDiv>
              <TemplateBtn size="lg">Call to Action</TemplateBtn>
            </TemplateDataCol>
          </TemplateDataDiv>
        </Container>
      </HeroContainer>
    </>
  );
};
