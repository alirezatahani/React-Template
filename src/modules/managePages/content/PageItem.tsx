import React, { useRef } from 'react';
import type { Identifier, XYCoord } from 'dnd-core';
import { GoGrabber } from 'react-icons/go';
import { FiMoreVertical } from 'react-icons/fi';
import {
  PageTitleContainer,
  PageSettingDropDown,
  GrabIcon,
  PageItemContainer,
} from '../styles/managePages.styles';
import { useDrop, useDrag } from 'react-dnd';

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const ItemTypes = {
  CARD: 'card',
};

const PageItem = ({ id, text, index, moveCard }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div>
      <PageItemContainer
        ref={ref}
        style={{ opacity }}
        data-handler-id={handlerId}
      >
        <PageTitleContainer>
          <GrabIcon>
            <GoGrabber />
          </GrabIcon>
          <span>{text}</span>
        </PageTitleContainer>
        <PageSettingDropDown>
          <FiMoreVertical />
        </PageSettingDropDown>
      </PageItemContainer>
    </div>
  );
};

export default PageItem;
