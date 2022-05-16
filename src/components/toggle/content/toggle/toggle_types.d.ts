export type ToggleProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  value?: boolean;
  onChange?: Function;
};

export type ToggleContainerProps = {
  size: 'sm' | 'md' | 'lg';
};

export type ToggleInputProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  sliderSize?: 'sm' | 'md' | 'lg';
};

export type ToggleSliderProps = {
  size: 'sm' | 'md' | 'lg';
};
