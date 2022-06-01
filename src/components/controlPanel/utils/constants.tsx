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
  { value: 'h1', label: 'Heading 1' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'body1', label: 'Paragraph' },
];
export const fontFamilyOptions = [
  { value: 'h1', label: 'Heading 1' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'body1', label: 'Paragraph' },
];

export const fontSizeOptions = [
  { value: '10', label: '10' },
  { value: '12', label: '12' },
  { value: '15', label: '15' },
  { value: '18', label: '18' },
  { value: '20', label: '20' },
];

export const checkboxOptions = [
  { value: 'h1', label: <BiBold />, name: 'h1' },
  { value: 'h2', label: <BiItalic />, name: 'h2' },
  { value: 'body1', label: <BiFont />, name: 'body1' },
  { value: 'subtitle1', label: <BiBold />, name: 'subtitle1' },
  { value: 'subtitle2', label: <BiBold />, name: 'subtitle2' },
];

export const alignOptions = [
  { value: 'textLeft', label: <BiAlignLeft />, name: 'textLeft' },
  { value: 'textCenter', label: <BiAlignMiddle />, name: 'textCenter' },
  { value: 'textRight', label: <BiAlignRight />, name: 'textRight' },
  { value: 'textJustify', label: <BiAlignJustify />, name: 'textJustify' },
];
