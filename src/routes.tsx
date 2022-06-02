import { Design37 } from './templates/designed/37';
import * as React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home } from './pages/home';
import { Design94 } from './templates/designed/94';
import { Blank2 } from './templates/plain/blank2';
export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="predesign/94" element={<Design94 />} />
      <Route path="predesign/37" element={<Design37 />} />
      <Route path="blank/2" element={<Blank2 />} />
    </ReactRoutes>
  );
};
