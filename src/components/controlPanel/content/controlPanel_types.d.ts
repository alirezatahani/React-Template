import * as React from 'react';

export type ControlPanelProps = {
  children: React.ReactNode;
  onChnage?: React.ChangeEventHandler;
};
export type TemolateContainerProps = {
  showControlPanel: boolean;
};
