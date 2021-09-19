import { div } from "../components/htmlFns";
import { TodoListHeader } from "../components/TodoListHeader";
import { TodoList } from "../components/RxTodoList";
import { AddTodoInput } from "../components/AddTodoInput";
import { subject$, todoSource$ } from "../core/State/Rx/storeObservable";

export const RxStatePage = {
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    todoSource$.subscribe((todosState) => {
      this.todos = todosState;
    });
  },
  render() {
    return div({ class: "container" }, [
      TodoListHeader({
        text: "Base State Todo List",
        style: { color: "blue" }
      }),
      div({ class: "box" }, [
        AddTodoInput({ dispatch: subject$.next.bind(subject$) }),
        TodoList({
          todos: this.todos
        })
      ])
    ]);
  }
};
