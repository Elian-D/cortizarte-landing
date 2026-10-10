// Recompilar styles.css después de cambiar clases en index.html:
//   npx tailwindcss@3 -i tailwind.css -o styles.css --minify
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        papel: '#FFFBF5',
        tinta: '#141B3D',
        magenta: '#E6197F',
        naranja: '#F7931E',
        amarillo: '#FFC21A',
        turquesa: '#14B8B0',
        morado: '#7B3FB8',
      },
      fontFamily: {
        headline: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
    },
  },
};
