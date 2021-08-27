import { IForm } from "@/common-ui/msi-form/types/types";

const FormConfig: IForm = {
  formItem: [
    {
      field: "name",
      label: "部门名称",
      type: "input",
      placeholder: "请输入部门名称..."
    },
    {
      field: "createAt",
      type: "datapicker",
      label: "创建日期",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    },
    {
      field: "leader",
      label: "部门管理",
      type: "input",
      placeholder: "请输入部门管理人.."
    }
  ],
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  }
};

export default FormConfig;
