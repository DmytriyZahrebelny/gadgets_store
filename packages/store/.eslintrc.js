module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-nested-ternary': 0,
    radix: 0,
    'no-param-reassign': 0,
    '@typescript-eslint/triple-slash-reference': 0,
  },
};
