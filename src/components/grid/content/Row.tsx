import * as React from 'react';
import { FlexRow } from '../styles/Row.styles';

type Props = {
  children: React.ReactNode;
};

const Row: React.FC<Props> = ({ children }: Props) => {
  return <FlexRow>{children}</FlexRow>;
};

export default Row;
