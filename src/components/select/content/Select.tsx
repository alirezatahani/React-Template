import React from 'react';
import Select from 'react-select';
import { MySelectProps} from './select_types';
/**
 * @options should be an array of object as {value:"item1",label:"item1"}
 * @selectOptions set a function according option selected
 * @defaultValue can be set equal to your optionLabel 
 * @scrollable  can be set as true | false
 * @width can be set as string to set width of options
 */

export const SelectOption: React.FC<MySelectProps> = ({
  options,
  selectOptions,
  defaultValue,
  ...props
}) => {
  const changeHandler = (e: any) => {
    console.log(e);
    
    selectOptions(e.value);
  };
  const customStyles:{} = {
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'none',
    }),
    menuList: (provided: any) => ({
      ...provided,
      '::-webkit-scrollbar': {
        width: '4px',
        height: '0px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
      width: '100%',
    }),
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
      border: 0,
      boxShadow: 'none',
      color: 'blue',
      width: '100%',
    }),
    option: (styles: any, state: any) => {
      return {
        ...styles,
        backgroundColor: state.isDisabled ? '#fcfcfc' : '#fff',
        opacity: state.isDisabled ? 0.5 : 1,
        color: state.isSelected ? 'blue' : '#333',
        cursor: state.isDisabled ? 'not-allowed' : 'pointer',
        ['&:hover']: { backgroundColor: '#E2E2E2FF', borderRadius: '5px' },
      };
    },
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      const color = 'blue';
      return { ...provided, opacity, transition, color };
    },
  };
  
  return (
   <Select 
          onChange={changeHandler}
          options={options}
          styles={customStyles}
          defaultValue={options.filter(
            (opt:any) =>
              opt.value.toLocaleLowerCase() === defaultValue.toLocaleLowerCase()
          )}
        />
  );
};
SelectOption.defaultProps = {
  options: [],
  defaultValue: '',
 
};
