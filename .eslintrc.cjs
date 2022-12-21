
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'plugin:import/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'no-null',
  ],
  root: true,
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  rules: {
    camelcase: 'error',
    eqeqeq: 'error',
    ['no-null/no-null']: 'error',
  }
};
