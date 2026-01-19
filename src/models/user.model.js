import { v4 as uuid } from "uuid";
import { query } from "../db/index.js";

export async function createUser(data) {
  const id = uuid();

  await query(
    `INSERT INTO users (id, name, skills, experience)
     VALUES ($1, $2, $3, $4)`,
    [id, data.name, data.skills, data.experience]
  );

  return { id, ...data };
}

export async function getAllUsers() {
  const res = await query("SELECT * FROM users");
  return res.rows;
}
