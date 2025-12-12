/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF1DE",
        sand: "#F7D59B",
        sunset: "#FF8A3D",
        coral: "#EF6C57",
        ink: "#1F2937",
        ruby: "#C0152A"
      },
      fontFamily: { display: ["'Shrikhand'", "cursive"], body: ["Inter","system-ui","sans-serif"] },
      boxShadow: { dpd: "0 10px 25px rgba(0,0,0,0.12)" }
    },
  },
  plugins: [],
};
