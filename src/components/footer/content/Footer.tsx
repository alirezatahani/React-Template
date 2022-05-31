import * as React from 'react';
import { Row, Col } from '../../grid';
import { FooterProps } from './footer_types';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

import {
  FooterStyled,
  Item,
  Ul,
  SocialItem,
  SocialContent,
} from '../styles/Footer.styles';

const Footer: React.FC<FooterProps> = ({ ...rest }: FooterProps) => {
  return (
    <FooterStyled>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <Row>
            <Col md={6}>
              <Ul>
                <Item>Home</Item>
                <Item>About us</Item>
                <Item>Pricing</Item>
                <Item>Contact</Item>
              </Ul>
            </Col>

            <Col md={6}>
              <SocialItem>
                <SocialContent>
                  <FaFacebook size={18} />
                </SocialContent>
                <SocialContent>
                  <FaTwitter size={18} />
                </SocialContent>
              </SocialItem>
            </Col>
          </Row>
          <Col xs={2}></Col>
        </Col>
      </Row>
    </FooterStyled>
  );
};

Footer.defaultProps = {};
export default Footer;
