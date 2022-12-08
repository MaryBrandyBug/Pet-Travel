module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/no-cycle': 0,
    'default-param-last': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-unescaped-entities': 0,
  },
};
