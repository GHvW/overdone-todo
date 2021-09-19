import { h } from "vue";
import { div } from "./htmlFns";
import { Todo } from "./Todo";

const todoList = (props, context) => {
  return div(
    {},
    props.todos.map((todo) =>
      Todo({
        text: todo.text,
        complete: todo.complete,
        dispatch: props.dispatch
      })
    )
  );
};

const TodoList = h.bind(null, todoList);

export { TodoList };
