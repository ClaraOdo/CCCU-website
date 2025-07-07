/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cccu-yellow': '#FFD700',
        'cccu-purple': '#9B59B6',
      },
    },
  },
  plugins: [],
};
