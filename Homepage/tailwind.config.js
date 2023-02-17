/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html, js}"],
  theme: {

    extend: {
      spacing: {
        '85': '340px',
        '38': '155px',
        '105': '400px'
      }, 

      borderWidth: {
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },

      opacity: {
      '40': '0.40'
        },

      fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2base': '0.85rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'xtsml': '0.75rem'
    },

      colors: {

        brightRed: 'hsl(12, 88%, 59%)', 
        purpleWhite: '#6D71CE',
        darkContent: '#2E1B70',
        lightContent: '#1C0F49',
        coreServiceBG: '#251757',
        readMoreSTBG: '#33D8CE',
        readMoreEDBG: '#7B80F9',
        pricingSTBG: '#13043D',
        pricingEDBG: '#6424EB',
        FAQsCol: '#33D8CE',
        endUnderLine: '#14BDF2',
        startUnderLine: '#190F39',
        universeColor: '#00ffff',
        welcomeColor: '#d2fafa',
        servicesColor: '#33D8CE',
        highlightColor: '#29C768',
        inputColor: '#D2D4FF',
        placeHolderCol: '#3C3A74',
        hrLine: '#BDB9B9B0',
        footerColor: '#CBC7C7',
        pricingColor: '#33D8CE',
        pricingMonth: '#9D9D9D',
        linearButton1: '#211DE9',
        linearButton2: '#7220E9',
        registerCols: '#9D60E9'
      },

      fontFamily: {
        'SecularOne': ['Secular One'],
        'Jost': ['Jost'],
        'Poppins': ['Poppins'],
        'Lato': ['Lato'],
        'Inter': ['Inter']
      }
    },
    
    
    screens: {

      sm: '480px', //640px
      md: '768px',
      lg: '976px', //1024 px
      xl: '1280px' //1280 px
    },
    
  },
  plugins: [],
}
