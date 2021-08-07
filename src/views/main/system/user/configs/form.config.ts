import type { IForm } from "@/common-ui/msi-form";
const formInfo: IForm = {
  formItem: [
    {
      type: "input",
      label: "id",
      placeholder: "请输入id.."
    },
    {
      type: "password",
      label: "密码",
      placeholder: "请输入密码..."
    },
    {
      type: "select",
      label: "角色",
      placeholder: "aaaa",
      options: [
        {
          title: "超级管理员",
          value: "superadmin"
        },
        {
          title: "管理员",
          value: "admin"
        }
      ]
    },
    {
      type: "datapicker",
      label: "创建日期",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
};
export default formInfo;
