import { Typography } from '@components/typography';
import React from 'react';
import { IconBoxContainer } from '../styles/iconBox.styles';
import { IconBoxProps } from './iconBox_types';
const IconBox = ({ icon, title, isActive }: IconBoxProps) => {
  return (
    <IconBoxContainer isActive={isActive}>
      {icon}
      <Typography variant="subtitle1">{title}</Typography>
    </IconBoxContainer>
  );
};

IconBox.defaultProps = {
  isActive: false,
};

export default IconBox;
