import React from 'react';
import { TwoContentProps } from './twoContent_types';
import { WrapperCounter, Container } from './TwoContent.styles';
import Counter from '@components/counter/content/Counter';
import CounterLogic from '../CounterLogic/CounterLogic';
const TwoContent: React.FC<TwoContentProps> = ({
  value,
  shape,
  onChange,
}: TwoContentProps) => {
  const inCreaseValue = (index: number) => {
    const newValue = value.map((item: any, _index: number) => {
      if (index == _index) {
        return { ...item, value: item.value + 1 };
      }
      return item;
    });

    onChange(newValue);
  };

  return (
    <Container>
      {value.map((item: any, index: number) => {
        return (
          <CounterLogic key={index} shape={shape} position={item.position}>
            <WrapperCounter>
              <Counter
                value={item.value}
                onIncrease={() => inCreaseValue(index)}
              />
            </WrapperCounter>
          </CounterLogic>
        );
      })}
    </Container>
  );
};

TwoContent.defaultProps = {};
export default TwoContent;
