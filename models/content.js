import { data } from "../libs/data.js";

let movies = data.map((movies) => ({ ...movies }));

// GET
// Gets back all the movies

export function getContent() {
  return [...movies];
}
