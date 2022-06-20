import React from 'react';
import Select from 'react-select';
import { SelectContainer } from '../styles/select.styles';
import { calcContainerWidth } from '../uttils/calcSelectContainerWidth';
import { customStyles } from '../uttils/customStyle';
import { SelectProps } from './select_types';
/**
 * @options should be an array of object as {value:"item1",label:"item1"}
 * @selectOptions set a function according option selected
 * @defaultValue can be set equal to your optionLabel
 * @scrollable  can be set as true | false
 * @width can be set as string to set width of options
 */

export const SelectOption: React.FC<SelectProps> = ({
  options,
  selectOptions,
  defaultValue,
  ...props
}) => {
  const changeHandler = (e: any) => {
    selectOptions(e.value);
  };
  return (
    <>
      <SelectContainer width={calcContainerWidth(props.width)}>
        <Select
          maxMenuHeight={props.scrollable ? 250 : null}
          onChange={changeHandler}
          options={options}
          styles={customStyles}
          defaultValue={options.filter(
            (opt) =>
              opt.value.toLocaleLowerCase() === defaultValue.toLocaleLowerCase()
          )}
        />
      </SelectContainer>
    </>
  );
};
SelectOption.defaultProps = {
  options: [],
  defaultValue: '',
  scrollable: false,
  width: '300px',
};
