module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
    }],
    'import/no-extraneous-dependencies': [0, {
      devDependencies: ['*/.prop-types.*'],
      peerDependencies: true,
    }],
    'prefer-template': 0,
    'arrow-parens': [0, 'as-needed'],
    indent: ['off', 'tab'],
    'no-array-index-key': ['off', 'index'],
  },
};
