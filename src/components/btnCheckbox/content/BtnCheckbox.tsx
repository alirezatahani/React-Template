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
  ...props
}: BtnCheckboxPropsType) => {
  return (
    <BtnCheckboxContainer>
      {options.map((option: BtnCheckboxOptionType) => (
        <React.Fragment key={option.id}>
          <CustomCheckbox
            onChange={props.onChange}
            value={option.value}
            id={option.name}
            type="checkbox"
            {...props}
          />
          <Label htmlFor={option.name}>{option.label}</Label>
        </React.Fragment>
      ))}
    </BtnCheckboxContainer>
  );
};

export default BtnCheckbox;
