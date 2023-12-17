# CIS-1962 ESLint config

To use our config in a plain Node.js project:

```js
// .eslintrc.js

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['eslint-config-cis1962/node'],
};
```

For a TypeScript project:

```js
// .eslintrc.js

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['eslint-config-cis1962/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
```
