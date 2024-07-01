/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      backdropFilter: {
        "my-blur": "blur(5px)", // Customize the blur amount
      },
    },
  },
  plugins: [],
};
