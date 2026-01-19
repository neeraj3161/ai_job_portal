import { createUser, getAllUsers } from "../models/user.model.js";

export async function createUserProfile(req, res) {
  const user = await createUser(req.body);
  res.status(201).json(user);
}

export async function getUsers(req, res) {
  const users = await getAllUsers();
  res.json(users);
}
