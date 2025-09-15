/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tactic: ["Tactic Sans", "sans-serif"],
        tacticthin: ["Tactic Sans thin", "sans-serif"],
      },
      colors: {
        darkblue: "#171c4b",
        deepblue: "#273574",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #171c4b, #273574)",
      },
      keyframes: {
        spinFade: {
          "0%": { transform: "rotate(0deg)", opacity: "0" },
          "25%": { opacity: "1" },
          "50%": { transform: "rotate(180deg)", opacity: "0" },
          "75%": { opacity: "1" },
          "100%": { transform: "rotate(360deg)", opacity: "0" },
        },
      },
      animation: {
        spinInfinite: "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
