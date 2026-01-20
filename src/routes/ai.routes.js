import express from "express";
import { runAgenticFlow } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/run", runAgenticFlow);

export default router;
