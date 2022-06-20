import React from 'react';
import { FaAlignLeft, FaImage, FaEdit } from 'react-icons/fa';
import { MdSmartButton } from 'react-icons/Md';

export type BoxName = {
  id: number;
  name: string;
  icon?: JSX.Element;
};

export const BoxNames: BoxName[] = [
  { id: 1, name: 'Typography', icon: <FaAlignLeft /> },
  { id: 2, name: 'Button', icon:<MdSmartButton/> },
  { id: 3, name: 'Input', icon: <FaEdit /> },
  { id: 4, name: 'Image', icon: <FaImage /> },
];

export const buttons= [
  { id: 1, name: 'Button', style:{backgroundColor: 'yellow', margin:'20px', padding:'20px'} },
  { id: 2, name: 'Button', style:{backgroundColor: 'red', margin:'20px', padding:'20px'} },
  { id: 3, name: 'Button', style:{backgroundColor: 'blue', margin:'20px', padding:'20px 20px'} },
  { id: 4, name: 'Button', style:{backgroundColor: 'pink', margin:'20px', padding:'20px'} },
  { id: 5, name: 'Button', style:{backgroundColor: 'brown', margin:'20px', padding:'20px'} }
];