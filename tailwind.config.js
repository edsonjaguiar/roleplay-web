/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)'],
            },
            colors: {
                gray: {
                    100: '#f8f8f8',
                    200: '#d9d9d9',
                    500: '#b1b1b1',
                    600: '#807b77',
                    700: '#333',
                },
                zinc: {
                    200: '#e7e4e7',
                },
                slate: {
                    800: '#2f2c4a',
                },
                pink: {
                    500: '#df349e',
                    700: '#ee0979',
                },
                purple: {
                    400: '#ab7ff7',
                    700: '#8a2387',
                },
                orange: {
                    600: '#ff6a00',
                },
            },
            screens: {
                lg: '1020px',
            },
        },
    },
    plugins: [],
};
