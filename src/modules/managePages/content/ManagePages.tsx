import React from 'react';
import { Typography } from '@components/typography';
import { ControlPanelSettingContainer } from '@modules/controlPanel/styles/controlPanel.styles';

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

  // const moveCard = React.useCallback(
  //   (dragIndex: number, hoverIndex: number) => {
  //     setPages((prevCards: Item[]) =>
  //       update(prevCards, {
  //         $splice: [
  //           [dragIndex, 1],
  //           [hoverIndex, 0, prevCards[dragIndex] as Item],
  //         ],
  //       })
  //     );
  //   },
  //   []
  // );
  const moveCard = (dragIndex: number, hoverIndex: any) => {
    // list of cards
    let newcards = pages;

    // dragCard is card we are dragging
    let dragCard = newcards[dragIndex];

    // removing this dragCard from array
    newcards.splice(dragIndex, 1);

    // insert dragCard at hover position
    newcards.splice(hoverIndex, 0, dragCard);

    // update State
    setPages(newcards);
  };

  const renderCard = React.useCallback(
    (page: { id: number; text: string }, index: number) => {
      return (
        <PageItem
          key={page.id}
          index={index}
          id={page.id}
          text={page.text}
          moveCard={moveCard}
        />
      );
    },
    []
  );

  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Pages</Typography>
      <br />
      {pages.map((page: Item, i) => renderCard(page, i))}
    </ControlPanelSettingContainer>
  );
};

export default ManagePages;
