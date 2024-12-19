import express from "express";
import { getContent } from "../models/content.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const all_content = await getContent();
  res.json(all_content);
});

export default router;
