import React, { useState, memo } from 'react';
import { Row } from '@components/grid';
import {
  BoxNames,
  BoxName,
} from '@modules/ComponentsSelector/utils/constants';
import {
  DragCol,
  DropCol,
  TextWrapper,
} from '@modules/ComponentsSelector/styles/SelectorScreen_styles';
import { Typography, Modal, Button } from '@components/index';
import { Box } from '../Box/Box';
import { Dustbin } from '../Dustbin/Dustbin';
import SelectorModal from '../SelectorModal/SelectorModal';

export const SelectorScreen = memo(function Container() {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [visible, setVisible] = React.useState<boolean>(false);
  const [selectedStyle, setSelectedStyle] = React.useState<any>({});

  const handleDropComponent = (item: any) => {
    setVisible(true);
    setSelectedComponent(item.name);
  };

  const choosedComponent = (item: any) => {
    setSelectedStyle(item.style);
  }

  const modalBtn = <Button onClick={() => {setVisible(false)}} style={{padding:'20px 30px', backgroundColor:'#282A35', border:'none'}}>ok</Button>
  
  return (
    <Row>
      <Modal visible={visible} onClose={() => setVisible(false)} actions={modalBtn}>
        {selectedComponent && <SelectorModal selectedComponent={selectedComponent} choosedComponent={choosedComponent} />}
      </Modal>
      <DropCol span={9} style={{ overflow: 'hidden', clear: 'both' }}>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin
            selectedStyle={selectedStyle}
            selectedComponent={selectedComponent}
          />
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
  );
});
