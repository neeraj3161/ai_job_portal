import { BaseAgent } from "./BaseAgent.js";
import { generateOutreach } from "../services/outreach.service.js";

export class OutreachAgent extends BaseAgent {
  constructor() {
    super("OutreachAgent");
  }

  async run(state) {
    const outreach = [];

    for (const job of state.scoredJobs.filter(j => j.score >= 70)) {
      const messages = await generateOutreach(state.user, job);
      outreach.push({
        jobId: job.id,
        ...messages
      });
    }

    return { outreach };
  }
}
