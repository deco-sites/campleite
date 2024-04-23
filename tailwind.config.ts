import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        zooming: "zoomin 1s ease-out infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        zoomin: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
    },
  },
};
