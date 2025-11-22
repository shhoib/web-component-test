import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
  },
  build: {
    lib: {
      entry: "./wc.js",
      name: "CalendarComponent",
      fileName: (format) => `calendar-component.js`,
      formats: ["iife"]
    },
    outDir: "dist",
    rollupOptions: {
      external: [],
    }
  }
});
