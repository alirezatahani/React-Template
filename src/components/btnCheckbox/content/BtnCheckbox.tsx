import * as React from 'react';
import {
  CustomCheckbox,
  BtnCheckboxContainer,
  Label,
} from '../styles/btnCheckbox';
import { BtnCheckboxPropsType } from './btnCheckbox_types';

const BtnCheckbox: React.FC<BtnCheckboxPropsType> = ({
  name,
  options,
  ...props
}: BtnCheckboxPropsType) => {
  return (
    <BtnCheckboxContainer>
      {options.map((option: any) => (
        <>
          <CustomCheckbox
            onChange={props.onChange}
            value={option.value}
            id={option.name}
            type="checkbox"
            {...props}
          />
          <Label htmlFor={option.name}>{option.label}</Label>
        </>
      ))}
    </BtnCheckboxContainer>
  );
};

export default BtnCheckbox;
