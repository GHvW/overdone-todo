import { h } from "vue";
import { useStore } from "vuex";
import { div } from "./htmlFns";
import { Todo } from "./Todo";

const todoList = {
  props: {
    todos: {
      type: Array,
      default: []
    }
  },
  setup(props) {
    const store = useStore();

    const dispatchFn = store.commit.bind(store, "update");

    return () => {
      return div(
        {},
        props.todos.map((todo) =>
          Todo({
            text: todo.text,
            complete: todo.complete,
            dispatch: dispatchFn
          })
        )
      );
    };
  }
};

const TodoList = h.bind(null, todoList);

export { TodoList };
