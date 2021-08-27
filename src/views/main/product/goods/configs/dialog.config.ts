import { IForm } from "@/common-ui/msi-form";
const DialogConfig: IForm = {
  formItem: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名字"
    },
    {
      field: "desc",
      type: "input",
      label: "商品描述",
      placeholder: "请输入商品描述"
    },
    {
      field: "imgUrl",
      type: "upload",
      label: "商品图片链接",
      placeholder: "请加入商品图片链接"
    },
    {
      field: "oldPrice",
      type: "input",
      label: "原价",
      placeholder: "请输入商品原价"
    },
    {
      field: "newPrice",
      type: "input",
      label: "现价",
      placeholder: "请输入商品现价"
    },
    {
      field: "status",
      type: "select",
      label: "商品状态",
      placeholder: "请选择商品状态",
      options: [
        {
          title: "上架",
          value: 1
        },
        {
          title: "下架",
          value: 2
        }
      ]
    },
    {
      field: "inventoryCount",
      type: "input",
      label: "商品库存件数",
      placeholder: "请输入库存件数"
    },
    {
      field: "saleCount",
      type: "input",
      label: "商品售卖件数",
      placeholder: "请输入商品售卖件数"
    },
    {
      field: "favorCount",
      type: "input",
      label: "商品优惠件数",
      placeholder: "请输入商品优惠件数"
    },
    {
      field: "address",
      type: "input",
      label: "商品地址",
      placeholder: "请输入商品地址"
    }
  ],
  colLayout: {
    span: 24
  },
  labelWidth: "130px",
  itemStyle: {
    padding: "5px 10px"
  }
};

export default DialogConfig;
