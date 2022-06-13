import React from 'react';

export type SpaceProps = {
  children: React.ReactNode;
  align?: 'start' | 'end' | 'center' | 'baseline';
  direction?: 'vertical' | 'horizontal';
  alignItems?: React.CSSProperties['alignItems'];
  wrap?: boolean;
  spacing?: number | number[];
};
export type StyledSpaceProps = {
  align?: 'start' | 'end' | 'center' | 'baseline';
  alignItems?: React.CSSProperties['alignItems'];
  direction?: 'vertical' | 'horizontal';
  wrap?: boolean;
  spacing?: number | number[];
};
