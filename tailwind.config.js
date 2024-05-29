/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: '640px',
          md: '728px',
          lg: '984px',
          xl: '1380px'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pattern": "url('/images/pattern.jpg')"
      },
      borderWidth: {
        '1px': '1px',
      },
      borderRadius: {
        'radiusUi': '15px',
        'radius64': '64px'
      },
      colors: {
        "purple-text": "#7939EF",
        "primary-text": "#344054",
        "blueUi": "#551FFF",
        "greenUi": "#038446",
        "redUi": "#E74C3C",
        "greyUi": "#888888",
        "softwhiteUi": "#f7f7f7",
        "backgroundUi" : "#F7F9FB",
        "softGreenUi": "#E3F4DB",
        "softRedUi": "#FFECEB"
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require('daisyui'),
  ],
};
