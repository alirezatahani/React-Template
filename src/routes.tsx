import * as React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import ControlPanelPage from './components/controlPanel/content/ControlPage';
import { Home } from './pages/home';
import { Design94 } from './templates/designed/94';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="predesign/94" element={<Design94 />} />
      <Route path="control-panel" element={<ControlPanelPage />} />
    </ReactRoutes>
  );
};
