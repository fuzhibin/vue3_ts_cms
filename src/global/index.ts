import type { App } from "vue";
import registerElement from "./registerElement";
import registerGlobal from "./registerGlobal";
export default function (app: App): void {
  app.use(registerElement);
  app.use(registerGlobal);
}
