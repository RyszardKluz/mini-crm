
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      heading: ["Poppins", "system-ui", "sans-serif"],
    },

    extend: {
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
      colors: {
        primary: {
          50: "#f1f5fe",
          100: "#e2e9fb",
          200: "#c7d4f7",
          300: "#a9bdf2",
          400: "#7f99e8",
          500: "#5c7adf",
          600: "#4a63c2",
          700: "#3b4ea3",
          800: "#2b3a82",
          900: "#1c275c",
        },

        secondary: {
          50: "#f3f8f8",
          100: "#e4f1f2",
          200: "#c8e2e4",
          300: "#a7ced0",
          400: "#7db2b5",
          500: "#61979a",
          600: "#507e81",
          700: "#406669",
          800: "#304d50",
          900: "#1f3234",
        },

        accent: {
          100: "#f4edfc",
          200: "#e5d8f8",
          300: "#d2bdf2",
          400: "#b896e9",
          500: "#9e74df",
          600: "#825ac1",
          700: "#6945a0",
          800: "#4f317c",
          900: "#3a245c",
        },

        background: "#f5f6f7",
        card: "#ffffff",
        border: "#d9dce1",
        muted: "#70727a",
      },


      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.03)",
        card: "0 2px 10px rgba(0,0,0,0.05)",
        strong: "0 8px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [

    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries')
  ],
};