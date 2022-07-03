import React from "react";

export type DividerProps = {
  children?: React.ReactNode;
  middle?: boolean;
  color?: string;
  style?: React.CSSProperties;
  align?: 'center' | 'left' | 'right';
  orientation?: 'center' | 'left' | 'right';
  onClick?: () => void;
};

export type TextOrientationType = {
  center: { before: { width: string }; after: { width: string } };
  left: { before: { width: string }; after: { width: string } };
  right: { before: { width: string }; after: { width: string } };
};

export type handleAlignType = {
  center: {
    justifyContent: string;
  };
  left: {
    justifyContent: string;
  };
  right: {
    justifyContent: string;
  };
};
