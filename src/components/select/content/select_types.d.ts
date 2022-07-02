import { MouseEventHandler } from 'react';
import Select from 'react-select/dist/declarations/src/Select';
export interface MySelectProps extends Select{
    defaultValue ?: string
    selectOptions?:MouseEventHandler
    options?: { value: string; label: string; isDisabled?: true }[];
}