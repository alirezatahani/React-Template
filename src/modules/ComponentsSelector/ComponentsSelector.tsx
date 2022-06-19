import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SelectorScreen } from './content/SelectorScreen/SelectorScreen';

export const ComponentsSelector = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <SelectorScreen />
    </DndProvider>
  );
};
