/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ['Plus Jakarta Sans', 'serif'],
        Manrope: ['Manrope', 'serif'],
           },

           colors: {
            primary: '#9F58EB',
            secondaryColor:'#111',
            textColor:'#696969',
            btnColor:'#A6EF67',
            'primary-black-bg':'#1F1F1F',

          },

         

    },
  },
  plugins: [],
}

