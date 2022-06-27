import styled from 'styled-components';

import { BtnCheckboxPropsType } from '../content/btnCheckbox_types';

export const BtnCheckboxContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  border: '1px solid hsl(0, 0%, 80%)',
  borderRadius: 5,
  transition: theme.general.transition,
  [`${Label}:last-child`]: {
    borderRight: '2px solid transparent',
  },
}));

export const Label = styled.label(({ theme }) => ({
  cursor: 'pointer',
  padding: 10,
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid hsl(0, 0%, 80%)',
  transition: theme.general.transition,
  minHeight: 25,
}));

export const CustomCheckbox = styled.input<any>(({ theme, checked }) => ({
  display: 'none',
  transition: 'opacity 100ms',
  [`& + ${Label}:hover`]: {
    opacity: 0.8,
  },

  [`& + ${Label}`]: {
    backgroundColor: checked ? theme.palette.primary.main : 'inherit',
    color: checked ? '#f0f0f0' : 'inherit',
  },
}));
