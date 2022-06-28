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
      style: { backgroundColor: '#fff', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000' },
    },
    {
      id: 2,
      name: 'Button',
      style: { backgroundColor: 'rgb(62, 72, 80)', margin: '20px', padding: '20px 40px', border:'none', borderRadius:'20px' },
    },
    {
      id: 3,
      name: 'Button',
      style: { backgroundColor: '#fff', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'0', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
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
      style: { backgroundColor: '#fff', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'0'},
    },
    {
      id: 7,
      name: 'Button',
      style: { backgroundColor: '#fff', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'15px', boxShadow:'3px 5px 5px rgba(0, 0, 0, 0.5)' },
    },
    {
      id: 8,
      name: 'Button',
      style: { backgroundColor: 'rgb(62, 72, 80)', margin: '20px', padding: '20px 40px', color:'#fff', border:'2px solid #fff', borderRadius:'0', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 9,
      name: 'Button',
      style: { backgroundColor: 'rgb(62, 72, 80)', margin: '20px', padding: '20px 40px', border:'2px solid #fff', borderRadius:'20px', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 10,
      name: 'Button',
      style: { backgroundColor: 'rgb(240, 240, 240)', margin: '20px', padding: '20px 40px', color:'#000', border:'1px solid #000', borderRadius:'20px', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 11,
      name: 'Button',
      style: { backgroundColor: 'rgb(240, 240, 240)', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'0', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)'},
    },
    {
      id: 12,
      name: 'Button',
      style: { backgroundColor: 'rgb(62, 72, 80)', margin: '20px', padding: '20px 40px', border:'2px solid #fff', borderRadius:'50%', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 13,
      name: 'Button',
      style: { backgroundColor: '#fff', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'50%', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 14,
      name: 'Button',
      style: { backgroundImage: 'linear-gradient(to bottom right, rgb(62, 72, 80), #fff)', margin: '20px', padding: '20px 40px', border:'2px solid #fff', borderRadius:'50%', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 15,
      name: 'Button',
      style: { backgroundImage: 'linear-gradient(to bottom, rgb(62, 72, 80), #fff)', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'50%', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 16,
      name: 'Button',
      style: { backgroundImage: 'linear-gradient(to bottom, rgb(62, 72, 80), rgb(200, 200, 200))', margin: '20px', padding: '20px 40px', color:'#fff', border:'2px solid #fff', borderRadius:'0', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
    {
      id: 17,
      name: 'Button',
      style: { backgroundImage: 'linear-gradient(to bottom right, rgb(62, 72, 80), #fff)', margin: '20px', padding: '20px 40px', color:'#000', border:'2px solid #000', borderRadius:'20px', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' },
    },
  ],

  Typography: [
    {
      id: 1,
      name: 'Add your title',
      style: {variant:"h1"},
    },
    {
      id: 2,
      name: 'Add your title',
      style: {variant:"h2"},
    },
    {
      id: 3,
      name: 'Add your title',
      style: {variant:"h3"},
    },
    {
      id: 4,
      name: 'Add your title',
      style: {variant:"h4"},
    },
    {
      id: 5,
      name: 'Add your title',
      style: {variant:"h5"},
    },
    {
      id: 6,
      name: 'Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. ',
      style: {variant:"subtitle1"},
    },
    {
      id: 7,
      name: 'Use this space to elaborate on your headline and connect with your visitors. You can build on the first idea or add your second point. ',
      style: {variant:"body1"},
    },
  ],

  Input:[
    {
      id: 1,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'rgb(120, 120, 120)', borderWidth:'3px', backgroundColor:'inherit'}
    },
    {
      id: 2,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'#000', border:'2px solid #000',backgroundColor:'rgb(250, 250, 250)', boxShadow:'3px 5px 5px rgba(0,0,0,0.2)' }
    },
    {
      id: 3,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'rgb(0, 153, 153)', border:'6px outset rgb(0, 153, 153)', backgroundColor:'rgb(240, 253, 253'}
    },
    {
      id: 4,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'rgb(120, 120, 120)', borderWidth:'3px', backgroundColor: theme.palette['secondary'].main, borderRadius:'30px'}
    },
    {
      id: 5,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', backgroundColor:'inherit', borderBottom:'2px solid #000'}
    },
    {
      id: 6,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'#fff', backgroundColor:'#000', borderBottom:'3px solid #fff', boxShadow:'3px 5px 5px rgba(0,0,0,0.2)'}
    },
    {
      id: 7,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', backgroundColor:'rgb(229, 204, 255)', borderBottom:'3px solid rgb(51, 0, 51)', borderRight:'3px solid rgb(51, 0, 51)', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)'}
    },
    {
      id: 8,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'#000', backgroundImage: 'linear-gradient(to bottom, rgb(51, 25, 0), #fff)', border:'2px solid rgb(0, 30, 0)', boxShadow:'3px 5px 5px rgba(0,0,0,0.6)', borderRadius:'15px' }
    },
    {
      id: 9,
      name: 'Input',
      style: {margin:'10px', padding:'30px 25px', fontSize:'18px', color:'rgba(51, 0, 25, 0.8)', border:'2px solid rgb(51, 0, 25)', backgroundImage: 'radial-gradient(rgb(255, 204, 255) 10%, #fff)', boxShadow:'3px 5px 5px rgba(51, 0, 25, 0.6)', borderRadius:'60%' }
    },
    {
      id: 10,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'#000', border:'2px solid rgb(0, 0, 51)', backgroundImage: 'linear-gradient(to bottom right, rgb(204, 204, 255), rgb(25, 0, 51))'}
    },
    {
      id: 11,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'rgb(94, 70, 14)', border:'2px solid rgba(51, 0, 0, 0.6)', backgroundImage: 'linear-gradient(to right, #fff, rgb(255, 255, 154), #fff)'}
    },
    {
      id: 12,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'#fff', border:'none', backgroundColor:'rgb(0, 0, 70)', boxShadow:'3px 5px 5px rgba(0,0,0,0.6)', borderRadius:'15px' }
    },
    {
      id: 13,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'#fff', borderBottom:'2px solid #fff', borderRight:'2px solid #fff', backgroundColor:'rgb(60, 0, 0)', boxShadow:'3px 5px 5px rgba(0,0,0,0.5)' }
    },
    {
      id: 14,
      name: 'Input',
      style: {margin:'10px', padding:'30px 25px', fontSize:'18px', color:'#fff', border:'2px solid rgb(0, 0, 40)', backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(153, 153, 255), #000)', boxShadow:'3px 5px 5px rgba(0,0,0,0.6)', borderRadius:'50%' }
    },
    {
      id: 15,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'#fff', border:'1px solid #fff', backgroundColor:'rgb(0, 20, 0)', boxShadow:'3px 5px 5px rgba(0,0,0,0.6)', borderRadius:'15px' }
    },
    {
      id: 16,
      name: 'Input',
      style: {margin:'10px', padding:'25px 15px', fontSize:'18px', color:'rgb(0, 0, 40)', border:'none', backgroundColor:'rgba(0, 0, 200, 0.3)', boxShadow:'3px 5px 5px rgba(0, 0, 40, 0.8)', borderRadius:'5px' }
    },
  ],
};
