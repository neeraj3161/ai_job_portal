import { v4 as uuid } from "uuid";
import { query } from "../db/index.js";

export async function saveAnalysis({ userId, jobId, score, linkedin, email }) {
  await query(
    `INSERT INTO job_analysis
     (id, user_id, job_id, score, linkedin_message, email_message)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [uuid(), userId, jobId, score, linkedin, email]
  );
}
