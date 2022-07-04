import { Typography } from '@components/typography';
import { theme } from 'global/Global';
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
      style: {
        backgroundColor: '#fff',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
      },
    },
    {
      id: 2,
      name: 'Button',
      style: {
        backgroundColor: 'rgb(62, 72, 80)',
        margin: '20px',
        padding: '20px 40px',
        border: 'none',
        borderRadius: '20px',
      },
    },
    {
      id: 3,
      name: 'Button',
      style: {
        backgroundColor: '#fff',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
        borderRadius: '0',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 4,
      name: 'Button',
      style: {
        backgroundColor: '#fff',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '1px solid #000',
        borderRadius: '20px',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 5,
      name: 'Button',
      style: {
        backgroundColor: 'rgb(62, 72, 80)',
        margin: '20px',
        padding: '20px 40px',
        border: 'none',
      },
    },
    {
      id: 6,
      name: 'Button',
      style: {
        backgroundColor: '#fff',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
        borderRadius: '0',
      },
    },
    {
      id: 7,
      name: 'Button',
      style: {
        backgroundColor: '#fff',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: '3px 5px 5px rgba(0, 0, 0, 0.5)',
      },
    },
    {
      id: 8,
      name: 'Button',
      style: {
        backgroundColor: 'rgb(62, 72, 80)',
        margin: '20px',
        padding: '20px 40px',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '0',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 9,
      name: 'Button',
      style: {
        backgroundColor: 'rgb(62, 72, 80)',
        margin: '20px',
        padding: '20px 40px',
        border: '2px solid #fff',
        borderRadius: '20px',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 10,
      name: 'Button',
      style: {
        backgroundColor: 'rgb(240, 240, 240)',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '1px solid #000',
        borderRadius: '20px',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 11,
      name: 'Button',
      style: {
        backgroundColor: 'rgb(240, 240, 240)',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
        borderRadius: '0',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 12,
      name: 'Button',
      style: {
        backgroundColor: 'rgb(62, 72, 80)',
        margin: '20px',
        padding: '20px 40px',
        border: '2px solid #fff',
        borderRadius: '50%',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 13,
      name: 'Button',
      style: {
        backgroundColor: '#fff',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
        borderRadius: '50%',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 14,
      name: 'Button',
      style: {
        backgroundImage:
          'linear-gradient(to bottom right, rgb(62, 72, 80), #fff)',
        margin: '20px',
        padding: '20px 40px',
        border: '2px solid #fff',
        borderRadius: '50%',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 15,
      name: 'Button',
      style: {
        backgroundImage: 'linear-gradient(to bottom, rgb(62, 72, 80), #fff)',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
        borderRadius: '50%',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 16,
      name: 'Button',
      style: {
        backgroundImage:
          'linear-gradient(to bottom, rgb(62, 72, 80), rgb(200, 200, 200))',
        margin: '20px',
        padding: '20px 40px',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '0',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
    {
      id: 17,
      name: 'Button',
      style: {
        backgroundImage:
          'linear-gradient(to bottom right, rgb(62, 72, 80), #fff)',
        margin: '20px',
        padding: '20px 40px',
        color: '#000',
        border: '2px solid #000',
        borderRadius: '20px',
        boxShadow: '3px 5px 5px rgba(0,0,0,0.5)',
      },
    },
  ],

  Typography: [
    {
      id: 1,
      name: 'Add your title',
      style: { variant: 'h1' },
    },
    {
      id: 2,
      name: 'Add your title',
      style: { variant: 'h2' },
    },
    {
      id: 3,
      name: 'Add your title',
      style: { variant: 'h3' },
    },
    {
      id: 4,
      name: 'Add your title',
      style: { variant: 'h4' },
    },
    {
      id: 5,
      name: 'Add your title',
      style: { variant: 'h5' },
    },
    {
      id: 6,
      name: 'Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. ',
      style: { variant: 'subtitle1' },
    },
    {
      id: 7,
      name: 'Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. ',
      style: { variant: 'body1' },
    },
  ],
};
