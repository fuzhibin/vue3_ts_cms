import { IDialog } from "@/components/page-dialog";
const DialogConfig: IDialog = {
  title: "新建菜单",
  formItem: [
    {
      field: "name",
      label: "菜单名字",
      type: "input",
      placeholder: "请输入菜单名字"
    },
    {
      field: "type",
      label: "菜单类别",
      type: "select",
      options: [
        {
          title: "一级菜单",
          value: 1
        },
        {
          title: "二级菜单",
          value: 2
        }
      ]
    },
    {
      field: "url",
      label: "菜单路径",
      type: "input",
      placeholder: "请输入菜单路径"
    },
    {
      field: "parentId",
      label: "父菜单",
      type: "select",
      placeholder: "默认创建一级菜单",
      options: []
    }
  ],
  colLayout: {
    span: 24
  }
};

export default DialogConfig;
