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
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  body1: 'Paragraph',
  subtitle1: 'Subtitle 1',
  subtitle2: 'Subtitle 2',
};

export const fontFamilyOptions = [
  { value: 'Roboto', label: 'Roboto', kind: 'fontFamily' },
  { value: 'Poppins', label: 'Poppins', kind: 'fontFamily' },
  { value: 'Arial', label: 'Arial', kind: 'fontFamily' },
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
