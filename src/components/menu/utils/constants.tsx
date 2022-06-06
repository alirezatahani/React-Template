import React from 'react';
import { FaAtlassian, FaFacebook, FaTwitter } from 'react-icons/fa';
import { LogoType, NavItem, SocialNavItem } from '../content/navbar_types';

export const navItems: NavItem[] = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Pricing' },
  { id: 4, name: 'Contact' },
];

export const socialNavItems: SocialNavItem[] = [
  { id: 1, icon: <FaFacebook size={18} /> },
  { id: 2, icon: <FaTwitter size={18} /> },
];
export const logoItem: LogoType = {
  icon: <FaAtlassian size={18} />,
};
