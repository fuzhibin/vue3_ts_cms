const TabelConfig = {
  title: "故事列表",
  propList: [
    { prop: "id", label: "文章ID", minWidth: "100" },
    { prop: "title", label: "文章标题", minWidth: "100" },
    { prop: "content", label: "文章内容", minWidth: "500" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    }
  ],
  showTabelIndex: true,
  showTabelSelect: true
};

export default TabelConfig;
