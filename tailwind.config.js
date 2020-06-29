module.exports = {
  theme: {
    container: {
      center: true,
      maxWidth: {
        md: '980px',
      },
    },
    extend: {
      screens: {
        xs: {
          max: '420px',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: ['./**/*.{html,pug}'],
  },
};
