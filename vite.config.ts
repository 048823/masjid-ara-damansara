import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// Deployed as a GitHub Pages *project* site at
// https://048823.github.io/masjid-ara-damansara/, so every asset URL must carry
// the repo subpath. Set unconditionally so `dev` and `preview` serve on the same
// path as production; components build asset URLs from `import.meta.env.BASE_URL`.
export default defineConfig({
  base: "/masjid-ara-damansara/",
  plugins: [react(), tailwindcss()],
});
