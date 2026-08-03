// builtin

// external
import type { Config } from "tailwindcss";

// internal

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-1": "var(--primary-1)",
                "primary-2": "var(--primary-2)",

                "secondary-1": "var(--secondary-1)",

                "accent-1": "var(--accent-1)",

                "neutral-1": "var(--neutral-1)",
                "neutral-2": "var(--neutral-2)",
                "neutral-3": "var(--neutral-3)",
                "neutral-4": "var(--neutral-4)",

            }
        },
    },
    plugins: [],
} satisfies Config;
