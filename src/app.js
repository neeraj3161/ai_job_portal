import express from "express";
import userRoutes from "./routes/user.routes.js";
import jobRoutes from "./routes/job.routes.js";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/ai", aiRoutes);

export default app;
