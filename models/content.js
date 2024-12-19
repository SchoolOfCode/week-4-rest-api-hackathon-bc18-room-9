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
  if (field === "release_year") {
    return movies.find((movie) => movie[field] === value);
  } else {
    return movies.find((movie) => movie[field].includes(value, 0));
  }
}

export async function addReviewToMovie(movieId, review_string) {
  console.log(movieId);
  const selected_movie = movies.find(({ show_id }) => show_id === movieId);
  console.log("Found movie");
  selected_movie["Review"] = review_string;
  return selected_movie;
}
