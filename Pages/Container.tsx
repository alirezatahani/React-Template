import update from 'immutability-helper';
import type { FC } from 'react';
import * as React from 'react';
import { Card } from '../Pages/Card';
import * as htmlparser2 from 'htmlparser2';
//@ts-ignore

import HTML from './template.html';
const dom = htmlparser2.parseDocument(HTML);

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: any;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
  const [cards, setCards] = React.useState([]);

  const moveCard = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    },
    []
  );

  const renderCard = React.useCallback(
    (card: { id: number; text: any }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    []
  );

  const importTemplate = () => {
    let data = [] as any;
    let data1 = {} as any;
    let counter = 0;
    const parser = new htmlparser2.Parser({
      ontext(text) {
        let txt = text.trim();
        if (txt.length > 0) {
          data.push({ id: counter, text: txt });
          // console.log(data1);
          // data.push([...data1]);
          counter += 1;
        }
      },
    });

    parser.write(HTML);
    parser.end();

    setCards(data);
    console.log(data);
  };
  React.useEffect(() => {
    importTemplate();
  }, []);

  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};
