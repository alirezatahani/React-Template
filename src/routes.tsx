import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home, Create } from '@pages/index';
import { Design37 } from '@templates/designed/37';
import { Blank3 } from '@templates/plain/blank3';
import { Design94 } from '@templates/designed/94';
import { Design24 } from '@templates/designed/24';
import { Design74 } from '@templates/designed/74';
import { Blank1 } from '@templates/plain/blank1';
import { Blank2 } from '@templates/plain/blank2';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="predesign/94" element={<Design94 />} />
      <Route path="blank/1" element={<Blank1 />} />
      <Route path="predesign/37" element={<Design37 />} />
      <Route path="predesign/24" element={<Design24 />} />
      <Route path="predesign/74" element={<Design74 />} />
      <Route path="blank/3" element={<Blank3 />} />
      <Route path="blank/2" element={<Blank2 />} />
      <Route path="create" element={<Create />} />
    </ReactRoutes>
  );
};
