const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                chakra: ["var(--font-chakra)"],
                fira: ["var(--font-fira)"],
                inter: ["var(--font-inter)"],
            },
            animation: {
                text: "text 8s linear infinite",
                slideUp: "slideUp 1s",
                slideDown: "slideDown 1s",
                slideLeft: "slideLeft 1s",
                slideRight: "slideRight 1s",
                slideUpOut: "slideUpOut 1s forwards",
            },
            keyframes: {
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                slideUp: {
                    "0%": { opacity: 0, transform: "translateY(100%)" },
                    "100%": { opacity: 1, transform: "translateY(0%)" },
                },
                slideDown: {
                    "0%": { opacity: 0, transform: "translateY(-100%)" },
                    "100%": { opacity: 1, transform: "translateY(0%)" },
                },
                slideLeft: {
                    "0%": { opacity: 0, transform: "translateX(100%)" },
                    "100%": { opacity: 1, transform: "translateX(0%)" },
                },
                slideRight: {
                    "0%": { opacity: 0, transform: "translateX(-100%)" },
                    "100%": { opacity: 1, transform: "translateX(0%)" },
                },
                slideUpOut: {
                    "0%": {
                        opacity: 1,
                        transform: "translateY(0%)",
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translateY(-200%)",
                    },
                },
            },
        },
    },
    plugins: [],
};
