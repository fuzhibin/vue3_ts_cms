export const loginUserRules = {
  name: [
    {
      required: true,
      message: "用户名不能为空~",
      trigger: "blur"
    },
    {
      pattern: /^\w{4,8}$/,
      message: "请输入正确的用户名~",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空~",
      trigger: "blur"
    },
    {
      pattern: /^\w{4,8}$/,
      message: "密码错误~",
      trigger: "blur"
    }
  ]
};
export const loginPhoneRules = {
  phonenumber: [
    {
      required: true,
      message: "手机号不能为空~",
      trigger: "blur"
    },
    {
      pattern: /^\w{0,11}$/,
      message: "请输入正确的手机号~",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空~",
      trigger: "blur"
    },
    {
      pattern: /^\w{4,8}$/,
      message: "密码错误~",
      trigger: "blur"
    }
  ]
};
