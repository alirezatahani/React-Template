import * as React from 'react';
import {
  StyledBadge,
  ContentBadge,
  BadgeWrapper,
} from '../styles/Badge.styles';
import { BadgeProps } from './badge_types';
const Badge: React.FC<BadgeProps> = ({ children, ...rest }: BadgeProps) => {
  return (
    <BadgeWrapper>
      <ContentBadge>
        {children ? children : null}

        <StyledBadge {...rest}>
          {rest.max && rest.max <= rest.badgeContent ? (
            <div>{rest.max}+</div>
          ) : (
            <div>{rest.badgeContent}</div>
          )}
        </StyledBadge>
      </ContentBadge>
    </BadgeWrapper>
  );
};

Badge.defaultProps = {
  color: 'primary',
  badgeContent: 0,
  rounded: false,
  variant: 'standard',
};
export default Badge;
