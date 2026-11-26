/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#C0943B',
                secondary: '#0F1E3A',
                midnight: '#0A1424',
                code: '#1A1A1A',
                accent: '#C0943B',
            },
            fontFamily: {
                mono: ['"Fira Code"', 'monospace'],
                sans: ['Inter', 'sans-serif']
            }
        }
    }
};
