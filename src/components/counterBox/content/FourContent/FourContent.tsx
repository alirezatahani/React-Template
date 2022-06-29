import React from 'react';
import { FourContentProps } from './fourContent_types';
import { Container, WrapperCounter } from './FourContent.styles';
import Counter from '@components/counter/content/Counter';
import CounterLogic from '../CounterLogic/CounterLogic';
import {
  inCreaseValue,
  deCreaseValue,
} from '@components/counterBox/utils/utils';

const FourContent: React.FC<FourContentProps> = ({
  value,
  shape,
  onChange,
  onChangeMain,
}: FourContentProps) => {
  return (
    <Container>
      {value.map((item: any, index: number) => {
        return (
          <CounterLogic key={index} shape={shape} position={item.position}>
            <WrapperCounter>
              <Counter
                value={item.value}
                onIncrease={() => inCreaseValue(index, value, onChangeMain)}
                onDecrease={() => deCreaseValue(index, value, onChangeMain)}
                onChange={onChange}
              />
            </WrapperCounter>
          </CounterLogic>
        );
      })}
    </Container>
  );
};

FourContent.defaultProps = {};
export default FourContent;
