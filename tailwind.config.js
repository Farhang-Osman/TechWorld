/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,tsx,ts,mdx}'],
  theme: {
    extend: {
      colors: {
        // we've added our own colour that maps to Payload's css variable so we can re-use the same theme styling!
        error: 'var(--theme-error-400)',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
  blocklist: ['table'],
}
