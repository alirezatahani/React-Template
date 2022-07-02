export type CounterLogicProps = {
  position: 'top' | 'right' | 'bottom' | 'left';
  children?: React.ReactNode;
  shape?: 'square' | 'diamond' | 'inline' | 'triangle';
  isLocked?: boolean;
  onChangeLock?: (value: boolean) => void;
};
