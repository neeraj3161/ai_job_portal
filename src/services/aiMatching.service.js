import { askAI } from "../ai/openai.js";

export async function scoreJob(user, job) {
  const score = await askAI(
    "You are a technical recruiter.",
    `
Candidate skills: ${user.skills.join(", ")}
Experience: ${user.experience} years
Job title: ${job.title}

Return ONLY a number between 0 and 100.
    `
  );

  return Number(score);
}
