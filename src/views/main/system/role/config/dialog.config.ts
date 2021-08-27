import { IForm } from "@/common-ui/msi-form";
const DialogConfig: IForm = {
  formItem: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色介绍"
    },
    {
      field: "intro",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入角色介绍"
    }
  ],
  colLayout: {
    span: 24
  }
};

export default DialogConfig;
