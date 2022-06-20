import * as React from 'react';
import type { CSSProperties } from 'react';
import { useDrop } from 'react-dnd';
import { Button, Typography, Input, Image } from '@components/index';
import ButtonSelector from '@modules/ComponentsSelector/ButtonSelector/content';
import { buttons } from '@modules/ComponentsSelector/utils/constants';

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


const components: any = {
  Button: <ButtonSelector/>,
  Typography: <Typography>Test</Typography>,
  Input: <Input value="test" />,
  Image: <Image />,
};

export const Dustbin = ({ selectedComponent, handleDrop }: DustBinProps) => {
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

  return (
    <React.Fragment>
      <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        {selectedComponent.map((item: any) => {
          return (
            // components[item]
            components[item]
          // return(
          //   components[item],
          //   (item=='Button') && <ButtonSelector/>
          // )
        )})}
      </div>
    </React.Fragment>
  );
};
