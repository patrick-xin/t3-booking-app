/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#12141A",
        "primary-gray": "#22232B",
        "light-gray": "#2B2F36",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
        "table-disabled":
          "linear-gradient(to bottom right, transparent calc(50% - 0.5px), rgba(255, 255, 255, 0.2) , transparent calc(50% + 0.5px))",
      },
      boxShadow: {
        primary: "rgb(80 63 205 / 50%) 0px 1px 20px",
      },
      zIndex: {
        100: 100,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
