/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '340px',

      'tablet': '740px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    colors: {
      'deep_blue': '#040B2E',
      'gray-primary': '#F2F2F2',
      'gray-primary-200': '#D9D9D9',
    },
  },
  plugins: []
}
