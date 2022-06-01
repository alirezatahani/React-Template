import styled from 'styled-components';

import { BtnCheckboxPropsType } from '../content/btnCheckbox_types';

export const BtnCheckboxContainer = styled.div<BtnCheckboxPropsType>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    border: '1px solid hsl(0, 0%, 80%)',
    borderRadius: 5,
    transition: theme.general.transition,
    [`${Label}:last-child`]: {
      borderRight: '2px solid transparent',
    },
  })
);

export const Label = styled.label<BtnCheckboxPropsType>(({ theme }) => ({
  cursor: 'pointer',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid hsl(0, 0%, 80%)',
  transition: theme.general.transition,
  minHeight: 37,
}));

export const CustomCheckbox = styled.input<BtnCheckboxPropsType>(
  ({ theme }) => ({
    display: 'none',
    transition: 'opacity 100ms',
    [`& + ${Label}:hover`]: {
      opacity: 0.8,
    },

    [`&:checked + ${Label}`]: {
      background: theme.palette.primary.main,
      color: '#f0f0f0',
    },
  })
);
