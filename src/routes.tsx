import * as React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home } from './pages/home';
import { Design94 } from './templates/designed/preDesigned#94';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="design94" element={<Design94 />} />
    </ReactRoutes>
  );
};
