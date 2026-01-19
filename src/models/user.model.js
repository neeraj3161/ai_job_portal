import { v4 as uuid } from "uuid";

export function createUser(data) {
  return {
    id: uuid(),
    name: data.name,
    skills: data.skills,
    experience: data.experience,
    preferences: data.preferences
  };
}
