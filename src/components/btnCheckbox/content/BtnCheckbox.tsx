import React, { ChangeEventHandler, useState } from 'react';
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
  const [values, setValues] = useState<
    string | number | string[] | number[] | any
  >(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'checkbox' && Array.isArray(values)) {
      if (values.includes(event.target.value)) {
        const newValues = values.filter(
          (value: string) => value !== event.target.value
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
        console.log(option);
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
