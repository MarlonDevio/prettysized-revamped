/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './assets/*.{js,css}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'accent-light': '#FFAECF',
        accent: '#F658AD',
        gray: 'hsl(0, 0%, 80%)',
        white: '#FCFCFC',
      },
      screens: {
        mobile: '320px',
        'mobile-xl': '480px',
        tablet: '768px',
        laptop: '1024px',
        'laptop-xl': '1280px',
        desktop: '1440px',
      },
      fontSize: {
        'header-large': 'calc(1.8rem + var(--vw))',
        'header-medium': 'calc(1.4rem + var(--vw))',
        'header-small': 'calc(1.0rem + var(--vw))',
        'sub-header-large': 'calc(0.6rem + var(--vw))',
        'sub-header-medium': 'calc(0.2rem + var(--vw))',
      },
    },
  },
  plugins: [],
};
