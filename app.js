import express from "express";

// Import the astronautsRouter from the specified path
import moviesRouter from "./routes/movies.js";
// import tvshowsRouter from "./routes/tvshows.js";

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests and make it available under req.body
app.use(express.json());

// Use the astronautsRouter for any requests to the /astronauts path
app.use("/movies", moviesRouter);
// app.use("/tvshows", tvshowsRouter);

// Export the app instance so it can be used in other files
export default app;
