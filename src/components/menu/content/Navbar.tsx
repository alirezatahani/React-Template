import React from 'react';
import { NavbarProps } from './navbar_types';
import { Col, Container } from '../..';
import { SocialNavItem, NavItem } from './navbar_types';
import { socialNavItems, navItems, logoItem } from '../utils/constants';

import {
  NavbarWrapper,
  Item,
  Ul,
  Logo,
  SocialItem,
  SocialContent,
  NavbarContainer,
} from '../styles/Navbar.styles';

const Navbar: React.FC<NavbarProps> = ({}: NavbarProps) => {
  return (
    <NavbarWrapper>
      <Container>
        <NavbarContainer spacing={0}>
          <Col xs={2}>
            <Logo>{logoItem.icon}</Logo>
          </Col>
          <Col xs={8}>
            <Ul>
              {navItems.map((navItem: NavItem, index: number) => (
                <Item key={index}>{navItem.name}</Item>
              ))}
            </Ul>
          </Col>
          <Col xs={2}>
            <SocialItem>
              {socialNavItems.map(
                (socialNavItem: SocialNavItem, index: number) => (
                  <SocialContent key={index}>
                    {socialNavItem.icon}
                  </SocialContent>
                )
              )}
            </SocialItem>
          </Col>
        </NavbarContainer>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.defaultProps = {};
export default Navbar;
