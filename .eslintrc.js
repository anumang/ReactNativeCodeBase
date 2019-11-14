module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    // disabled due to issue jest-community/eslint-plugin-jest/#338
    // @react-native-community,
    'airbnb',
    'prettier/react',
  ],
  plugins: [
    'import',
    'simple-import-sort',
    'eslint-comments',
    'react-native',
    'prettier',
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
    // Prettier
    'prettier/prettier': 2,

    // Import
    'import/order': [
      2,
      {
        groups: [
          'index',
          'parent',
          'sibling',
          'internal',
          'external',
          'builtin',
        ],
        'newlines-between': 'always',
      },
    ],

    // Simple Import Sort Plugin
    'simple-import-sort/sort': 'error',

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
  },
};
