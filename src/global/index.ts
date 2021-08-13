import type { App } from "vue";
import registerElement from "./registerElement";

export default function (app: App): void {
  app.use(registerElement);
}
