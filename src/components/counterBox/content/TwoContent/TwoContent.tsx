import React from 'react';
import { TwoContentProps } from './twoContent_types';
import { WrapperCounter, Container } from './TwoContent.styles';
import Counter from '@components/counter/content/Counter';
import CounterLogic from '../CounterLogic/CounterLogic';
import {
  inCreaseValue,
  deCreaseValue,
} from '@components/counterBox/utils/utils';

const TwoContent: React.FC<TwoContentProps> = ({
  value,
  shape,
  onChange,
  onChangeMain,
  isLocked,
  onChangeLock,
}: TwoContentProps) => {
  return (
    <Container>
      {value.map((item: any, index: number) => {
        return (
          <CounterLogic
            key={index}
            shape={shape}
            position={item.position}
            isLocked={isLocked}
            onChangeLock={onChangeLock}
          >
            <WrapperCounter>
              <Counter
                value={item.value}
                onIncrease={() => inCreaseValue(index, value, onChangeMain)}
                onDecrease={() => deCreaseValue(index, value, onChangeMain)}
                onChange={onChange}
                name={item.name}
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
