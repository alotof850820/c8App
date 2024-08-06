/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,scss}"],
  theme: {
    extend: {
      colors: {
        "custom-gray-50": "rgba(0, 0, 0, 0.05)", // 淺淺
        "custom-gray-100": "#c3cfdb", // 淺
        "custom-gray-150": "#898888", // 淺
        "custom-gray-200": "#666666", // 深
        "custom-gray-300": "#333", // 超深
        "custom-yellow-100": "#A08977", // 超深

      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Courier", "monospace"],
      },
      screens: {
        xs: "684px",
      },
    },
  },
  plugins: [],
};
