import express from "express";
import { fetchJobs, getJobs } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/discover", fetchJobs);
router.get("/", getJobs);

export default router;
