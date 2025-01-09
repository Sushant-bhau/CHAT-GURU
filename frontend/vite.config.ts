import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Change this to your desired port number
    cors: {
      origin: "http://localhost:5174", // Allow requests from this origin
      credentials: true,
    },
  },
});
