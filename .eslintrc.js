module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['react-app', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
}
