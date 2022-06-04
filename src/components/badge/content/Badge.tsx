import React from 'react';
import {
  StyledBadge,
  ContentBadge,
  BadgeWrapper,
} from '../styles/Badge.styles';
import { BadgeProps } from './badge_types';

const Badge: React.FC<BadgeProps> = ({
  children,
  badgeContent,
  max,
  ...rest
}: BadgeProps) => {
  const calculateContnet = React.useMemo(() => {
    if (max && max <= badgeContent) {
      return <div>{max}+</div>;
    } else {
      return <div>{badgeContent}</div>;
    }
  }, [max, badgeContent]);

  return (
    <BadgeWrapper>
      <ContentBadge>
        {children ? children : null}
        <StyledBadge {...rest}>{calculateContnet}</StyledBadge>
      </ContentBadge>
    </BadgeWrapper>
  );
};

Badge.defaultProps = {
  color: 'primary',
  badgeContent: 0,
  max: 9,
  rounded: false,
  variant: 'standard',
};
export default Badge;
