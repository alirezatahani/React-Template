import { InitialValueType } from '@modules/controlPanel/controlPanel_types';

export type ButtonControlPanelProps = {
  initialValue?: InitialValueType;
  onChange?: (name: string, value: string | number | string[]) => any;
};