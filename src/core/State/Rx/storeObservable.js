import { BehaviorSubject } from "rxjs";
import { scan } from "rxjs/operators";
import { todoReducer } from "../../Todo/reducer";

let theTodos = [
  { text: "something cool!", complete: false },
  { text: "draw", complete: false },
  { text: "code", complete: false }
];

const subject$ = new BehaviorSubject([]);

const todoSource$ = subject$.pipe(scan(todoReducer, theTodos));

// const store =
export { subject$, todoSource$ };
