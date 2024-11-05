/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3872e5",
        secondary: "#212332",
        gray: "#efefef",
        textGray: "#5C5C5C",
        textLightGray: "#888787",
        accent: "",
      },
      screens: {
        sm: "360px",
      },
      borderRadius: {
        xl: "60px",
      },
      backgroundImage: {
        "gradient-img":
          "url('/images/company-profile/background-gradient-img-min.png')",
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
  plugins: [],
};
