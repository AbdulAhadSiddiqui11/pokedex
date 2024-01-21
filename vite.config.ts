// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://pokeapi.co",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the '/api' prefix when forwarding the request
      },
    },
  },
});
