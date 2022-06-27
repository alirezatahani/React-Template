import React, { useRef, useState } from 'react';
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
import { Modal } from '@components/modal';
import { Typography } from '@components/typography';
import { TabPane, Tabs } from '@components/tab';

import PageGeneralSetting from './generalSetting/content/PageGeneralSetting';
import SeoSetting from './seoSetting/content/SeoSetting';
import SocialMediaSetting from './socialMediaSetting/content/SocialMediaSetting';
import PageAccessSetting from './pageAccessSetting/content/PageAccessSetting';
import PageHeadSetting from './pageHeadSetting/content/PageHeadSetting';

type DragItem = {
  index: number;
  id: string;
  type: string;
};

export const ItemTypes = {
  PAGE: 'page',
};

const PageItem = ({ id, text, index, movePages }: any) => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.PAGE,
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

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      movePages(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.PAGE,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const handleShowPageSettings = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <PageItemContainer ref={preview} style={{ opacity }}>
        <PageTitleContainer>
          <GrabIcon ref={ref} data-handler-id={handlerId}>
            <GoGrabber />
          </GrabIcon>
          <span>{text}</span>
        </PageTitleContainer>
        <PageSettingDropDown onClick={() => setShowModal(!showModal)}>
          <FiMoreVertical />
        </PageSettingDropDown>
      </PageItemContainer>
      <Modal visible={showModal} onClose={handleShowPageSettings}>
        <Typography variant="h2">Page settings</Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Tabs align="center">
            <TabPane tab="General Setting">
              <PageGeneralSetting />
            </TabPane>
            <TabPane tab="SEO">
              <SeoSetting />
            </TabPane>
            <TabPane tab="Social media">
              <SocialMediaSetting />
            </TabPane>
            <TabPane tab="Access">
              <PageAccessSetting />
            </TabPane>
            <TabPane tab="<head> element">
              <PageHeadSetting />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </div>
  );
};

export default PageItem;
