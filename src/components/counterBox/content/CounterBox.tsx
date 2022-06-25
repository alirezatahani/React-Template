import React, { useState, useEffect } from 'react';
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
  shape,
}: CounterBoxProps) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [state, setState] = useState(null);
  const [total, setTotal] = useState({});

  const increaseValue = (index: number) => {
    const newValues = values.map((_value, _index: number) => {
      if (index === _index) {
        return _value + 1;
      } else {
        return _value;
      }
    });
    setTotal(newValues);
    onChange(newValues, name);
  };
  const decreaseValue = (index: number) => {
    const newValues = values.map((_value, _index: number) => {
      if (index === _index) {
        return _value - 1;
      } else {
        return _value;
      }
    });

    onChange(newValues, name);
    setTotal(newValues);
  };

  useEffect(() => {
    values &&
      values.map((item, index) => {
        if (index === 0) {
          setState({ value: Object.values(total)[3], position: 'top' });
        }
      });
  }, [values]);

  console.log(state, 'state');

  return (
    <Container shape={shape}>
      {values &&
        values.map((value, index) => {
          return (
            <TopStyled shape={shape}>
              <WrapperCounter>
                <Counter
                  key={index}
                  value={value}
                  onIncrease={() => increaseValue(index)}
                  onDecrease={() => decreaseValue(index)}
                  name={name}
                />
              </WrapperCounter>
            </TopStyled>
          );
        })}
    </Container>
  );
};

CounterBox.defaultProps = {};
export default CounterBox;
