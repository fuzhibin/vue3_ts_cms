const TabelConfig = {
  propList: [
    { prop: "id", label: "部门id", minWidth: "100" },
    { prop: "name", label: "部门名称", minWidth: "100" },
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
      prop: "leader",
      label: "部门领导",
      minWidth: "120",
      slotName: "operation"
    }
  ],
  showTabelIndex: true,
  showTabelSelect: true
};

export default TabelConfig;
