import React from 'react';

export type NavbarProps = {
  style?: React.CSSProperties;
};
export type NavItem = {
  id: number;
  name: string;
};

export type SocialNavItem = {
  id: number;
  icon: JSX.Element;
};

export type LogoType = {
  icon: JSX.Element;
};
