type InputType = "input" | "select" | "password" | "datapicker";

export interface IFormItemType {
  type: InputType;
  label: string;
  rules?: any[];
  placeholder?: string;
  options?: any[];
  otherOptions?: any;
}

interface colLayoutType {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
export interface IForm {
  formItem: IFormItemType[];
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: colLayoutType;
}
