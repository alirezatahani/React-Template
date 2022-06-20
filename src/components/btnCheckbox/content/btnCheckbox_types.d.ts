import React from 'react';

export type BtnCheckboxPropsType = {
  icon?: string | React.ReactNode;
  label?: string;
  name?: string;
  options: BtnCheckboxOptionType[];
  type?: string;
  onChange?: (event: any, values: string | string[]) => void;
  value?: BtnCheckboxOptionType;
  defaultValue?: string | string[] | number[];
  checked?: boolean;
};
export type BtnCheckboxOptionType = {
  value?: string | number;
  icon?: string | React.ReactNode;
  label?: string | React.ReactNode;
  id?: string | number;
  name?: string;
};
