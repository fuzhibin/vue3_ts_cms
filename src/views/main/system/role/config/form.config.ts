import type { IForm } from "@/common-ui/msi-form";
const formInfo: IForm = {
  formItem: [
    {
      field: "name",
      type: "input",
      label: "角色名称",
      placeholder: "请输入角色名称..."
    },
    {
      field: "intro",
      type: "input",
      label: "权限",
      placeholder: "请输入权限..."
    },
    {
      field: "createTime",
      type: "datapicker",
      label: "创建日期",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  },
  colLayout: {
    span: 8
  }
};
export default formInfo;
