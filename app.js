import express from "express";

import moviesRouter from "./routes/movies.js";

const app = express();

app.use(express.json());

app.use("/movies", moviesRouter);

export default app;
