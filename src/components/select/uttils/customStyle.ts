export const customStyles: {} = {
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
      padding: '10px',
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1"
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555"
      }
    }),
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
      border: 0,
      boxShadow: 'none',
      color: 'blue',
      width: 'max-content',
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