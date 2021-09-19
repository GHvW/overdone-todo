// signature: (State, Data) => State
const addTodo = (todos, todo) => {
  return [...todos, todo];
};

export { addTodo };
