import React from 'react';
import { AvatarStyled, AvatarText } from '../styles/Avatar.styles';
import { AvatarProps } from './avatar_types';
import { AbbreviateText } from '../utils/utils';
const Avatar: React.FC<AvatarProps> = ({ ...rest }: AvatarProps) => {
  return (
    <>
      {rest.src ? (
        <AvatarStyled {...rest}></AvatarStyled>
      ) : (
        <AvatarStyled {...rest}>
          {rest.text ? AbbreviateText(rest.text) : 'UN'}
        </AvatarStyled>
      )}
    </>
  );
};

Avatar.defaultProps = {
  shape: 'rounded',
  size: 'md',
};
export default Avatar;
