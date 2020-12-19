module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      typography: {
        default: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
          },
        },
      },
    },
  },
  variants: {
    borderWidth: ['last'],
  },
  plugins: [require('@tailwindcss/ui')],
};
