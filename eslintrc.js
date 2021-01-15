<<<<<<< HEAD
=======

>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
<<<<<<< HEAD
    'plugin:gatsby/recommended',
=======
    'plugin:react/recommended',
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
<<<<<<< HEAD
=======
      /
>>>>>>> f7fa19af0e1d1d0df21ae1c53253c37a5d0e03ab
    }
  },
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    curly: 0,
    'jsx-alignment': 0,
    'jsx-boolean-value': 0,
    'jsx-no-multiline-js': 0,
    'newline-before-return': 2,
    'newline-before-return': 0,
    'no-console': 0,
    'object-literal-sort-keys': 0,
    'prettier/prettier': 2,
    'react/display-name': 0,
    'react/jsx-no-bind': 0,
    'react/react-in-jsx-scope': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
