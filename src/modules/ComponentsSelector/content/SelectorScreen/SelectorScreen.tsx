import * as React from 'react';
import { memo } from 'react';
import { Box } from '../Box/Box';
import { Dustbin } from '../Dustbin/Dustbin';
import { Row } from '@components/grid';
import {
  DragCol,
  DropCol,
} from '@modules/ComponentsSelector/styles/ComponentsSelector_styles';

export const SelectorScreen = memo(function Container() {
  return (
    <React.Fragment>
      <Row>
        <DropCol span={9} style={{ overflow: 'hidden', clear: 'both' }}>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
          </div>
        </DropCol>
        <DragCol span={3} style={{ overflow: 'hidden', clear: 'both' }}>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name="Glass" />
            <Box name="Banana" />
            <Box name="Paper" />
          </div>
        </DragCol>
      </Row>
    </React.Fragment>
  );
});
