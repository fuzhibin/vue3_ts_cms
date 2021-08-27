type InputType = "input" | "select" | "password" | "datapicker" | "upload";

export interface IFormItemType {
  field: string;
  type: InputType;
  label: string;
  rules?: any[];
  placeholder?: string;
  options?: any[];
  otherOptions?: any;
  isHidden?: boolean;
}

interface colLayoutType {
  span?: number;
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
