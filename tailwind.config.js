/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}"],
    theme: {
        extend: {
            gridTemplateAreas: {
                'layout': [
                    'header header header',
                    'nav main main',
                    'footer footer footer'
                ]
            }
        },
    },
    plugins: [
       
    ],
};