import type { IForm } from "@/common-ui/msi-form";
const formInfo: IForm = {
  formItem: [
    {
      filed: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id.."
    },
    {
      filed: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名..."
    },
    {
      filed: "realName",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名..."
    },
    {
      filed: "roles",
      type: "select",
      label: "角色",
      placeholder: "请进行选择...",
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
      filed: "createTime",
      type: "datapicker",
      label: "创建日期",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  labelWidth: "80px",
  itemStyle: {
    padding: "10px 30px"
  }
};
export default formInfo;
