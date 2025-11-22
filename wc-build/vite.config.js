import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./wc.js",
      name: "CalendarComponent",
      fileName: "calendar-component",
      formats: ["iife"]
    },
    outDir: "dist",
    rollupOptions: {
      external: [],
    }
  }
});
