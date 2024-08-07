/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      fontFamily: {
        "nanum-square-neo-heavy": ["NanumSquareNeoHeavy", "sans-serif"],
        "nanum-square-neo-ExtraBold": ["NanumSquareNeoExtraBold", "sans-serif"],
        "nanum-square-neo-Bold": ["NanumSquareNeoBold", "sans-serif"],
        "nanum-square-neo-Regular": ["NanumSquareNeoRegular", "sans-serif"],
        "nanum-square-neo-Light": ["NanumSquareNeoLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
