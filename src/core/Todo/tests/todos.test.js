import { addTodo } from "../add";
import { updateTodo } from "../update";
import { matchText } from "../predicates";

describe("given a list of todos with text and due dates", () => {
  const todos = [
    {
      text: "something fun",
      dueDate: new Date("01-01-2021"),
      complete: false
    },
    {
      text: "be awesome",
      dueDate: new Date("01-02-2021"),
      complete: false
    }
  ];

  test("when a new todo is added", () => {
    const newTodo = {
      text: "write code",
      dueDate: new Date("01-03-2021"),
      complete: false
    };

    const result = addTodo(todos, newTodo);

    expect(result.length).toBe(3);
  });

  test("when the todo's complete is updated using the text as a key", () => {
    const updatedTodo = {
      text: "something fun",
      dueDate: new Date("01-01-2021"),
      complete: false
    };

    const result = updateTodo(matchText)(todos, updatedTodo);

    expect(result.length).toBe(2);
    expect(result).not.toBe(todos);
    expect(
      result.filter((it) => it.text === updatedTodo.text)[0]
    ).toMatchObject(updatedTodo);
  });
});
