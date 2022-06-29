import React from 'react';
import { FourContentProps } from './fourContent_types';
import { Container, WrapperCounter } from './FourContent.styles';
import Counter from '@components/counter/content/Counter';
import CounterLogic from '../CounterLogic/CounterLogic';

const FourContent: React.FC<FourContentProps> = ({
  value,
  shape,
}: FourContentProps) => {
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

FourContent.defaultProps = {};
export default FourContent;
