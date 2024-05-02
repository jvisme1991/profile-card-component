/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'bg-primary': '#19a1ae',
    },
    height: {
      'h-card': '374px',
    },
    width: {
      'max-w-90': '90%',
    },
    margin: {
      'margin-auto': 'margin-inline: auto',
      'margin-left': 'margin-left: ',
    },
  },
  plugins: [],
}