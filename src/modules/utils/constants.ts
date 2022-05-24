import { Alert, Button, Input, Typography } from '../../components';

export const MainConfig = {
  button: {
    name: 'button',
    component: Button,
    props: { variant: 'outlined' },
    children: 'This is a Button',
  },
  alert: {
    name: 'alert',
    component: Alert,
    props: { message: 'This is a Alert', variant: 'filled' },
  },
  input: {
    name: 'input',
    component: Input,
    props: { placeholder: 'Placeholder', variant: 'outlined', rounded: true },
  },
  typography: {
    name: 'typography',
    component: Typography,
    props: {
      variant: 'h1',
    },
    children: 'Salam',
  },
};
