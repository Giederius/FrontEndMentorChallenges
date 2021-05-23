module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme("colors.white.100"),
      }),
      colors: {
        backgroundMain: "hsl(218, 28%, 13%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        testimonialBg: "hsl(219, 30%, 18%)",
        introBg: "hsl(217, 28%, 15%)",
        footerBg: " hsl(216, 53%, 9%)",
        errorColor: " hsl(0, 100%, 63%)",
      },
      fontFamily: {
        raleway: ["Raleway, sans-serif"],
        openSans: ["Open Sans, sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
