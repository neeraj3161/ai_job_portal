import { createUser } from "../models/user.model.js";

const users = [];

export function createUserProfile(req, res) {
  const user = createUser(req.body);
  users.push(user);
  res.status(201).json(user);
}

export function getUsers(req, res) {
  res.json(users);
}
