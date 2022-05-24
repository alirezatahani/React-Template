import * as React from 'react';
import { Content, Paper, Title } from '../styles/Card.styles';
import { CardProps } from './card_types';

const Card: React.FC<CardProps> = ({ children, ...rest }: CardProps) => {
  return (
    <Paper {...rest}>
      <Content {...rest}>
        <Title {...rest}>{rest.title}</Title>
        {children}
      </Content>
    </Paper>
  );
};

Card.defaultProps = {};
export default Card;
