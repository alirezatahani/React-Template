import { InitialValueType } from '@modules/controlPanel/controlPanel_types';
import React from 'react';

export type FontTypeOptionDataType = {
  kind?: string;
  label?: string;
  value?: string;
};
export type TypographyControlPanelProps = {
  initialValue?: InitialValueType;
  onChange?: (name: string, value: string | number | string[]) => any;
};