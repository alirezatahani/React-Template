import React from 'react';

export type BtnCheckboxPropsType = {
  icon?: string | React.ReactNode;
  label?: string;
  name?: string;
  options: BtnCheckboxOptionType[] | any;
  type?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string | string[] | number | number[]
  ) => void;
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
