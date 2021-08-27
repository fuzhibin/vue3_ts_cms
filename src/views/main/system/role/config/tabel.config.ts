const tableConfigList = {
  title: "角色管理",
  propList: [
    { prop: "name", label: "角色名", minWidth: "100" },
    { prop: "intro", label: "权限", minWidth: "100" },
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
export default tableConfigList;
