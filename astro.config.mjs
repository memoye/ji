// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jessicaiwuala.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
