module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {
    borderWidth: ['last'],
  },
  plugins: [require('@tailwindcss/ui')],
};
