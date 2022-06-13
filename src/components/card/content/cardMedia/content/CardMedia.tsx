import React from 'react';
import { Media } from '../styles/CardMedia';
import { CardMediaProps } from './cardMedia_types';

const CardMedia: React.FC<CardMediaProps> = ({ ...rest }: CardMediaProps) => {
  return (
    <>
      <Media {...rest}></Media>
    </>
  );
};

CardMedia.defaultProps = {};
export default CardMedia;
