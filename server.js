import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import Groq from "groq-sdk";

const app = express();
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get("/get-chat-completion", async (req, res) => {
  try {
    const chatCompletion = await getGroqChatCompletion();
    res.json({
      content:
        chatCompletion.choices[0]?.message?.content || "No content received",
    });
  } catch (error) {
    console.error("Error fetching chat completion:", error);
    res.status(500).json({ error: "Error fetching chat completion" });
  }
});

async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "List 20 best football players of all times",
      },
    ],
    model: "llama3-8b-8192",
  });
}

app.listen(PORT, () =>
  console.log(`Express http server listening on: ${PORT}`)
);
