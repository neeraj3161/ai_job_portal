import express from "express";
import { analyzeJob } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/analyze", analyzeJob);

export default router;
