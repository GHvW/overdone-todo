import { updateByTodoText } from "./update";
import { addTodo } from "./add";
// remember that a ruby hash/dictionary looks like this:
// { "key" => value }

// could be a dictionary
// signature: (State, Data) => State
const todoReducer = (todos, { message, payload }) => {
  switch (message) {
    case "TOGGLE-COMPLETE":
      return updateByTodoText(todos, payload);
    case "ADD-TODO":
      return addTodo(todos, payload);
    default:
      return todos;
  }
};

export { todoReducer };
