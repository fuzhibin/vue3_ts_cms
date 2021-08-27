import { IForm } from "@/common-ui/msi-form";

const DialogConfig: IForm = {
  formItem: [
    {
      field: "name",
      label: "用户名",
      type: "input",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      label: "真实姓名",
      type: "input",
      placeholder: "请输入真实姓名"
    },
    {
      field: "password",
      label: "密码",
      type: "password",
      placeholder: "请输入密码",
      isHidden: true
    },
    {
      field: "cellphone",
      label: "手机号码",
      type: "input",
      placeholder: "请输入手机号码"
    },
    {
      field: "roleId",
      label: "角色",
      type: "select",
      placeholder: "请选择角色",
      options: []
    },
    {
      field: "departmentId",
      label: "部门",
      type: "select",
      placeholder: "请选择部门",
      options: []
    }
  ],
  colLayout: {
    span: 24
  }
};

export default DialogConfig;
