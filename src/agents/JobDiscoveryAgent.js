import { BaseAgent } from "./BaseAgent.js";
import { discoverJobs } from "../services/jobDiscovery.service.js";

export class JobDiscoveryAgent extends BaseAgent {
  constructor() {
    super("JobDiscoveryAgent");
  }

  async run() {
    const jobs = await discoverJobs();
    return { jobs };
  }
}
