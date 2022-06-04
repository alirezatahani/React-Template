export type TextareaLabelProps = {
    htmlFor: string;
  };
  export type TextareaContainerProps = {
    hasAddon?: string;
    direction?:string;
    align?:string;
  };
  
  export type TextareaProps = {
    type?: string;
    label?: string;
    width?: string,
    height?: string,
    placeholder?: string;
    scale?: 'sm' | 'md' | 'lg';
    status?: 'danger' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    rounded?: boolean;
    name?: string;
    onChange?: React.ChangeEventHandler;
    value?: string;
    disabled?: boolean;
    direction?:string;
    align?:string;
  };
  