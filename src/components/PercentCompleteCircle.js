import { h } from "vue";
import { div, svg, p, circle } from "./htmlFns";

const percentCompleteCircle = (props, context) => {
  return div({ ...context.attrs }, [
    p({}, "what I represent"),
    svg({}, circle({}))
  ]);
};

const PercentCompleteCircle = h.bind(null, percentCompleteCircle);

export { PercentCompleteCircle };
