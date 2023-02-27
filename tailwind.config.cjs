/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-night":
          "linear-gradient(to right, #855988 , #483475, #141852, #070B34)",
  
        "gradient-sunset":
          "linear-gradient(to right, #EBB2D6 , #9F81CD, #766DC1)",
      }),
    },
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px",
    },
  },
  plugins: [],
}
