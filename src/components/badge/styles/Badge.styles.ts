import styled from 'styled-components';
import { BadgeProps } from '../content/badge_types';
export const BadgeWrapper = styled.div<BadgeProps>(({}) => ({}));
export const ContentBadge = styled.div<BadgeProps>(({}) => ({
  display: 'flex',
}));

export const StyledBadge = styled.div<BadgeProps>(
  ({ theme, color, rounded, placement }) => ({
    borderRadius: rounded ? 50 : 4,
    color: theme.palette.common.white,
    backgroundColor: theme.palette[color].main,
    width: 36,
    padding: 8,
    height: 18,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginTop: -6,
  })
);
