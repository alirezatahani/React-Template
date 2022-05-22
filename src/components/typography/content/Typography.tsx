import * as React from 'react';
import { TypographyContainer } from '../styles/typography.styles';
import { TypographyProps, VariantsType } from './typography_types';

const variantsMapping: VariantsType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body1: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  disabled,
  children,
}: TypographyProps) => {
  const Component: any = variant ? variantsMapping[variant] : 'p';
  return (
    <TypographyContainer disabled={disabled} color={color} variant={variant}>
      <Component>{children}</Component>
    </TypographyContainer>
  );
};

export default Typography;
