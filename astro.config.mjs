// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    build: {
        assets: 'builds' // Cambia 'mi_nueva_carpeta' por el nombre que prefieras
    },
    site: 'https://trulydigital.github.io',
    base: '/project-documentation',
    integrations: [
        tailwind()
    ],
    vite: {
    resolve: {
        alias: {
            '@scripts': path.resolve('./src/scripts'),
            '@components': path.resolve('./src/components'),
            '@layouts': path.resolve('./src/layouts'),
            '@styles': path.resolve('./src/styles'),
            '@assets': path.resolve('./src/assets'),
        }
    }
  }
});
