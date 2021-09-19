import { matchText } from "./predicates";

// signature: (State, Data) => State
const toggleComplete = (todo, value) => {
  return { ...todo, complete: value };
};

// signature: (Predicate) => (State, Data) => State
const updateTodo = (predicate) => (todos, todo) => {
  return todos.map((it) => {
    return predicate(it, todo) ? todo : it;
  });
};

// signature: (State, Data) => State
// specifically: updateByTodoText = (todos, todo) => { }
const updateByTodoText = updateTodo(matchText);

export { toggleComplete, updateTodo, updateByTodoText };
