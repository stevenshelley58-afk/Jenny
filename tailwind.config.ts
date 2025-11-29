import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["var(--font-instrument-serif)", "Georgia", "serif"],
                body: ["var(--font-satoshi)", "-apple-system", "sans-serif"],
            },
            colors: {
                ignite: {
                    50: '#E8EEF4',
                    100: '#C5D4E3',
                    200: '#9FB7CF',
                    300: '#7899BA',
                    400: '#5A82AA',
                    500: '#4A6E8C',
                    600: '#3D6B9A',
                    700: '#2F5070',
                    800: '#254160',
                    900: '#1D344D',
                },
                coral: {
                    DEFAULT: '#D4726A',
                    light: '#E89B94',
                    dark: '#B85A52',
                },
                teal: {
                    DEFAULT: '#5B9EA6',
                },
                cream: '#FAF8F5',
                text: {
                    DEFAULT: '#1A1A1A',
                    muted: '#5A5A5A',
                },
            },
        },
    },
    plugins: [],
};
export default config;
