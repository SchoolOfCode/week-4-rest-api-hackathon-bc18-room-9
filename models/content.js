import { data } from "../libs/data.js";

let movies = data
  .filter((item) => item.type === "Movie")
  .map((movie) => ({ ...movie }));

let tvshows = data
  .filter((item) => item.type === "TV Show")
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
  selected_movie["review"] = review_string;
  return selected_movie;
}

export async function deleteReview(movieId) {
  console.log(movieId);
  const selected_movie = movies.find(({ show_id }) => show_id === movieId);
  console.log("Found movie");
  delete selected_movie["review"];
  return selected_movie;
}

export async function createNewMovie(movie_details) {
  const current_movie_total = movies.length;
  const current_tv_total = tvshows.length;
  const new_movie = {
    show_id: "s" + (current_movie_total + current_tv_total + 1),
    ...movie_details,
  };
  movies = [...movies, new_movie];
  return new_movie;
}

export async function removeMovieEntry(movieId) {
  const removed_movie = movies.find(({ show_id }) => show_id === movieId);
  const id_number = Number(movieId.slice(1));
  movies = [...movies.slice(0, id_number - 1), ...movies.slice(id_number)];
  return removed_movie;
}