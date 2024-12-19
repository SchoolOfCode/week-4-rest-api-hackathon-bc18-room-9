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

export async function createNewMovie(movie_details) {
  console.log("test")
  const initial_movie_count = data.length;
  console.log(data.length)
  console.log(movies.length)
  const new_movie = {
    "show_id": "s"+(initial_movie_count+1),
    ...movie_details,  
  }
  movies = [...movies, new_movie];
  return new_movie;
}

export async function addReviewToMovie(movieId, review_string) {
  const selected_movie = movies.find(({ show_id }) => show_id === movieId);
  selected_movie["Review"] = review_string;
  return selected_movie;
}
