import styled from 'styled-components';
import { BadgeProps } from '../content/badge_types';
import { position } from '../utils/constants';

export const BadgeWrapper = styled.div<BadgeProps>(({}) => ({}));
export const ContentBadge = styled.div<BadgeProps>(({}) => ({
  display: 'flex',
  position: 'relative',
}));

export const StyledBadge = styled.div<BadgeProps>(
  ({ theme, color, rounded, placement, variant }) => ({
    ...position[placement],
    backgroundColor: theme.palette[color].main,
    width: variant === 'dot' ? 10 : 32,
    height: variant === 'dot' ? 10 : 18,
    color: variant === 'dot' ? 'transparent' : theme.palette.common.white,
    borderRadius: variant === 'dot' || rounded ? 50 : 4,
    padding: 6,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  })
);
