/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['./base', 'prettier'],
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/', '.*.js'],
};
