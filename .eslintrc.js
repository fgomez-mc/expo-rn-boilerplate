module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'quote-props': ['error', 'as-needed'],
    semi: [2, 'never'],
    'no-extra-semi': 'error',
    'react/prop-types': ['error'],
    'max-len': [
      'error',
      { ignoreStrings: true, ignoreTemplateLiterals: true, code: 125 },
    ],
    'prettier/prettier': 0,
    'no-unused-vars': ['error', { args: 'after-used' }],
  },
}
