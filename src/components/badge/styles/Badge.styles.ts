import styled from 'styled-components';
import { BadgeProps } from '../content/badge_types';

export const BadgeWrapper = styled.div<BadgeProps>(({}) => ({}));
export const ContentBadge = styled.div<BadgeProps>(({}) => ({
  display: 'flex',
}));

const x = {
  topRight: {
    right: '-5px',
    top: '-5px',
  },
  topLeft: {
    left: '-5px',
    top: '-5px',
  },
  topCenter: {
    right: '50%',
    left: '50%',
    top: '-5px',
  },
};

export const StyledBadge = styled.div<BadgeProps>(
  ({ theme, color, rounded, placement, variant }) => ({
    ...x[placement],
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
