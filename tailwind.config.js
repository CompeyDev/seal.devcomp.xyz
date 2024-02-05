/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
        mode: "all",
        content: [
            "./src/**/*.rs",
            "./src/**/*.html",
            "./public/index.html",
            "./styles/*.css",
        ],
    },
    theme: {},
    variants: {},
    plugins: [],
};
