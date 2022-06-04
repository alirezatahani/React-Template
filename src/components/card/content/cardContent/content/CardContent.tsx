import React from 'react';
import { Content, Title } from '../styles/CardContent.styles';
import { CardContentProps } from './cardContent_types';

const CardContent: React.FC<CardContentProps> = ({
  children,
  title,
  ...rest
}: CardContentProps) => {
  return (
    <>
      <Content {...rest}>
        {title && <Title {...rest}>{title}</Title>}
        {children}
      </Content>
    </>
  );
};

CardContent.defaultProps = {};
export default CardContent;
