import { createJob } from "../models/job.model.js";

/*
  Phase 1:
  - Jobs come from public sources / user input
  - Google Jobs integration later
*/
export function discoverJobs(preferences) {
  const rawJobs = [
    {
      title: "Backend Engineer",
      company: "Berlin Tech",
      location: "Germany",
      applyLink: "https://jobs.lever.co"
    },
    {
      title: "Node.js Engineer",
      company: "Amsterdam Labs",
      location: "Netherlands",
      applyLink: "https://boards.greenhouse.io"
    }
  ];

  return rawJobs.map(createJob);
}

