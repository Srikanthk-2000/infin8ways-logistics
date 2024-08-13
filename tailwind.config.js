/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "var(--primary-main)",
        },
        secondary: {
          main: "var(--secondary-main)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '.font-none': {
              'font-family': 'inherit',
              'font-weight': 'normal',
              'font-size': 'inherit',
              'line-height': 'inherit',
              'letter-spacing': 'normal',
              'text-transform': 'none',
              'color': 'inherit',
            },
          },
        },
      },
    },
    screens: {
      xs: "460px",
      ...defaultTheme.screens,
      "3xl": "1800px",
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
