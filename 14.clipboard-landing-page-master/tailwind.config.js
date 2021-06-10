module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        mobileBg:
          "linear-gradient(to top, rgba(255,255,255), transparent), url('/images/bg-header-mobile.png')",
      },

      fontFamily: {
        bai: ["Bai Jamjuree, sans-serif"],
      },
      colors: {
        headerText: "hsl(210, 10%, 33%)",
        bodyText: "hsl(201, 11%, 66%)",
        primaryBtn: "hsl(171, 66%, 44%)",
        secondaryBtn: "hsl(233, 100%, 69%)",
        footerColor: "rgb(243,244,246)",
      },
      boxShadow: {
        xl: "0 20px 25px -17px hsl(171, 66%, 44%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
