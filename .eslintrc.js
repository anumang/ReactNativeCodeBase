module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    }
  },
  extends: [
    // disabled due to issue jest-community/eslint-plugin-jest/#338
    // @react-native-community,
    'airbnb',
    'plugin:jsx-control-statements/recommended',
  ],
  plugins: [
    'import',
    'eslint-plugin-import-order-alphabetical',
    'eslint-comments',
    'react-native',
    'jest',
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    global: true,
  },
  rules: {
    // Import
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'index',
          'parent',
          'sibling',
          'internal'
        ],
        'newlines-between': 'always',
      },
    ],

    // Import Order Alpahbetically
    'import-order-alphabetical/order': 2,

    // @react-native-community, ESLint Comments Plugin
    'eslint-comments/no-aggregating-enable': 1,
    'eslint-comments/no-unlimited-disable': 1,
    'eslint-comments/no-unused-disable': 1,
    'eslint-comments/no-unused-enable': 1,

    // @react-native-community, React-Native Plugin
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,

    // Jest Plugin
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/prefer-to-have-length': 1,
    'jest/valid-expect': 2,

    // Overries
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/jsx-props-no-spreading': 0,
    'react-native/no-raw-text': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': ['error', {
      'functions': 'never',
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
    }],
    'react/jsx-closing-bracket-location': [1, {selfClosing: 'props-aligned', nonEmpty: 'after-props'}],
    'react/jsx-no-undef': [2, { 'allowGlobals': true }],
  },
};
