import * as React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home } from './pages/home';
import { Design94 } from './templates/designed/94';
import { Blank1 } from './templates/plain/blank1';
export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="predesign/94" element={<Design94 />} />
      <Route path="blank/1" element={<Blank1 />} />
    </ReactRoutes>
  );
};
