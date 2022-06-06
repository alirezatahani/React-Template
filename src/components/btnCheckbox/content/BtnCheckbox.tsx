import * as React from 'react';
import {
  CustomCheckbox,
  BtnCheckboxContainer,
  Label,
} from '../styles/btnCheckbox.styles';
import {
  BtnCheckboxOptionType,
  BtnCheckboxPropsType,
} from './btnCheckbox_types';

const BtnCheckbox: React.FC<BtnCheckboxPropsType> = ({
  name,
  options,
  type = 'checkbox',
  ...props
}: BtnCheckboxPropsType) => {
  return (
    <BtnCheckboxContainer>
      {options.map((option: BtnCheckboxOptionType, index: number) => (
        <React.Fragment key={index}>
          <CustomCheckbox
            onChange={props.onChange}
            name={name}
            value={option.value}
            id={option.name}
            type={type}
            {...props}
          />
          <Label htmlFor={option.name}>{option.label}</Label>
        </React.Fragment>
      ))}
    </BtnCheckboxContainer>
  );
};

export default BtnCheckbox;
