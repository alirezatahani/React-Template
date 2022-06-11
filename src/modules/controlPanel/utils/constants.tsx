import * as React from 'react';
import {
  BiBold,
  BiItalic,
  BiFont,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiAlignJustify,
} from 'react-icons/bi';

export const fontTypeOptions = [
  { value: 'h1', label: 'Heading 1', kind: 'fontType' },
  { value: 'h2', label: 'Heading 2', kind: 'fontType' },
  { value: 'body1', label: 'Paragraph', kind: 'fontType' },
];
export const fontFamilyOptions = [
  { value: 'Roboto', label: 'Roboto', kind: 'fontFamily' },
  { value: 'Poppins', label: 'Poppins', kind: 'fontFamily' },
  { value: 'Arial', label: 'Arial', kind: 'fontFamily' },
];

export const fontSizeOptions = [
  { value: '10', label: '10', kind: 'fontSize' },
  { value: '12', label: '12', kind: 'fontSize' },
  { value: '15', label: '15', kind: 'fontSize' },
  { value: '18', label: '18', kind: 'fontSize' },
  { value: '20', label: '20', kind: 'fontSize' },
];

export const displayOptions = [
  { value: 'masonry', label: 'Masonry', kind: 'displayStyle' },
  { value: 'grid', label: 'Grid', kind: 'displayStyle' },
  { value: 'slideshow', label: 'Slideshow', kind: 'displayStyle' },
];

export const fontDecorationOptions = [
  { value: 'bold', label: <BiBold />, name: 'bold', kind: 'fontDecoration' },
  {
    value: 'italic',
    label: <BiItalic />,
    name: 'italic',
    kind: 'fontDecoration',
  },
];

export const alignOptions = [
  {
    value: 'left',
    label: <BiAlignLeft />,
    name: 'textLeft',
    kind: 'textAlign',
  },
  {
    value: 'center',
    label: <BiAlignMiddle />,
    name: 'textCenter',
    kind: 'textAlign',
  },
  {
    value: 'right',
    label: <BiAlignRight />,
    name: 'textRight',
    kind: 'textAlign',
  },
  {
    value: 'justify',
    label: <BiAlignJustify />,
    name: 'textJustify',
    kind: 'textAlign',
  },
];
