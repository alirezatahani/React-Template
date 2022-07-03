import React from 'react';
import { Typography } from '@components/typography';
import { ControlPanelSettingContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import update from 'immutability-helper';

import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PageItem, { ItemTypes } from './PageItem';

export interface Item {
  id: number;
  text: string;
}

const ManagePages = () => {
  const [pages, setPages] = React.useState([
    {
      id: 1,
      text: 'Home',
    },
    {
      id: 2,
      text: 'Contact Us',
    },
    {
      id: 3,
      text: 'About us',
    },
    {
      id: 4,
      text: 'Shop',
    },
    {
      id: 5,
      text: 'Faq',
    },
  ]);

  const movePages = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setPages((prevPageItems: Item[]) =>
        update(prevPageItems, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevPageItems[dragIndex] as Item],
          ],
        })
      );
    },
    []
  );

  const renderPages = React.useCallback(
    (page: { id: number; text: string }, index: number) => {
      return (
        <PageItem
          key={page.id}
          index={index}
          id={page.id}
          text={page.text}
          movePages={movePages}
        />
      );
    },
    []
  );

  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Pages</Typography>
      <br />
      {pages.map((page: Item, i) => renderPages(page, i))}
    </ControlPanelSettingContainer>
  );
};

export default ManagePages;
