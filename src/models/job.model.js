import { v4 as uuid } from "uuid";
import { query } from "../db/index.js";

export async function saveJob(job) {
  const id = uuid();

  await query(
    `INSERT INTO jobs (id, title, company, location, apply_link)
     VALUES ($1, $2, $3, $4, $5)`,
    [id, job.title, job.company, job.location, job.applyLink]
  );

  return { id, ...job };
}
