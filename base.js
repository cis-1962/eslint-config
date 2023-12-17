/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['unicorn'],
  rules: {
    // eslint base rules
    'no-lonely-if': 'error',
    eqeqeq: 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'prefer-template': 'error',
    'prefer-arrow-callback': 'error',
    'no-alert': 'warn',
    'no-console': 'warn',
    'consistent-return': 'off',

    // unicorn
    'unicorn/consistent-destructuring': 'error',
    'unicorn/error-message': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/prefer-ternary': 'error',
  },
};
