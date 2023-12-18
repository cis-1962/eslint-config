# CIS-1962 ESLint config

![npm](https://img.shields.io/npm/v/%40cis-1962%2Feslint-config)

## Usage

For a plain Node.js project, use the following `.eslintrc.js`:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/node'],
};
```

For a TypeScript project:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
```

For a React (with TypeScript) project:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
```
