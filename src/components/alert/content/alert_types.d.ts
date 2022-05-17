export type AlertProps = {
  message: string;
  description?: string;
  variant?: 'outlined' | 'filled';
  type?: 'info' | 'danger' | 'success' | 'warning';
  closable?: boolean;
  isClose?: boolean;
  style?: React.CSSProperties;
};
