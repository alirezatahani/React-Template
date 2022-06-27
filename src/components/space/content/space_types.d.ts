import React from 'react';

export type SpaceProps = {
  children: React.ReactNode;
  align?: React.CSSProperties['justifyContent'];
  direction?: 'vertical' | 'horizontal';
  alignItems?: React.CSSProperties['alignItems'];
  wrap?: boolean;
  spacing?: number | number[];
};
export type StyledSpaceProps = {
  align?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  direction?: 'vertical' | 'horizontal';
  wrap?: boolean;
  spacing?: number | number[];
};
