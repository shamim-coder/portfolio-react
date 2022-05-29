module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "16rem",
            },
        },
        extend: {
            colors: {
                "theme-green": "#01A78F",
                "title-black": "#243150 ",
            },
        },
    },
    plugins: [],
};
