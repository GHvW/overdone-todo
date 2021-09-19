import { compose } from "../foundation/compose";

// constants --------------------------
const msPerDay = 86400000;
// -------------------------------------

// object syntax for composeability
const timeElapsed = ({ now, dueDate }) => {
  return dueDate - now;
};

const msToDays = (millis) => Math.trunc(millis / msPerDay);

const daysElapsed = compose(msToDays, timeElapsed);

export { daysElapsed };
