const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "0rem",
      },
    },
    extend: {
      colors: {
        cyan: {
          400: "hsl(189, 41%, 97%)",
          500: "hsl(185, 41%, 84%)",
          600: "hsl(184, 14%, 56%)",
          700: "hsl(186, 14%, 43%)",
          800: "hsl(172, 67%, 45%)",
          900: "hsl(183, 100%, 15%)",
        },
      },
      // create custom fonts here
      fontFamily: {
        mono: ["'Space Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },
      });
    }),
  ],
};
