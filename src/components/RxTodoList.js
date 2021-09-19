import { h } from "vue";
import { div } from "./htmlFns";
import { Todo } from "./Todo";
import { subject$ } from "../core/State/Rx/storeObservable";

const todoList = (props, context) => {
  return div(
    {},
    props.todos.map((todo) =>
      Todo({
        text: todo.text,
        complete: todo.complete,
        dispatch: subject$.next.bind(subject$)
      })
    )
  );
};

const TodoList = h.bind(null, todoList);

export { TodoList };
