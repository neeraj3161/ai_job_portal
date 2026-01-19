import { saveJob } from "../models/job.model.js";

export async function discoverJobs() {
  const jobs = [
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

  const savedJobs = [];
  for (const job of jobs) {
    savedJobs.push(await saveJob(job));
  }

  return savedJobs;
}
