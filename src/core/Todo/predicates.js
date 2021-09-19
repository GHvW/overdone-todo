const matchText = (it, other) => it.text === other.text;

// should probably switch to UTC and then convert
const isDueToday = (today, todo) => {
  return (
    today.getFullYear() === todo.dueDate.getFullYear() &&
    today.getMonth() === todo.dueDate.getMonth() &&
    today.getDate() === todo.dueDate.getDate()
  );
};

export { matchText, isDueToday };
