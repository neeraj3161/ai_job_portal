import { askAI } from "../ai/openai.js";

export async function generateOutreach(user, job) {
  const linkedin = await askAI(
    "You write short LinkedIn outreach messages.",
    `
Candidate: ${user.name}
Role: ${job.title}
Company: ${job.company}
    `
  );

  const email = await askAI(
    "You write professional job application emails.",
    `
Candidate: ${user.name}
Skills: ${user.skills.join(", ")}
Role: ${job.title}
Company: ${job.company}
    `
  );

  return { linkedin, email };
}
