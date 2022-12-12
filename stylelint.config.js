module.exports = {
  extends: ['stylelint-config-recommended'],
  overrides: [
    {
      files: ['src/**/*.{js,ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js'
    }
  ],
  rules: {
    'function-no-unknown': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'property-no-unknown': null
  }
}
