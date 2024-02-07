/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['./base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // base rules in typescript
    '@typescript-eslint/no-unused-vars': 'warn',

    // typescript rules
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/', '.*.js', '*.config.js'],
};
