import { CountUp } from "countup.js";
let demo = new CountUp("myTargetElement", 6884);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}
