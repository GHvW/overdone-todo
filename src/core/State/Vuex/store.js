import { createStore } from "vuex";
import { todoReducer } from "../../Todo/reducer";

let theTodos = [
  { text: "something cool!", complete: false },
  { text: "draw", complete: false },
  { text: "code", complete: false }
];

const store = createStore({
  state() {
    return {
      todos: theTodos
    };
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  },
  mutations: {
    update(state, message) {
      // console.log("the message: ", message);
      // console.log("the state: ", state);
      this.state.todos = todoReducer(state.todos, message);
    }
  }
});

export { store };
