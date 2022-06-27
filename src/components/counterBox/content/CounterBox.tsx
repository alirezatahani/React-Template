import React, { useState, useEffect, useCallback } from 'react';
import Counter from '@components/counter/content/Counter';
import { WrapperCounter, Container } from '../styles/counterBox.styles';
import { CounterBoxProps } from './counterBox_types';
import CounterContent from './CounterContent/CounterContent';

const CounterBox: React.FC<CounterBoxProps> = ({
  name,
  values,
  onChange,
  onChangeCounter,
}: CounterBoxProps) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [state, setState] = useState([]);

  const increaseValue = (index: number) => {
    const newValues = values.map((_value, _index: number) => {
      if (index === _index) {
        return _value + 1;
      } else {
        return _value;
      }
    });
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
  };

  useEffect(() => {
    setState([{ value: values[0], position: 'left' }]);

    setState((prevState) => [
      ...prevState,
      { value: values[1], position: 'right' },
    ]);
    setState((prevState) => [
      ...prevState,
      { value: values[2], position: 'top' },
    ]);
    setState((prevState) => [
      ...prevState,
      { value: values[3], position: 'bottom' },
    ]);
  }, [values]);

  console.log(state, 'this is value');

  return (
    <Container>
      {state &&
        state.map((item, index) => {
          return (
            <CounterContent position={item.position}>
              <WrapperCounter>
                <Counter
                  key={index}
                  value={item.value}
                  onIncrease={() => increaseValue(index)}
                  onDecrease={() => decreaseValue(index)}
                  name={name}
                />
              </WrapperCounter>
            </CounterContent>
          );
        })}
    </Container>
  );
};

CounterBox.defaultProps = {};
export default CounterBox;
