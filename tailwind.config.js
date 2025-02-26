/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": "#252525",
        "milkey": "#938d73",
        "gray": "#4a4a4a",
        "deep-brown": "#2d2d2d",
        // --color-tahiti: #a68554;
        // --color-gold: #b99766;
        // --color-go: #8c6b36;
      
        // --color-text: #44474e;
      
        // --color-gray: #33363f;
      }
    },
  },
  plugins: [],
}

