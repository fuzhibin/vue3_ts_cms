import type { IForm } from "@/common-ui/msi-form";

const FormConfig: IForm = {
  formItem: [
    {
      field: "name",
      type: "input",
      label: "类别",
      placeholder: "请输入商品类别..."
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
    }
  ],
  itemStyle: {
    padding: "10px 40px"
  }
};

export default FormConfig;
