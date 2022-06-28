import * as React from 'react';
import type { CSSProperties } from 'react';
import { useDrop } from 'react-dnd';
import { Button, Typography, Input, Image, Tabs, Divider, Textarea } from '@components/index';

const ItemTypes = {
  BOX: 'box',
};

const style: CSSProperties = {
  height: '100vh',
  overflow: 'scroll',
  padding: 30,
  textAlign: 'center',
};
type DustBinProps = {
  selectedComponent?: any;
  selectedStyle?: any;
  handleDrop?: any;
};

export const Dustbin = ({ selectedComponent, selectedStyle }: DustBinProps) => {
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
    backgroundColor = '#F5F5';
  }

  const components: any = {
    Button: <Button style={...selectedStyle}>test</Button>,
    Typography: <Typography variant={...selectedStyle.variant}>text</Typography>,
    Input: <Input value="test" style={...selectedStyle}/>,
    Image: <Image />,
  };

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
