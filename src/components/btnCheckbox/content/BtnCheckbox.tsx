import React, { useState } from 'react';
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
  options,
  defaultValue,
  onChange,
  type,
  ...props
}: BtnCheckboxPropsType) => {
  const [values, setValues] = useState<string | string[] | any>(defaultValue);

  const handleChange = (event: any) => {
    if (type === 'checkbox') {
      if (values.includes(event.target.value)) {
        const newValues = values.filter(
          (value: any) => value !== event.target.value
        );
        onChange(event, newValues);
        setValues(newValues);
      } else {
        onChange(event, [event.target.value, ...values]);
        setValues([event.target.value, ...values]);
      }
    } else if (type === 'radio') {
      onChange(event, event.target.value);
      setValues(event.target.value);
    }
  };

  return (
    <BtnCheckboxContainer>
      {options.map((option: BtnCheckboxOptionType, index: number) => {
        const inititalValue: boolean =
          type === 'checkbox'
            ? //@ts-ignore
              defaultValue.includes(option.value)
            : defaultValue === option.value;

        return (
          <React.Fragment key={index}>
            <CustomCheckbox
              onClick={handleChange}
              value={option.value}
              id={option.name}
              checked={inititalValue}
              {...props}
            />
            <Label htmlFor={option.name}>{option.label}</Label>
          </React.Fragment>
        );
      })}
    </BtnCheckboxContainer>
  );
};

BtnCheckbox.defaultProps = {
  type: 'checkbox',
};

export default BtnCheckbox;
