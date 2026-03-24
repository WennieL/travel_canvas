/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tc-primary': '#2E7D32',
                'tc-secondary': '#507D8B',
                'tc-tertiary': '#8BC34A',
                'tc-neutral': '#7A7270',
                'tc-bg': '#F4F7F2',
            }
        },
    },
    plugins: [],
}
