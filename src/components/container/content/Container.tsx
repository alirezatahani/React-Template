import React from 'react';
import { MainContainer } from '../styles/container.styles';
import { ContainerProps } from './container_types';

const Container: React.FC<ContainerProps> = ({
  children,
  ...props
}: ContainerProps) => {
  return <MainContainer {...props}>{children}</MainContainer>;
};

Container.defaultProps = {
  fluid: false,
};

export default Container;
