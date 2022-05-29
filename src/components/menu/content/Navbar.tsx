import * as React from 'react';
import { NavbarProps } from './navbar_types';
import { Row, Col } from '../../../components';
import {
  Nav,
  Item,
  Ul,
  Logo,
  SocialItem,
  SocialContent,
} from '../styles/Navbar.styles';
import { FaAtlassian, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Items } from '../utils/constants';

const Navbar: React.FC<NavbarProps> = ({ ...rest }: NavbarProps) => {
  return (
    <Nav>
      <Row>
        <Col xs={12}>
          <Row>
            <Col md={4}>
              <Logo>
                <FaAtlassian size={18} />
              </Logo>
            </Col>
            <Col md={4}>
              <Ul>
                {Items.map((item) => {
                  return <Item>{item.name}</Item>;
                })}
              </Ul>
            </Col>
            <Col md={4}>
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
        </Col>
      </Row>
    </Nav>
  );
};

Navbar.defaultProps = {};
export default Navbar;
