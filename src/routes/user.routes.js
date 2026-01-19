import express from "express";
import { createUserProfile, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUserProfile);
router.get("/", getUsers);

export default router;
