import React from "react";

export type ColorPickerPropsType = {
  value?: string;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>, values: string | string[]) => void;
};
