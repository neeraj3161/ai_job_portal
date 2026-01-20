import { BaseAgent } from "./BaseAgent.js";
import { saveAnalysis } from "../models/jobAnalysis.model.js";

export class PersistenceAgent extends BaseAgent {
  constructor() {
    super("PersistenceAgent");
  }

  async run(state) {
    for (const item of state.outreach) {
      await saveAnalysis({
        userId: state.user.id,
        jobId: item.jobId,
        score: state.scoredJobs.find(j => j.id === item.jobId).score,
        linkedin: item.linkedin,
        email: item.email
      });
    }

    return { persisted: true };
  }
}
