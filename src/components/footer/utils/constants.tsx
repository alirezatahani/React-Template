import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { MenuItem, SocialItem } from '../content/footer_types';

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Pricing' },
  { id: 4, name: 'Contact' },
];

export const socialItems: SocialItem[] = [
  { id: 1, icon: <FaFacebook size={18} /> },
  { id: 2, icon: <FaTwitter size={18} /> },
];
