import React, { useState, useEffect, useCallback } from 'react';
import Counter from '@components/counter/content/Counter';
import { WrapperCounter, Container } from '../styles/counterBox.styles';
import { CounterBoxProps } from './counterBox_types';
import CounterContent from './CounterContent/CounterContent';

const CounterBox: React.FC<CounterBoxProps> = ({
  name,
  values,
  onChange,
  shape,
  onChangeCounter,
}: CounterBoxProps) => {
  const positions = ['top', 'right', 'bottom', 'left'];

  const [state, setState] = useState(null);

  const increaseValue = (index: number) => {
    const newValues = state.map((_value: any, _index: number) => {
      if ((index = _index)) {
        return _value.value + 1;
      } else {
        return _value.value;
      }
    });
    onChange(newValues, name);
  };
  const decreaseValue = (index: number) => {
    const newValues = state.map((_value: any, _index: number) => {
      if (index === _index) {
        return _value.value - 1;
      } else {
        return _value.value;
      }
    });

    onChange(newValues, name);
  };

  useEffect(() => {
    setState(
      positions.reduce((acc: any, curr: any, index: number) => {
        return [...acc, { value: values[index], status: curr }];
      }, [])
    );
  }, [values]);

  console.log(values);
  console.log(state, 'state');
  return (
    <Container>
      {state &&
        state.map((item: any, index: number) => {
          return (
            <div>
              <WrapperCounter>
                <Counter
                  key={index}
                  value={item.value}
                  onIncrease={() => increaseValue(index)}
                  onDecrease={() => decreaseValue(index)}
                  name={name}
                />
              </WrapperCounter>
            </div>
          );
        })}
    </Container>
  );
};

CounterBox.defaultProps = {};
export default CounterBox;
