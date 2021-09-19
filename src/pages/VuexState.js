import { div } from "../components/htmlFns";
import { TodoListHeader } from "../components/TodoListHeader";
import { TodoList } from "../components/VuexTodoList";
import { AddTodoInput } from "../components/AddTodoInput";
import { mapMutations } from "vuex";

export const VuexStatePage = {
  methods: {
    ...mapMutations(["update"])
  },
  render() {
    return div({ class: "container" }, [
      TodoListHeader({
        text: "Base State Todo List",
        style: { color: "blue" }
      }),
      div({ class: "box" }, [
        AddTodoInput({ dispatch: this.update.bind(this) }),
        TodoList({
          todos: this.$store.state.todos // could map a getter
        })
      ])
    ]);
  }
};
