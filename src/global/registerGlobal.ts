import { App } from "vue";

import { formatUtcToData } from "@/utils/formate";
export default function registerDirectives(app: App): void {
  app.config.globalProperties.$formatUTC = function (
    data: string,
    formatString = "YYYY-MM-DD HH:mm:ss"
  ) {
    return formatUtcToData(data, formatString);
  };
}
