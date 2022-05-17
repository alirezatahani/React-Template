import * as React from 'react';

// const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
// export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'text' | 'filled';
  color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';
  rounded?: boolean;
  block?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
