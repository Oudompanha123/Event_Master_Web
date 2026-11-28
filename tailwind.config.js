/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  // Scan all of src/: components live in every FSD layer (app, views, widgets, features,
  // entities, shared). Listing folders one by one silently drops the classes of any folder
  // that is missing from the list.
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        'button-width': '127px'
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "728px",
          lg: "984px",
          xl: "1380px",
        },
      },
      boxShadow: {
        'soft': '0 0 1px rgba(0, 0, 0, .4)',
      },
      dropShadow: {
        'soft': '0 0 1px rgba(0, 0, 0, .18)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pattern: "url('/images/pattern.jpg')",
        noice: "url('/images/noice-bg.jpg')",
      },
      borderWidth: {
        "1px": "1px",
      },
      borderRadius: {
        radiusUi: "15px",
        radius64: "64px",
      },
      colors: {
        "purple": "#7A44FF",
        "purple-text-head": "#4C179B",
        "primary-purple": "#ECE8FF",
        "purple-text": "#7939EF",
        "primary-text": "#344054",
        blueUi: "#551FFF",
        greenUi: "#038446",
        redUi: "#D72222",
        greyUi: "#808080",
        softwhiteUi: "#f7f7f7",
        backgroundUi: "#F7F9FB",
        softGreenUi: "#E3F4DB",
        softRedUi: "#FFECEB",
        tableBg: "#F0F1F3",
        "member-border": "#0000000d",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
