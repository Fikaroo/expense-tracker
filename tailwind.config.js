/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        black: "#2C3533",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27B582",

          secondary: "#1F8C65",

          accent: "#fff",

          neutral: "#23202C",

          "base-100": "#F4F8F7",

          info: "#8ADAEA",

          success: "#31D3BE",

          warning: "#F4D848",

          error: "#EF6967",
        },
      },
    ],
    darkTheme: "light",
  },
};
