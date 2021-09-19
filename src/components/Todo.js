import { h } from "vue";
import { div, input, label, strike } from "../components/htmlFns";
import { cardAndContent } from "../components/stylizedFns";

// vue 3 functional component
const todo = (props, context) => {
  return cardAndContent([
    div({ class: "content" }, [
      input({
        type: "checkbox",
        value: props.text,
        onInput: (event) => {
          props.dispatch({
            message: "TOGGLE-COMPLETE",
            payload: { text: props.text, complete: !props.complete }
          });
        }
      }),
      label(
        { for: props.text },
        props.complete ? strike({}, props.text) : props.text
      )
    ])
  ]);
};

export const Todo = h.bind(null, todo);
