import { h } from "vue";
import { h1 } from "../components/htmlFns";

// vue 3 functional component
const todoListHeader = (props, context) => {
  return h1(
    {
      ...context.attrs,
      class: "is-size-3 has-text-centered has-text-primary"
    },
    props.text
  );
};

export const TodoListHeader = h.bind(null, todoListHeader);
