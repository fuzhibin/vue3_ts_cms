import type { App } from "vue";
import registerElement from "./registerElement";

// 线条背景
import CanvasNest from "canvas-nest.js";
const config = {
  color: "#2c3e50",
  count: 120
};

// Using config rendering effect at 'element'.
const cn = new CanvasNest(
  document.querySelector("body") as HTMLBodyElement,
  config
);

export default function (app: App): void {
  app.use(registerElement);
}
