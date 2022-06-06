import * as React from 'react';
import { memo } from 'react';
import { Box } from '../Box/Box';
import { Dustbin } from '../Dustbin/Dustbin';
import { Row } from '@components/grid';
import { BoxNames } from '@modules/ComponentsSelector/utils/constants';
import { BoxName } from '@modules/ComponentsSelector/utils/constants';
import {
  DragCol,
  DropCol,
  Wrapper,
} from '@modules/ComponentsSelector/styles/SelectorScreen_styles';

export const SelectorScreen = memo(function Container() {
  return (
    <React.Fragment>
      <Row>
        <DropCol span={9} style={{ overflow: 'hidden', clear: 'both' }}>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
          </div>
        </DropCol>
        <DragCol span={3} style={{ overflow: 'scroll', clear: 'both' }}>
          <Wrapper style={{ overflow: 'hidden', clear: 'both' }}>
            {BoxNames.map((boxName: BoxName, index: number) => (
              <div key={index}>
                <Box name={boxName.name} />
              </div>
            ))}
          </Wrapper>
        </DragCol>
      </Row>
    </React.Fragment>
  );
});
