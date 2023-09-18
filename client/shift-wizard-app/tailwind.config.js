/** @type {import('tailwindcss').Config} */
export const content = ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      title: ['League Spartan'],
      body: ['Roboto'],
      links: ['DM Sans'],
      fallbacks: {
        title: ['Roboto', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Arial', 'sans-serif'],
        links: ['Roboto', 'Arial', 'sans-serif']
      }
    },
    colors: {
      background1: "#382960",
      background2: "#EFECFF",
      primaryT:  "#76EDE2",
      secondaryT: "#DE7A3E",
      tertiaryT: "#8956C1",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      title: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      button: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    screens: {
      sm: '550px',
      md: '750px',
      lg: '1024px'
    },
    backgroundImage: {
      "wizard-hat": "url('/src/assets/wizard-hat.png')",
      "magic": "url('/src/assets/magic.png')",
    }
  },
};
export const plugins = [];

