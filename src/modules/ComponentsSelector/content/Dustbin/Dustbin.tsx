import * as React from 'react';
import type { CSSProperties } from 'react';
import { useDrop } from 'react-dnd';

const ItemTypes = {
  BOX: 'box',
};

const style: CSSProperties = {
  height: '100vh',
  padding: 30,
  textAlign: 'center',
};
type DustBinProps = {
  selectedComponent?: string;
};

const components: any = {
  Button: <button>Test</button>,
  Typography: <p>Test</p>,
  Input: <input value="test" />,
  Card: <div>Test</div>,
};

export const Dustbin = ({ selectedComponent }: DustBinProps) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = 'white';
  if (isActive) {
    backgroundColor = '#F5F5F5';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <React.Fragment>
      <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        {components[selectedComponent]}
      </div>
    </React.Fragment>
  );
};
