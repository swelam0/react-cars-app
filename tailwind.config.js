module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    Screen: {
      sm: "640px",
      // @media (min-width: 640px) { ... }

      md: "992px",
      // @media (min-width: 992px) { ... }

      lg: "1024px",
      // @media (min-width: 1024px) { ... }

      xl: "1280px",
      // @media (min-width: 1280px) { ... }

      "2xl": "1563px",
      // @media (min-width: 1563px) { ... }
    },
  },
  plugins: [],
}
