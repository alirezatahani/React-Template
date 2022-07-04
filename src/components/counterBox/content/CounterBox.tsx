import React, { useCallback } from 'react';
import { CounterBoxProps } from './counterBox_types';
import TwoContent from './TwoContent/TwoContent';
import ThreeContent from './ThreeCountent/ThreeContent';
import FourContent from './FourContent/FourContent';

const CounterBox: React.FC<CounterBoxProps> = ({
  value,
  shape,
  onChange,
  onChangeMain,
  onChangeLock,
  isLocked,
}: CounterBoxProps) => {
  const renderContent = useCallback(
    (value: any) => {
      switch (value.length) {
        case 2:
          return (
            <TwoContent
              onChange={onChange}
              value={value}
              shape="inline"
              onChangeMain={onChangeMain}
              isLocked={isLocked}
              onChangeLock={onChangeLock}
            />
          );
        case 3:
          return (
            <ThreeContent
              onChange={onChange}
              value={value}
              shape="triangle"
              onChangeMain={onChangeMain}
              isLocked={isLocked}
              onChangeLock={onChangeLock}
            />
          );
        case 4:
          return (
            <FourContent
              onChange={onChange}
              value={value}
              shape={shape}
              onChangeMain={onChangeMain}
              isLocked={isLocked}
              onChangeLock={onChangeLock}
            />
          );
        default:
          return null;
      }
    },
    [value]
  );

  return <div>{renderContent(value)}</div>;
};

CounterBox.defaultProps = {};
export default CounterBox;
