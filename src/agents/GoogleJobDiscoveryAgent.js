import { BaseAgent } from "./BaseAgent.js";
import { discoverJobsFromGoogle } from "../services/googleJobDiscovery.service.js";
import { saveJob } from "../models/job.model.js";

export class GoogleJobDiscoveryAgent extends BaseAgent {
  constructor() {
    super("GoogleJobDiscoveryAgent");
  }

  async run(state) {
    console.log("🔍 Discovering jobs via Google Jobs indexing...");

    const { role, location } = state.user.preferences;

    const jobs = await discoverJobsFromGoogle({ role, location });

    const savedJobs = [];
    for (const job of jobs) {
      savedJobs.push(await saveJob(job));
    }

    return {
      jobs: savedJobs
    };
  }
}
