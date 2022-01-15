/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            currentColor: "currentColor",
            primary: "#DD9721",
            secondary: "#EEEEEE",
            body: "#0B0900",
            black: "#000000",
            white: "#ffffff",
            shadow: "#1f1f1f",
            error: "#ff0000",
        },
        fontFamily: {
            nunito: ["Nunito", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
    },
    plugins: [],
};
