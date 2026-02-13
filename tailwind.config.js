/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            colors: {
                "primary": "#ff6933",
                "primary-dark": "#e0501b",
                "background-light": "#F4F1EE",
                "background-dark": "#23140f",
                "neutral-dark": "#1a1a1a",
            },
            boxShadow: {
                'hard': '4px 4px 0px 0px #000000',
                'hard-sm': '2px 2px 0px 0px #000000',
            }
        },
    },
    plugins: [],
}
