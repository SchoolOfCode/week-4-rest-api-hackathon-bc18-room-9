import { data } from "../libs/data.js";

let movies = data
  .filter((item) => item.type === "Movie")
  .map((movie) => ({ ...movie }));

export async function getContent() {
  return [...movies];
}

export async function getMovieById(movieId) {
  return movies.find(({ show_id }) => show_id === movieId);
}

export async function getMovieByParam(field, value) {
  return movies.find((movie) => movie[field] === value);
}
