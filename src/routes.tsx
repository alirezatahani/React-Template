import React from 'react';
import { Home } from '@pages/index';
import { Design37 } from '@templates/designed/37';
import { Blank3 } from '@templates/plain/blank3';
import { Design94 } from '@templates/designed/94';
import { Design24 } from '@templates/designed/24';

export const routes = [
  { path: '/', element: <Home /> },
  { path: 'predesign/94', element: <Design94 /> },
  { path: 'predesign/37', element: <Design37 /> },
  { path: 'predesign/24', element: <Design24 /> },
  { path: 'blank/3', element: <Blank3 /> },
];
