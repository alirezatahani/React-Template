import React from 'react';
import { TwoContentProps } from './twoContent_types';
import {
  WrapperCounter,
  MainRelative,
  MainAbsolute,
  Item,
} from './TwoContent.styles';
import Counter from '@components/counter/content/Counter';

const TwoContent: React.FC<TwoContentProps> = ({ value }: TwoContentProps) => {
  console.log(value, 'values');
  return (
    <MainRelative>
      <MainAbsolute>
        <WrapperCounter>
          {value &&
            Object.values(value).map((item: any, index: number) => {
              return (
                <Item>
                  <Counter key={index} value={item} />
                </Item>
              );
            })}
        </WrapperCounter>
      </MainAbsolute>
    </MainRelative>
  );
};

TwoContent.defaultProps = {};
export default TwoContent;
