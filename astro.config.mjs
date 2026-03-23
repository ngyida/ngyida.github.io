import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://ngyida.github.io",
  trailingSlash: "always",
  integrations: [mdx()],
});
