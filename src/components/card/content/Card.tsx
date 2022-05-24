import * as React from 'react';
import { CardContent } from 'src/components/cardContent';
import { Content, Paper, Title } from '../styles/Card.styles';
import { CardProps } from './card_types';

const Card: React.FC<CardProps> = ({ children, ...rest }: CardProps) => {
  return <Paper {...rest}>{children}</Paper>;
};

Card.defaultProps = {
  size: 'default',
};
export default Card;
