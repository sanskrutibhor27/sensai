// lib/inngest/client.js
import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "sensai-app", // Unique ID for your Sensai app
  name: "Sensai App",
  devServerUrl: process.env.INNGEST_DEV_URL || "http://localhost:8288",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
