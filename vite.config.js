import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./app/components/calendar-webcomponent.jsx",
      formats: ["es"],
      fileName: "calendar-webcomponent",
      name: "CalendarWebComponent",
    },
    outDir: "public", // Output to public folder so it's accessible on Vercel
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
