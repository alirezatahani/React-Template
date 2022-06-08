import React from 'react';
import { Row, Col, Container } from '../..';
import { FooterProps, MenuItem, SocialItem } from './footer_types';
import { socialItems, menuItems } from '../utils/constants';

import {
  FooterWrapper,
  FooterContainer,
  Item,
  Ul,
  SocialItems,
  SocialContent,
} from '../styles/Footer.styles';

const Footer: React.FC<FooterProps> = ({ ...rest }: FooterProps) => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer spacing={0}>
          <Col md={6}>
            <Ul>
              {menuItems.map((menuItem: MenuItem, index: number) => (
                <Item key={index}>{menuItem.name}</Item>
              ))}
            </Ul>
          </Col>

          <Col md={6}>
            <SocialItems>
              {socialItems.map((socialItem: SocialItem, index: number) => (
                <SocialContent key={index}>{socialItem.icon}</SocialContent>
              ))}
            </SocialItems>
          </Col>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};

Footer.defaultProps = {};
export default Footer;
