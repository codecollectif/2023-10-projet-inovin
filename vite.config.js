import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://codecollectif.github.io/2023-10-projet-inovin",
  plugins: [react()],
  server: {
    host: true,
  },
});
