import React, { useState } from 'react';
import Counter from '@components/counter/content/Counter';
import {
  WrapperCounter,
  Container,
  TopStyled,
  LeftStyled,
  RightStyled,
  BottomStyled,
  LockBox,
} from '../styles/counterBox.styles';
import { CounterBoxProps } from './counterBox_types';

const CounterBox: React.FC<CounterBoxProps> = ({
  name,
  values,
  onChange,
  ...rest
}: CounterBoxProps) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const increaseValue = (index: number) => {
    const newValues = values.map((_value, _index) => {
      if (index === _index) {
        return _value + 1;
      } else {
        return _value;
      }
    });

    onChange(newValues, name);
  };
  const decreaseValue = (index: number) => {
    const newValues = values.map((_value, _index) => {
      if (index === _index) {
        return _value - 1;
      } else {
        return _value;
      }
    });

    onChange(newValues, name);
  };

  return (
    <Container {...rest}>
      {values &&
        values.map((value, index) => {
          if (index === 0) {
            return (
              <TopStyled>
                <WrapperCounter>
                  <Counter
                    key={index}
                    value={value}
                    onIncrease={() => increaseValue(index)}
                    onDecrease={() => decreaseValue(index)}
                  />
                </WrapperCounter>
              </TopStyled>
            );
          } else if (index === 1) {
            return (
              <RightStyled>
                <WrapperCounter>
                  <Counter
                    key={index}
                    value={value}
                    onIncrease={() => increaseValue(index)}
                    onDecrease={() => decreaseValue(index)}
                  />
                </WrapperCounter>
              </RightStyled>
            );
          } else if (index === 2) {
            return (
              <BottomStyled>
                <WrapperCounter>
                  <Counter
                    key={index}
                    value={value}
                    onIncrease={() => increaseValue(index)}
                    onDecrease={() => decreaseValue(index)}
                  />
                </WrapperCounter>
              </BottomStyled>
            );
          } else if (index === 3) {
            return (
              <LeftStyled>
                <WrapperCounter>
                  <Counter
                    key={index}
                    value={value}
                    onIncrease={() => increaseValue(index)}
                    onDecrease={() => decreaseValue(index)}
                  />
                </WrapperCounter>
              </LeftStyled>
            );
          }
        })}
    </Container>
  );
};

CounterBox.defaultProps = {};
export default CounterBox;
