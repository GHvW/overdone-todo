import { matchText, isDueToday } from "../predicates";

describe("given a todo", () => {
  const todo = {
    text: "something cool",
    dueDate: new Date("01-01-2021"),
    complete: false
  };

  test("when another todo is compared by text", () => {
    const otherTodo = { text: "something cool" };
    const result = matchText(todo, otherTodo);

    expect(result).toBeTruthy();
  });

  test("when today is the same as the due date", () => {
    const today = new Date("01-01-2021");
    const result = isDueToday(today, todo);
    expect(result).toBeTruthy();
  });
});
