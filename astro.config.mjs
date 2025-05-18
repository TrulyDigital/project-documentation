// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    base: 'https://github.com/TrulyDigital/project-documentation',
    integrations: [
        tailwind()
    ]
});
