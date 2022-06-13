import React from 'react';

export type FooterProps = {
  style?: React.CSSProperties;
};

export type MenuItem = {
  id: number;
  name: string;
};

export type SocialItem = {
  id: number;
  icon: JSX.Element;
};
