export const MainConfig = {
  button: {
    component: 'button',
    props: { variant: 'outlined' },
    children: 'This is a Button',
  },
  alert: {
    component: 'alert',
    props: { message: 'This is a Alert', variant: 'filled' },
  },
  input: {
    component: 'input',
    props: { placeholder: 'Placeholder', variant: 'outlined', rounded: true },
  },
  typography: {
    component: 'typography',
    props: {
      variant: 'h1',
    },
    children: 'Salam',
  },
};
