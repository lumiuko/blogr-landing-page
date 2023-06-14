/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(356, 100%, 66%)',
        'very-light-red': 'hsl(355, 100%, 74%)',
        'very-dark-blue': 'hsl(209, 48%, 24%)',
        'grayish-blue': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blue': 'hsl(209, 12%, 34%)',
        'very-dark-black-blue': 'hsl(237, 10%, 16%)',
        'gray-body': '#FAFAFA',
        'light-gray': '#efeff0',
        'gray-link': '#576e83',
        gray: '#c8c8ca',
        line: '#E8E4E4',
        light: '#ffdeda'
      }
    },
    fontSize: {
      h1: '4rem', // 64px
      h2: '2.5rem', // 40px
      h3: '2.25rem', // 36px
      h4: '1.75rem', // 28px
      h5: '1.125rem', // 18px
      body: '1rem' // 16px
    },
    lineHeight: {
      h1: '5.0625rem', // 81px
      h2: '3.1875rem', // 51px
      h3: '2.875rem', // 46px
      h4: '2.6875rem', // 43px
      h5: '1.75rem', // 28px
      body: '1.75rem' // 28px
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif']
    },
    borderRadius: {
      btn: '28px',
      header: '100px'
    },
    backgroundImage: {
      gradient: 'linear-gradient(135deg, #FF8F71 0%, #FF3E55 100%)'
    },
    boxShadow: {
      dropdown: '0px 20px 40px rgba(0, 0, 0, 0.243444)'
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
