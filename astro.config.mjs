import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
      routing: {
          prefixDefaultLocale: true,
      }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
})