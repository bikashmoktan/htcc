/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Updated path for App Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        saffron: '#FFB300',
        coral: '#FF5722',
        lightGray: '#F5F5F5',
        darkGray: '#333333',
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Roboto', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'], // Adding local font to theme
      },
    },
  },
  plugins: [],
};
