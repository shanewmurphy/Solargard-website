const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|pagination|progress|select|divider|listbox|popover|button|ripple|spinner|scroll-shadow).js",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "7px",
      },
      colors: {
        primary: "#3872e5",
        secondary: "#212332",
        grey: "#F7F7F7",
        textGray: "#5C5C5C",
        textLightGray: "#888787",
        accent: "",
        "faq-border": "#26166f",
      },
      screens: {
        sm: "360px",
        largeScreens: "1920px",
      },
      borderRadius: {
        xl: "60px",
      },
      backgroundImage: {
        "gradient-img":
          "url('/images/company-profile/large-background-gradient-img-min.jpg')",
        "gradient-img-mobile":
          "url('/images/company-profile/background-gradient-img-mobile.jpg')",
        "gradient-img-mobile-large":
          "url('/images/company-profile/background-gradient-img-mobile-b.jpg')",
      },
      borderWidth: {
        2: "1px",
      },
    },
  },
  plugins: [nextui()],
};
