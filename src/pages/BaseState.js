import { AddTodoInput } from "../components/AddTodoInput.js";
import { div } from "../components/htmlFns.js";
// import { Todo } from "../components/Todo.js";
import { TodoList } from "../components/TodoList";
import { TodoListHeader } from "../components/TodoListHeader.js";
import { todoReducer } from "../core/Todo/reducer";

let theTodos = [
  { text: "something cool!", complete: false },
  { text: "draw", complete: false },
  { text: "code", complete: false }
];

export const BaseStatePage = {
  data() {
    return {
      todos: theTodos
      // todos: [
      //   { text: "something cool!", complete: false },
      //   { text: "draw", complete: false },
      //   { text: "code", complete: false }
      // ]
    };
  },
  render() {
    const todoDispatcher = (message) => {
      this.todos = todoReducer(this.todos, message);
    };

    return div({ class: "container" }, [
      TodoListHeader({
        text: "Base State Todo List"
        // style: { color: "blue" }
      }),
      div({ class: "box" }, [
        AddTodoInput({ dispatch: todoDispatcher }),
        TodoList({
          todos: this.todos,
          dispatch: todoDispatcher
        })
      ])
      // div(
      //   {},
      //   this.todos.map((todo) =>
      //     Todo({
      //       text: todo.text,
      //       complete: todo.complete,
      //       dispatch: todoDispatcher
      //     })
      //   )
      // )
    ]);
  }
};
