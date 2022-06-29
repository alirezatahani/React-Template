import React from 'react';
import { ThreeContentProps } from './threeContent_types';
import { WrapperCounter, Container } from './ThreeContent.styles';
import Counter from '@components/counter/content/Counter';
import CounterLogic from '../CounterLogic/CounterLogic';
import {
  inCreaseValue,
  deCreaseValue,
} from '@components/counterBox/utils/utils';

const ThreeContent: React.FC<ThreeContentProps> = ({
  value,
  shape,
  onChange,
  onChangeMain,
}: ThreeContentProps) => {
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

ThreeContent.defaultProps = {};
export default ThreeContent;
