import React from 'react';
import { FaAlignLeft, FaImage, FaEdit } from 'react-icons/fa';
// import { MdSmartButton } from 'react-icons/Md';

export type BoxName = {
  id: number;
  name: string;
  icon?: JSX.Element;
};

export const BoxNames: BoxName[] = [
  { id: 1, name: 'Typography', icon: <FaAlignLeft /> },
  { id: 2, name: 'Button', icon: <FaAlignLeft /> },
  { id: 3, name: 'Input', icon: <FaEdit /> },
  { id: 4, name: 'Image', icon: <FaImage /> },
];
