import * as React from 'react';

export type InputProps = {
  type?: string;
  placeholder?: string;
  size?: string;
  label?: string;
  variant?: string;
  status?: string;
  name?: string;
  onChange?: React.ChangeEventHandler;
  value?: string;
};
