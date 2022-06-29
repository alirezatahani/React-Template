import React from 'react';
import { ThreeContentProps } from './threeContent_types';
import { WrapperCounter, Container } from './ThreeContent.styles';
import Counter from '@components/counter/content/Counter';
import CounterLogic from '../CounterLogic/CounterLogic';

const ThreeContent: React.FC<ThreeContentProps> = ({
  value,
  shape,
}: ThreeContentProps) => {
  return (
    <Container>
      {value.map((item: any, index: number) => {
        return (
          <CounterLogic key={index} shape={shape} position={item.position}>
            <WrapperCounter>
              <Counter />
            </WrapperCounter>
          </CounterLogic>
        );
      })}
    </Container>
  );
};

ThreeContent.defaultProps = {};
export default ThreeContent;
