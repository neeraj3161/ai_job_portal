import { v4 as uuid } from "uuid";

export function createJob(data) {
  return {
    id: uuid(),
    title: data.title,
    company: data.company,
    location: data.location,
    applyLink: data.applyLink
  };
}
