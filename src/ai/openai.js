import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function askAI(system, user) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.3,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user }
    ]
  });

  return res.choices[0].message.content.trim();
}
