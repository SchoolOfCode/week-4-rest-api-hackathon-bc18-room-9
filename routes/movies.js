import express from "express";
import { getContent, getMovieById } from "../models/content.js";

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

export default router;
