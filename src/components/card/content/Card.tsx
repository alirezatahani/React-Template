import React from 'react';
import { Paper } from '../styles/Card.styles';
import { CardProps } from './card_types';

const Card: React.FC<CardProps> = ({ children, ...rest }: CardProps) => {
  return <Paper {...rest}>{children}</Paper>;
};

Card.defaultProps = {};
export default Card;
