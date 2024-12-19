import { data } from "../libs/data.js";

let movies = data
  .filter((item) => item.type === "Movie")
  .map((movie) => ({ ...movie }));

console.log(movies[1].show_id);

export async function getContent() {
  return [...movies];
}

export async function getMovieById(movieId) {
  return movies.find(({ show_id }) => show_id === movieId);
}
