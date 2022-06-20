import * as React from 'react';
import type { CSSProperties } from 'react';
import { useDrop } from 'react-dnd';
import { Button, Typography, Input, Image } from '@components/index';

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

// const Btn = () => {
//   const {selectedButton} = React.useContext(buttonContext);
//   console.log("is",selectedButton)
//   return(
//     <>
//     <div>
//     {/* <Button style={buttons[selectedButton].style}>{buttons[selectedButton].name}</Button> */}
//     </div>
//     </>
//   )
// }
//const {selectedButton} = React.useContext(buttonContext);

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
    Typography: <Typography>Test</Typography>,
    Input: <Input value="test" />,
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
