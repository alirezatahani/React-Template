import * as React from 'react';
import {
  BiBold,
  BiItalic,
  BiFont,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiAlignJustify,
  BiUnderline,
} from 'react-icons/bi';
import { TbLetterT } from 'react-icons/tb';
import { MdFormatClear } from 'react-icons/md';

export const typographyTranslator = {
  h1: 'Heading 1',
  h2: 'Heading 2',
};
export const fontTypeOptions = [
  { value: 'h1', label: 'Heading 1', kind: 'fontType' },
  { value: 'h2', label: 'Heading 2', kind: 'fontType' },
  { value: 'h3', label: 'Heading 3', kind: 'fontType' },
  { value: 'h4', label: 'Heading 4', kind: 'fontType' },
  { value: 'h5', label: 'Heading 5', kind: 'fontType' },
  { value: 'body1', label: 'Paragraph', kind: 'fontType' },
  { value: 'subtitle1', label: 'Subtitle 1', kind: 'fontType' },
  { value: 'subtitle2', label: 'Subtitle 2', kind: 'fontType' },
];
export const fontFamilyOptions = [
  { value: 'Roboto', label: 'Roboto', kind: 'fontFamily' },
  { value: 'Poppins', label: 'Poppins', kind: 'fontFamily' },
  { value: 'Arial', label: 'Arial', kind: 'fontFamily' },
];

export const fontSizeOptions = [
  { value: 10, label: '10', kind: 'fontSize' },
  { value: 12, label: '12', kind: 'fontSize' },
  { value: 15, label: '15', kind: 'fontSize' },
  { value: 18, label: '18', kind: 'fontSize' },
  { value: 20, label: '20', kind: 'fontSize' },
  { value: 24, label: '24', kind: 'fontSize' },
  { value: 28, label: '28', kind: 'fontSize' },
  { value: 30, label: '30', kind: 'fontSize' },
];

export const fontDecorationOptions = [
  {
    value: 'initial',
    label: <TbLetterT />,
    name: 'initial',
  },
  {
    value: 'line-through',
    label: <MdFormatClear />,
    name: 'line-through',
  },
  {
    value: 'underline',
    label: <BiUnderline />,
    name: 'underline',
  },
  {
    value: 'italic',
    label: <BiItalic />,
    name: 'italic',
  },
];

export const alignOptions = [
  {
    value: 'left',
    label: <BiAlignLeft />,
    name: 'textLeft',
  },
  {
    value: 'center',
    label: <BiAlignMiddle />,
    name: 'textCenter',
  },
  {
    value: 'right',
    label: <BiAlignRight />,
    name: 'textRight',
  },
  {
    value: 'justify',
    label: <BiAlignJustify />,
    name: 'textJustify',
  },
];
