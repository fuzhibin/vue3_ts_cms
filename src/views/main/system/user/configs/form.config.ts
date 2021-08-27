import type { IForm } from "@/common-ui/msi-form";
const formInfo: IForm = {
  formItem: [
    {
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id..."
    },
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名..."
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名..."
    },
    {
      field: "cellphone",
      type: "input",
      label: "手机号码",
      placeholder: "请输入手机号码..."
    },
    {
      field: "enable",
      type: "select",
      label: "状态",
      placeholder: "请进行选择...",
      options: [
        {
          title: "停用",
          value: 1
        },
        {
          title: "启用",
          value: 0
        }
      ]
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
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  },
  colLayout: {
    span: 8
  }
};
export default formInfo;
