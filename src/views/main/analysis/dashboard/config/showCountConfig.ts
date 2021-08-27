interface countupOptionType {
  useEasing?: true;
  useGrouping?: boolean;
  separator?: string;
  decimal?: string;
  prefix?: string;
  suffix?: string;
}

interface myCountupOptions {
  sale: countupOptionType;
  favor: countupOptionType;
  inventory: countupOptionType;
  saleroom: countupOptionType;
}

const options: myCountupOptions = {
  sale: {
    useEasing: true,
    useGrouping: true,
    separator: ","
  },
  favor: { useEasing: true, useGrouping: true, separator: "," },
  inventory: { useEasing: true, useGrouping: true, separator: "," },
  saleroom: {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    prefix: "￥"
  }
};

export default options;
