import * as React from 'react';

export type MainConfigTypes = {
  button: {
    name: string;
    component: any;
    props: {};
    getProps?: any;
    children: string;
    [key: string]: any;
  };
  [key: string]: any;
};
