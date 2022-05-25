import styled from 'styled-components';
import { AvatarProps } from '../content/avatar_types';
export const AvatarStyled = styled.div<AvatarProps>(
  ({ src, shape, theme, size }) => ({
    backgroundImage: `url(${src})`,
    borderRadius: shape === 'square' ? 4 : 50,
    ...theme.sizes.avatar[size],
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  })
);

export const AvatarText = styled.div<AvatarProps>(({ shape, theme, size }) => ({
  borderRadius: shape === 'square' ? 4 : 50,
  ...theme.sizes.avatar[size],
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 14,
}));
