import React, { useState } from 'react';
import { memo } from 'react';
import { Box } from '../Box/Box';
import { Dustbin } from '../Dustbin/Dustbin';
import { Row } from '@components/grid';
import { BoxNames } from '@modules/ComponentsSelector/utils/constants';
import { BoxName } from '@modules/ComponentsSelector/utils/constants';
import {
  DragCol,
  DropCol,
  TextWrapper,
} from '@modules/ComponentsSelector/styles/SelectorScreen_styles';
import { Typography } from '@components/typography';
import ButtonSelector from '@modules/ComponentsSelector/ButtonSelector/content';

export const SelectorScreen = memo(function Container() {
  const [selectedComponent, setSelectedComponent] = useState([]);

  const handleDropComponent = (item: any) => {
    setSelectedComponent((selectedComponent: any) => [
      ...selectedComponent,
      item.name,
    ])
  };

  console.log(selectedComponent, 'selectedComponent');
  return (
    <React.Fragment>
      <Row>
        <DropCol span={9} style={{ overflow: 'hidden', clear: 'both' }}>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin handleDrop={handleDropComponent} selectedComponent={selectedComponent} />
          </div>
        </DropCol>
        <DragCol span={3} style={{ overflow: 'scroll', clear: 'both' }}>
          <TextWrapper>
            <Typography variant="h5">Add Elements</Typography>
            <Typography>Basic Elements</Typography>
          </TextWrapper>

          <div style={{ overflow: 'hidden', clear: 'both' }}>
            {BoxNames.map((boxName: BoxName, index: number) => (
              <div key={index}>
                <Box
                  name={boxName.name}
                  onDrop={handleDropComponent}
                  icon={boxName.icon}
                />
              </div>
            ))}
          </div>
        </DragCol>
      </Row>
    </React.Fragment>
  );
});
