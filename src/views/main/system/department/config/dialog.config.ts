import { IDialog } from "@/components/page-dialog/types/types";

const DialogConfig: IDialog = {
  formItem: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称..."
    },
    {
      field: "leader",
      type: "input",
      label: "部门领导",
      placeholder: "请输入部门领导..."
    },
    {
      field: "parentId",
      type: "select",
      label: "隶属部门",
      placeholder: "请输入部门领导...",
      options: [
        {
          title: "1",
          value: 1
        },
        {
          title: "2",
          value: 2
        }
      ]
    }
  ],
  colLayout: {
    span: 24
  }
};

export default DialogConfig;
