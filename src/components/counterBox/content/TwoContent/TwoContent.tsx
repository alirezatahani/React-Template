import React from 'react';
import { TwoContentProps } from './twoContent_types';
import { WrapperCounter, Container } from './TwoContent.styles';
import Counter from '@components/counter/content/Counter';
import CounterLogic from '../CounterLogic/CounterLogic';
const TwoContent: React.FC<TwoContentProps> = ({
  value,
  shape,
}: TwoContentProps) => {
  console.log(value);
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

TwoContent.defaultProps = {};
export default TwoContent;
