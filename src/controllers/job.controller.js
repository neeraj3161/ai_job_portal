import { discoverJobs } from "../services/jobDiscovery.service.js";

let jobs = [];

export function fetchJobs(req, res) {
  const { preferences } = req.body;
  jobs = discoverJobs(preferences);
  res.json(jobs);
}

export function getJobs(req, res) {
  res.json(jobs);
}
