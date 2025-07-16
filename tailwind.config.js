/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zesco: {
          primary: '#1e40af',
          secondary: '#3b82f6',
          accent: '#fbbf24',
          dark: '#1e293b',
          light: '#f8fafc'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}