import {
  Alert,
  Avatar,
  Badge,
  Button,
  Input,
  Typography,
  Image,
} from '../../../components';
import { MainConfigTypes } from './constants_types';

export const MainConfig: MainConfigTypes = {
  button: {
    name: 'button',
    component: Button,
    props: { variant: 'outlined', size: 'lg' },
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
  badge: {
    name: 'Typography',
    component: Badge,
    props: {
      secondary: 'success',
    },
  },
  avatar: {
    name: 'Avatar',
    component: Avatar,
    props: {
      text: 'Amirmasoud Jafari',
    },
  },
  image: {
    name: 'Image',
    component: Image,
    props: {
      width: 200,
      shape: 'rounded',
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  },
};
