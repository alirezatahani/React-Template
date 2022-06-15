export type TemolateContainerProps = {
  showControlPanel: boolean;
};

type SettingType = {
  typography: React.ReactElement;
  button: React.ReactElement;
  [key: string]: any;
};

type InitialValueType = {
  fontColor: string;
  fontFamily: string;
  fontSize: string | number;
  fontType: string;
  textAlign: string;
  textDecoration: string | string[];
};

type ControlPanelProps = {
  selected?: { type: string };
  initialValue?: InitialValueType;
  setInitialValue?: React.SetStateAction<any>;
};
