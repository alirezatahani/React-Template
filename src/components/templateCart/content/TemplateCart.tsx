import { Typography } from '@components/typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { Cart, CartContainer, CartImage, CartLinks, CartLinkSpan } from '../styles/templateCart.styles';
import { TemplateCartProps } from './templateCart_types';

const TemplateCart: React.FC<TemplateCartProps> = ({template,src}) => {
  return (
    <CartContainer>
      <Cart>
        <CartImage
          src={src}
        >
          <CartLinks>
            <Link
              to={template.path}
            >
              <CartLinkSpan>Full site preview</CartLinkSpan>
            </Link>
          </CartLinks>
        </CartImage>
      </Cart>
      <Typography variant="body1">{template.path.replace('/', ' #')}</Typography>
    </CartContainer>
  );
};
export default TemplateCart;
