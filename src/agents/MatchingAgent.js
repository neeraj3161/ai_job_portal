import { BaseAgent } from "./BaseAgent.js";
import { scoreJob } from "../services/aiMatching.service.js";

export class MatchingAgent extends BaseAgent {
  constructor() {
    super("MatchingAgent");
  }

  async run(state) {
    const scoredJobs = [];

    for (const job of state.jobs) {
      const score = await scoreJob(state.user, job);
      scoredJobs.push({ ...job, score });
    }

    return { scoredJobs };
  }
}
