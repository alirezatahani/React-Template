import React from 'react';
import { CounterBoxProps } from './counterBox_types';
import TwoContent from './TwoContent/TwoContent';
import ThreeContent from './ThreeCountent/ThreeContent';
import FourContent from './FourContent/FourContent';

const CounterBox: React.FC<CounterBoxProps> = ({
  value,
  shape,
  onChange,
}: CounterBoxProps) => {
  const renderContent = (value: any) => {
    switch (value.length) {
      case 2:
        return <TwoContent onChange={onChange} value={value} shape="inline" />;
      case 3:
        return (
          <ThreeContent onChange={onChange} value={value} shape="triangle" />
        );
      case 4:
        return <FourContent onChange={onChange} value={value} shape={shape} />;
      default:
        return null;
    }
  };

  return <div>{renderContent(value)}</div>;
};

CounterBox.defaultProps = {};
export default CounterBox;
