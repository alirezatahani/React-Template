import * as React from 'react';
import {
  BiBold,
  BiItalic,
  BiFont,
  BiAlignLeft,
  BiAlignMiddle,
  BiHorizontalCenter,
  BiAlignRight,
  BiAlignJustify,
  BiUnderline,
} from 'react-icons/bi';
import { TbLetterT, TbArrowBarToRight, TbArrowBarToLeft } from 'react-icons/tb';
import { MdFormatClear } from 'react-icons/md';
// import { MdFormatClear } from 'react-icons/md';

export const fontTypeOptions = [
  { value: 'h1', label: 'Heading 1', kind: 'fontType' },
  { value: 'h2', label: 'Heading 2', kind: 'fontType' },
  { value: 'h3', label: 'Heading 3', kind: 'fontType' },
  { value: 'h4', label: 'Heading 4', kind: 'fontType' },
  { value: 'h5', label: 'Heading 5', kind: 'fontType' },
  { value: 'body1', label: 'Paragraph', kind: 'fontType' },
  { value: 'subtitle1', label: 'Subtitle 1', kind: 'fontType' },
  { value: 'subtitle1', label: 'Subtitle 1', kind: 'fontType' },
];
export const fontFamilyOptions = [
  { value: 'Roboto', label: 'Roboto', kind: 'fontFamily' },
  { value: 'Poppins', label: 'Poppins', kind: 'fontFamily' },
  { value: 'Arial', label: 'Arial', kind: 'fontFamily' },
];
export const borderOptions = [
  { value: '1px dashed black', label: 'dashed', kind: 'border' },
  { value: '1px solid black', label: 'solid', kind: 'border' },
];

export const fontSizeOptions = new Array(10).fill('').map((e, i) => {
  if (i === 0) {
    return { value: i + 4, label: `${i + 4}`, kind: 'fontSize' };
  }
  return { value: i * 8, label: `${i * 8}`, kind: 'fontSize' };
});
export const fontDecorationOptions = [
  {
    value: 'initial',
    label: <TbLetterT />,
    name: 'initial',
  },
  {
    value: 'line-through',
    label: <TbLetterT />,
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

export const alignImageOptions = [
  {
    value: 'flex-start',
    label: <TbArrowBarToLeft />,
    name: 'alignLeft',
    kind: 'alignMent',
  },
  {
    value: 'center',
    label: <BiHorizontalCenter />,
    name: 'alignCenter',
    kind: 'alignMent',
  },
  {
    value: 'flex-end',
    label: <TbArrowBarToRight />,
    name: 'alignRight',
    kind: 'alignMent',
  },
];

export const displayOptions = [
  { value: 'masonry', label: 'Masonry', kind: 'displayStyle' },
  { value: 'grid', label: 'Grid', kind: 'displayStyle' },
  { value: 'slideshow', label: 'Slideshow', kind: 'displayStyle' },
];
