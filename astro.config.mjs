// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    base: '/project-documentation/',
    site: 'https://trulydigital.github.io/project-documentation',
    integrations: [
        tailwind()
    ]
});
