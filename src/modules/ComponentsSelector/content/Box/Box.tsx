import * as React from 'react';
import type { FC } from 'react';
import { useDrag } from 'react-dnd';
import { BoxStyled, BoxContent, BoxWrapper, Icon } from './box.styles';

const ItemTypes = {
  BOX: 'box',
};

export interface BoxProps {
  name: string;
  icon?: JSX.Element;
  onDrop: (item: any) => void;
}

interface DropResult {
  name: string;
}

export const Box: FC<BoxProps> = function Box({ name, onDrop, icon }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        onDrop(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <BoxWrapper>
      <BoxStyled ref={drag} data-testid={`box`} style={{ opacity }}>
        <Icon>{icon}</Icon>
        <BoxContent>{name}</BoxContent>
      </BoxStyled>
    </BoxWrapper>
  );
};
