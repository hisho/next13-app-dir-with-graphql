/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.ts',
    './app/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Docs: https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/typography'),
    // Docs: https://daisyui.com/docs
    require('daisyui'),
  ],
}
