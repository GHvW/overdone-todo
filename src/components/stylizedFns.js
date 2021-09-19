import { div } from "./htmlFns";

const column = div.bind(null, { class: "column" });

const ancestorTile = div.bind(null, { class: "tile is-ancestor" });

const childBoxTile = div.bind(null, { class: "tile is-child box" });

const columns = div.bind(null, { class: "columns" });

const cardAndContent = (children) =>
  div({ class: "card" }, [div({ class: "card-content" }, children)]);

const box = div.bind(null, { class: "box" });

export { box, cardAndContent, columns, column, ancestorTile, childBoxTile };
