import { IForm } from "@/common-ui/msi-form";

const DialogConfig: IForm = {
  formItem: [
    {
      field: "name",
      label: "类别",
      type: "input",
      placeholder: "请输入类别"
    }
  ],
  colLayout: {
    span: 24
  }
};

export default DialogConfig;
