import { scoreJob } from "../services/aiMatching.service.js";
import { generateOutreach } from "../services/outreach.service.js";

export async function analyzeJob(req, res) {
  const { user, job } = req.body;

  const score = await scoreJob(user, job);

  let outreach = null;
  if (score >= 70) {
    outreach = await generateOutreach(user, job);
  }

  res.json({
    score,
    outreach,
    applyLink: job.applyLink
  });
}
