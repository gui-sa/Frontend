/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      }
    },

    colors: {
      cyan: { 
        500: '#81D8F7',
        200: '#A8E1F5',
      },
      gray: {
        300: '#7C7C8A',
        800: '#202024',
      },
     white : '#FFFFFF',
     black : '#000000',
     transparent: 'transparent',

    },

    fontSize: {
      xl : 32,
      lg : 16,
      md : 14,
      sm : 12,
    },

  },
  plugins: [],
}
