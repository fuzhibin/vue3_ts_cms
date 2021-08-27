const tableConfig = {
  title: "用户列表",
  propList: [
    { prop: "id", label: "id", minWidth: "100" },
    { prop: "name", label: "类别", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "updateAt"
    },
    {
      label: "操作",
      minWidth: "120",
      slotName: "operation"
    }
  ],
  showTabelIndex: true,
  showTabelSelect: true
};
export default tableConfig;
