import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import { webcore } from "webcoreui/integration";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  trailingSlash: "never",

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    }
  },

  vite: {
    plugins: [tailwindcss(), webcore()]
  },

  integrations: [icon()],
  adapter: cloudflare()
})