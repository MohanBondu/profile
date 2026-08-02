import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://username.github.io';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  },
  vite: {
    ssr: { noExternal: ['decap-cms'] },
    plugins: [yaml()]
  }
});