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
  { id: 2, name: 'Button', icon: <MdSmartButton /> },
  { id: 3, name: 'Input', icon: <FaEdit /> },
  { id: 4, name: 'Image', icon: <FaImage /> },
];

export const ComponentsVariations: { [x: string]: any[] } = {
  Button: [
    {
      id: 1,
      name: 'Button',
      style: { backgroundColor: '#fff', margin: '10px', padding: '20px 40px', color:'#000', border:'2px solid #000' },
    },
    {
      id: 2,
      name: 'Button',
      style: { backgroundColor: 'rgb(62, 72, 80)', margin: '20px', padding: '20px 40px', border:'none', borderRadius:'20px' },
    },
    {
      id: 3,
      name: 'Button',
      style: { backgroundColor: 'white', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'0', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 4,
      name: 'Button',
      style: { backgroundColor: '#fff', margin: '20px', padding: '20px 40px', color:'#000', border:'1px solid #000', borderRadius:'20px', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 5,
      name: 'Button',
      style: { backgroundColor: 'rgb(62, 72, 80)', margin: '20px', padding: '20px 40px', border:'none' },
    },
    {
      id: 6,
      name: 'Button',
      style: { backgroundColor: 'white', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'0'},
    },
    {
      id: 7,
      name: 'Button',
      style: { backgroundColor: '#fff', margin: '10px', padding: '20px 40px', color:'rgb(79, 44, 137)', border:'2px solid rgb(79, 44, 137)', borderRadius:'15px', boxShadow:'3px 5px 5px rgba(79, 44, 137,0.5)' },
    },
  ],
  // Input: [
  //   {
  //     id: 1,
  //     name: 'input',
  //     style: { backgroundColor: 'rgb(62, 72, 80)', margin: '20px', padding: '20px 40px', border:'none' },
  //   },
  // ]
};
