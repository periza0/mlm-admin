// src/config.js

export const API_URL = import.meta.env.DEV
  ? "http://localhost:8000"
  : "https://mlmbackend-mauve.vercel.app";

// The public site currently publishes the widget UI only. Keep API requests
// local until the production RAG backend is deployed.
export const CHAT_API_ENABLED = import.meta.env.DEV;
