module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'quote-props': 0,
    'dot-notation': 0,
    'consistent-return': 0,
    'no-multiple-empty-lines': 0,
    'prefer-arrow-callback': 0,
    'wrap-iife': 0,
    'no-undef-init': 0,
    'no-new-wrappers': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'max-len': [0, 160],
    'lines-between-class-members': 0,
    'prefer-const': 0,
    'no-plusplus': 0,
    'comma-dangle': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'prefer-template': 0,
    'no-else-return': 0,
    'object-curly-newline': 0,
    'no-bitwise': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    'no-useless-constructor': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-empty-function': 0,
    'no-trailing-spaces':0
  }
};
