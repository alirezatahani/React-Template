import React, { useState } from 'react';
import Counter from '@components/counter/content/Counter';
import { WrapperCounter } from '../styles/counterBox.styles';
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
    <WrapperCounter {...rest}>
      <div style={{}}></div>
      {values &&
        values.map((value, index) => (
          <Counter
            key={index}
            value={value}
            onIncrease={() => increaseValue(index)}
            onDecrease={() => decreaseValue(index)}
          />
        ))}
    </WrapperCounter>
  );
};

CounterBox.defaultProps = {};
export default CounterBox;
