import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@worms", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://worms-essr.onrender.com/",
        secure: false,
      },
    },
  },
});
