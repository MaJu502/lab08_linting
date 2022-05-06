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
  ignorePatterns: [
    'node_modules/',
    'src/imagepool/',
    'src/styles/',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
    }],
    indent: ['off', 'tab'],
    'import/no-extraneous-dependencies': [0, {
      devDependencies: ['*/.prop-types.*'],
      peerDependencies: true,
    }],
    'prefer-template': 0,
    'arrow-parens': [0, 'as-needed'],
    'react/no-array-index-key': ['off', 'index'],
    'no-unused-vars': ['off'],
    'react/jsx-max-props-per-line': ['off'],
    'react/jsx-first-prop-new-line': ['off'],
  },
}
