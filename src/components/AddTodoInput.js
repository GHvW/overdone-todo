import { h, reactive } from "vue";
import { button, div, label, input, p } from "./htmlFns";
import { box, columns, column } from "./stylizedFns";

// vue 3 composition API component
// https://v3.vuejs.org/api/composition-api.html#setup
const addTodoInput = {
  props: {
    dispatch: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const newTodo = reactive({
      text: "",
      dueDate: null
    });

    return () =>
      box([
        p({}, "What would you like to do?"),
        div({ class: "field has-addons" }, [
          div({ class: "control" }, [
            input({
              type: "text",
              class: "input",
              placeholder: "To do text",
              onInput: (event) => {
                newTodo.text = event.target.value;
              }
            })
          ]),
          div({ class: "control" }, [
            // label({ class: "label" }, "Due Date"),
            input({
              type: "date",
              class: "input",
              onInput: (event) => {
                newTodo.dueDate = event.target.value;
              }
            })
          ]),
          div(
            { class: "control" },
            button(
              {
                class: "button is-primary is-outlined",
                onClick: (event) => {
                  props.dispatch({
                    message: "ADD-TODO",
                    payload: { text: newTodo.text, complete: false }
                  });
                }
              },
              "Add"
            )
          )
        ])
      ]);
  }
};

const AddTodoInput = h.bind(null, addTodoInput);

export { AddTodoInput };
