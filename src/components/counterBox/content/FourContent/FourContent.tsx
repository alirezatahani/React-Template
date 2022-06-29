import React from 'react';
import { FourContentProps } from './fourContent_types';
import {
  LeftStyled,
  RightStyled,
  Container,
  WrapperCounter,
  TopStyled,
  BottomStyled,
} from './FourContent.styles';
import Counter from '@components/counter/content/Counter';

const FourContent: React.FC<FourContentProps> = ({}: FourContentProps) => {
  return (
    <Container>
      <TopStyled>
        <WrapperCounter>
          <Counter />
        </WrapperCounter>
      </TopStyled>
      <RightStyled>
        <WrapperCounter>
          <Counter />
        </WrapperCounter>
      </RightStyled>
      <BottomStyled>
        <WrapperCounter>
          <Counter />
        </WrapperCounter>
      </BottomStyled>
      <LeftStyled>
        <WrapperCounter>
          <Counter />
        </WrapperCounter>
      </LeftStyled>
    </Container>
  );
};

FourContent.defaultProps = {};
export default FourContent;
