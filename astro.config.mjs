// @ts-check
import { defineConfig } from "astro/config";
import { readFile } from "node:fs/promises";
import tailwindcss from "@tailwindcss/vite";

const pkg = JSON.parse(await readFile("./package.json", "utf-8"));

const NAME = pkg.name;
const VERSION = pkg.version;

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "http://localhost:4321",
  base: `/${NAME}/${VERSION}`,
  server: {
    host: true,
  },
  vite: {
    define: {
      "import.meta.env.VERSION": JSON.stringify(VERSION),
    },
    plugins: [tailwindcss()],
  },
});
