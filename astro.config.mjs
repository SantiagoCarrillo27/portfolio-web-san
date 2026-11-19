// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// Resuelve una ruta relativa a la raíz del proyecto
const fromRoot = (/** @type {string} */ path) => fileURLToPath(new URL(path, import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Mismos alias que tsconfig.json "paths" (sin baseUrl, que está en desuso).
    // Astro 5.4 solo lee los alias del tsconfig si existe baseUrl, por eso se repiten aquí.
    resolve: {
      alias: {
        '@components': fromRoot('./src/components'),
        '@layouts': fromRoot('./src/layouts'),
        '@icons': fromRoot('./src/components/icons'),
        '@util': fromRoot('./src/util'),
        '@i18n': fromRoot('./src/i18n'),
      },
    },
  },

  integrations: [react()],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
