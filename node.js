/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['./base', 'prettier'],
  env: {
    node: true,
  },
  ignorePatterns: ['node_modules/', '.*.js'],
};
