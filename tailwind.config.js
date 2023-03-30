/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["night",
      {
        mytheme: {

          "primary": "#d3439c",

          "secondary": "#09871e",

          "accent": "#5a5dc4",

          "neutral": "#242B33",

          "base-100": "#FCFCFD",

          "info": "#2144F2",

          "success": "#79E2B3",

          "warning": "#BE8904",

          "error": "#FA0A2E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}

