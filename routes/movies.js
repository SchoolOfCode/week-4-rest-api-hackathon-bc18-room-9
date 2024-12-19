import express from "express";
import {
  getContent,
  getMovieById,
  getMovieByParam,
  addReviewToMovie,
  deleteReview,
  createNewMovie,
} from "../models/content.js";

const router = express.Router();

// GET
// Gets back all the movies
router.get("/", async (req, res) => {
  const all_content = await getContent();
  res.json(all_content);
});

// GET
// Gets back specific movie by ID
router.get("/:id", async (req, res) => {
  const movie = await getMovieById(req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
});

// GET
// Gets back specific movie by any param
router.get("/:field/:value", async (req, res) => {
  let { field, value } = req.params;
  console.log(field);
  if (field === "release_year") {
    value = Number(value);
  }
  const movie = await getMovieByParam(field, value);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
});

//PATCH
//Add a "Review" field to selected movie objectFit:
router.patch("/:id", async (req, res) => {
  try {
    let { review } = req.body;
    const data = await addReviewToMovie(req.params.id, review);
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: "Movie not found" });
  }
});

//DELETE
//Delete a "Review" field to selected movie objectFit:
router.delete("/:id", async (req, res) => {
  try {
    const data = await deleteReview(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: "Movie not found" });
  }
});

//POST
//Create a new movie object in database
router.post("/", async (req, res) => {
  try {
    const data = await createNewMovie(req.body);
    res.json(data);
  } catch (error) {
    res.status(501).json({ message: "Movie profile not updated" });
  }
});

export default router;
